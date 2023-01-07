import CurrencyFilter from '../features/currencyFilter/CurrencyFilter';

function App({ state, dispatch }) {
  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
