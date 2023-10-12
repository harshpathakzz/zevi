import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const [isWishlistActive, setWishlistActive] = useState(false);

  const calculateDiscountedPrice = (originalPrice) =>
    originalPrice -
    (originalPrice * Math.floor(Math.random() * (50 - 10 + 1) + 10)) / 100;

  const [discountedPrice, setDiscountedPrice] = useState(
    calculateDiscountedPrice(product.price).toFixed(2)
  );

  useEffect(() => {
    setDiscountedPrice(calculateDiscountedPrice(product.price).toFixed(2));
  }, [product.price]);

  const handleWishlistClick = () => {
    setWishlistActive(!isWishlistActive);
  };

  return (
    <div className="product-card">
      <div className="wishlist-button" onClick={handleWishlistClick}>
        {!isWishlistActive ? (
          <FavoriteBorderOutlinedIcon />
        ) : (
          <FavoriteIcon style={{ color: "#ff0000" }} />
        )}
      </div>
      <div className="product-info">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          <div className="view-product-label">View Product</div>
        </div>
        <h2 className="product-title">{product.name}</h2>
        <div className="price">
          <span className="original-price">${product.price}</span>
          <span className="discounted-price">${discountedPrice}</span>
        </div>
        <div className="ratings">
          {[...Array(Math.floor(product.rating))].map((_, index) => (
            <StarIcon key={index} />
          ))}
          {product.rating % 1 !== 0 && (
            <StarHalfIcon className="half-star-icon" />
          )}
          <span style={{ color: "#ccc" }}>({product.numberOfRatings})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
