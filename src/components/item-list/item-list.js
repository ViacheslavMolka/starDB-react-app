import React from 'react';

import './item-list.css';


const ItemList = (props) => {

  const {data, onItemSelected, children: renderLabel} = props;

  const items = data.map((item) => {
    const { id } = item;
    if(renderLabel){
      const label = renderLabel(item);
      return (
        <li className="list-group-item"
          onClick={() => onItemSelected(id)}
          key={id}>
          {label}
        </li>
      )
    };
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

export default ItemList;