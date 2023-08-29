import React from "react";
import "./productCard.css";

function ProductCard(props) {
  const {
    id,
    productName,
    productRating,
    productPrice01,
    productPrice02,
    productImage,
    productButton,
    disabled,
    hidden,
  } = props.data;
  return (
    <div style={{ alignItems: "center" }}>
      <div id={id} className="card mb-4 " style={{ width: "18rem" }}>
        <img className="card-img-top" src={productImage} alt="" />
        <div className="card-body text-center">
          <h4 className="card-title">{productName}</h4>
          <h5
            className="card-rating"
            style={{
              color: "orange",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            {productRating}
          </h5>
          <p className="card-text">
            <span className="price01">{productPrice01}</span>
            <span>{productPrice02}</span>
          </p>
          <button
            className="btn btn-primary"
            disabled={disabled}
            onClick={() => {
              props.myfunction(id);
            }}
          >
            {productButton}
          </button>
          {props.disabled ? (
            <button
              className="btn btn-primary mx-2"
              hidden={!hidden}
              onClick={() => {
                props.removefunction(id);
              }}
            >
              Remove item
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
