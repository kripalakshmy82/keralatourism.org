import React from "react";
import { string } from "prop-types";
import Link from "next/link";
import LinkButton  from "@app/components/LinkButton";
import AppCard from "@app/components/AppCard/Card";
import Image from "next/image";


const FavIcon = () => {
  return (
    <span className="icon-fav -trans position-absolute">
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
        className="d-inline-block text-yellow"
        href="#"
      >
        <img 
          src="/discoverKerala/favourite_yellow.svg" 
          alt="" 
          title="" 
        />
      </a>
    </span>
  );
};

const CardBackground = ({ backgroundImg }) => {
  return (
    <span className="icon-map -trans position-absolute">
      <Image src={backgroundImg} alt="" title="" width={672} height={1050} />
    </span>
  )
};

const DestinationCard = ({
  heading,
  description,
  district,
  imgUrl,
  imgMap,
}) => {
  return (
    <AppCard imgUrl={imgUrl}>
      <figcaption className="fig-caption">
        <h2 className="font-flair text-white">{heading}</h2>
        <p className="text-white ibm-font-18">{description}</p>
        <LinkButton buttonColor="white" link="/" linkText="more" />
      </figcaption>
      <FavIcon/>
      <CardBackground backgroundImg={imgMap}/>
      <h5 className="mb-0 btm-txt w-100 -trans position-absolute">
        <Link
          href="/"
          className="d-block link-btn underline-0 ibm-font-18 text-white"
        >
          {district}
        </Link>
      </h5>
    </AppCard>
  );
};

DestinationCard.propTypes = {
  heading: string.isRequired,
  description: string.isRequired,
  district: string.isRequired,
  imgUrl: string.isRequired,
};

export default DestinationCard;
