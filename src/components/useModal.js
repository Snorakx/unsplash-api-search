import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [url, setUrl] = useState("");
  const [userLocation, setLocation] = useState("");
  const [userName, setUserName] = useState("");
  const [userPic, setUserPic] = useState("");

  function toggle(url, userloc, name, userPicSmall) {
    setIsShowing(!isShowing);
    setUrl(url);
    setLocation(userloc);
    setUserName(name);
    setUserPic(userPicSmall);
  }

  return {
    isShowing,
    toggle,
    url,
    userLocation,
    userName,
    userPic,
  };
};

export default useModal;
