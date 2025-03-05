import React, { useState } from "react";
import styles from "./CardServices.module.css";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CardServices = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (e) => {
    // Check if the click is on a button
    if (e.target.tagName.toLowerCase() === "button") {
      return; // Don't flip if the click is on a button
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <Col
      xl={3}
      className={`${styles.card} ${isFlipped ? `${styles.flipped}` : ""}`}
      onClick={handleFlip}
    >
      <div
        className={`${styles.side} ${styles.front}`}
        // style={{ backgroundImage: `url(${props.frontImage})` }}
      >
        <h3>{props.id}</h3>
        <h2>{props.name}</h2>
        <p className="desc">{props.desc_f}</p>
        <div className={styles.buttonContainer}>
          {/* <a href={props.url}> */}
          <Link to="/contact">
            <button className="btn-serv">
              {props.language === "arabic" ? "اطلب الان" : "Order Now"}
            </button>
          </Link>
        </div>
      </div>
      <div className={`${styles.side} ${styles.back}`}>
        <div className="info">
          <div className="mt-4">
            <p>{props.desc_b}</p>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CardServices;
