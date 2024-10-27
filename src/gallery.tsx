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
    "6181 Zimmer - Architect designed, 10 acre modern country estate with guest house/accessory dwelling",
  layout: "base.njk",
  eleventyNavigation: {
    key: "Home",
    order: 1,
  },
};

export default (props) => (
  <PageWrapper floatingHeader>
    <Section
      spotlight
      style="symmetricGlow"
      id="startit"
      headline={{
        text: "6181 Zimmer Rd",
        sub: "Inspired country living for modern families",
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
            alt: "An artificial view inside our cool Agency, here one of our smartest developer",
            src: "/static/img/aboutus/01.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/02.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/03.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/04.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/05.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/06.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/07.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/08.jpg",
          },
          {
            alt: "An artificial view inside our cool Agency",
            src: "/static/img/aboutus/09.jpg",
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
