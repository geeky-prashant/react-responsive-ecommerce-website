import "./Category.scss";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="shop-by-category">
      <div className="categories">
        <div className="category">
          <Link to="/category">
            <img src="/assets/category/cat-1.jpg" alt="" />
          </Link>
        </div>
        <div className="category">
          <Link to="/category">
            <img src="/assets/category/cat-2.jpg" alt="" />
          </Link>
        </div>
        <div className="category">
          <Link to="/category">
            <img src="/assets/category/cat-3.jpg" alt="" />
          </Link>
        </div>
        <div className="category">
          <Link to="/category">
            <img src="/assets/category/cat-4.jpg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
