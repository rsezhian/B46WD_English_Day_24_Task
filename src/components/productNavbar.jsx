import React from "react";

function ProductNavbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Smily Shopping
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" id=""></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div>
              <i className="fa-solid fa-lg fa-cart-shopping">
                <span className="badge badge-light" style={{ color: "black" }}>
                  {props.counter}
                </span>
              </i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ProductNavbar;
