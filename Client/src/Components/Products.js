import React, { useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import "../styles/Products.css";
import { useSelector, useDispatch } from "react-redux";
import { productsActions } from "../store/products-slice";

const Products = () => { 
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.stock);
  const searchTerm = useSelector((state) => state.products.searchTerm);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    function fetchData() {
      axios
        .get(
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
        )
        .then((res) => {
          dispatch(
            productsActions.addToStock({
              productsStock: res.data,
            })
          );
        });
    }

    // if (localStorage.getItem("firstShopRender") == null) {
    //   localStorage.setItem("firstShopRender", true);
    fetchData();
    // }
  }, [dispatch]);

  return (
    <div className="products">
      {products.filter((product) => {
          if (searchTerm === "") {
            return product;
          } else if (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.color.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return product;
          }
          else {
            return null;
        }
        })
        .map((product) => {
          return <Product key={product.id} {...product} />;
        })}
    </div>
  );
};

export default Products;
