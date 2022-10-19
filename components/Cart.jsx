import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  return (
    <div
      className="cart-wrapper"
      ref={cartRef}
      // onClick={() => setShowCart(false)}
    >
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => {
              return (
                <div
                  className="product"
                  style={{ height: "100px", margin: "10px" }}
                  key={item._id}
                >
                  <img
                    src={urlFor(item?.image[0])}
                    className="cart-product-image"
                    style={{ height: "100px", width: "100px" }}
                  />
                  <div className="item-desc">
                    <div className="flex top" style={{ height: "30px" }}>
                      <h5>{item.name}</h5>
                      <h4>${item.price}</h4>
                    </div>
                    <div
                      className="flex bottom "
                      style={{
                        height: "30px",

                        marginTop: "20px",
                      }}
                    >
                      <div>
                        <p className="quantity-desc" style={{ padding: 0 }}>
                          <span
                            className="minus"
                            onClick={() =>
                              toggleCartItemQuanitity(index, "dec")
                            }
                          >
                            <AiOutlineMinus />
                          </span>
                          <span className="num" style={{ padding: "0 12px" }}>
                            {item.quantity}
                          </span>
                          <span
                            className="plus"
                            onClick={() =>
                              toggleCartItemQuanitity(index, "inc")
                            }
                          >
                            <AiOutlinePlus />
                          </span>
                        </p>
                      </div>
                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => onRemove(item)}
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>totale:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <Link href="/owner">
                <button
                  type="button"
                  className="btn"
                  style={{ marginTop: "10px" }}
                >
                  Passer la commande
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
