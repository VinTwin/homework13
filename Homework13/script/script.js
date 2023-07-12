import React from 'react';

const products = [
  { id: 1, Велосипед: 'Product 1', price: 10 },
  { id: 2, Самокат: 'Product 2', price: 20 },
  { id: 3, Роллики: 'Product 3', price: 30 },
];

function App() {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default App;
