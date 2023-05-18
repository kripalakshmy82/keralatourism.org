import React from "react";
import { chunk, forEach } from "lodash";
import   SocialGallery  from "@app/components/SocialGallery/page";

import  Section  from "@app/components/Section";
import LinkButton  from "@app/components/LinkButton";

import { socialMediaImages } from "../data";

const SocialGalleryCarousal = () => {
  let imageChunks = chunk(socialMediaImages, 5);
  let imageChunksForGrid = [];

  forEach(imageChunks, (images, chunkIndex) => {
    let chunks = chunk(images, 2);
    imageChunksForGrid[chunkIndex] = chunks;
  });

  return (
    <Section
      id="block-social-post"
      className="section-block"
      title={`#KeralaTourism`}
      description={`See what's trending about God’s Own Country on social media`}
      isContainerRelative={true}
      readMoreLink={`#`}
      renderedIn={`container`}
    >
      {imageChunksForGrid.map((socialMediaImages, key) => (
        <SocialGallery socialMediaImages={socialMediaImages} key={key} />
      ))}
      <LinkButton
        isAbsolute={true}
        isCustom={true}
        link={`#`}
        linkText={`explore`}
      />
    </Section>
  );
};

export default SocialGalleryCarousal;
