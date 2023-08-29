//
import React from "react";
import { useState } from "react";
import ProductNavbar from "./components/productNavbar";
import ProductHeader from "./components/productHeader";
import Products from "./components/productDetails";
import ProductCard from "./components/productCard";
import ProductCopyright from "./components/productCopyright";
import "./App.css";

//
function App() {
  let [counter, setCounter] = useState(0);

  let myfunction = (id) => {
    setCounter(counter + 1);
    let index = Products.map((value) => {
      return value.id === id;
    }).indexOf(true);
    Products[index].disabled = true;
    Products[index].hidden = true;
  };

  let removefunction = (id) => {
    setCounter(counter - 1);
    let index = Products.map((value) => {
      return value.id === id;
    }).indexOf(true);
    Products[index].hidden = false;
    Products[index].disabled = false;
  };

  return (
    <div className="App">
      <h1>BootStrap Cart Project</h1>
      <ProductNavbar counter={counter} />
      <ProductHeader />
      <div className="card">
        <div className="product-card row">
          {Products.map((product) => {
            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center align-items-center"
                key={product.id}
              >
                <ProductCard
                  data={product}
                  myfunction={myfunction}
                  disabled={product.disabled}
                  removefunction={removefunction}
                  hidden={product.hidden}
                />
              </div>
            );
          })}
        </div>
      </div>
      <ProductCopyright />
    </div>
  );
}

export default App;

//
//
//
//
//
// let [disabled,setDisabled]=useState(false);
