import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./cardcontant.css";
import instance from "../../data/BaseUrl";

export function CardContact() {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // حالة التحميل

  async function fetchData() {
    setLoading(true); // تعيين حالة التحميل إلى true عند بدء التحميل
    try {
      const response = await instance.get("/message/show");
      setData(response.data.Messages);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // تعيين حالة التحميل إلى false عند الانتهاء من التحميل
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function deleteData(id) {
    try {
      const confirmed = window.confirm("هل أنت متأكد من حذف الرسالة؟");
      if (!confirmed) return; // توقف عن حذف إذا لم يتم تأكيد الحذف

      await instance.delete(`/message/delete/${id}`);
      fetchData(); // تحديث البيانات بعد الحذف
    } catch (error) {
      console.log("Error deleting data:", error);
    }
  }

  return (
    <section className="dash padding">
      {loading ? ( // عرض أيقونة التحميل إذا كانت البيانات قيد التحميل
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className="container grid3">
          {data.map((item) => (
            <div className="card" key={item.id}>
              <div>
                <h3>{item.name || "الاسم"}</h3>
              </div>
              <div className="email">
                <a
                  href={`mailto:${item.email || "example@example.com"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <p>{item.email || "Email"}</p>
              </div>
              <div className="phone">
                <a
                  href={`tel:${item.phone_number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-phone"></i>
                </a>
                <p>{item.phone_number || "phone"}</p>
              </div>
              <div>
                <h3>الموضوع</h3>
                <p>{item.subject || "بلا موضوع"}</p>
              </div>
              <div className="svg-date">
                <button onClick={() => deleteData(item.id)} className="tooltip">
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
                  <span className="tooltiptext">remove</span>
                </button>
                <p>{formatDate(item.created_at)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
