import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Invoices from './components/Invoices';
import Expenses from './components/Expenses';
import Bills from './components/Bills';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <main className='container'>
            <h1>Lorem</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatum sed maiores vel architecto omnis suscipit, est eum non ad mollitia obcaecati accusamus quod aperiam voluptatem cumque, molestiae neque libero inventore impedit odio. Excepturi, esse nulla! Reprehenderit, deserunt accusamus assumenda laudantium, saepe aspernatur reiciendis minima molestiae earum necessitatibus quas aliquid!</p>
          </main>
        } />
        <Route path='/invoices' element={<Invoices />}>
          <Route path=':invoiceID' element={<Bills />} />
        </Route>
        <Route path='/expenses' element={<Expenses />} />
        <Route path='*' element={
          <main className='container'>
            <h1>Page not found</h1>
          </main>
        } />
      </Routes>
    </>
  );
}

export default App;
