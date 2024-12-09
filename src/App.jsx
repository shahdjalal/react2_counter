import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  // كائن يحتوي على تفاصيل المنتج
  const product = {
   name: "iPhone 14",
    description: "This is iPhone 14",
    price: 1444,
  };

  const Increase = () => {
    setCounter(counter + 1); // تحديث العداد
  };

  const toggleVisible = () => {
    document.querySelector(".show").classList.toggle("d-none"); // إظهار أو إخفاء المنتج

     setIsVisible(!isVisible);
  };

  return (
    <div>
      <h1>Counter is {counter}</h1>
      <button className="btn btn-success" onClick={Increase}>
        Increase
      </button>

      <button className="btn btn-secondary" onClick={toggleVisible}>
      {isVisible ? "Hide Product" : "Show Product"}
      </button>

      <div className="show d-none">
        <h1>Product Details</h1>
        <p>
          <span>Name:</span>
          {product.name}
          </p>
        <p>
          <span>description :</span>
          {product.description}
          </p>
        <p>
          <span>price :</span>
          {product.price}$
         </p>
      </div>
    </div>
  );
}
