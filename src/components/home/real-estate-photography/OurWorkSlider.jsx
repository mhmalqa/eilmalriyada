import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurWorkSlider = ({ images, title }) => {
  // إعدادات السلايدر
  const settings = {
    dots: true, // عرض النقاط للتنقل بين الشرائح
    infinite: true, // التكرار اللانهائي
    speed: 500, // سرعة الانتقال بين الشرائح (بالمللي ثانية)
    slidesToShow: 3, // عدد الشرائح المعروضة في نفس الوقت
    slidesToScroll: 1, // عدد الشرائح التي يتم تمريرها عند النقر
    autoplay: true, // التشغيل التلقائي
    autoplaySpeed: 3000, // سرعة التشغيل التلقائي (بالمللي ثانية)
    responsive: [
      {
        breakpoint: 1024, // عند عرض الشاشة أقل من 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // عند عرض الشاشة أقل من 600px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // التحقق من وجود الصور
  if (!images || images.length === 0) {
    return (
      <Box sx={{ py: 8, backgroundColor: "#f9f9f9" }}>
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: "#333",
            fontFamily: "'Alexandria', sans-serif",
          }}
        >
          لا توجد صور متاحة.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 2 }}>
      <Container maxWidth="lg">
        {/* عنوان السلايدر */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#333",
            fontSize: "25px",
            fontFamily: "'Alexandria', sans-serif",
          }}
        >
          {title}
        </Typography>

        {/* السلايدر */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <Box
                component="img"
                src={image.img} // استخدام خاصية img من البيانات
                alt={image.alt} // استخدام خاصية alt من البيانات
                sx={{
                  width: "100%",
                  height: "350px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s", // تأثير ناعم عند التحويم
                  "&:hover": {
                    transform: "scale(1.05)", // تكبير الصورة عند التحويم
                  },
                }}
              />
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default OurWorkSlider;
