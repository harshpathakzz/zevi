import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { FilterContext } from "../context/FilterContext";

const ProductsList = () => {
  const { state } = useContext(FilterContext);
  const { products, filters } = state;

  console.log(products);

  const filteredProducts = products.filter((product) => {
    let matches = true;

    // Check if the product name contains the search query
    if (
      filters.searchQuery &&
      !product.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
    ) {
      matches = false;
    }

    if (matches && filters.brands.length > 0) {
      matches = filters.brands.includes(product.brand);
    }

    if (matches && filters.priceRange.length > 0) {
      const inRange = filters.priceRange.some((range) => {
        return product.price >= range.min && product.price <= range.max;
      });
      matches = inRange;
    }

    if (matches && filters.rating.length > 0) {
      matches = product.rating >= filters.rating[0];
    }

    return matches;
  });

  return (
    <div className="products-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
