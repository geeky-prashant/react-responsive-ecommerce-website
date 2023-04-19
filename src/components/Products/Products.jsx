import "./Products.scss";
import Product from "./Product/Product";
import Pdata from "../Products/Pdata";

const Products = ({ innerPage, headingText }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div>
        {Pdata.map((item) => {
          <Product
            id={item.id}
            imgsrc={item.imgsrc}
            pname={item.pname}
            price={item.price}
          />;
        })}
      </div>
    </div>
  );
};

export default Products;
