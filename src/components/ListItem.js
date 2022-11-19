import React from "react";
import "../styles/item.css";
import { BiLinkExternal } from "react-icons/bi";

const ListItem = ({ item }) => {
  console.log(item.attributes.types);

  return (
    <div className="item">
      <div className="item-head">
        <a className="item-title" href={item.attributes.link} target="blank">
          {item.attributes.title}
        </a>
        <div className="tag-container">
          {item.attributes.types.data[0] && (
            <span className="tag">
              {item.attributes.types.data[0].attributes.name}
            </span>
          )}
          <span className="tag">
            {item.attributes.categories.data[0].attributes.name}
          </span>
        </div>
      </div>

      <div className="item-center">
        <p className="item-description">{item.attributes.description}</p>
        {item.attributes.image ? (
          <img src={item.attributes.image} alt={item.attributes.title}></img>
        ) : (
          <img src="roman.png" alt={item.attributes.title}></img>
        )}
        <div className="item-bottom">
          <a href={item.attributes.link} target="blank">
            <BiLinkExternal />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
