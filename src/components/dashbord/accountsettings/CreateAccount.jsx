import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import instance from "../../data/BaseUrl";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Register({ language }) {
  const isArabic = language === "arabic";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", confirmPassword);
    if (profileImage) {
      formData.append("profile_image", profileImage);
    }

    try {
      const response = await instance.post("/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(
        isArabic ? "تم إنشاء الحساب بنجاح" : "Account created successfully"
      );
      console.log("Account created:", response.data);
    } catch (error) {
      toast.error(
        isArabic
          ? "حدث خطأ أثناء إنشاء الحساب"
          : "An error occurred while creating the account"
      );
      console.error("Registration error:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {isArabic ? "تسجيل حساب جديد" : "Register a New Account"}
        </Typography>
        <form onSubmit={handleRegister}>
          <Avatar
            alt={name}
            src={profileImagePreview}
            sx={{ width: 56, height: 56, mb: 2 }}
          />
          <TextField
            label={isArabic ? "الاسم" : "Name"}
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label={isArabic ? "البريد الإلكتروني" : "Email"}
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label={isArabic ? "كلمة المرور" : "Password"}
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label={isArabic ? "تأكيد كلمة المرور" : "Confirm Password"}
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{ mt: 2 }}
          >
            {isArabic ? "تحميل صورة" : "Upload Image"}
            <input
              type="file"
              hidden
              onChange={(e) => {
                setProfileImage(e.target.files[0]);
                setProfileImagePreview(URL.createObjectURL(e.target.files[0]));
              }}
            />
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            {isArabic ? "تسجيل" : "Register"}
          </Button>
        </form>
        {/* {message && (
          <Typography variant="body2" color="error" sx={{ mt: 2 }}>
            {message}
          </Typography>
        )} */}
        <ToastContainer />
      </Box>
    </Container>
  );
}
