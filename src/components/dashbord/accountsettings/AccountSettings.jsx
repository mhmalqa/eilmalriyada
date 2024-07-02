import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import instance, { baseUrlWithoutApi } from "../../data/BaseUrl";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function AccountSettings({ language }) {
  const isArabic = language === "arabic";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/me");
        setEmail(response.data.email);
        setName(response.data.name);
        setProfileImagePreview(
          response.data.profile_image
            ? `${baseUrlWithoutApi}${response.data.profile_image}`
            : null
        );
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

 const handleUpdate = async (e) => {
   e.preventDefault();

   try {
     const formData = new FormData();
     formData.append("email", email);
     formData.append("name", name);
     formData.append("new_password", newPassword);
     formData.append("current_password", currentPassword);
     if (profileImage) {
       formData.append("profile_image", profileImage);
     }

     const response = await instance.post("update-account", formData, {
       headers: {
         "Content-Type": "multipart/form-data",
       },
     });

     toast.success(
       isArabic ? "تم تحديث الحساب بنجاح" : "Account updated successfully"
     );
     console.log("Account updated:", response.data);
   } catch (error) {
     toast.error(
       isArabic
         ? "حدث خطأ أثناء تحديث الحساب"
         : "An error occurred while updating the account"
     );
     console.error("Update error:", error);
   }
 };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {isArabic ? "تغيير إعدادات الحساب" : "Update Account Settings"}
        </Typography>
        <form onSubmit={handleUpdate}>
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
            label={isArabic ? "كلمة المرور الجديدة" : "New Password"}
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <TextField
            label={isArabic ? "كلمة المرور الحالية" : "Current Password"}
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
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
            {isArabic ? "تحديث الحساب" : "Update Account"}
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
