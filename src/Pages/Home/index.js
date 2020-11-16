import React from "react";
import SearchComponent from "../../components/searchBar";

const Home = () => {
  return (
    <div className="background">
      <div className="input-group d-flex justify-content-center ">
        <div style={{ color: "white" }} className="home-header">
          <h1>Unsplash&nbsp;Api&nbsp;Exercise</h1>
        </div>
        <SearchComponent />
      </div>
    </div>
  );
};

export default Home;
