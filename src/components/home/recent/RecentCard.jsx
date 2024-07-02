import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // استيراد Link
import { list } from "../../data/Data";
import "yet-another-react-lightbox/styles.css";
import "../recent/Recent";
import instance from "../../data/BaseUrl";
import Modal from "react-modal";

const RecentCard = (props) => {
  const [recentIdToDelete, setRecentIdToDelete] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [items, setItems] = useState(list); // حالة لتخزين قائمة العناصر

  const handleDelete = async () => {
    try {
      await instance.delete(`/recents/remove/${recentIdToDelete}`);
      // تحديث حالة العناصر لإزالة العنصر المحذوف
      setItems((prevItems) =>
        prevItems.filter((item) => item.id !== recentIdToDelete)
      );
      setModalIsOpen(false);
    } catch (error) {
      console.error("Error deleting recent:", error);
    }
  };

  const openModal = (recentId) => {
    setRecentIdToDelete(recentId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [randomItems, setRandomItems] = useState([]);
  const scrollToTop = () => {
    window.scrollTo(0, 0); // التمرير إلى أعلى الصفحة
  };

  useEffect(() => {
    if (props.isHome && randomItems.length < 6) {
      const randomItemsArray = [];
      while (
        randomItemsArray.length < 6 &&
        randomItemsArray.length < items.length
      ) {
        const randomIndex = Math.floor(Math.random() * items.length);
        if (!randomItemsArray.includes(randomIndex)) {
          randomItemsArray.push(randomIndex);
        }
      }
      setRandomItems(randomItemsArray);
    }
  }, [props.isHome, randomItems.length, items]);

  useEffect(() => {
    setItems(() => {
      if (props.isHome) {
        return list.length < 6 ? list : randomItems.map((index) => list[index]);
      } else {
        return list;
      }
    });
  }, [props.isHome, randomItems, list]);

  const itemsToDisplay = items;
  return (
    <>
      <div className="content grid3 mtop">
        {itemsToDisplay.map((item, index) => {
          const {
            cover,
            category,
            location,
            name,
            price,
            price_en,
            type,
            name_en,
            location_en,
            category_en,
            type_en,
          } = item;
          const itemName = props.language === "english" ? name_en : name;
          const itemLocation =
            props.language === "english" ? location_en : location;
          const itemCategory =
            props.language === "english" ? category_en : category;
          const itemType = props.language === "english" ? type_en : type;
          const price_item = props.language === "english" ? price_en : price;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category_en === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category_en === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {itemCategory}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{itemName}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {itemLocation}
                </p>
              </div>
              <div className="button flex">
                <div
                  className="tools"
                  style={props.isdash ? null : { display: "none" }}
                >
                  <div class="tooltip" onClick={() => openModal(item.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      height="25"
                      width="25"
                    >
                      <path
                        fill="#6361D9"
                        d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="tooltiptext">remove</span>
                  </div>
                  <div className="edit-tool">
                    <Link
                      to={{
                        pathname: "/maindashbord/real-estate/update", // المسار المستهدف
                        state: { item }, // البيانات المراد تمريرها
                      }}
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </Link>
                  </div>
                </div>

                <div style={!props.isdash ? null : { display: "none" }}>
                  {/* استخدام Link بدلاً من الزر */}
                  {/* {if(!isDash)} */}
                  <Link
                    to={{
                      pathname: `/real-estate/view/${item.id}`, // استخدام id الخاص بـ item ضمن الـ pathname
                      state: { item }, // البيانات المراد تمريرها
                    }}
                  >
                    <button className="btn2" onClick={scrollToTop}>
                      {price_item}
                    </button>
                  </Link>
                </div>
                <span>{itemType}</span>
              </div>
            </div>
          );
        })}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal للتأكيد"
          style={modalStyles}
        >
          <h2>تأكيد الحذف</h2>
          <p>هل أنت متأكد أنك تريد حذف هذا العقار؟</p>
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
    </>
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

export default RecentCard;
