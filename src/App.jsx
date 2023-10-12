import "./App.css";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";
import Accordion from "./components/Accordion";
import Products from "./DB/Products";
import Filter from "./components/Filter";
import ProductsList from "./components/ProductsList";
function App() {
  return (
    <>
      <div>
        <SearchBar />
        <ProductCard />
        {/* <h1>Accordion Example</h1>
        <Accordion title="Section 1" customStyle="custom-style">
          <p>Content for section 1 goes here.</p>
        </Accordion>
        <Accordion title="Section 2">
          <p>Content for section 2 goes here.</p>
        </Accordion> */}
        {/* {console.log(Products)} */}
        <Filter />
        <ProductsList />
      </div>
    </>
  );
}

export default App;
