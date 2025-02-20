export function HeaderRel({ language }) {
  return (
    <>
      <div className="header-rel">
        <div className="logo-rel">
          <img src={`${process.env.PUBLIC_URL}/images/logoBadr.png`} alt="" />
        </div>
        <div className="title-rel">
          <h1>
            {language === "arabic"
              ? "خدمات التسويق العقاري والوساطة العقارية"
              : "Real Estate Marketing and Brokerage Services"}
          </h1>
        </div>
        {/* <div className="logo-rel">
        <img src={`${process.env.PUBLIC_URL}/images/logo-rel.png`} alt="" />
      </div> */}
      </div>
    </>
  );
}
