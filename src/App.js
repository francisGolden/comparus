import { DataProvider } from "./context/DataContext";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // documents.forEach((comp) => {
  //   console.log(categories.find(category => category.id === comp.id).attributes.name)
  // })
  

  return (
    <DataProvider>
      <div className="App">
        <Navbar />
        
        <Main />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
