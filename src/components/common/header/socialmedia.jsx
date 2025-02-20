import { useState, useEffect } from "react";
import instance from "../../data/BaseUrl";

export function SocialMedia() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const response = await instance.get("/urls");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return;
  }

  if (error) {
    return;
  }

  const socialMediaIcons = [
    { name: "whatsapp", index: 0, iconClass: "fa-whatsapp" },
    { name: "fa-linkedin-in", index: 1, iconClass: "fa-linkedin-in" },
    { name: "twitter", index: 2, iconClass: "fa-x-twitter" },
    { name: "tiktok", index: 3, iconClass: "fa-tiktok" },
  ];

  return (
    <div className="icons">
      {socialMediaIcons.map((media) => {
        const accountUrl = data[media.index]?.account_url;
        if (!accountUrl) return null;
        return (
          <a key={media.name} href={accountUrl}>
            <i className={`fa-brands ${media.iconClass}`}></i>
          </a>
        );
      })}
    </div>
  );
}
