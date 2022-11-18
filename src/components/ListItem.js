import React from "react";
import "../styles/item.css";

const ListItem = ({ item }) => {
  console.log(item.attributes.types);

  return (
    <div className="item">
      <div className="item-content">
        <div className="item-head">
          <h2>
            <a href={item.attributes.link} rel="noreferrer" target="blank">
              {item.attributes.title}
            </a>
          </h2>
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
        <div className="item-description">
          <p>{item.attributes.description}</p>
          {item.attributes.image && (
            <img src={item.attributes.image} alt={item.attributes.title}></img>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
