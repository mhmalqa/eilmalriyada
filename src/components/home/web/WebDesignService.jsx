import React, { useState } from "react";
import {
  Button,
  Typography,
  Box,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
import webicon from "./webicon.png";

const WebDesignService = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleButtonClick = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        overflow: "hidden",
        "@media (max-width: 900px)": {
          flexDirection: "column-reverse", // لضمان وضع الدائرة في الأسفل
          justifyContent: "flex-end", // نقل المحتوى إلى الأسفل
        },
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1500px",
          padding: "1px",
          "@media (max-width: 900px)": {
            flexDirection: "column", // تغيير اتجاه العناصر للجوال
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        {/* قسم النص الأيسر */}
        <Box
          sx={{
            maxWidth: "500px",
            "@media (max-width: 900px)": {
              textAlign: "center",
              maxWidth: "90%",
              justifyContent: "center",
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Alexandria', sans-serif",
              fontWeight: 700,
              color: "#22183E",
              "@media (max-width: 900px)": {
                paddingTop: "50px",
                lineHeight: "2",
                fontSize: "1.9rem", // تصغير النص للجوال
              },
            }}
            gutterBottom
          >
            خدمة التصوير العقاري الاحترافي
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Alexandria', sans-serif",
              fontWeight: 400,
              color: "#22183E",
              "@media (max-width: 900px)": {
                lineHeight: "2",
                fontSize: "1rem", // تصغير النص للجوال
              },
            }}
          >
            نقدّم لك حلولاً مبتكرة ومخصصة لتصميم وتطوير مواقع ويب جذابة وسريعة
            الاستجابة تلبي احتياجات أعمالك وتساعدك على الوصول لجمهور أوسع.
          </Typography>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              variant="contained"
              sx={{
                margin: "0 10px",
                backgroundColor: "#159FDE", // لون مخصص للخلفية
                fontFamily: "'Alexandria', sans-serif",
                "&:hover": {
                  backgroundColor: "#148CC4", // لون عند التحويم
                },
              }}
              onClick={handleButtonClick}
            >
              اطلب الآن
            </Button>
            <Button
              variant="outlined"
              sx={{
                margin: "0 5px",
                backgroundColor: "#EDECEC", // لون مخصص للخلفية
                color: "#22183E", // لون النص
                borderColor: "#EDECEC", // لون الحدود
                fontFamily: "'Alexandria', sans-serif",
                boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.3)", // الظل الخارجي

                "&:hover": {
                  borderColor: "#148CC4", // لون الحدود عند التحويم
                  color: "#148CC4", // لون النص عند التحويم
                },
              }}
            >
              تواصل معنا
            </Button>
          </Box>
        </Box>

        {/* قسم الصورة الأيمن */}
        <Box
          sx={{
            position: "relative",
            width: "20%",
            height: "100vh",
            zIndex: "-10",
            "@media (max-width: 900px)": {
              // display: "none", // إخفاء هذا القسم للجوال
            },
          }}
        >
          {/* الدائرة */}
          <Box
            sx={{
              width: "800px", // عرض الدائرة
              height: "800px", // ارتفاع الدائرة
              background: "linear-gradient(to right, #5E66E1, #122947)", // تدرج لوني من اليمين إلى اليسار
              borderRadius: "50%", // لتشكيل الدائرة
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)", // الظل الخارجي
              position: "absolute", // وضع الدائرة بشكل مطلق
              top: "-140px", // رفع الدائرة للأعلى
              right: "135%", // نقل الدائرة إلى اليمين
              "@media (max-width: 900px)": {
                // all: "unset",
                background: "linear-gradient(to right, #5E66E1, #122947)", // تدرج لوني من اليمين إلى اليسار
                position: "absolute",
                justifyContent: "center",

                width: "450px", // تصغير الدائرة للجوال
                height: "450px",
                top: "auto", // إزالة الإزاحة العلوية
                bottom: "200px", // نقل الدائرة إلى الأسفل
                right: "auto",
                left: "50%", // جعلها في المنتصف
                transform: "translateX(-50%)", // ضمان التوسيط
              },
            }}
          />
        </Box>

        <Box
          sx={{
            maxWidth: "550px",
            "@media (max-width: 900px)": {
              zIndex: "-10",
              position: "relative",
              maxWidth: "300px", // تصغير الصورة للجوال
              justifyContent: "center",
              top: "auto", // إزالة الإزاحة العلوية
              bottom: "800px", // وضع الصورة فوق الدائرة
              left: "auto",
              transform: "translateX(-25%)",
            },
          }}
        >
          <img
            src={webicon}
            alt="Web Design"
            style={{
              width: "110%",
              position: "relative",
              left: "30%",
              "@media (max-width: 900px)": {
                all: "initial",
                width: "90%",
                // left: "30%",
                // paddingTop: "20px",
              },
            }}
          />
        </Box>
      </Container>
      {/* Snackbar for displaying the message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#159FDE", // لون خلفية الـ Snackbar
            fontFamily: "'Alexandria', sans-serif", // الخط المستخدم
            color: "#fff", // لون النص
          },
          "& .MuiAlert-root": {
            fontFamily: "'Alexandria', sans-serif", // الخط المستخدم
          },
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="info"
          sx={{ fontFamily: "'Alexandria', sans-serif" }}
        >
          سوف يتم تفعيل الخدمة قريبا
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default WebDesignService;
