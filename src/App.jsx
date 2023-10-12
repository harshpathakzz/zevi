import SearchBar from "./components/SearchBar";
import ProductsList from "./components/ProductsList";
import HamburgerMenu from "./components/HamburgerMenu";
// import "./App.scss";
function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchBar />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <HamburgerMenu />
        </div>
        <ProductsList />
      </div>
    </>
  );
}

export default App;
