import Product from "../../Products/Product/Product";
import Pdata from "../../Products/Pdata";
import "./RelatedProducts.scss";

const RelatedProducts = () => {
  return (
    <div className="related-products">
      <div className="products-container">
        <div className="sec-heading">RELATED PRODUCTS</div>
        <div className="products">
          {Pdata.slice(8, 12).map((product) => (
            <Product
              id={product.id}
              imgsrc={product.imgsrc}
              pname={product.pname}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
