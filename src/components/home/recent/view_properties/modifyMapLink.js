export function modifyMapLink(originalLink, language = "ar") {
  // القالب الأساسي للرابط مع الإعدادات الثابتة
  const template =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1494671532537!2d{longitude}!3d{latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0c5b0a1b2c3d%3A0xabcd1234efgh5678!2zMjTCsDUxJzMyLjMiTiA0NsKwNDQnMjEuMiJF!5e0!3m2!1s{language}!2s!4v1741003028595!5m2!1s{language}!2s";

  // استخراج الإحداثيات من الرابط الأصلي باستخدام التعبيرات النمطية (Regex)
  const latitudeMatch = originalLink.match(/!3d(-?\d+\.\d+)/);
  const longitudeMatch = originalLink.match(/!2d(-?\d+\.\d+)/);

  if (!latitudeMatch || !longitudeMatch) {
    console.error("الرابط غير صالح أو لا يحتوي على إحداثيات.");
    return null;
  }

  const latitude = latitudeMatch[1]; // خط العرض
  const longitude = longitudeMatch[1]; // خط الطول

  // استبدال الإحداثيات واللغة في القالب
  const modifiedLink = template
    .replace("{latitude}", latitude)
    .replace("{longitude}", longitude)
    .replace(/{language}/g, language); // استبدال اللغة في جميع المواضع

  return modifiedLink;
}
