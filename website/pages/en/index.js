/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const Bootstrap = require("react-bootstrap");
const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <h6>{data.date}</h6>
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
      <MarkdownBlock className="heading">## Roadmap</MarkdownBlock>
      <MarkdownBlock className="heading">###### </MarkdownBlock>
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
      <div>
        <p>Future</p>
      </div>
    </div>
  );

const timelineData = [
  {
    items: [
      "Spanner core components",
      "Hammer TestNet development",
      "BulletTrain beta development (Growth Component #1)",
      "DeFi Infrastructure",
    ],
    date: "2020",
  },
  {
    items: [
      "DApp official release",
      "Hammer TestNet official launch",
      "BulletTrain beta deployed on TestNet",
      "DeFi on TestNet",
      "Polkadot Ecosystem Partnerships",
      "Bridge to Ethereum",
    ],
    date: "2021 Q1",
  },
  {
    items: [
      "Spanner MainNet launch",
      "Developer tooling",
      "Yield Farming",
      "Scaling up Spanner infrastructure ",
      "Spanner BulletTrain Campaign on MainNet",
      "Partnerships and project incubation",
      "Rococo Parachain R&D",
    ],
    date: "2021 Q2",
  },
  {
    items: [
      "Parachain Offering",
      "Polkadot ecosystem partnerships",
      "Open and Permissionless BulletTrain v2",
      "Growth Marketplace",
      "Growth Component #2",
    ],
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
        <div className="inner">
          <ProjectTitle
            tagline={siteConfig.tagline}
            title={siteConfig.title}
            style={{ color: "#fff" }}
          />
        </div>
        <Bootstrap.Container>
          <Bootstrap.Row>
            <Bootstrap.Col xs lg="4">
            </Bootstrap.Col>
            <Bootstrap.Col md="auto">
              <Button href="#what-is-spanner">Learn more</Button>
            </Bootstrap.Col>
            <Bootstrap.Col md="auto">
              <Button href="#what-is-spanner">Explore DPO</Button>
            </Bootstrap.Col>
            <Bootstrap.Col xs lg="4">
            </Bootstrap.Col>
          </Bootstrap.Row>
        </Bootstrap.Container>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const Button = (props) => (
        <div className="pluginWrapper buttonWrapper">
          <a className="button" href={props.href} target={props.target}>
            {props.children}
          </a>
        </div>
    );

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
        className="container paddingTop paddingBottom container-text"
        style={{ textAlign: "center" }}
      >
        <MarkdownBlock>## What is Spanner?</MarkdownBlock>
        <MarkdownBlock>
          Spanner components are designed to be highly configurable without
          coding. For the technically savvy, our components are written with
          extensibility as a core principle. Our components help new projects
          develop fast, securely and affordably.
        </MarkdownBlock>
        <div style={{ marginBottom: "2rem" }} />
        {/*<MarkdownBlock>###### Blockchain projects on steroids</MarkdownBlock>*/}
        <MarkdownBlock>
          Create an asset, enroll in Spanner DeFi for liquidity and promote them
          with Growth Components -- all with little-to-no code. Focus on your
          users and let Spanner take care of the rest. Use Spanner Components to
          build Smart Contracts to quickly get your project's application
          up-and-running.
        </MarkdownBlock>
      </div>
    );

    const BulletTrain = () => (
      <Block id="spanner-bullet-train">
        {[
          {
            content: `Grow the community for your hot crypto project with BulletTrain. 
              Start a BulletTrain on Spanner Blockchain to
              empower your community to grow itself through affiliate crowdfunding
              incentives. 
              <div class="promoRow buttonWrapper">
              <a class="button-white-border" href="https://dapp.spanner.network">
              Try BulletTrain
              </a>
              </div>`,
            image: `${baseUrl}img/trainyard.jpg`,
            imageAlign: "left",
            title: "BulletTrain: DPO for Growth in action",
          },
        ]}

      </Block>
    );

    const BulletTrainFeatures = () => (
      <div className="container-features">
        <Block layout="threeColumn">
          {[
            {
              content: `Reward growth based on results.`,
              image: `${baseUrl}img/icon-coin.svg`,
              imageAlign: "top",
              title: "Result-based Rewards",
            },
            {
              content: `Communities create networks of communities, each with their own incentives collaborating to grow your project.`,
              image: `${baseUrl}img/icon-viral-marketing.svg`,
              imageAlign: "top",
              title: "Viral Growth",
            },
            {
              content: `Start your BulletTrain instantly, using out-of-box components. No code required.`,
              image: `${baseUrl}img/icon-press-button.svg`,
              imageAlign: "top",
              title: "One-click Deployment",
            },
          ]}
        </Block>
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
            ###### Providing projects with asset, liquidity and growth instantly
          </MarkdownBlock>
          <MarkdownBlock>
            Spanner Launchpad is a new way of helping projects get off the
            ground. With various services built on Spanner, projects can create
            an asset, use our DEX for liquidity and Growth Components to start
            promoting their projects.
          </MarkdownBlock>
        </div>
      );
    };

    const Features = () => (
      <Block layout="threeColumn">
        {[
          {
            content: `Instantly bootstrap your project with asset and liquidity. 
            No code required.
            <div class="promoRow buttonWrapper">
            <a class="button-orange" href="docs/getting_started#why-projects-want-to-launch-on-spanner">Learn More</a></div>`,
            image: `${baseUrl}img/rocket.svg`,
            imageAlign: "top",
            title: "###### Project Launchpad",
          },
          {
            content: `Use Growth Components to promote your project and asset.
            <div class="promoRow buttonWrapper">
            <a class="button-orange" href="docs/glossary#growth-components">Learn More</a></div>`,
            image: `${baseUrl}img/components.svg`,
            imageAlign: "top",
            title: "###### Incentivized Growth ",
          },
          {
            content: `Build your project with secure and customizable components.
            <div class="promoRow buttonWrapper">
            <a class="button-orange" href="docs/glossary#components">Learn More</a></div>`,
            image: `${baseUrl}img/customize.svg`,
            imageAlign: "top",
            title: "###### Rapid Development",
          },
        ]}
      </Block>
    );

    const Community = () => (
      <div className="container-reverse paddingTop paddingBottom ">
        <MarkdownBlock>## Join our Community</MarkdownBlock>
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

    const InterestedInSpanner = () => (
      <div className="container-reverse paddingTop">
        <MarkdownBlock>## Learn more about Spanner</MarkdownBlock>
        <MarkdownBlock>
          Spanner enables rapid crypto project development.
        </MarkdownBlock>
        <MarkdownBlock>
          Whether you are a Project Owner, User or just curious, there's plenty
          of resources for you to learn more about Spanner.
        </MarkdownBlock>
      </div>
    );

    const InterestedInSpannerFeatures = () => (
      <div className="container-features">
        <Block layout="threeColumn">
          {[
            {
              content: `Build your project on Spanner. 
            No code required.
            <div class="promoRow buttonWrapper">
            <a class="button-orange" href="${docUrl(
              "build-on-spanner"
            )}">Learn More</a>
            </div>`,
              image: `${baseUrl}img/icon-spanner.svg`,
              imageAlign: "top",
              title: "### Builders",
            },
            {
              content: `Learn more about Spanner Web.
            <div class="promoRow buttonWrapper">
            <a class="button-orange" href="${docUrl(
              "spanner-web"
            )}">Learn More</a>
            </div>`,
              image: `${baseUrl}img/icon-user.svg`,
              imageAlign: "top",
              title: "### Users",
            },
            {
              content: `Curious about Spanner's Blockchain? Read more about our blockchain parameters.
            <div class="promoRow buttonWrapper">
            <a class="button-orange" href="${docUrl("params")}">Learn More</a>
            </div>`,
              image: `${baseUrl}img/icon-components.svg`,
              imageAlign: "top",
              title: "### Browsers",
            },
          ]}
        </Block>
      </div>
    );

    const Partners = () => (
      <div className="container paddingTop paddingBottom ">
        <MarkdownBlock>## Partners</MarkdownBlock>
        <div>
          <MarkdownBlock>### Parachain Candidates</MarkdownBlock>
          <div className="container component-catalogue">
            <div className="components-grid">
              <div className="component-wrapper">
                <div className="blockLogo">
                  <img src={`${baseUrl}img/logo-polkadot-color.svg`} />
                </div>
              </div>

              <div className="component-wrapper">
                <div className="blockLogo">
                  <img src={`${baseUrl}img/logo-acala-network.svg`} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <MarkdownBlock>### Wallets</MarkdownBlock>
          <div className="container component-catalogue">
            <div className="components-grid">
              <div className="component-wrapper">
                <div className="blockLogo">
                  <img src={`${baseUrl}img/logo-math-black-full.svg`} />
                </div>
              </div>
              <div className="component-wrapper">
                <div className="blockLogo">
                  <img src={`${baseUrl}img/logo-polkadotjs.png`} />
                </div>
              </div>
              <div className="component-wrapper">
                <div className="blockLogo">
                  <img src={`${baseUrl}img/logo-metamask-full.svg`} />
                </div>
              </div>
              <div className="component-wrapper">
                <div className="blockLogo">
                  <img src={`${baseUrl}img/logo-walletconnect-banner.svg`} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <MarkdownBlock>### Ecosystem</MarkdownBlock>
          <div className="container component-catalogue">
            <div className="components-grid">
              <div className="component-wrapper">
                <div className="blockLogo">
                  <img src={`${baseUrl}img/logo-parity-substrate.svg`} />
                </div>
              </div>
              <div className="component-wrapper">
                <div className="blockLogo">
                  <img src={`${baseUrl}img/logo-subscan.png`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    const BoltToken = () => (
      <div
        className="container paddingTop container-text"
        style={{ textAlign: "center" }}
      >
        <MarkdownBlock>## The BOLT Token</MarkdownBlock>
        <MarkdownBlock>
          BOLT is Spanner's native currency. Much like ETH for Ethereum gas
          fees, it is used for all transactions made on Spanner. Get more
          information about BOLT Tokenomics, issuance and more.
        </MarkdownBlock>
      </div>
    );

    const BoltTokenFeatures = () => (
      <div className="container-two-features">
        <Block layout="twoColumn">
          {[
            {
              content: `Learn more about BOLT tokenomics, issuance and denomination.
              <div class="promoRow buttonWrapper">
              <a class="button-orange" href="${docUrl("bolt")}">
              Learn More
              </a>
              </div>`,
              image: `${baseUrl}img/icon-bolts.svg`,
              imageAlign: "top",
              title: "BOLT Info.",
            },
            {
              content: `BOLT will be available on Spanner's BulletTrain campaign. 
              <div class="promoRow buttonWrapper">
              <a class="button-orange" href="${docUrl("bullettrain")}">
              Learn More
              </a>
              </div>`,
              image: `${baseUrl}img/icon-train.svg`,
              imageAlign: "top",
              title: "BulletTrain Rules",
            },
          ]}
        </Block>
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
        <div className="mainContainer splashMainContainer">
          <Description />
          <BulletTrain />
          <BulletTrainFeatures />
          <BoltToken />
          <BoltTokenFeatures />
          <InterestedInSpanner />
          <InterestedInSpannerFeatures />
          {/* <SpannerComponents /> */}
          {/* <LaunchPad /> */}
          {/* <Features /> */}
          <Timeline />
          <Community />
          <Partners />
        </div>
      </div>
    );
  }
}

module.exports = Index;
