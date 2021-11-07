import React, { useState } from "react";

const Product = ({ product, setProducts, products, setInputValue }) => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(Math.max(counter - 1, 1));
  };

  return (
    <li key={product.id} className="listItem">
      <div>
        <button
          className="btn edit"
          onClick={() => setInputValue(product)}
        ></button>
        {product.value}
      </div>
      <div className="options">
        <button
          className="btn del"
          onClick={() => {
            const filteredProducts = products.filter(
              (td) => td.id !== product.id
            );
            setProducts(filteredProducts);
          }}
        ></button>
        <div className="optionItem counter">
          <button className="btn min" onClick={decrement}></button>
          {counter}
          <button className="btn plus" onClick={increment}></button>
        </div>
      </div>
    </li>
  );
};

export default Product;
