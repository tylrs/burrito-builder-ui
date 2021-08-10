import React, { useState, useEffect } from 'react';
import './App.css';
import {getOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

const App = () => {

  
  useEffect(() => {
    getOrders()
    .catch(err => console.error('Error fetching:', err));
  })

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm />
      </header>

      <Orders orders={this.state.orders}/>
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
