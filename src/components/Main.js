import React from "react";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import Search from "./Search";
import ListItem from "./ListItem";
import DropDown from "./shared/DropDown";
import "../styles/main.css";

const Main = () => {
  const { documents, types, categories } = useContext(DataContext);
  const [filtered, setFiltered] = useState([]);
  const [catChecked, setCatChecked] = useState([]);
  const [typeChecked, setTypeChecked] = useState([]);

  useEffect(() => {
    setFiltered([...documents]);
  }, [documents]);

  useEffect(() => {
    handleFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catChecked, typeChecked]);

  const handleFilter = () => {
    if (typeChecked.length < 1 && catChecked.length < 1) {
      setFiltered([...documents]);
    }

    if (typeChecked.length >= 1 && catChecked.length < 1) {
      setFiltered(
        documents.filter(
          (f) =>
            f.attributes.types.data[0] &&
            typeChecked.find(
              (c) => c === f.attributes.types.data[0].attributes.name
            )
        )
      );
    }

    if (catChecked.length >= 1 && typeChecked.length < 1) {
      setFiltered(
        documents.filter(
          (f) =>
            f.attributes.categories.data[0] &&
            catChecked.find(
              (c) => c === f.attributes.categories.data[0].attributes.name
            )
        )
      );
    }

    if (catChecked.length >= 1 && typeChecked.length >= 1) {
      setFiltered(
        documents.filter(
          (f) =>
            f.attributes.categories.data[0] &&
            f.attributes.types.data[0] &&
            catChecked.find(
              (c) => c === f.attributes.categories.data[0].attributes.name
            ) &&
            typeChecked.find(
              (c) => c === f.attributes.types.data[0].attributes.name
            )
        )
      );
    }
  };

  console.log(filtered)

  return (
    <div>
      <div className="image-container">
      <img className="roman" src="roman.png" alt="godzilla" />
        <h1>COMPARUS</h1>
        
      </div>

      <Search
        filtered={filtered}
        documents={documents}
        setFiltered={setFiltered}
        catChecked={catChecked}
        typeChecked={typeChecked}
        setCatChecked={setCatChecked}
        setTypeChecked={setTypeChecked}

      />
      <div className="select-container">
        <DropDown
          name="Type"
          items={types}
          checked={typeChecked}
          setChecked={setTypeChecked}
        />
        <DropDown
          name="Category"
          items={categories}
          checked={catChecked}
          setChecked={setCatChecked}
        />
      </div>
      <div className="item-container">
        {filtered.length >= 1 && categories.length >= 1 && types.length >= 1
          ? filtered.map((item) => {
              if (!item.attributes.categories.data[0]) {
                return null;
              }
              return <ListItem item={item} key={item.id} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Main;
