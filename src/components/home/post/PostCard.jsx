import React, { useState, useEffect } from "react";

const PriceCard = (props) => {
  const [startPostIndex, setStartPostIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartPostIndex((startIndex) => (startIndex + 1) % props.posts.length);
    }, 4000); // تحديث الفهرس البداية كل 4 ثوانٍ

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="post-align">
      <div className="content flex">
        {[0, 1, 2].map((index) => (
          <div
            className={`slide-post ${index === 1 ? "center-card" : "ca"}`}
            key={index}
          >
            <img
              className={`center-image ${index === 1 ? "large" : ""}`}
              src={
                props.posts[(startPostIndex + index) % props.posts.length].img
              }
              alt={
                props.posts[(startPostIndex + index) % props.posts.length].alt
              }
              srcSet={
                props.posts[(startPostIndex + index) % props.posts.length]
                  .srcSet
              }
              title={
                props.posts[(startPostIndex + index) % props.posts.length].alt
              }
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
