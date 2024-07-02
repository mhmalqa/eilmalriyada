import axios from "axios";
import CryptoJS from "crypto-js";

const secretKey = "560";
function decrypt(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
const decryptToken = localStorage.getItem("auth_token");
let token = "";
if (decryptToken) {
  const encryptedToken = decrypt(decryptToken);
  token = encryptedToken;
}

const instance = axios.create({
  baseURL: "https://api.eilmalriyada.com/api",
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
});

export const baseUrlWithoutApi = "https://api.eilmalriyada.com/";

export default instance;
