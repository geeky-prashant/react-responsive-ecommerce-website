import "./Product.scss";
import { Link } from "react-router-dom";

const Product = (props) => {
  console.log(props);
  return (
    <div className="product-card">
      <Link to={`/product/${props.id}`}>
        <div className="thumbnail">
          <img src={props.imgsrc} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">{props.pname}</span>
          <span className="price">&#8377;{props.price}</span>
        </div>
      </Link>
    </div>
  );
};

export default Product;
