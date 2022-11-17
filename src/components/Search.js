import React from "react";
import { useState } from "react";
import "../styles/search.css";
import { GoSearch } from "react-icons/go";
import { RiDeleteBack2Line } from "react-icons/ri";

const Search = ({
  setFiltered,
  documents,
  catChecked,
  setCatChecked,
  setTypeChecked,
  typeChecked,
  filtered,
}) => {
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (catChecked.length >= 1 || typeChecked.length >= 1) {
      setFiltered(
        filtered.filter(
          ({ attributes }) =>
            attributes.title.toLowerCase().includes(query.toLowerCase()) ||
            attributes.description.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
    if (catChecked.length < 1 && typeChecked.length < 1) {
      setFiltered(
        documents.filter(
          ({ attributes }) =>
            attributes.title.toLowerCase().includes(query.toLowerCase()) ||
            attributes.description.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFiltered([...documents]);
    setCatChecked([]);
    setTypeChecked([]);
    setQuery("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-container">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search"
          value={query}
        />
        <div className="button-container">
          <button type="submit">
            <GoSearch />
          </button>
          <button onClick={handleReset}>
            <RiDeleteBack2Line />
          </button>
        </div>
      </div>

      <div></div>
    </form>
  );
};

export default Search;
