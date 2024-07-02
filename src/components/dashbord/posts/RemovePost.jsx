import React, { useState, useEffect } from "react";
import instance, { baseUrlWithoutApi } from "../../data/BaseUrl";
import Modal from "react-modal";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await instance.get("/showpost");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await instance.delete(`/posts/${postIdToDelete}`);
      setPosts(posts.filter((post) => post.id !== postIdToDelete));
      setModalIsOpen(false);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const openModal = (postId) => {
    setPostIdToDelete(postId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="remove-post padding">
      <div className="container grid3">
        {posts.map((post) => (
          <div key={post.id} className="post">
              <p>{post.title}</p>
              <p>{post.body}</p>
              <img
                src={`${baseUrlWithoutApi}${post.image_path}`}
                alt={`Post ${post.id}`}
              />
              {/* <button onClick={() => openModal(post.id)}>Delete</button> */}
              <div className="div-button">
                <button
                  className="button"
                  type="button"
                  onClick={() => openModal(post.id)}
                >
                  <span className="button__text">Delete</span>
                  <span className="button__icon">
                    <svg
                      className="svg"
                      height="512"
                      viewBox="0 0 512 512"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title></title>
                      <path
                        d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                        style={{
                          fill: "none",
                          stroke: "#fff",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "32px",
                        }}
                      ></path>
                      <line
                        style={{
                          stroke: "#fff",
                          strokeLinecap: "round",
                          strokeMiterlimit: 10,
                          strokeWidth: "32px",
                        }}
                        x1="80"
                        x2="432"
                        y1="112"
                        y2="112"
                      ></line>
                      <path
                        d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                        style={{
                          fill: "none",
                          stroke: "#fff",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "32px",
                        }}
                      ></path>
                      <line
                        style={{
                          fill: "none",
                          stroke: "#fff",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "32px",
                        }}
                        x1="256"
                        x2="256"
                        y1="176"
                        y2="400"
                      ></line>
                      <line
                        style={{
                          fill: "none",
                          stroke: "#fff",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "32px",
                        }}
                        x1="184"
                        x2="192"
                        y1="176"
                        y2="400"
                      ></line>
                      <line
                        style={{
                          fill: "none",
                          stroke: "#fff",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "32px",
                        }}
                        x1="328"
                        x2="320"
                        y1="176"
                        y2="400"
                      ></line>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
        ))}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal للتأكيد"
          style={modalStyles}
        >
          <h2>تأكيد الحذف</h2>
          <p>هل أنت متأكد أنك تريد حذف هذه الصورة؟</p>
          <button onClick={handleDelete} style={styles.button}>
            نعم
          </button>
          <button
            onClick={closeModal}
            style={{ ...styles.button, backgroundColor: "#dc3545" }}
          >
            لا
          </button>
        </Modal>
      </div>
    </section>
  );
};

const styles = {
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "5px",
  },
};
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    width: "300px",
    textAlign: "center",
    fontSize: "12px",
    lineHeight: "43px",
  },
};

export default PostsPage;
