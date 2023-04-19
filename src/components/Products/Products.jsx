import "./Products.scss";
import Product from "./Product/Product";
import Pdata from "./Pdata";

const Products = ({ innerPage, headingText }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {Pdata.map((product) => (
          <Product
            id={product.id}
            imgsrc={product.imgsrc}
            pname={product.pname}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
