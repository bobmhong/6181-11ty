import "@kickstartds/ds-agency/global.client.js";

import { useEleventy } from "@kickstartds/eleventy-plugin-kickstartds/useEleventy";
import { PageWrapper as Page } from "@kickstartds/ds-agency/page-wrapper";
import { Header } from "@kickstartds/ds-agency/header";
import { Footer } from "@kickstartds/ds-agency/footer";
import { HeadlineLevelProvider } from "./headline/HeadlineLevelContext";

export const PageWrapper = ({ floatingHeader = false, children }) => {
  const data = useEleventy();
  // const eleventyNav = navigation.find(data.collections.all);
  // const headerMainNav = eleventyNav.map(({ url, title }) => ({
  //   href: url,
  //   label: title,
  // }));
  const gitHubPageUrl = `https://github.com/kickstartDS/11ty-starter/blob/main/${data.page.inputPath}`;

  return (
    <Page>
      <Header
        logo={data.logo}
        floating={floatingHeader}
        navItems={[
          { label: "Home", href: "/index" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />
      <HeadlineLevelProvider>{children}</HeadlineLevelProvider>
      <Footer
        logo={data.logo}
        navItems={[
          { label: "Home", href: "/index" },
          { label: "Gallery", href: "/gallery" },
        ]}
      />
    </Page>
  );
};
