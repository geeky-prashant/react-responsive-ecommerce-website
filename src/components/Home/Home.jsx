import { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import { Context } from "../../utils/context";
import Products from "./../Products/Products";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products products={products} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};

export default Home;
