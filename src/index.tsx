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
import { BlogTeaser } from "@kickstartds/ds-agency/blog-teaser";

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
      <Text align="left" layout="multiColumn" text="###$939,000" />
      <ImageText
        image={{
          alt: "Front home view",
          src: "/static/img/gallery/0.1-front-IMG_1597.jpg",
        }}
        layout="beside-left"
        text="Unwind in luxury at this modern estate nestled on 10 private, wooded acres. 
        Premium finishes with natural stone columns, quartz & granite counters. 
        Skylights & clerestory windows wash the vaulted open floor plan in natural light with a large slider opening to the large private deck and pool area.
        With a large island and plenty of space for cooking and entertaining, you may become everyone's favorite party host. Off the kitchen, a quaint sunporch/breakfast area has glass on three sides with slider to the deck.
        Enjoy cozy evenings with the modern gas fireplace or catch a movie with enveloping in-ceiling surround sound. 
        The vaulted office/bedroom can be seen from the front view with the trapezoidal window.
        The master suite has dual vanities, walk in closets & custom tile shower.
        The finished lower level has a family area, office, bedroom, full bath, and ample storage."
      />
      <ImageText
        image={{
          alt: "ADU Front",
          src: "/static/img/gallery/ADU1026.jpg",
        }}
        layout="beside-right"
        text="A few steps from the main home you'll find a detached accessory dwelling unit crafted with the same attention to detail and style as the main home.
        Features include a vaulted great room, full kitchen, bar, dining area, office nook, bedroom, bath, laundry, garage, basement, & separate utilities. This charming, private living space is wonderful for an in-law suite, extended family, home office, studio & more.
        A newly built pole barn is ready for toys and outdoor equipment.
        "
      />
      <ImageText
        image={{
          alt: "Arial Main & ADU",
          src: "/static/img/gallery/0.2-zimmer-arial-s.jpg",
        }}
        layout="beside-left"
        text="Enjoy sunshine and entertaining on the large deck, then take a dip in the heated pool.
        Walks in the woods, country bike rides, farmers markets, roadside farm stands and more are just outside your door.
        Extensive dining, shopping and services await with easy access to Williamston, Okemos, East Lansing, & MSU. 
        "
      />
    </Section>

    <Section
      spotlight
      style="symmetricGlow"
      id="startit"
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
            alt: "Great Room",
            src: "/static/img/gallery/2.IMG_1718.jpg",
          },
          {
            alt: "Great Room toward kitchen",
            src: "/static/img/gallery/2.IMG_1706.jpg",
          },
          {
            alt: "Kitchen",
            src: "/static/img/gallery/3.IMG_1730.jpg",
          },
          {
            alt: "Dining",
            src: "/static/img/gallery/3.IMG_1715.jpg",
          },
          {
            alt: "Sunroom",
            src: "/static/img/gallery/4.IMG_1742.jpg",
          },
          {
            alt: "Office/Bedroom",
            src: "/static/img/gallery/5.IMG_1616.jpg",
          },
          {
            alt: "Master",
            src: "/static/img/gallery/7.1.IMG_1646.jpg",
          },
          {
            alt: "Deck, Pool",
            src: "/static/img/gallery/8.1.p4-IMG_1334.jpg",
          },
          {
            alt: "ADU great room",
            src: "/static/img/gallery/11.1.IMG_1766.jpg",
          },
          {
            alt: "ADU dinint",
            src: "/static/img/gallery/11.1.IMG_1778.jpg",
          },
        ]}
      />
    </Section>

    <Section width="full" spaceAfter="none" spaceBefore="none">
      <Image src="/static/img/bg/bg_divder-blue.svg" />
    </Section>

    <Section
      spaceBefore="small"
      width="wide"
      headline={{
        text: "More Pics",
        align: "center",
      }}
    >
      <BlogTeaser
        headline="Main Home"
        image="/static/img/gallery/0.1-front-IMG_1597.jpg"
        link={{
          label: "Main Home Gallery",
          url: "/gallery-main",
        }}
        teaserText=""
      />
      <BlogTeaser
        headline="ADU"
        image="/static/img/gallery/ADU1026.jpg"
        link={{
          label: "Guest House/Office",
          url: "/gallery-adu",
        }}
        teaserText=""
      />
      <BlogTeaser
        headline="Exterior"
        image="/static/img/gallery/0.2-zimmer-arial-s.jpg"
        link={{
          label: "Exterior",
          url: "/gallery-ext",
        }}
        teaserText=""
      />
    </Section>

    <Section
      headline={{
        text: "At a Glance",
        textAlign: "center",
      }}
      style="symmetricGlow"
      id="startit"
      width="wide"
      content={{
        mode: "list",
        gutter: "large",
      }}
    >
      <Stats
        stat={[
          {
            number: 10,
            title: "Lot Size Acres",
          },
          {
            number: 2015,
            title: "Main Home Built",
          },
          {
            number: 2019,
            title: "ADU Built",
          },
          {
            number: 2023,
            title: "Pole Barn Built",
          },
        ]}
      />
      <Stats
        stat={[
          {
            number: 4276,
            title: "Total sqft on Property",
          },
          {
            number: 3239,
            title: "Main Home sqft",
          },
          {
            number: 1037,
            title: "ADU sqft",
          },
        ]}
      />
      <Stats
        stat={[
          {
            number: 3,
            title: "Main BR",
          },
          {
            number: 1,
            title: "ADU BR",
          },
        ]}
      />
    </Section>

    <Section
      spotlight
      style="symmetricGlow"
      id="faq"
      width="wide"
      content={{
        mode: "list",
        gutter: "large",
      }}
    >
      <Faq
        questions={[
          {
            answer: "",
            question: "Can you tell me about the home design and construction?",
          },
          {
            answer: "",
            question: "How's the internet service?",
          },
          {
            answer: "",
            question:
              "What type of heating, cooling, plumbing, and utilities are used?",
          },
          {
            answer: "",
            question: "What kind of wildlife live nearby?",
          },
        ]}
      />
    </Section>

    <Section backgroundColor="accent">
      <Cta
        textAlign="center"
        headline="Ready to take the next step?"
        text="Reach out with questions or to book a private showing."
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
