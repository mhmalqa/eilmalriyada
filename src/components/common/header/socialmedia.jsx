import { useSocialMedia } from "../SocialMediaContext";

export function SocialMedia() {
  const { data, loading, error } = useSocialMedia();

  if (loading) return null;
  if (error) return null;

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
