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
    "6181 Zimmer - Exterior Gallery",
  layout: "base.njk",
  eleventyNavigation: {
    key: "Exterior Gallery",
    order: 4,
  },
};

export default (props) => (
  <PageWrapper floatingHeader>
    <Section
      spotlight
      style="symmetricGlow"
      id="startit"
      headline={{
        text: "Exterior Gallery",
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
            src: "/static/img/gallery/0.1-front-IMG_1597.jpg",
          },
          {
            src: "/static/img/gallery/1.01-6181 Zimmer Dusk.jpg",
          },
          {
            src: "/static/img/gallery/8.9.IMG_1790.jpg",
          },
          {
            src: "/static/img/gallery/8.9.IMG_1791.jpg",
          },
          {
            src: "/static/img/gallery/8.9.IMG_1792.jpg",
          },
          {
            src: "/static/img/gallery/8.9.IMG_1793.jpg",
          },
          {
            src: "/static/img/gallery/8.9.IMG_1794.jpg",
          },
          {
            src: "/static/img/gallery/8.9.IMG_1809.jpg",
          },
          {
            src: "/static/img/gallery/8.10.IMG_1786.jpg",
          },
          {
            src: "/static/img/gallery/9.ad1-IMG_1728.jpg",
          },
          {
            src: "/static/img/gallery/9.DJI_0012.jpg",
          },
          {
            src: "/static/img/gallery/9.DJI_0013.jpg",
          },
          {
            src: "/static/img/gallery/9.DJI_0014.jpg",
          },
          {
            src: "/static/img/gallery/9.DJI_0015.jpg",
          },
          {
            src: "/static/img/gallery/9.DJI_0016.jpg",
          },
          {
            src: "/static/img/gallery/9.DJI_0018.jpg",
          },
          {
            src: "/static/img/gallery/9.DJI_0019.jpg",
          },
          {
            src: "/static/img/gallery/9.DJI_0021.jpg",
          },
          {
            src: "/static/img/gallery/9.DJI_0022.jpg",
          },
          {
            src: "/static/img/gallery/9.DJI_0023.jpg",
          },
          {
            src: "/static/img/gallery/9.DJI_0024.jpg",
          },
          {
            src: "/static/img/gallery/9.DJI_0026.jpg",
          },
          {
            src: "/static/img/gallery/9.DJI_0028.jpg",
          },
        ]}
      />
    </Section>

    <Section backgroundColor="accent">
      <Cta
        textAlign="center"
        headline="Ready to take the next step?"
        text="Reach out to book a private showing."
        highlightText
        buttons={[
          {
            label: "Contact us",
            target: "mailto:mhong222@gmail.com",
            icon: "person",
          },
        ]}
      />
    </Section>
  </PageWrapper>
);
