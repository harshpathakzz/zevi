import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "./ProductCard.scss";

const ProductCard = () => {
  const [isWishlistActive, setWishlistActive] = useState(false);

  const product = {
    title: "Sample Product",
    originalPrice: 50,
    discountedPrice: 30,
    rating: 4.5,
    imageURL: "https://placehold.co/100x150",
    numRatings: 100,
  };

  const handleWishlistClick = () => {
    setWishlistActive(!isWishlistActive);
  };

  return (
    <div className="product-card">
      <div className="wishlist-button" onClick={handleWishlistClick}>
        {isWishlistActive ? (
          <FavoriteIcon style={{ color: "#ff00ff" }} />
        ) : (
          <FavoriteIcon style={{ color: "#ff0000" }} />
        )}
      </div>
      <div className="product-info">
        <div className="product-image">
          <img src={product.imageURL} alt={product.title} />
        </div>
        <h2 className="product-title">{product.title}</h2>
        <div className="price">
          <span className="original-price">${product.originalPrice}</span>
          <span className="discounted-price">${product.discountedPrice}</span>
        </div>
        <div className="ratings">
          {[...Array(Math.floor(product.rating))].map((_, index) => (
            <StarIcon key={index} />
          ))}
          {product.rating % 1 !== 0 && (
            <StarHalfIcon className="half-star-icon" />
          )}
          <span style={{ color: "#ccc" }}>({product.numRatings})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
