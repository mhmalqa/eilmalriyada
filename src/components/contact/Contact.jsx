import React, { useEffect, useState } from "react";
import img from "../images/contactusar.jpg";
import Back from "../common/Back";
import "./contact.css";
import Heading from "../common/Heading";
import instance from "../data/BaseUrl";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ inHome, language }) => {
  const lan = document.querySelector("html").dir;
  if (inHome !== "true" && lan === "rtl") {
    language = "arabic";
  }
  const isArabic = language === "arabic";

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [data, setData] = useState({
    name: "",
    subject: "",
    email: "",
    phone_number: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for button

  const handelInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const filled = Object.values(data).every((value) => value.trim() !== "");
    setAllFieldsFilled(filled);
  }, [data]);

  const sendMessage = async () => {
    setIsSubmitting(true); // Disable button
    try {
      const fdata = new FormData();
      fdata.append("name", data.name);
      fdata.append("subject", data.subject);
      fdata.append("email", data.email);
      fdata.append("phone_number", data.phone_number);

      const response = await instance.post("/message", fdata);

      if (response.status === 200) {
        toast.success("تم إرسال البيانات بنجاح");
        setData({
          name: "",
          subject: "",
          email: "",
          phone_number: "",
        });
      } else {
        toast.error("حدث خطأ أثناء إرسال البيانات");
      }
    } catch (error) {
      console.error("حدث خطأ أثناء إرسال البيانات:", error);
      toast.error("حدث خطأ أثناء إرسال البيانات");
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

  return (
    <>
      <section className="contact mb">
        <br />
        {inHome === "true" ? (
          <Heading title={isArabic ? "اتصل بنا" : "Contact Us"} subtitle="" />
        ) : (
          <>
            <Back
              name={isArabic ? "اتصل بنا" : "Contact Us"}
              title={
                isArabic
                  ? "احصل على المساعدة والدعم "
                  : "Get Helps & Friendly Support"
              }
              cover={img}
            />
            <br />
            <Heading title={isArabic ? "اتصل بنا" : "Contact Us"} subtitle="" />
          </>
        )}
        <br />
        <div className="container">
          <div className="shadow container-con">
            <div className="info-p">
              <h3>
                {isArabic
                  ? "طلب خدمة استشارية"
                  : "Request Consultation Service"}
              </h3>
              <p>
                {isArabic
                  ? " يُرجى ملء النموذج لطلب خدمة استشارية. يهمنا الحصول على جميع التفاصيل الضرورية التي تساعدنا في تحديد احتياجاتك بدقة، وسنعمل على التواصل معك في غضون 24 ساعة لتقديم الدعم اللازم."
                  : "Please fill out the consultation service request form with all the necessary details and initial information that help us understand your request accurately. One of our representatives will contact you within 24 hours to assist you."}
              </p>
            </div>
            <div className="tow-section">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (allFieldsFilled) sendMessage();
                }}
              >
                <div className="subj_input">
                  <input
                    name="subject"
                    onChange={handelInputChange}
                    type="text"
                    placeholder={isArabic ? "الموضوع *" : "Subject *"}
                    value={data.subject}
                    required
                  />
                </div>
                <div>
                  <input
                    name="name"
                    onChange={handelInputChange}
                    type="text"
                    placeholder={isArabic ? "الاسم *" : "Name *"}
                    value={data.name}
                    required
                  />
                  <input
                    name="email"
                    onChange={handelInputChange}
                    type="email"
                    placeholder={isArabic ? "البريد الإلكتروني *" : "Email *"}
                    value={data.email}
                    required
                  />
                </div>
                <div>
                  <input
                    name="phone_number"
                    onChange={handelInputChange}
                    type="tel"
                    placeholder={isArabic ? "الهاتف *" : "Phone *"}
                    value={data.phone_number}
                    required
                  />
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting
                      ? isArabic
                        ? "جاري الإرسال..."
                        : "Sending..."
                      : isArabic
                      ? "إرسال الطلب"
                      : "Submit Request"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Contact;
