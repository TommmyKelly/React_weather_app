import React, { useState } from "react";

const ScrollButton = () => {
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <div
      className={
        showScroll
          ? "fixed-action-btn left show"
          : "fixed-action-btn left hidden"
      }
      onClick={onClick}
    >
      {/* // eslint-disable-next-line */}
      <a className='btn-floating btn-large blue-grey darken-3 waves-effect waves-light btn '>
        <i className='material-icons'>expand_less</i>
      </a>
    </div>
  );
};

export default ScrollButton;
