import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Discover the best local businesses!
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Schools</button>
            <button>Hotels</button>
            <button>Hospitals</button>
            <button>Bakeries</button>
          </div>
        </div>
        {/* <div className="right">
          <img src="./img/hi.png" alt="" />
        </div> */}
      </div>
    </div>
  );
}

export default Featured;
