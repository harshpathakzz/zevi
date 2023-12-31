import { faker } from "@faker-js/faker";

export const generateFakeProducts = () => {
  const products = [];
  const brands = ["Nike", "Puma", "Zara", "HRX", "H&M"];
  for (let i = 0; i < 10; i++) {
    const product = {
      id: faker.database.mongodbObjectId(),
      name: faker.commerce.productName(),
      brand: brands[Math.floor(Math.random() * brands.length)],
      image: faker.image.urlLoremFlickr({ category: "fashion" }),
      price: faker.commerce.price(),
      rating: Math.floor(Math.random() * 41 + 10) / 10,
      numberOfRatings: Math.floor(Math.random() * 191 + 10),
    };
    products.push(product);
  }
  return products;
};

const Products = generateFakeProducts();

export default Products;
