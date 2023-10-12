import SearchBar from "./components/SearchBar";
import ProductsList from "./components/ProductsList";
import HamburgerMenu from "./components/HamburgerMenu";

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
        <div style={{ position: "" }}>
          <HamburgerMenu />
        </div>
        <ProductsList />
      </div>
    </>
  );
}

export default App;
