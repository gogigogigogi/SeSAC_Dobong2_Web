import React, { useState, useMemo } from 'react';

const products = [
  { name: 'Product A', price: 30 },
  { name: 'Product B', price: 50 },
  { name: 'Product C', price: 70 },
];

const ProductFilter = () => {
  const [priceLimit, setPriceLimit] = useState(0);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return product.price < Number(priceLimit);
    });
  }, [priceLimit]);

  return (
    <div>
      <h2>Product Filter</h2>
      <input
        type='number'
        value={priceLimit}
        placeholder='Enter price limit'
        onChange={(e) => {
          setPriceLimit(e.target.value);
        }}
      />
      <ul>
        {filteredProducts.map((filteredProduct, idx) => {
          return (
            <li key={idx}>
              {filteredProduct.name} - ${filteredProduct.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductFilter;
