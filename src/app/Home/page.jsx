import { 
  HomeStorySlider,
 WhatNew,
  Story,
  KeralaStory,
  Events,
  Memories,
  Destination,
  SocialGallery,
 PromotionVideo,
//  Discover
 } from "./shared/page"

import  Essentials from "@app/components/Essentials/page";
import LinkButton  from "@app/components/LinkButton";
import  Section  from "@app/components/Section";
const page = () => {
  return (
    <div>
      <HomeStorySlider />
      <WhatNew />
      <Essentials />
      <Story />
      <Memories />
      {/* <Discover/> */}
       <KeralaStory />
      <Events/> 
     <Destination/>
      <SocialGallery/>
      <Section
        id="block-video"
        className="section-block"
        isContainerRelative={true}
        renderedIn={`container`}
      >
        <PromotionVideo />
        <LinkButton
          isAbsolute={true}
          isCustom={true}
          link={`#`}
          linkText={`explore`}
        />
      </Section>
    </div>
  )
}

export default page


