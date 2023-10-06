import { Section } from "@kickstartds/ds-agency/section";
import { Button } from "@kickstartds/ds-agency/button";
import { FAQ } from "@kickstartds/ds-agency/faq";
import { TeaserCard } from "@kickstartds/ds-agency/teaser-card";
import { Text } from "@kickstartds/ds-agency/text";
import { Picture } from "@kickstartds/ds-agency/picture";
import { Cta } from "@kickstartds/ds-agency/cta";
import { Testimonials } from "@kickstartds/ds-agency/testimonials";
import { PageWrapper } from "./_includes/PageWrapper";

export const data = {
  title:
    "We are Systemics. we build headless design system driven solutions! And, we're great!",
  layout: "base.njk",
  eleventyNavigation: {
    key: "Home",
    order: 1,
  },
};

export default (props) => (
  <PageWrapper>
    <Section width="full">
      
      
      
      <Cta
        align="left"
        headline="We simplify the process of building and scaling your **Design System**"
        text={`
Elevate your digital presence with us. We create impactful digital experiences that deliver tangible results. With over 15+ years of expertise in **design systems**, **headless** CMSs, and **frontend development**, let's shape your digital future together.`}
        primaryCta={{
          toggle: true,
          label: "Contact us",
          target: "https://app.lemcal.com/@daniel-ley",
          icon: "person",
        }}
        secondaryCta={{
          toggle: true,
          label: "Book a meeting",
          target: "https://app.lemcal.com/@daniel-ley",
          icon: "date",
        }}
      />
    </Section>

    <Section
      headline="Design System Services"
      sub="Crafting Consistency, Fostering Growth"
      switchHeadlineOrder
      width="default"
      align="left"
      mode="list"
    >
      <Text
        text={`
Here at Systemics, we bring a range of design system services that can make a difference:

### 1. Design System Consulting
Let's work side by side to shape a design system strategy that aligns perfectly with your goals. It's not just about tools; it's about guiding principles, stakeholder management und making the right decisions at the right time.

### 2. Design System Creation & Development
We'll bring your design system from concept to production, giving you consistent and engaging user experiences across different platforms. We will work together with your digital teams to transfer all complex Figma ideas into code using kickstartDS.

### 3. Headless CMS & Websites
We leverage the power of headless CMSs to provide scalable, flexible, and versatile websites that drive your online presence.

### 4. Design System Training
We empower your digital teams with the knowledge and skills to manage and evolve your design system effectively.

Ready to make your digital journey exceptional?`}
      />
      <Picture
        media={[
          {
            image: {
              src: "/static/img/team.png",
              alt: "Just a decorative illustration"
            },
          },
        ]}
      />
      <div>
        <Button
          variant="primary"
          label="Reach out today!"
          icon="chevron-right"
          target="https://app.lemcal.com/@daniel-ley"
        />
      </div>
    </Section>
    <Section
      width="default"
      style="accent"
      align="left"
      mode="list"
      headline="Our **Approach** to Design Systems"
      sub="Own a design system without investing years of development. Our approach to design systems"
    >
      <Text
        text={`
We value efficiency without compromising quality. Our secret weapon? **kickstartDS**, a revolutionary code-first and open source framework for creating design systems. This tool accelerates our development, saving you valuable time and helping us deliver top-notch results faster. With kickstartDS, turning your design system dreams into reality is quicker than ever. `}
        />        
      <Picture
        media={[
          {
            image: {
              src: "/static/img/agency.png",
              alt: "Just a decorative illustration of nothing special and very generic to let this demo website shine",
            },
          },
        ]}
      />
    </Section>

    <Section
      width="wide"
      headline="Happy Customers Showcases"
      sub="We can create something shining for you too!"
      align="center"
    >
      <TeaserCard
        target="/showcase-techfusion"
        headline="Transformation Love Story"
        text="See how we saved TechFusions a year's worth of development time"
        image="/static/img/showcases/comp_tfe01.jpg"
      />
      <TeaserCard
        target="/showcase-launchpad"
        headline="Speed and Scale"
        text="Thanks to rapid landing page creation for LaunchPad Audio Innovations"
        image="/static/img/showcases/comp_audio01.jpg"
      />
      <TeaserCard
        target="/showcase-eco"
        headline="Saving Time and Money"
        text="Navigating the Headless Frontier for EcoTech's 'Brand Consistency"
        image="/static/img/showcases/comp_eco01.jpg"
      />
    </Section>

    <Section
      width="wide"
      mode="list"
      headline="No Agency site without some shiny happy Customer"
      sub="AI-generated smiles, as you see them evrywhere nowadays"
      align="center"
    >
      <Testimonials
        testimonials={[
          {
            image: {
              src: "/static/img/people/author-emily.png",
              alt: "Fake Testimonial Portrait",
            },
            name: "- Emily Johnson",
            quote:
              "Systemics's Design System transformed our development process. The consistency it introduced across our platforms not only saved us time but also boosted our brand's credibility. It's a partnership that continues to pay dividends.",
            title: "Director of Digital Strategy at EcoTech Solutions",
          },
          {
            image: {
              src: "/static/img/people/author-john.png",
              alt: "Fake Testimonial Portrait",
            },
            name: "- John Smith",
            quote:
              "Working with Systemics technology has been a game-changer for our brand. Their design system expertise brought harmony to our user experiences, making our digital platforms not just functional, but truly captivating.",
            title: "Chief Marketing Officer at TechFusion Enterprises",
          },
           {
            image: {
              src: "/static/img/people/author-alex.png",
              alt: "Fake Testimonial Portrait",
            },
            name: "- Alex Chen",
            quote:
              "As a startup, we needed to hit the ground running. Systemics's approach streamlined our dev and design process, allowing us to scale faster and focus on what truly matters - building a product that stands out in the market.",
            title: "CEO of LaunchPad Innovations",
          }
        ]}
      />
    </Section>

    <Section inverted>
      <Cta
        align="left"
        headline="Get in touch and chat with us about getting your product or platform to market faster"
        primaryCta={{
          toggle: true,
          label: "Contact us",
          target: "https://app.lemcal.com/@daniel-ley",
          icon: "person",
        }}
        secondaryCta={{
          toggle: true,
          label: "Book a meeting",
          target: "https://app.lemcal.com/@daniel-ley",
          icon: "date",
        }}
      />
    </Section>

    <Section headline="Design Systems & Headless FAQs">
      <FAQ
        questions={[
          {
            question: "What is a Design System?",
            answer:
              "A Design System is a comprehensive set of guidelines, components, and tools that facilitate the consistent creation and maintenance of digital products. It serves as a single source of truth for designers, developers, and content creators, ensuring a cohesive brand identity and user experience across all platforms and devices.",
          },
          {
            question: "What are the benefits of investing in a Design System?",
            answer:
              "Investing in a Design System offers numerous benefits, including increased efficiency, improved collaboration, enhanced consistency, and streamlined workflows. It ensures a unified brand voice, facilitates faster product development, and enables teams to create scalable, maintainable, and adaptable digital experiences.",
          },
          {
            question:
              "How do we help enterprise companies with a complex SaaS product?",
            answer:
              "We assist enterprise companies by creating tailored Design Systems that cater to the unique requirements of their complex SaaS products. Our approach involves understanding the product's goals, user needs, and brand identity, and then crafting a comprehensive Design System that streamlines workflows, enhances collaboration, and ensures a consistent user experience.",
          },
          {
            question: "Is a Design System not too expensive for a Startup?",
            answer:
              "While Design Systems may initially seem expensive, they are a long-term investment that can save startups time, resources, and money in the long run. By establishing a solid foundation for design and development, startups can reduce inconsistencies, minimize rework, and improve overall product quality, which ultimately leads to a more successful and sustainable business.",
          },
          {
            question: "How long does a Design System take to build?",
            answer:
              "The time required to build a Design System varies depending on the project's complexity, scope, and specific requirements. On average, a Design System can take anywhere from a few weeks to several months to develop. However, it is essential to remember that a Design System is an evolving entity that requires ongoing maintenance and updates.",
          },
          {
            question:
              "What's the difference between a Design System and a Style Guide?",
            answer:
              "A Style Guide is a subset of a Design System, focusing primarily on the visual aspects of a brand, such as colors, typography, and iconography. A Design System, on the other hand, is a more comprehensive framework that encompasses not only visual elements but also components, patterns, guidelines, and tools for design, development, and content creation.",
          },
          {
            question: "Why are Design Systems all the rage these days?",
            answer:
              "Design Systems have gained popularity due to the growing need for consistency, efficiency, and scalability in digital product development. As organizations recognize the value of a unified brand identity and seamless user experiences, Design Systems have emerged as a crucial tool in achieving these goals while streamlining workflows and fostering collaboration across teams.",
          },
          {
            question: "How much does a Design System cost?",
            answer:
              "The cost of a Design System varies depending on factors such as project scope, complexity, and specific requirements. It is essential to view a Design System as a long-term investment that yields significant returns in terms of improved efficiency, reduced rework, and enhanced brand consistency. If you start at zero and the design system should serve at least 5 digital touchpoints, it could take months to years to develop all the code base. We believe in tailored solutions, so get in touch with us to discuss your specific requirements. As we work with kickstartDS, you can save lots of money because all the main concepts and aspects are already covered. Invest in its paid modules is really low in comparison to the development time you normally need to spend. For the rest, we'll provide you with a transparent, customized quote that aligns with your goals.",
          },
          {
            question: "How do Headless CMSs fit into the picture?",
            answer:
              "A Headless CMS fits perfectly into the picture by offering a content-first approach that complements a Design System. It decouples the back-end content repository from the front-end presentation layer, allowing for seamless integration with any design system. The result is a flexible, scalable, and platform-agnostic system that ensures content consistency across all platforms and devices.",
          },
          {
            question:
              "How does the combination of Headless CMS and Design System create value?",
            answer:
              "The combination of a Headless CMS and a Design System creates value by enhancing efficiency, consistency, and scalability. A Headless CMS allows for seamless content management across various platforms, while a Design System ensures a consistent user experience and brand identity. Together, they enable teams to create and manage digital experiences more effectively, resulting in improved user engagement and business growth.",
          },
          {
            question: "Is transitioning to a Headless Web complicated?",
            answer:
              "Transitioning to a Headless Web can be a significant change, but it doesn't have to be complicated. With the right planning, tools, and expertise, the transition can be smooth and beneficial. It's about understanding your specific needs and goals, choosing the right Headless CMS, and effectively integrating it with your Design System.",
          },
          {
            question:
              "How can I ensure a consistent design across various channels with a Headless Web setup? ",
            answer:
              "Ensuring a consistent design across various channels with a Headless Web setup is achieved through the integration of a Design System. The Design System serves as a single source of truth for design elements and guidelines, ensuring a unified brand identity and user experience across all platforms and devices. Combined with the platform-agnostic nature of a Headless CMS, you can deliver a consistent and engaging user experience across all channels.",
          },
        ]}
      />
    </Section>

    <Section style="accent" width="wide">
      <Cta
        align="left"
        headline="Ready to embark on a transformative digital journey?"
        text="Reach out to us for insights and solutions that seamlessly merge design systems and headless web architecture."
        primaryCta={{
          toggle: true,
          label: "Contact us",
          target: "#https://app.lemcal.com/@daniel-ley",
          icon: "person",
        }}
        secondaryCta={{
          toggle: true,
          label: "Book a meeting",
          target: "https://app.lemcal.com/@daniel-ley",
          icon: "date",
        }}
      />
    </Section>
  </PageWrapper>
);