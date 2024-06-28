import './App.css';
import  Header  from './components/Header.jsx';
import Balance from './components/Balance.jsx';
import IncomeExpenses from './components/IncomeExpenses.jsx';
import Transaction from './components/TransactionList.jsx';
import AddTransaction from './components/AddTransaction.jsx';
import { GlobalProvider } from './context/GlobalState.jsx';


function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div>
        <Balance/>
        <IncomeExpenses/>
        <Transaction/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
