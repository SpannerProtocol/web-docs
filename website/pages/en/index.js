/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <h3>{data.date}</h3>
      <ul style={{ margin: "0" }}>
        {data.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <span className="circle" />
    </div>
  </div>
);

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="container paddingTop paddingBottom">
      <h2 className="heading">Roadmap</h2>
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    </div>
  );

const timelineData = [
  {
    items: [
      "Substrate Research and Development",
      "Spanner core components",
      "Launchpad with GT-01 - Crowdfunding via GrowthBox and DPO",
      "DeFi - DEX and Yield Farming",
    ],
    date: "2020",
  },
  {
    items: [
      "DApp official release",
      "Launchpad and DeFi",
      "Polkadot and Substrate Partnerships",
      "Bridge to Ethereum",
    ],
    date: "2021 Q1",
  },
  {
    items: [
      "Developer tools",
      "Scaling up Spanner infrastructure ",
      "Spanner GT-01 Launch Campaign",
      "Partnerships with project incubators for Launchpad",
    ],
    date: "2021 Q2",
  },
  {
    items: ["Parachain Offering", "Polkadot ecosystem partnerships", "GT-02"],
    date: "2021 Q3",
  },
];

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => <div className="projectLogo"></div>;

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle
            tagline={siteConfig.tagline}
            title={siteConfig.title}
            style={{ color: "#fff" }}
          />
          <div className="splash-content">
            Build your projects with secure, economically incentivized and
            highly customizable components.
          </div>
          <PromoSection>
            <Button href="#what-is-spanner">Learn more</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = (props) => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Description = () => (
      <div
        className="container container-text paddingTop paddingBottom"
        style={{ textAlign: "center" }}
      >
        <MarkdownBlock>## What is Spanner?</MarkdownBlock>
        <MarkdownBlock>### Blockchain projects on steroids</MarkdownBlock>
        <MarkdownBlock>
          Create an asset, enroll in Spanner DeFi for liquidity and promote them
          with Growth Templates -- all with little to no code. Focus on your
          users and let Spanner take care of the rest. Use Spanner Components
          for smart contracts to quickly get a project up-and-running. Select
          the components you need and bundle them together to create a Smart
          Contract. Spanner components are designed to be highly configurable
          and for the technically savvy, our components are written with
          extensibility as a core principle.
        </MarkdownBlock>
        <MarkdownBlock></MarkdownBlock>
      </div>
    );

    const LaunchPad = () => {
      return (
        <div
          className="container container-text paddingTop"
          style={{ textAlign: "center" }}
        >
          <h2 className="heading">Spanner Launchpad</h2>
          <MarkdownBlock>
            ### Providing projects with asset, liquidity and growth instantly
          </MarkdownBlock>
          <MarkdownBlock>
            Spanner Launchpad is a new way of helping projects get off the
            ground. With various services built on Spanner, projects can create
            an asset, use our DEX for liquidity and Growth Templates to start
            promoting their projects.
          </MarkdownBlock>
        </div>
      );
    };

    const SpannerComponents = () => {
      return (
        <div>
          <div className="container container-text paddingTop paddingBottom">
            <MarkdownBlock>
              ## Spanner Components: DApp building blocks
            </MarkdownBlock>
            <MarkdownBlock>
              ### An expanding catalogue of components
            </MarkdownBlock>
            <MarkdownBlock>
              Our components help new projects develop fast, securely and
              affordably. Bundle them for your Smart Contract and focus on
              building your DApp.
            </MarkdownBlock>
          </div>
          <div className="container component-catalogue">
            <div className="components-grid">
              <div className="component-wrapper">
                <div className="blockImage">
                  <img src="img/assets.svg" />
                </div>
                <div className="component-text">Asset</div>
              </div>
              <div className="component-wrapper">
                <div className="blockImage">
                  <img src="img/vault.svg" />
                </div>
                <div className="component-text">Vault</div>
              </div>
              <div className="component-wrapper">
                <div className="blockImage">
                  <img src="img/governance.svg" />
                </div>
                <div className="component-text">Governance</div>
              </div>
              <div className="component-wrapper">
                <div className="blockImage">
                  <img src="img/organization.svg" />
                </div>
                <div className="component-text">Organization</div>
              </div>
            </div>
          </div>
        </div>
      );
    };

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: `Instantly bootstrap your project with asset and liquidity. 
            No code required.
            <div class="promoRow buttonWrapper">
            <a class="button-red" href="docs/getting_started#why-projects-want-to-launch-on-spanner">Learn More</a></div>`,
            image: `${baseUrl}img/rocket.svg`,
            imageAlign: "top",
            title: "#### Project Launchpad",
          },
          {
            content: `Use Growth Templates to help promote your project.
            <div class="promoRow buttonWrapper">
            <a class="button-red" href="docs/glossary#growth-template">Learn More</a></div>`,
            image: `${baseUrl}img/components.svg`,
            imageAlign: "top",
            title: "#### Incentivized Growth ",
          },
          {
            content: `Build your project with secure and customizable components.
            <div class="promoRow buttonWrapper">
            <a class="button-red" href="docs/glossary#components">Learn More</a></div>`,
            image: `${baseUrl}img/customize.svg`,
            imageAlign: "top",
            title: "#### Rapid Development",
          },
        ]}
      </Block>
    );

    const Community = () => (
      <div className="container-reverse paddingTop paddingBottom ">
        <h2>Join our Community</h2>
        <div className="container-community">
          <div className="community-box">
            <h3>Governance</h3>
            <div className="community-text">
              Discuss and vote on protocol topics openly and transparently
            </div>
          </div>
          <div className="community-box">
            <h3>Partners</h3>
            <div className="community-text">
              Collaborate with our team to integrate Spanner with your project
            </div>
          </div>
          <div className="community-box">
            <h3>Explorers</h3>
            <div className="community-text">
              Help promote new projects on Spanner and get rewarded
            </div>
          </div>
        </div>
      </div>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter((user) => user.pinned)
        .map((user) => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = (page) =>
        baseUrl + (language ? `${language}/` : "") + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl("users.html")}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <LaunchPad />
          <Features />
          <Description />
          <SpannerComponents />
          <Timeline />
          <Community />
        </div>
      </div>
    );
  }
}

module.exports = Index;
