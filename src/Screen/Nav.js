import React from "react";
import { Link } from "react-router-dom";
// import { CartCounter } from "./CartCounter";

export const Nav = ({ addToCart }) => {
  return (
    <>
      {/* <!-- Navigation--> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="#!">
            Start Bootstrap
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#!">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#!">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#!">
                      All Products
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#!">
                      Popular Items
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#!">
                      New Arrivals
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex">
              <div className="btn btn-outline-dark">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  {addToCart}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
