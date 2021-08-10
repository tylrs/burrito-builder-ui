import React, { useState, useEffect } from 'react';
import './App.css';
import {getOrders, sendDelete, sendOrder} from '../../apiCalls';
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

  const submitOrder = (newOrder) => {
    sendOrder(newOrder)
    .then(order => {
      setOrders([...orders, order])
    })
    .catch(err => console.error(err))
  }

  const submitDelete = (id) => {
    sendDelete(id)
    .then(message => {
      const filtered = orders.filter(order => order.id !== id)
      setOrders(filtered)
    })
    .catch(err => console.error(err))
  }

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm submitOrder={submitOrder}/>
      </header>
      <Orders orders={orders} submitDelete={submitDelete}/>
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
