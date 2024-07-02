import React from "react";
import Back from "../common/Back";
import PostCard from "../home/post/PostCard";
import "../home/post/post.css";

const Pricing = () => {
  return (
    <>
      <section className="pricing mb">
        <div className="price container">
          <PostCard />
        </div>
      </section>
    </>
  );
};

export default Pricing;
