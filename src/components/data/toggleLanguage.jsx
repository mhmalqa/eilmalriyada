// في ملف toggleLanguage.js

export const toggleLanguage = (currentLanguage, setLanguage) => {
  // تغيير اللغة بناءً على القيمة الحالية
  const newLanguage = currentLanguage;
  // تحديث حالة اللغة باستخدام دالة setLanguage
  setLanguage(newLanguage);
};
