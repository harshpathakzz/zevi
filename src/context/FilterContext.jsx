import { createContext, useReducer } from "react";
import Products from "../DB/Products";
const initialState = {
  products: Products,
  filters: {
    brands: [],
    priceRange: [],
    rating: [],
  },
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BRAND_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          brands: action.brands,
        },
      };
    case "UPDATE_PRICE_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          priceRange: action.priceRange,
        },
      };
    case "UPDATE_RATING_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          rating: action.rating,
        },
      };
    default:
      return state;
  }
};

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
