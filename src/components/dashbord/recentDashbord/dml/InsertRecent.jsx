import React, { useState } from "react";
import instance from "../../../data/BaseUrl";
import "./insert_forms.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function InsertRecent() {
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

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const [loading, setLoading] = useState(false); // حالة التحكم في عرض الـ Backdrop

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

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
        [e.target.name]: e.target.files[0],
      });
    } else {
      const files = Array.from(e.target.files);

      setData({
        ...data,
        [e.target.name]: [...data[name], ...files],
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
      const response = await instance.post("/addrecent", dataAPI);

      setMessage("تم إرسال البيانات بنجاح");
      setSeverity("success");
      setOpen(true);
      setLoading(false); // إخفاء الـ Backdrop
      // تفريغ الحقول في حال تم الإضافة بنجاح
      // setData({
      //   cover: null,
      //   filePdfRecent: null,
      //   name: "",
      //   name_en: "",
      //   location: "",
      //   location_en: "",
      //   category: "",
      //   category_en: "",
      //   price: "",
      //   price_en: "",
      //   type: "",
      //   type_en: "",
      //   property_area: "",
      //   street_direction: "",
      //   street_direction_en: "",
      //   bathrooms: "",
      //   bedrooms: "",
      //   land_length: "",
      //   property_age: "",
      //   property_age_en: "",
      //   street_width: "",
      //   land_width: "",
      //   description: "",
      //   description_en: "",
      //   license_number: "",
      //   map_location: "",
      //   images: [],
      // });
    } catch (error) {
      console.error("حدث خطأ أثناء إرسال البيانات:", error);
      setMessage("حدث خطأ أثناء إرسال البيانات");
      setSeverity("error");
      setOpen(true);
      setLoading(false); // إخفاء الـ Backdrop
    }
  };

  return (
    <section className="insert-forms">
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
        <span style={{ marginLeft: "10px" }}>جاري الإضافة...</span>
      </Backdrop>
      <div className="container">
        <div className="modal">
          <div className="modal__header">
            <span className="modal__title">اضافة عقار</span>
            <button className="button button--icon">
              <svg
                width="24"
                viewBox="0 0 24 24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
              </svg>
            </button>
          </div>
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
                    required
                  />
                ) : (
                  <input
                    className="input__field"
                    type="text"
                    name={name}
                    value={data[name]}
                    onChange={handleChange}
                    required
                  />
                )}
              </div>
            ))}

            <div className="modal__footer">
              <button type="submit" className="button button--primary">
                اضافة
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
