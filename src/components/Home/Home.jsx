import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Pdata from "../Products/Pdata";
import Product from "./../Products/Product/Product";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
          <div className="products-container">
            <div className="sec-heading">DEAL OF THE DAY</div>
            <div className="products">
              {Pdata.slice(0, 4).map((product) => (
                <Product
                  headingText="Popular Products"
                  id={product.id}
                  imgsrc={product.imgsrc}
                  pname={product.pname}
                  price={product.price}
                />
              ))}
            </div>
          </div>
          <div className="products-container">
            <div className="sec-heading">NEW ARRIVALS</div>
            <div className="products">
              {Pdata.slice(4, 8).map((product) => (
                <Product
                  headingText="Popular Products"
                  id={product.id}
                  imgsrc={product.imgsrc}
                  pname={product.pname}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
