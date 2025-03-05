import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button, TextField } from "@mui/material";
import img_bg from "./bg_home.jpg";
import { SocialMedia } from "../../common/header/socialmedia";
import profilePdf from "../../common/Profile/Profile_Elim_Alriyada.pdf";
import { toast } from "react-toastify";
import instance from "../../data/BaseUrl";

const HomePage = () => {
  const lan = document.querySelector("html").dir;

  const [data, setData] = useState({
    name: "",
    subject: "",
    phone_number: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const handleInputChange = (event) => {
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
    if (!allFieldsFilled) {
      toast.error(
        lan === "rtl"
          ? "يرجى ملء جميع الحقول المطلوبة!"
          : "Please fill in all required fields!"
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const fdata = new FormData();
      fdata.append("name", data.name);
      fdata.append("subject", data.subject);
      fdata.append("email", "Eilm@type.com");
      fdata.append("phone_number", data.phone_number);

      const response = await instance.post("/message", fdata);

      if (response.status === 200) {
        toast.success(
          lan === "rtl" ? "تم إرسال البيانات بنجاح" : "Data sent successfully"
        );
        setData({
          name: "",
          subject: "",
          phone_number: "",
        });
      } else {
        toast.error(
          lan === "rtl"
            ? "حدث خطأ أثناء إرسال البيانات"
            : "An error occurred while sending the data"
        );
      }
    } catch (error) {
      console.error(
        lan === "rtl"
          ? "حدث خطأ أثناء إرسال البيانات:"
          : "An error occurred while sending the data:",
        error
      );
      toast.error(
        lan === "rtl"
          ? "حدث خطأ أثناء إرسال البيانات"
          : "An error occurred while sending the data"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 3,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${img_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: {
            xs: "75vh", // الارتفاع الأدنى على الشاشات الصغيرة
            sm: "75vh", // الارتفاع الأدنى على الشاشات المتوسطة
            md: "85vh", // الارتفاع الأدنى على الشاشات الكبيرة
          },
          display: "flex",
          width: "95%",
          flexDirection: "column",
          borderRadius: "15px",
          position: "relative",
          p: 3,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "15px",
            zIndex: 1,
          }}
        />

        <Grid
          container
          direction="column"
          spacing={5}
          alignItems="center"
          sx={{
            zIndex: 2,
            alignContent: "flex-start",
            mt: {
              xs: 1, // الهوامش العلوية على الشاشات الصغيرة
              sm: 3, // الهوامش العلوية على الشاشات المتوسطة
              md: 5, // الهوامش العلوية على الشاشات الكبيرة
            },
            ml: {
              xs: -3, // الهوامش اليسارية على الشاشات الصغيرة
              sm: 2, // الهوامش اليسارية على الشاشات المتوسطة
              md: 3, // الهوامش اليسارية على الشاشات الكبيرة
            },
            mr: {
              xs: 0.5, // الهوامش اليمنية على الشاشات الصغيرة
              sm: 2, // الهوامش اليمنية على الشاشات المتوسطة
              md: 3, // الهوامش اليمنية على الشاشات الكبيرة
            },
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "24px", // حجم الخط على الشاشات الصغيرة
                  sm: "30px", // حجم الخط على الشاشات المتوسطة
                  md: "35px", // حجم الخط على الشاشات الكبيرة
                },
                color: "#fff",
                opacity: "0.9",
                fontWeight: "bold",
                fontFamily: "'Alexandria', sans-serif",
                mb: 3,
              }}
            >
              {lan === "rtl" ? "علم الريادة" : "Eilm Alriyada"}
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "28px", // حجم الخط على الشاشات الصغيرة
                  sm: "45px", // حجم الخط على الشاشات المتوسطة
                  md: "70px", // حجم الخط على الشاشات الكبيرة
                },

                color: "#fff",
                fontWeight: "bold",
                fontFamily: "'Alexandria', sans-serif",
              }}
            >
              {lan === "rtl" ? "بدر محمد الصيوان" : "Bader Mohammed Al-Siwan"}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: {
                  xs: "12px", // حجم الخط على الشاشات الصغيرة
                  sm: "18px", // حجم الخط على الشاشات المتوسطة
                  md: "20px", // حجم الخط على الشاشات الكبيرة
                },
                color: "#fff",
                mt: 2,
                fontFamily: "'Alexandria', sans-serif",
              }}
            >
              {lan === "rtl"
                ? "متخصص في تأجير العقارات - نقدم أسرع وأسهل حلول للإيجار"
                : "Real Estate Rental Specialist - We offer the fastest and easiest rental solutions"}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mt: {
                xs: -1.3, // الهوامش العلوية على الشاشات الصغيرة
                sm: -1.2, // الهوامش العلوية على الشاشات المتوسطة
                md: 0.5, // الهوامش العلوية على الشاشات الكبيرة
              },
            }}
          >
            <a
              href="https://wa.me/966508604391"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="contained"
                color="success"
                sx={{
                  mx: 1,
                  fontFamily: "'Alexandria', sans-serif",
                  fontSize: {
                    xs: "12px", // حجم الخط على الشاشات الصغيرة
                    sm: "14px", // حجم الخط على الشاشات المتوسطة
                    md: "15px", // حجم الخط على الشاشات الكبيرة
                  },
                }}
              >
                {lan === "rtl" ? "تواصل معنا" : "Contact Us"}
              </Button>
            </a>
            <a href={profilePdf} download>
              <Button
                variant="outlined"
                sx={{
                  mx: 0.5,
                  color: "white",
                  borderColor: "white",
                  fontFamily: "'Alexandria', sans-serif",
                  fontSize: {
                    xs: "12px", // حجم الخط على الشاشات الصغيرة
                    sm: "14px", // حجم الخط على الشاشات المتوسطة
                    md: "15px", // حجم الخط على الشاشات الكبيرة
                  },
                }}
              >
                {lan === "rtl" ? "الملف التعريفي" : "Download Profile"}
              </Button>
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              mt: {
                xs: -2, // الهوامش العلوية على الشاشات الصغيرة
                sm: -1, // الهوامش العلوية على الشاشات المتوسطة
                md: 0.5, // الهوامش العلوية على الشاشات الكبيرة
              },
            }}
          >
            <SocialMedia />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          backgroundColor: "#fff",
          mt: {
            xs: -25,
            sm: -12,
            md: -10,
          },
          p: 2,
          borderRadius: "12px",
          boxShadow: 3,
          width: "85%",
          zIndex: "5",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            mb: 2,
            textAlign: lan === "rtl" ? "right" : "left",
            fontFamily: "'Alexandria', sans-serif",
          }}
        >
          {lan === "rtl"
            ? "متخصصون في تأجير العقارات - دعنا نساعدك في تأجير عقارك بسرعة"
            : "We specialize in real estate rental - Let us help you rent your property quickly"}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label={lan === "rtl" ? "الاسم الكامل" : "Full Name"}
              variant="outlined"
              required
              name="name"
              value={data.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label={lan === "rtl" ? "رقم الجوال" : "Phone Number"}
              variant="outlined"
              required
              name="phone_number"
              value={data.phone_number}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              label={lan === "rtl" ? "نوع العقار" : "Property Type"}
              variant="outlined"
              required
              name="subject"
              value={data.subject}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                height: "3.9975em",
                fontFamily: "'Alexandria', sans-serif",
              }}
              onClick={sendMessage}
              disabled={isSubmitting}
            >
              {isSubmitting
                ? lan === "rtl"
                  ? "جاري الإرسال..."
                  : "Sending..."
                : lan === "rtl"
                ? "أدرج عقارك معنا"
                : "Add your property"}
            </Button>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            textAlign: "center",
            fontFamily: "'Alexandria', sans-serif",
          }}
        >
          {lan === "rtl" ? (
            <>
              <div>رقم ترخيص الفرد: 1100012564</div>
              <div>رقم ترخيص المنشأة: 1200033656</div>
            </>
          ) : (
            <>
              <div>Individual License Number: 1100012564</div>
              <div>Establishment License Number: 1200033656</div>
            </>
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
