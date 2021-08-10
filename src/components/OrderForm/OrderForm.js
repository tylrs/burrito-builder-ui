import React, { useState } from 'react';


const OrderForm = () => {
const [name, useName] = useState('')
const [ingredients, useIngredients] = useState([])

  const handleSubmit = e => {
      e.preventDefault();
      this.clearInputs();
  }

  const clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  const handleNameChange = () => {
    
  }
  
  const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
  const ingredientButtons = possibleIngredients.map(ingredient => {
    return (
      <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
        {ingredient}
      </button>
    )
  });
  
  return (
    <form>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={e => this.handleNameChange(e)}
      />
  
      { ingredientButtons }
  
      <p>Order: { ingredients.join(', ') || 'Nothing selected' }</p>
  
      <button onClick={e => handleSubmit(e)}>
        Submit Order
      </button>
    </form>
  )

}
// class OrderForm extends Component {
//   constructor(props) {
    // super();
  //   this.props = props;
  //   this.state = {
  //     name: '',
  //     ingredients: []
  //   };
  // }


//   render() {
//   }
// }

export default OrderForm;
