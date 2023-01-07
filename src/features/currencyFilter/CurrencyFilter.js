import { currenciesData } from '../../data';
import { setCurrency } from './currencyFilterSlice';

const CurrencyFilter = ({ currencyFilter, dispatch }) => {
  const handleClick = (currency) => {
    dispatch(setCurrency(currency));
  };
  return (
    <div id='currency-filter-container'>
      <h3>Choose a currency</h3>
      {currenciesData.map((currency) => {
        return (
          <button
            key={currency}
            onClick={() => handleClick(currency)}
            className={`currency-button ${
              currencyFilter === currency && 'selected'
            }`}
          >
            {currency}
          </button>
        );
      })}
    </div>
  );
};

export default CurrencyFilter;
