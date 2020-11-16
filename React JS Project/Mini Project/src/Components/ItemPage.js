import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import "./ItemPage.css";

export default function ItemPage({ items, onAddToCart }) {
  return (
    <ul className="ItemPage-items">
      {items.map((item) => (
        <li className="ItemPage-item" key={item.id}>
          <Item item={item}>
            <button
              className="Item-addToCart"
              onClick={() => onAddToCart(item)}>
              Add to Cart
            </button>
          </Item>
        </li>
      ))}
    </ul>
  );
}

ItemPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
