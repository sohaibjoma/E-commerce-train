import Product from "./Product.jsx";
import { useEffect, useState } from "react";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getAllProducts = () => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const getProductsCategory = () => {
    fetch(`${api_url}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  const productsByCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getAllProducts();
    getProductsCategory();
  }, []);

  return (
    <>
      <h2 className="text-center p-5"> Our Products </h2>
      <div className="container">
      <button
        onClick={() => getAllProducts()}
        className="btn btn-info m-2"
      >
        All
      </button>
        {
        categories.map((category) => {
          return (
            <button
              onClick={() => productsByCategory(category)}
              key={category}
              className="btn btn-info m-2"
            >
              {category}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
