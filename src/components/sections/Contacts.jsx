import React, { useContext, useState } from 'react';
import Translate, { getTranslation } from '../global/Translate';
import { LanguageContext } from '../global/Page';

const Contacts = ({ containerRef }) => {
  const { language } = useContext(LanguageContext);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append('access_key', 'f8622199-c3a2-4dce-958c-0e8881ae7ccc');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
    } else {
      console.log('Error', data);
      setError(data.message);
    }
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div id="contacts" ref={containerRef} className="contacts section bg">
      <h1 className="contacts__title">
        <Translate id="contacts.title" />
      </h1>
      <div className="contacts__content">
        <div className="contacts__text">
          <h2 className="contacts__text-subtitle">
            <Translate id="contacts.subtitle" />
          </h2>
          <p className="contacts__text-abstract">
            <Translate id="contacts.abstract" />
          </p>
          <a
            className="contacts__text-mail-wrapper"
            href="mailto:dmaggiore@sorint.com"
          >
            <span className="contacts__text-mail-icon fa-solid fa-envelope-circle-check" />
            <div className="contacts__text-mail-contacts">
              <p>
                <Translate id="contacts.mailMe" />
              </p>
              <p className="contacts__text-mail-email">dmaggiore@sorint.com</p>
            </div>
          </a>
        </div>

        <div className="contacts__form">
          {!submitted && (
            <form onSubmit={onSubmit}>
              <div className="contacts__form-header">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={getTranslation(
                    'contacts.form.yourName',
                    language
                  )}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={getTranslation(
                    'contacts.form.yourEmail',
                    language
                  )}
                />
              </div>
              <textarea
                name="message"
                required
                placeholder={getTranslation(
                  'contacts.form.yourMessage',
                  language
                )}
              ></textarea>

              <button
                className="animated__button"
                type="submit"
                disabled={loading}
              >
                <Translate id="contacts.form.submit" />
                <span className="fa-regular fa-paper-plane" />
              </button>
            </form>
          )}
          {submitted && !error && (
            <h2>
              <Translate id="contacts.submitted" />
            </h2>
          )}
          {submitted && error && <h2>{error}</h2>}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
