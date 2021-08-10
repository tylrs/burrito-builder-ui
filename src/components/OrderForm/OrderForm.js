import React, { useState } from 'react';
import './OrderForm.css'


const OrderForm = ({submitOrder}) => {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [error, setError] = useState('')

  const handleSubmit = e => {
      e.preventDefault();
      setError('');
      if (!ingredients.length || !name) {
        setError('Please enter name and at least one ingredient')
      } else { 
        submitOrder({name, ingredients})
        clearInputs();
      }
  }

  const clearInputs = () => {
    setName('')
    setIngredients([])
  }

  const handleIngredientSubmit = e => {
    setError('')
    e.preventDefault()
    let checkedIngredients = ingredients.filter(ingredient => ingredient === e.target.name)
    checkedIngredients.length >= 2
    ? setError('You cannot have more than two of the same ingredient')
    : setIngredients([...ingredients, e.target.name])
  }
  
  const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
  const ingredientButtons = possibleIngredients.map(ingredient => {
    return (
      <button className='ingredient-button' key={ingredient} name={ingredient} onClick={e => handleIngredientSubmit(e)}>
        {ingredient}
      </button>
    )
  });
  
  return (
    <form>
      <h2>Enter Your Order Here:</h2>
      <label>What's Your Name?</label>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <p>Select Your Ingredients here:</p>
      <div className='button-container'>
        { ingredientButtons }
      </div>
      <p>Order: { ingredients.join(', ') || 'Nothing selected' }</p>
      {error && <p className='error-message'>{error}</p>}
  
      <button className='submit-button' onClick={e => handleSubmit(e)}>
        Submit Order
      </button>
    </form>
  )

}

export default OrderForm;
