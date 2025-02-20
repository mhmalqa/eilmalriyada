import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles"; // تأكد من استيراد styled بشكل صحيح

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[3],
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column", // عند الشاشات الصغيرة يصبح التوجه عمودي
  },
}));

const ResponsiveVideo = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        minHeight: "100vh",
        padding: 3,
        backgroundColor: "#f7f7f7",
      }}
    >
      <StyledCard>
        <Box sx={{ marginLeft: 4, textAlign: "right", width: "400px" }}>
          <Typography
            variant={isMobile ? "h5" : "h3"}
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontFamily: '"Alexandria", sans-serif',
              fontSize: "40px",
              lineHeight: "70px",
            }}
          >
            التسويق والوساطة العقارية
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            gutterBottom
            sx={{
              maxWidth: 600,
              fontFamily: '"Alexandria", sans-serif',
            }}
          >
            نقدم لكم خدمات احترافية مصممة خصيصًا لتلبية احتياجاتكم، مع التركيز
            على عرض عقاركم بشكل مميز وجذاب. لا تترددوا في التواصل معنا الآن!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: 3, textTransform: "none" }}
            href="#"
          >
            تواصل معنا
          </Button>
        </Box>
        <CardMedia
          component="iframe"
          src="https://www.youtube.com/embed/N7DTlGXwhEw?si=7ulXgQm44jqpxobj"
          title="YouTube Video"
          sx={{
            width: isMobile ? "100%" : "750px",
            height: isMobile ? "250px" : "400px",
            border: "none",
            marginTop: isMobile ? "10px" : "",
          }}
        />
      </StyledCard>
    </Box>
  );
};

export default ResponsiveVideo;
