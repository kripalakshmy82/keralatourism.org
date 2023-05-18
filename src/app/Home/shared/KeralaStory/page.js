import React from "react";
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
import StoryItem from './components/StoryItem';

import { keralaStoriesItems } from '../data';

import './_keralaStory.scss'

const KeralaStory = () => {
  return (
    <Section
      id="block-kerala-story"
      className="kerala-story section-block position-relative pt-3"
      title={`My Kerala story`}
      description={`Find amazing travel stories and videos shared by our informal ambassadors across the globe.`}
      isFluid={true}
      readMoreLink="#"
      renderedIn={`container-out`}
    >
      <OwlCarousel
        className="owl-theme carousel-mirror"
        items={1}
        margin={0}
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
        {keralaStoriesItems.map((keralaStory, key) => (
          <StoryItem {...keralaStory} key={key} />
        ))}
      </OwlCarousel>
      <LinkButton isAbsolute={true} link={`#`} linkText={`explore`} />
    </Section>
  );
};

export default KeralaStory;
