import React from "react";
import "./post.css";
import { baseUrlWithoutApi } from "../../data/BaseUrl";
import OurWorkSlider from "../real-estate-photography/OurWorkSlider";
import { useEffect, useState } from "react";
import "./post.css";
import instance from "../../data/BaseUrl";
// const Post = (props) => {
//   const title =
//     props.language === "arabic"
//       ? props.isServices
//         ? "مجموعة خدماتنا المتكاملة"
//         : "الخدمات العقارية"
//       : props.isServices
//       ? "Our comprehensive range of services"
//       : "Real Estate Services";

//   return (
//     <>
//       <section className="post">
//         <img
//           className="img-back"
//           src={`${process.env.PUBLIC_URL}/images/shape/h3_choose_shape02.jpg`}
//           alt=""
//           loading="lazy"
//         />
//         <div className="container">
//           {/* <Heading title={title} />
//           {postList.length > 0 && (
//             <PostCard isServices={props.isServices} posts={postList} />
//           )} */}
//           <OurWorkSlider images={posts.post_rel} title={title} />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Post;

// async function fetchPostsFromAPI() {
//   return post;
// }

const Post = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostsFromAPI = async () => {
      try {
        const response = await instance.get("/showpost");
        const data = response.data;

        setPosts(
          data
            .map((post) => ({
              image_path: `${baseUrlWithoutApi}${post.image_path}`,
              type: post.type,
            }))
            .reverse()
        );
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostsFromAPI();
  }, []);

  const title =
    props.language === "arabic"
      ? props.isServices
        ? "مجموعة خدماتنا المتكاملة"
        : "الخدمات العقارية"
      : props.isServices
      ? "Our comprehensive range of services"
      : "Real Estate Services";

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <section className="post">
      <img
        className="img-back"
        src={`${process.env.PUBLIC_URL}/images/shape/h3_choose_shape02.jpg`}
        alt=""
        loading="lazy"
      />
      <div className="container">
        <OurWorkSlider images={posts} title={title} />
      </div>
    </section>
  );
};

export default Post;
