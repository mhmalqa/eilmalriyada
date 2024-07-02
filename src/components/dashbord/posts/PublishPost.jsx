import React, { useState } from "react";
import instance from "../../data/BaseUrl";
import Modal from "react-modal";
import "./ImageUpload.css";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // التأكد من أن الملف غير فارغ
      setImage(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!type.trim()) {
      setMessage("يرجى تحديد نوع الصورة.");
      return;
    }

    if (!image) {
      setMessage("يرجى تحديد الصورة.");
      return;
    }

    setModalIsOpen(true);
  };

  const confirmUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("type", type);

    try {
      const response = await instance.post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("تم حفظ الصورة بنجاح.");
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        setMessage("");
        setType("");
        setImage(null);
        setPreview(null); // Clear preview image as well
      }, 3000);
    } catch (error) {
      setMessage("فشل رفع الصورة.");
    }

    setModalIsOpen(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <section className="padding">
        <div style={styles.container}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>اختر الصورة</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={styles.input}
              />
            </div>
            {preview && (
              <img src={preview} alt="معاينة" style={styles.preview} />
            )}
            <div style={styles.formGroup}>
              <label style={styles.label}>نوع الصورة</label>
              <input
                type="text"
                value={type}
                required
                onChange={handleTypeChange}
                style={styles.input}
              />
            </div>
            {/* <button type="submit" style={styles.button}>
              رفع
            </button> */}
            <button className="cssbuttons-io-button">
              <svg
                viewBox="0 0 640 512"
                fill="white"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
              </svg>
              <span>رفع المنشور</span>
            </button>
          </form>
          {message && <p style={styles.errorMessage}>{message}</p>}
          {showSuccessMessage && (
            <Modal
              isOpen={showSuccessMessage}
              onRequestClose={() => setShowSuccessMessage(false)}
              contentLabel="Success Modal"
              style={modalStyles}
            >
              <h2>تم حفظ الصورة بنجاح</h2>
            </Modal>
          )}

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Modal للتأكيد"
            style={modalStyles}
          >
            <h2>تأكيد الرفع</h2>
            <p>هل أنت متأكد أنك تريد رفع هذه الصورة؟</p>
            <button onClick={confirmUpload} style={styles.button}>
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
    </>
  );
};

const styles = {
  // formTitle: {
  //   textAlign: "center",
  //   marginBottom: "20px",
  // },
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(15px)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
  },
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
  preview: {
    width: "100%",
    height: "auto",
    marginBottom: "15px",
  },
  errorMessage: {
    marginTop: "15px",
    padding: "10px",
    borderRadius: "4px",
    color: "#721c24",
    backgroundColor: "#f8d7da",
    border: "1px solid #f5c6cb",
    textAlign: "center",
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
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "300px",
    textAlign: "center",
    fontSize: "12px",
    lineHeight: "43px",
  },
};

export default ImageUpload;
