import React from "react";
import Heading from "../../common/Heading";
import "./post.css";
import PostCard from "./PostCard";
import { posts } from "../../data/Data";

const Post = (props) => {
  const postList = props.isServices ? posts.post_adm : posts.post_rel;
  const title =
    props.language === "arabic"
      ? props.isServices
        ? "الخدمات المالية والادارية"
        : "الخدمات العقارية"
      : props.isServices
      ? "Financial and Administrative Services"
      : "Real Estate Services";

  return (
    <>
      <section className="post">
        <img
          className="img-back"
          src={`${process.env.PUBLIC_URL}/images/shape/h3_choose_shape02.jpg`}
          alt=""
        />
        <div className="container mtop">
          <Heading title={title} />
          {postList.length > 0 && (
            <PostCard isServices={props.isServices} posts={postList} />
          )}
        </div>
      </section>
    </>
  );
};

export default Post;
