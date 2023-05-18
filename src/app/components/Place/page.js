import React from "react";
import { isMobile } from "react-device-detect";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

const Place = ({ title, description, mobileImgUrl, imgUrl }) => {
  return (
    <div className="item">
      <Col xs={12} className="post-slide item-widget">
        <Row>
          <Image
            className="d-block w-100"
            src={isMobile ? mobileImgUrl : imgUrl}
            alt=""
            title=""
            width={1920}
            height={933}
          />
          <Col lg={6} xs={12} className="h-100">
            <div className="desc-default">
              <h3 className="text-black head-sub font-flair">{title}</h3>
              <p className="text-dark ibm-font-18 font-light">{description}</p>
              <Link href="/" className="text-dark underline-0 read-more">
                more <i className="la la-long-arrow-right"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default Place;
