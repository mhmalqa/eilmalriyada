import React, { useEffect, useState } from "react";
import img from "../images/services.jpeg";
import Back from "../common/Back";
import CardServices from "./CardServices";
import { services } from "../data/Data";
import Heading from "../common/Heading";
import Post from "../home/post/Post";
import "./CardServices.module.css";
import instance from "../data/BaseUrl";

const Services = ({ language, inHome }) => {
  const title =
    language === "arabic"
      ? "الخدمات الادارية والمالية وحلول التمويل"
      : "Administrative and Financial Services and Financing Solutions";

  const subtitle = language === "arabic" ? "الخدمات" : "Services";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      const response = await instance.get('/urls');
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

  return (
    <>
      {inHome === "true" ? (
        ""
      ) : (
        <Back title={title} name={subtitle} cover={img} />
      )}
      <section className="services background">
        <div className="container">
          <Heading title={title} />

          <div className="infor">
            <p>
              {language === "arabic" ? (
                <>
                  في علم الريادة للاستشارات الإدارية والمالية، نقدم مجموعة
                  متكاملة من الخدمات الاستشارية لدعم عملائنا في السوق السعودي
                  المتطور. من خلال فهم عميق للديناميكيات الاقتصادية والتحديات
                  التجارية، نهدف إلى تمكينكم من تحقيق النجاح والاستدامة.
                </>
              ) : (
                <>
                  In Entrepreneurship Science for Administrative and Financial
                  Consultations, we offer a comprehensive range of consulting
                  services to support our clients in the advanced Saudi market.
                  Through a deep understanding of economic dynamics and business
                  challenges, we aim to empower you to achieve success and
                  sustainability.
                </>
              )}
            </p>
            <div>
              <span>
                <p>
                  {language === "arabic" ? (
                    <>
                      <span>1. دراسة الجدوى الاقتصادية:</span>
                      <br />- نقدم خدمات متخصصة لتوجيه قراراتكم الاستثمارية. -
                      نحلل البيانات المالية والاقتصادية لضمان جدوى المشروع. -
                      نزودكم بتحليلات شاملة لفهم كل الأبعاد المالية والسوقية.
                      <br />
                      <span> 2. الاستشارات الاقتصادية والمالية والإدارية:</span>
                      <br />- نوفر الدعم اللازم لتحسين كفاءة عملياتكم وأدائكم. -
                      نساعد في تحقيق قرارات استراتيجية ونمو مستدام.
                      <br />
                      <span> 3. استشارات حلول مالية متطورة:</span>
                      <br />- نقدم استشارات حلول لتمويل المشاريع بدعم حكومي او
                      بالقطاع الخاص. - نساعد في تمويل العقارات وتمويل الشركات
                      ونقاط البيع لتحسين السيولة.
                      <br />
                      <span> 4. خدمات التسويق والتسويق الرقمي:</span>
                      <br /> - نصمم استراتيجيات تسويقية متكاملة لتعزيز هويتكم
                      التجارية. - ندير حملات إعلانية ونحسن محركات البحث لتوسيع
                      وجودكم الرقمي.
                      <br />
                      <span> 5. خدمة إعادة الهيكلة الإدارية للشركات:</span>
                      <br />- نقدم حلولاً مخصصة لتعزيز فعالية الشركات وتحقيق
                      الأهداف. - نقوم بتقييم وتصميم هياكل تنظيمية محسّنة لمواجهة
                      تحديات السوق.
                    </>
                  ) : (
                    <>
                      <span>1. Economic Feasibility Study:</span>
                      <br />- We provide specialized services to guide your
                      investment decisions. - We analyze financial and economic
                      data to ensure project feasibility. - We provide
                      comprehensive analytics to understand all financial and
                      market dimensions.
                      <span>
                        <br /> 2. Economic, Financial, and Administrative
                        Consultations:
                      </span>
                      <br />- We provide the necessary support to improve your
                      operations efficiency and performance. - We assist in
                      strategic decision-making and sustainable growth.
                      <span>
                        <br /> 3. Advanced Financial Solutions Consultations:
                      </span>
                      <br />- We offer solutions consultations for project
                      financing with government support or private sector. - We
                      assist in real estate financing, corporate financing, and
                      point of sale financing to enhance liquidity.
                      <span>
                        <br /> 4. Marketing and Digital Marketing Services:
                      </span>
                      <br /> - We design integrated marketing strategies to
                      enhance your brand identity. - We manage advertising
                      campaigns and improve search engines to expand your
                      digital presence.
                      <span>
                        <br /> 5. Corporate Restructuring Services:
                      </span>
                      <br />- We provide customized solutions to enhance
                      corporate effectiveness and achieve goals. - We evaluate
                      and design improved organizational structures to address
                      market challenges.
                    </>
                  )}
                </p>
              </span>
            </div>
          </div>
        </div>
        <Post language={language} isServices={true} />
        <Heading subtitle={subtitle} />
        <div className="container grid3">
          {services.map((item, index) => (
            <>
              <CardServices
                language={language}
                name={language === "arabic" ? item.name : item.name_en}
                frontImage={item.cover}
                desc_f={language === "arabic" ? item.desc_f : item.desc_f_en}
                desc_b={language === "arabic" ? item.desc_b : item.desc_b_en}
                url={data[index + 4].account_url}
              />
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
