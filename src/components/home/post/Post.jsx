import React from "react";
import Heading from "../../common/Heading";
import "./post.css";
import PostCard from "./PostCard";
import { posts } from "../../data/Data";
import OurWorkSlider from "../real-estate-photography/OurWorkSlider";

const Post = (props) => {
  const postList = props.isServices ? posts.post_adm : posts.post_rel;
  const title =
    props.language === "arabic"
      ? props.isServices
        ? "مجموعة خدماتنا المتكاملة"
        : "الخدمات العقارية"
      : props.isServices
      ? "Our comprehensive range of services"
      : "Real Estate Services";

  return (
    <>
      <section className="post">
        <img
          className="img-back"
          src={`${process.env.PUBLIC_URL}/images/shape/h3_choose_shape02.jpg`}
          alt=""
          loading="lazy"
        />
        <div className="container">
          {/* <Heading title={title} />
          {postList.length > 0 && (
            <PostCard isServices={props.isServices} posts={postList} />
          )} */}
          <OurWorkSlider images={posts.post_rel} title={title} />
        </div>
      </section>
    </>
  );
};

export default Post;
