import React, { useState, useEffect } from "react";
import instance, { baseUrlWithoutApi } from "../../../data/BaseUrl";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RemoveImage = ({ id}) => {
  const [image, setImage] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageIdToDelete, setImageIdToDelete] = useState(null);
  
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await instance.get(`/showimages/${id}`);
      setImage(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await instance.delete(`/recents/removeimage/${id}/${imageIdToDelete}`);
      setImage(image.filter((image) => image.id !== imageIdToDelete));
      setModalIsOpen(false);
      fetchPosts();

      toast.success("تم حذف الصورة بنجاح!"); // عرض رسالة نجاح
    } catch (error) {
      console.error("Error deleting image:", error);
      toast.error("حدث خطأ أثناء حذف الصورة."); // عرض رسالة خطأ
    }
  };

  const openModal = (imageId) => {
    setImageIdToDelete(imageId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="remove-post padding">
      <div className="container grid3">
        {image.map((image) => (
          <div key={image.id} className="post">
            <img
              src={`${baseUrlWithoutApi}${image.url}`}
              alt={`Image ${image.id}`}
            />
            <div className="div-button">
              <button
                className="button"
                type="button"
                onClick={() => openModal(image.id)}
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
      {/* <ToastContainer /> */}
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

export default RemoveImage;
