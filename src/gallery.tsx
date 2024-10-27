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
            src: "/static/img/gallery/0.1-front-IMG_1597.jpg",
          },
          {
            src: "/static/img/gallery/1.01-6181 Zimmer Dusk.jpg",
          },
          {
            src: "/static/img/gallery/0.2-zimmer-arial-s.jpg",
          },
          {
            src: "/static/img/gallery/2.1.IMG_1700.jpg",
          },
          {
            src: "/static/img/gallery/2.1.IMG_1712.jpg",
          },
          {
            src: "/static/img/gallery/2.IMG_1697.jpg",
          },
          {
            src: "/static/img/gallery/2.IMG_1706.jpg",
          },
          {
            src: "/static/img/gallery/2.IMG_1718.jpg",
          },
          {
            src: "/static/img/gallery/2.IMG_1721.jpg",
          },
          {
            src: "/static/img/gallery/2.IMG_1748.jpg",
          },
          {
            src: "/static/img/gallery/3.IMG_1715.jpg",
          },
          {
            src: "/static/img/gallery/3.IMG_1724.jpg",
          },
          {
            src: "/static/img/gallery/3.IMG_1727.jpg",
          },
          {
            src: "/static/img/gallery/3.IMG_1730.jpg",
          },
          {
            src: "/static/img/gallery/3.IMG_1733.jpg",
          },
          {
            src: "/static/img/gallery/3.IMG_1736.jpg",
          },
          {
            src: "/static/img/gallery/3.IMG_1739.jpg",
          },
          {
            src: "/static/img/gallery/4.IMG_1742.jpg",
          },
          {
            src: "/static/img/gallery/4.IMG_1745.jpg",
          },
          {
            src: "/static/img/gallery/5.IMG_1616.jpg",
          },
          {
            src: "/static/img/gallery/5.IMG_1622.jpg",
          },
          {
            src: "/static/img/gallery/7.1.IMG_1643.jpg",
          },
          {
            src: "/static/img/gallery/7.1.IMG_1646.jpg",
          },
          {
            src: "/static/img/gallery/7.2.IMG_1625.jpg",
          },
          {
            src: "/static/img/gallery/7.2.IMG_1637.jpg",
          },
          {
            src: "/static/img/gallery/7.2.IMG_1640.jpg",
          },
          {
            src: "/static/img/gallery/7.3.IMG_1628.jpg",
          },
          {
            src: "/static/img/gallery/7.3.IMG_1634.jpg",
          },
          {
            src: "/static/img/gallery/7.4.IMG_1649.jpg",
          },
          {
            src: "/static/img/gallery/7.4.IMG_1661.jpg",
          },
          {
            src: "/static/img/gallery/7.5.IMG_1655.jpg",
          },
          {
            src: "/static/img/gallery/8.0.IMG_1664.jpg",
          },
          {
            src: "/static/img/gallery/8.0.IMG_1670.jpg",
          },
          {
            src: "/static/img/gallery/8.0.IMG_1673.jpg",
          },
          {
            src: "/static/img/gallery/8.0.IMG_1676.jpg",
          },
          {
            src: "/static/img/gallery/8.0.IMG_1679.jpg",
          },
          {
            src: "/static/img/gallery/8.0.IMG_1682.jpg",
          },
          {
            src: "/static/img/gallery/8.0.IMG_1685.jpg",
          },
          {
            src: "/static/img/gallery/8.0.IMG_1688.jpg",
          },
          {
            src: "/static/img/gallery/8.0.IMG_1691.jpg",
          },
          {
            src: "/static/img/gallery/8.1.IMG_1803.jpg",
          },
          {
            src: "/static/img/gallery/8.1.IMG_1804.jpg",
          },
          {
            src: "/static/img/gallery/8.1.p1-IMG_1314.jpg",
          },
          {
            src: "/static/img/gallery/8.1.p4-IMG_1334.jpg",
          },
          {
            src: "/static/img/gallery/8.1.p4-IMG_1334.jpg",
          },
          {
            src: "/static/img/gallery/8.7.IMG_1805.jpg",
          },
          {
            src: "/static/img/gallery/8.9.IMG_1785.jpg",
          },
          {
            src: "/static/img/gallery/8.9.IMG_1788.jpg",
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
          {
            src: "/static/img/gallery/10.1-MAIN-1ST.jpg",
          },
          {
            src: "/static/img/gallery/10.2-MAIN-LOWERpdf.jpg",
          },
          {
            src: "/static/img/gallery/10.3..ADU.jpg",
          },
          {
            src: "/static/img/gallery/ADU1026.jpg",
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
            src: "/static/img/gallery/11.1.IMG_1778.jpg",
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
