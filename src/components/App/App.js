import React, { useState, useEffect } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

const App = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrders()
    .then(data => {
      setOrders(data.orders)
    })
    .catch(err => console.error('Error fetching:', err));
  }, [])

  const submitOrder = () => {

  }

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm submitOrder={submitOrder}/>
      </header>
      <Orders orders={orders}/>
    </main>
  );
}
// class App extends Component {
//   constructor(props) {
//     super();
//   }

//   componentDidMount() {
//     getOrders()
//       .catch(err => console.error('Error fetching:', err));
//   }

//   render() {
  
//   }
// }


export default App;
