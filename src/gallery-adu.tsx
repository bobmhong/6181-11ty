import { Section } from "@kickstartds/ds-agency/section";
import { Faq } from "@kickstartds/ds-agency/faq";
import { TeaserCard } from "@kickstartds/ds-agency/teaser-card";
import { Text } from "@kickstartds/ds-agency/text";
import { Image } from "@kickstartds/ds-agency/image";
import { Logos } from "@kickstartds/ds-agency/logos";
import { Cta } from "@kickstartds/ds-agency/cta";
import { Testimonials } from "@kickstartds/ds-agency/testimonials";
import { PageWrapper } from "./_includes/PageWrapper";
import { Features } from "@kickstartds/ds-agency/components/features/index.js";
import { ImageText } from "@kickstartds/ds-agency/image-text";
import { Gallery } from "@kickstartds/ds-agency/gallery";
import { Stats } from "@kickstartds/ds-agency/stats";

export const data = {
  title:
    "6181 Zimmer - ADU Gallery",
  layout: "base.njk",
  eleventyNavigation: {
    key: "ADU Gallery",
    order: 3,
  },
};

export default (props) => (
  <PageWrapper floatingHeader>
    <Section
      spotlight
      style="symmetricGlow"
      id="startit"
      headline={{
        text: "ADU Gallery",
        sub: "Welcome family, guests, work remotely, or create in your flexible space",
        switchOrder: false,
        large: false,
      }}
      width="wide"
      content={{
        mode: "list",
        gutter: "large",
      }}
    >
      <Gallery
        layout="smallTiles"
        lightbox
        images={[
          {
            src: "/static/img/gallery/ADU1026.jpg",
          },
          {
            src: "/static/img/gallery/9.ad1-IMG_1728.jpg",
          },
          {
            src: "/static/img/gallery/11.1.IMG_1778.jpg",
          },
          {
            src: "/static/img/gallery/11.1.IMG_1766.jpg",
          },
          {
            src: "/static/img/gallery/11.1.IMG_1769.jpg",
          },
          {
            src: "/static/img/gallery/11.1.IMG_1772.jpg",
          },
          {
            src: "/static/img/gallery/11.1.IMG_1775.jpg",
          },          
          {
            src: "/static/img/gallery/11.1.IMG_1781.jpg",
          },
          {
            src: "/static/img/gallery/11.1.IMG_1789.jpg",
          },
          {
            src: "/static/img/gallery/11.2.IMG_1784.jpg",
          },
          {
            src: "/static/img/gallery/11.3.IMG_1751.jpg",
          },
          {
            src: "/static/img/gallery/11.3.IMG_1754.jpg",
          },
          {
            src: "/static/img/gallery/11.3.IMG_1760.jpg",
          },
          {
            src: "/static/img/gallery/11.ad11-IMG_0606.jpg",
          },
          {
            src: "/static/img/gallery/11.ad12-IMG_0607.jpg",
          },
          {
            src: "/static/img/gallery/11.ad13-IMG_0608.jpg",
          },
          {
            src: "/static/img/gallery/11.IMG_1807.jpg",
          },
          {
            src: "/static/img/gallery/11.IMG_1808.jpg",
          },
          {
            src: "/static/img/gallery/ADU-floorplan.jpg",
          },
        ]}
      />
    </Section>
  </PageWrapper>
);
