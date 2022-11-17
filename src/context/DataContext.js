import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [documents, setDocuments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://afternoon-plains-65252.herokuapp.com/api/documents?populate=types,categories")
      .then((response) => {
        setDocuments(response.data.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("https://afternoon-plains-65252.herokuapp.com/api/categories")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("https://afternoon-plains-65252.herokuapp.com/api/types")
      .then((response) => {
        setTypes(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <DataContext.Provider value={{ categories, documents, types }}>
      {children}
    </DataContext.Provider>
  );
};
