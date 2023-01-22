import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Invoices from './components/Invoices';
import Expenses from './components/Expenses';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/invoices' element={<Invoices />} />
        <Route path='/expenses' element={<Expenses />} />
      </Routes>
    </>
  );
}

export default App;
