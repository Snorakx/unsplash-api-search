import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Unsplash, { toJson } from "unsplash-js";
import Modal from "../../components/modal";
import useModal from "../../components/useModal";
import SearchComponent from "../../components/searchBar";

const SearchResultView = () => {
  const history = useHistory();

  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState(
    localStorage.myValueInLocalStorage || ""
  );
  const {
    isShowing,
    toggle,
    url,
    userLocation,
    userName,
    userPic,
  } = useModal();

  const unsplash = new Unsplash({
    accessKey: "API_KEY",
  });
  const handleSearch = () => {
    unsplash.search
      .photos(localStorage.myValueInLocalStorage, 1, 15)
      .then(toJson)
      .then((json) => {
        // Your code
        setImages(json.results);
      });
  };

  if (searchQuery != localStorage.myValueInLocalStorage) {
    setSearchQuery(localStorage.myValueInLocalStorage);
    handleSearch();
  }

  const goHome = () => {
    history.push({
      pathname: "/",
    });
    localStorage.clear();
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-center w-100 pt-5 ">
        <SearchComponent />
      </div>
      <div className="header-box">
        <a onClick={goHome}>
          <h1>Unsplash Api Exercise</h1>
        </a>
      </div>

      <div className="grid-container-images">
        {images.map((pic) => (
          <div
            onClick={() =>
              toggle(
                pic.urls.small,
                pic.user.location,
                pic.user.name,
                pic.user.profile_image.medium
              )
            }
            className="single-image"
            key={pic.id}
          >
            <img
              className="img-fluid"
              alt={pic.alt_description}
              src={pic.urls.small}
            ></img>
          </div>
        ))}
        <Modal
          isShowing={isShowing}
          hide={toggle}
          url={url}
          userLocation={userLocation}
          userName={userName}
          userPic={userPic}
        />
      </div>
      <footer>Patryk Kozieł Zadanie Frontend</footer>
    </div>
  );
};

export default SearchResultView;
