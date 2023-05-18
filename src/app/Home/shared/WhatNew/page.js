'use client'
import Image from "next/image";

import React, { useState } from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import  Section  from "@app/components/Section";

import WhatNewItem from './components/WhatNewItem';
import { whatsNewItems } from '../data';

import './_whatNew.scss';

const WhatNew = () => {
  const [whatsNew, setWhatNew] = useState(whatsNewItems);
  return (
    <Section
      id="block-essential"
      className="what-new section-block"
      title="What's new"
      description={`Here's a quick glance on what's trending in God's Own Country now.`}
      isFluid={false}
      renderedIn={`container`}
    >
      {whatsNew.length > 0 && (
        <OwlCarousel
          className="owl-theme"
          items={1}
          margin={0}
          loop={false}
          nav={true}
          dots={true}
          autoplay={true}
          smartSpeed={1200}
          autoplayTimeout={10000}
          navText={[
            "<Image src='/icons/arrow-prev.svg' width='80' height='80' />",
          "<Image src='/icons/arrow-next.svg'  width='80' height='80'/>",
          ]}
        >
          {whatsNew.map((whatNew, key) => (
            <WhatNewItem {...whatNew} key={key} />
          ))}
        </OwlCarousel>
      )}
    </Section>
  );
};

export default WhatNew;
