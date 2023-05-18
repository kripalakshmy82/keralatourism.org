import React from "react";
import { Col } from "react-bootstrap";
import { string } from "prop-types";
import Image from "next/image";

import  LinkButton  from "@app/components/LinkButton";
const Promotion = ({ heading, description, promotionImage }) => {
  return (
    <Col lg={6}>
      <div className="img-block position-relative">
    <Image src={promotionImage} alt="" title="" width={408} height={618} className="w-100" />
     
        <div className="desc">
          <h3 className="text-white head-sub font-flair">
            { heading }
          </h3>
          <p className="text-white ibm-font-18">
            { description }
          </p>
          <LinkButton
            buttonColor="white"
            link="/"
            linkText="more"
          />
        </div>
      </div>
    </Col>
  );
};

Promotion.propTypes = {
  heading: string.isRequired,
  description: string.isRequired,
  promotionImage: string.isRequired
}

export default Promotion;

