import CurrencyFilter from '../features/currencyFilter/CurrencyFilter';
import Inventory from '../features/inventory/Inventory';

function App({ state, dispatch }) {
  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
