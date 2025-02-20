import "./App.css";
import Pages from "./components/pages/Pages";
import { ToastContainer } from "react-toastify"; // استيراد ToastContainer
import "react-toastify/dist/ReactToastify.css"; // استيراد ملف الـ CSS الخاص بـ react-toastify

function App() {
  return (
    <>
      <Pages />
      <ToastContainer /> {/* إضافة ToastContainer في المكون الجذر */}
    </>
  );
}

export default App;
