import React, { useState } from "react";
import { nanoid } from "nanoid";
import ProductItem from "./components/Product";
import "./reset.css";
import "./inventory.css";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState({ id: "", value: "" });

  return (
    <div>
      <h1>Inventory</h1>
      <div className="container">
        <input
          className="input"
          type="text"
          name="product-input"
          value={inputValue.value}
          onChange={(e) =>
            setInputValue({ value: e.target.value, id: inputValue.id })
          }
        />
        <button
          className="add"
          onClick={() => {
            if (inputValue.id) {
              const NewProducts = products.map((product) => {
                if (product.id === inputValue.id) {
                  return { id: product.id, value: inputValue.value };
                }
                return product;
              });
              setInputValue({ id: "", value: "" });
              return setProducts(NewProducts);
            }
            const id = nanoid();
            const myProducts = [
              ...products,
              { id: id, value: inputValue.value },
            ];
            setInputValue({ id: "", value: "" });
            setProducts(myProducts);
          }}
        >
          Add
        </button>
        <ul>
          {products.map((product) => {
            return (
              <ProductItem
                key={product.id}
                product={product}
                setProducts={setProducts}
                products={products}
                setInputValue={setInputValue}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Inventory;
