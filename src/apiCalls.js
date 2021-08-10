export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const sendOrder = (order) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(order)
  })
  .then(response => response.json())
}

export const sendDelete = (id) => {
  return fetch(`http://localhost:3001/api/v1/orders/${id}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (response.status === 204) {
      return response.status
    } else {
      throw Error(response.statusText)
    }
  })
}

