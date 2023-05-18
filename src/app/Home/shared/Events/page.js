import React from 'react';
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import Image from "next/image";
import LinkButton  from "@app/components/LinkButton";
import  Section  from "@app/components/Section";
import  EventCard  from "@app/components/AppCard/Event/page";


import { events } from '../data';

const Events = () => {
  return (
    <Section
      id="block-events"
      className="section-block"
      title="Events"
      description={`Browse through the list of events to know more about what's happening in kerala now`}
      readMoreLink="#"
      isContainerRelative={true}
      renderedIn={`container`}
    >
      <OwlCarousel
        className="owl-theme carousel-mirror"
        items={3}
        margin={30}
        loop={false}
        nav={true}
        dots={true}
        autoplay={true}
        smartSpeed={1200}
        autoplayTimeout={10000}
        navText={[
          "<Image src='icons/arrow-sm-prev-hover.svg' width='40' height='40' />",
          "<Image src='icons/arrow-sm-next-hover.svg'  width='40' height='40'/>",
        ]}
      >
        {events.map((event, key) => (
          <><EventCard {...event} key={key} /></>
        ))}
      </OwlCarousel>
      <LinkButton
        isAbsolute={true}
        isCustom={true}
        link={`#`}
        linkText={`explore`}
      />
    </Section>
  );
};

export default Events;
