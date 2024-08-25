import { countryItem } from "./CountryItem.module.css";
import PropTypes from "prop-types";

function CountryItem({ country }) {
  return (
    <li className={countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

CountryItem.propTypes = {
  country: { emoji: PropTypes.string, country: PropTypes.string },
};

export default CountryItem;
