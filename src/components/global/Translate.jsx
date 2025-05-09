import PropTypes from 'prop-types';
import en from '../../translations/en.json';
import it from '../../translations/it.json';
import { useContext } from 'react';
import { LanguageContext } from './Page';

export const getTranslation = (id, language) => {
  if (language === 'it' && it[id]) {
    return it[id];
  }
  if (en[id]) {
    return en[id];
  }
  return id;
};

const Translate = ({ id }) => {
  const { language } = useContext(LanguageContext);
  return getTranslation(id, language);
};

Translate.propTypes = {
  id: PropTypes.string,
};

export default Translate;
