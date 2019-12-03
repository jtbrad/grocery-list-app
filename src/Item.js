import React from 'react';

const Item = ({id, name, inCart, itemClick }) => (
  <li
    style={ inCart ? {...styles.item, ...styles.inCart } : styles.item }
    onClick={ () => itemClick(id) }
  >
    {name}
  </li>
);

const styles = {
  item: {cursor: "pointer" },
  inCart: { color: "grey", textDecoration: "line-through" },
};

export default Item;