import React, { useEffect, useState } from "react";
import "./insert_forms.css";
import RemoveImage from "./RemoveImage";
import instance from "../../../data/BaseUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export function UpdateRecent({ location }) {
  const { item } = location.state;
  const [data, setData] = useState({
    cover: null,
    filePdfRecent: null,
    name: "",
    name_en: "",
    location: "",
    location_en: "",
    category: "",
    category_en: "",
    price: "",
    price_en: "",
    type: "",
    type_en: "",
    property_area: "",
    street_direction: "",
    street_direction_en: "",
    bathrooms: "",
    bedrooms: "",
    land_length: "",
    property_age: "",
    property_age_en: "",
    street_width: "",
    land_width: "",
    description: "",
    description_en: "",
    license_number: "",
    map_location: "",
    images: [],
  });
  const [loading, setLoading] = useState(false); // حالة التحكم في عرض الـ Backdrop

  useEffect(() => {
    setData(item);
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const name = e.target.name;
    if (name === "cover" || name === "filePdfRecent") {
      setData({
        ...data,
        [name]: e.target.files[0],
      });
    } else if (name === "images") {
      const files = Array.from(e.target.files);
      setData({
        ...data,
        [name]: files,
      });
    } else {
      const files = Array.from(e.target.files);
      setData({
        ...data,
        [name]: [...data[name], ...files],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // إظهار الـ Backdrop

    const dataAPI = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((item) => {
          dataAPI.append("images[]", item);
        });
      } else {
        dataAPI.append(key, value);
      }
    });

    try {
      const response = await instance.post(
        `/recent/update/${item["id"]}`,
        dataAPI,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("تم تعديل البيانات بنجاح!"); // عرض رسالة نجاح
      setLoading(false); // إخفاء الـ Backdrop
    } catch (error) {
      console.error("حدث خطأ أثناء إرسال البيانات:", error);
      toast.error("حدث خطأ أثناء إرسال البيانات:");
      setLoading(false); // إخفاء الـ Backdrop
    }
  };

  return (
    <section className="insert-forms">
      <div className="container">
        <div className="modal">
          <form className="modal__body" onSubmit={handleSubmit}>
            {[
              { name: "cover", label: "غلاف", type: "file" },
              { name: "filePdfRecent", label: "ملف العقار", type: "filePdf" },
              { name: "name", label: "الاسم بالعربية" },
              { name: "name_en", label: "الاسم بالإنجليزية" },
              { name: "location", label: "الموقع بالعربية" },
              { name: "location_en", label: "الموقع بالإنجليزية" },
              { name: "category", label: "حالة العقار بالعربية" },
              { name: "category_en", label: "حالة العقار بالإنجليزية" },
              { name: "price", label: "السعر بالعربية" },
              { name: "price_en", label: "السعر بالإنجليزية" },
              { name: "type", label: "النوع بالعربية" },
              { name: "type_en", label: "النوع بالإنجليزية" },
              { name: "property_area", label: "مساحة العقار" },
              { name: "street_direction", label: "اتجاه الشارع بالعربية" },
              {
                name: "street_direction_en",
                label: "اتجاه الشارع بالإنجليزية",
              },
              { name: "street_width", label: "عرض الشارع" },
              { name: "bathrooms", label: "عدد الحمامات" },
              { name: "bedrooms", label: "عدد غرف النوم" },
              { name: "land_length", label: "طول الأرض" },
              { name: "land_width", label: "عرض الأرض" },
              { name: "property_age", label: "عمر العقار بالعربية" },
              { name: "property_age_en", label: "عمر العقار بالإنجليزية" },
              { name: "license_number", label: "رقم الرخصة" },
              { name: "map_location", label: "موقع الخريطة" },
              {
                name: "description",
                label: "الوصف بالعربية",
                type: "description",
              },
              {
                name: "description_en",
                label: "الوصف بالإنجليزية",
                type: "description",
              },
              { name: "images", label: "الصور", type: "file", multiple: true },
            ].map(({ name, label, type, multiple }) => (
              <div key={name} className="input">
                <label className="input__label">{label}</label>
                {type === "file" ? (
                  <input
                    className="input__field"
                    type="file"
                    accept="image/*"
                    name={name}
                    onChange={handleImageChange}
                    multiple={multiple}
                  />
                ) : type === "filePdf" ? (
                  <input
                    className="input__field"
                    type="file"
                    accept="application/pdf"
                    name={name}
                    onChange={handleImageChange}
                  />
                ) : type === "description" ? (
                  <textarea
                    className="input__field"
                    name={name}
                    value={data[name]}
                    onChange={handleChange}
                  />
                ) : (
                  <input
                    className="input__field"
                    type="text"
                    name={name}
                    value={data[name]}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}

            <div className="modal__footer">
              <button type="submit" className="button button--primary">
                حفظ التعديلات
              </button>
            </div>
          </form>
          <RemoveImage id={item.id} />
        </div>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
        <span style={{ marginLeft: "10px" }}>جاري التحديث...</span>
      </Backdrop>
      <ToastContainer />
    </section>
  );
}
