import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { CameraAlt, Home, AttachMoney } from "@mui/icons-material";
import brjImage from "./brj.jpg";
import img1 from "./work/1.jpg";
import img2 from "./work/2.jpg";
import img3 from "./work/3.jpg";
import img4 from "./work/4.jpg";
import img5 from "./work/5.jpg";
import img7 from "./work/7.jpg";
import img6 from "./work/6.jpg";

import OurWorkSlider from "./OurWorkSlider";

const RealEstatePhotography = () => {
  const realEstateImages = [
    { image_path: img1, type: "تصوير داخلي" },
    { image_path: img2, type: "تصوير خارجي" },
    { image_path: img3, type: "تصميم ديكور" },
    { image_path: img4, type: "تصميم حديقة" },
    { image_path: img5, type: "تصميم حديقة" },
    { image_path: img6, type: "تصميم حديقة" },
    { image_path: img7, type: "تصميم حديقة" },
  ];

  // كائن يحتوي على النصوص باللغتين العربية والإنجليزية
  const title = { rtl: "سابقة اعمالنا", ltr: "Our previous work" };
  const translations = {
    rtl: {
      title: "خدمة التصوير العقاري الاحترافي",
      subtitle: "حيث يتحدث العقار عن نفسه",
      whatWeOffer: "ماذا نقدم لك؟",
      interiorExterior: "تصوير داخلي وخارجي",
      interiorExteriorDesc:
        "نلتقط زوايا العقار الأكثر جاذبية بلمسة إبداعية مميزة",
      propertyPersonality: "شخصية العقار",
      propertyPersonalityDesc:
        "كل صورة تروي قصة خاصة بالعقار، مما يمنح العملاء تصوراً واقعياً.",
      marketingContent: "المحتوى التسويقي",
      marketingContentDesc:
        "صياغة نصوص إعلانية مدروسة باللغتين العربية والإنجليزية.",
      cost: "التكلفة",
      price: "1000 ريال سعودي",
      orderNow: "اطلب الخدمة الآن",
    },
    ltr: {
      title: "Professional Real Estate Photography Service",
      subtitle: "Where the property speaks for itself",
      whatWeOffer: "What do we offer?",
      interiorExterior: "Interior and Exterior Photography",
      interiorExteriorDesc:
        "We capture the most attractive angles of the property with a creative touch.",
      propertyPersonality: "Property Personality",
      propertyPersonalityDesc:
        "Every picture tells a unique story about the property, giving clients a realistic impression.",
      marketingContent: "Marketing Content",
      marketingContentDesc:
        "Crafting well-thought-out ad copy in both Arabic and English.",
      cost: "Cost",
      price: "1000 SAR",
      orderNow: "Order Now",
    },
  };
  const dir = document.querySelector("html").getAttribute("dir");

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        py: 3,
        fontFamily: "'Alexandria', sans-serif",
      }}
    >
      {/* القسم الرئيسي مع صورة خلفية وتأثير الإضاءة المضللة */}
      <Box
        sx={{
          position: "relative",
          height: "400px",
          overflow: "hidden",
        }}
      >
        {/* الصورة الخلفية */}
        <Box
          component="img"
          src={brjImage}
          alt="Real Estate Background"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.6)", // تعتيم الصورة
          }}
        />
        {/* الطبقة الشفافة (Overlay) */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)", // لون الشفافية
          }}
        />
        {/* النص فوق الصورة */}
        <Container
          maxWidth="md"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
              fontFamily: "'Alexandria', sans-serif",
            }}
          >
            {translations[dir].title}
          </Typography>
          <Typography
            variant="h5"
            paragraph
            sx={{
              mt: 2,
              fontSize: { xs: "1rem", md: "1.2rem" },
              fontFamily: "'Alexandria', sans-serif",
            }}
          >
            {translations[dir].subtitle}
          </Typography>
        </Container>
      </Box>

      {/* محتوى الخدمة */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#333",
            fontSize: "28px",
            fontFamily: "'Alexandria', sans-serif",
          }}
        >
          {translations[dir].whatWeOffer}
        </Typography>

        <Grid container spacing={2}>
          {/* تصوير داخلي وخارجي */}
          <Grid item xs={12} md={4}>
            <Card
              elevation={3}
              sx={{
                minHeight: "205px", // ارتفاع ثابت لجميع الكروت
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s, box-shadow 0.3s", // تأثير ناعم
                "&:hover": {
                  transform: "scale(1.05)", // تكبير البطاقة عند التحويم
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // زيادة الظل
                },
              }}
            >
              <CardContent>
                <CameraAlt
                  sx={{
                    fontSize: "40px",
                    color: "#1976d2",
                    mb: 2,
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  align="center"
                  sx={{
                    fontFamily: "'Alexandria', sans-serif",
                  }}
                >
                  {translations[dir].interiorExterior}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    fontFamily: "'Alexandria', sans-serif",
                  }}
                  paragraph
                >
                  {translations[dir].interiorExteriorDesc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* شخصية العقار */}
          <Grid item xs={12} md={4}>
            <Card
              elevation={3}
              sx={{
                minHeight: "205px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <Home
                  sx={{
                    fontSize: "40px",
                    color: "#1976d2",
                    mb: 2,
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  align="center"
                  sx={{
                    fontFamily: "'Alexandria', sans-serif",
                  }}
                >
                  {translations[dir].propertyPersonality}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    fontFamily: "'Alexandria', sans-serif",
                  }}
                  paragraph
                >
                  {translations[dir].propertyPersonalityDesc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* المحتوى التسويقي */}
          <Grid item xs={12} md={4}>
            <Card
              elevation={3}
              sx={{
                minHeight: "205px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                <AttachMoney
                  sx={{
                    fontSize: "35px",
                    color: "#1976d2",
                    mb: 2,
                    display: "block",
                    margin: "0 auto",
                  }}
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  align="center"
                  sx={{
                    fontFamily: "'Alexandria', sans-serif",
                  }}
                >
                  {translations[dir].marketingContent}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{
                    fontFamily: "'Alexandria', sans-serif",
                  }}
                  paragraph
                >
                  {translations[dir].marketingContentDesc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* التكلفة */}
        <Box
          sx={{
            mt: 8,
            textAlign: "center",
            backgroundColor: "#fff",
            p: 4,
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontFamily: "'Alexandria', sans-serif",
              fontWeight: "600",
            }}
          >
            {translations[dir].cost}
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            gutterBottom
            sx={{
              fontFamily: "'Alexandria', sans-serif",
              fontWeight: "600",
            }}
          >
            {translations[dir].price}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              mt: 2,
              fontFamily: "'Alexandria', sans-serif",
            }}
            onClick={() => {
              // توجيه المستخدم إلى WhatsApp
              window.location.href = "https://wa.me/966508604391"; // استبدل الرقم برقمك
            }}
          >
            {translations[dir].orderNow}
          </Button>
        </Box>
        <OurWorkSlider images={realEstateImages} title={title[dir]} />
      </Container>
    </Box>
  );
};

export default RealEstatePhotography;
