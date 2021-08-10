import React, { useState } from 'react';


const OrderForm = ({submitOrder}) => {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleSubmit = e => {
      e.preventDefault();
      clearInputs();
  }

  const clearInputs = () => {
    setName('')
    setIngredients([])
  }

  const handleIngredientSubmit = e => {
    e.preventDefault()
    setIngredients([...ingredients, e.target.name])
  }
  
  const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
  const ingredientButtons = possibleIngredients.map(ingredient => {
    return (
      <button key={ingredient} name={ingredient} onClick={e => handleIngredientSubmit(e)}>
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
        onChange={e => setName(e.target.value)}
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
