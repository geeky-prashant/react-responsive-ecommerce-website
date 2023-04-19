import { MdClose } from "react-icons/md";
import "./Search.scss";

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src="/assets/products/jordan-1.png" alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="desc">Product Description</span>
            </div>
          </div>
          <div className="search-result-item">
            <div className="img-container">
              <img src="/assets/products/jordan-1.png" alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="desc">Product Description</span>
            </div>
          </div>
          <div className="search-result-item">
            <div className="img-container">
              <img src="/assets/products/jordan-1.png" alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="desc">Product Description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
