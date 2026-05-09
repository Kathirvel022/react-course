import React from 'react'

function Map () {
    const products = [
        { id: 2, name: "Phone", price: 20000},
        { id: 3, name: "Watch", price: 400}
    ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
            <h2>{p.name}</h2>
            <p>${p.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Map
