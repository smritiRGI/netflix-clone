import React, { useEffect, useState, useRef } from "react";
import "./Nav.css";

interface entryType {
  isIntersecting: boolean;
}

const Nav: React.FC = () => {
  const navContainerRef = useRef<HTMLElement | null>(null);
  const [show, handleShow] = useState<boolean>(false);

  const callbackFunction = (entries: entryType[]) => {
    // console.log(entries);
    const [entry] = entries;
    if (entry.isIntersecting === false) handleShow(true);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = { root: null, threshold: 1 };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    navContainerRef.current && observer.observe(navContainerRef.current);
    // const handleScroll = () => {
    //   console.log("Event detected");
    //   if (window.scrollY > 100) {
    //     handleShow(true);
    //   } else {
    //     handleShow(false);
    //   }
    // };
    // window.addEventListener("scroll", handleScroll);
    return () => {
      //   window.removeEventListener("scroll", handleScroll);
      navContainerRef.current && observer.unobserve(navContainerRef.current);
    };
  }, [navContainerRef, options]);

  return (
    <nav className={`nav ${show && "nav_black"}`} ref={navContainerRef}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="netflix-logo"
      />

      <img
        className="avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix-avatar"
      />
    </nav>
  );
};

export default Nav;
