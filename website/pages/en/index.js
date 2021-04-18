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
      <b style={{ paddingLeft: "17px" }}>{data.items[0]}</b>
      <ul style={{ margin: "0" }}>
        {data.items.slice(1).map((item, idx) => (
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
      "Hammer Testnet development",
      "DPO Research an Architecture",
      "Dex and Bridge development",
      "BulletTrain Development",
    ],
    date: "2020",
  },
  {
    items: [
      "Hammer Testnet Launch",
      "DPO V1 Development",
      "Dex and Bridge Launch on Hammer",
      "Partnership Development",
      "BulletTrain Released on Hammer",
    ],
    date: "2021 Q1",
  },
  {
    items: [
      "Spanner Mainnet launch",
      "DPO Smart Contract Research",
      "BulletTrain Launch (for Spanner launching BOLT only)",
      "Rococo Parachain Research",
    ],
    date: "2021 Q2",
  },
  {
    items: [
      "Parachain Offering",
      "DPO V2 Research",
      "DPO Off-chain Oracle Research",
      "BulletTrain open for other Projects",
      "Growth Marketplace",
    ],
    date: "2021 Q3",
  },
  {
    items: [
      "Parachain Interoperability",
      "DPO Full Smart Contract Support",
      "DPO Off-chain Oracle Support",
      "More DPO applications",
    ],
    date: "2021 Q4",
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

    const ButtonYellow = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button-orange" href={props.href} target={props.target}>
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
            <Bootstrap.Col xs lg="4"></Bootstrap.Col>
            <Bootstrap.Col md="2">
              <ButtonYellow variant="warning" href={docUrl("getting_started")}>
                Learn more
              </ButtonYellow>
            </Bootstrap.Col>
            <Bootstrap.Col md="2">
              <Button href="#what-is-spanner">Explore DPO</Button>
            </Bootstrap.Col>
            <Bootstrap.Col xs lg="4"></Bootstrap.Col>
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

    const ButtonYellow = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button-orange" href={props.href} target={props.target}>
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
        {props.title ? (
          <Bootstrap.Container>
            <h1>{props.title}</h1>
          </Bootstrap.Container>
        ) : (
          ""
        )}
        <GridBlock
          align={props.align}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const DpoFeatures = () => (
      <div className="container-reverse paddingTop paddingBottom">
        <MarkdownBlock>## Introducing the DPO</MarkdownBlock>
        <div style={{ maxWidth: "768px", margin: 'auto' }}>
          <MarkdownBlock>
            The Decentralized Programmable Organization (DPO) is a technology to
            enable borderless collaboration on Blockchain. It can be programmed
            with any structure and all interactions are transparent and
            verifiable.
          </MarkdownBlock>
        </div>
        <div className="container-flexbox">
          <div className="container-features">
            <h3>Decentralized</h3>
            <div className="container-features-text">
              <b>Completely Borderless</b>. Work with anyone around the world.
              Collaborate with transparency and trust. Measure contributions
              accurately and distribute rewards fairly.
            </div>
          </div>
          <div className="container-features">
            <h3>Programmable</h3>
            <div className="container-features-text">
              <b>Do anything, with anyone at anyscale</b>. Program any
              blockchain activity, membership structures and composition to
              other DPOs.
            </div>
          </div>
          <div className="container-features">
            <h3>Organization</h3>
            <div className="container-features-text">
              <b>Behave like a real organization.</b> DPO supports collaboration
              of any size, from two person start-ups, to multinational
              corporations. DPOs can work independently or collaborate with
              other DPOs via DPO Composition.
            </div>
          </div>
        </div>
      </div>
    );

    const ComparisonChart = () => (
      <div className="container">
        <Block>
          {[
            {
              content: `Building on the best of DAOs (Decentralized Autonomous Organizations) and Traditional Organizations. <br/><br/>
                <b>Decentralization</b> provides trust and transparency for open participation. <br/><br/>
                <b>Operational Focus</b> provides effectiveness and efficiency for the goals of organizations.
                `,
              title: "DPOs vs DAOs vs Traditional Organizations",
              image: `${baseUrl}img/dpo-matrix.png`,
              imageAlign: "right",
            },
          ]}
        </Block>
      </div>
    );

    const ComparisonTable = () => (
      <div className="container-reverse">
        <Bootstrap.Container className="paddingTop paddingBottom">
          <Bootstrap.Row>
            <Bootstrap.Col xs="2" />
            <Bootstrap.Col md="8">
              <h2 className="heading-white">DPO Comparison</h2>
              <img width="650px" src={`${baseUrl}img/dpo-comparison.svg`} />
            </Bootstrap.Col>
            <Bootstrap.Col xs="2" />
          </Bootstrap.Row>
        </Bootstrap.Container>
      </div>
    );

    const SpannerBlockchain = () => (
      <div className="container paddingBottom">
        <Bootstrap.Row>
          <Bootstrap.Col className="paddingTop" lg="7">
            <Block>
              {[
                {
                  content: `Full-stack optimization for Economies of Scale and technical Comparative Advantage. <br/><br/>
                    <b>DPO Technology Focus</b> <br/><br/>
                    <b>On-chain</b> - Core DPO feature development <br/>
                    <b>Off-chain</b> - Oracle Integrations for real-world data <br/>
                    <b>Cross-chain</b> - Integrations to target third-party blockchain assets. <br/><br/>
                    All powered by token <b>BOLT</b>.`,
                  title: "Spanner Blockchain",
                },
              ]}
            </Block>
            <Bootstrap.Row>
              <Bootstrap.Col lg="1" xs="2">
                {" "}
              </Bootstrap.Col>
              <Bootstrap.Col xs="4">
                <ButtonYellow
                  className="buttonWrapper"
                  variant="warning"
                  href="https://polkadot.js.org/apps/#/explorer"
                >
                  Explore Spanner
                </ButtonYellow>
              </Bootstrap.Col>
              <Bootstrap.Col xs="4">
                <ButtonYellow
                  className="buttonWrapper"
                  variant="warning"
                  href="https://dapp.spanner.network/#/dex"
                >
                  Swap for BOLT
                </ButtonYellow>
              </Bootstrap.Col>
              <Bootstrap.Col lg="3" xs="2">
                {" "}
              </Bootstrap.Col>
            </Bootstrap.Row>
          </Bootstrap.Col>
          <Bootstrap.Col className="paddingTop" lg="5">
            <img width="400px" src={`${baseUrl}img/spanner_architecture.png`} />
          </Bootstrap.Col>
        </Bootstrap.Row>
      </div>
    );

    const Description = () => (
      <div
        className="container paddingTop paddingBottom container-text"
        style={{ textAlign: "center" }}
      >
        <MarkdownBlock>## DPO on Spanner?</MarkdownBlock>
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
      <div className="container-reverse">
        <Block id="spanner-bullet-train">
          {[
            {
              content: `Grow the community for your hot crypto project with BulletTrain.
            Start a BulletTrain on Spanner Blockchain to
            empower your community to grow itself through affiliate crowdfunding
            incentives.
            <div class="promoRow buttonWrapper centered">
              <a class="button-white" href="https://dapp.spanner.network">
              Try BulletTrain
              </a>
            </div>`,
              image: `${baseUrl}img/trainyard.jpg`,
              imageAlign: "left",
              title: "BulletTrain: DPO for Growth in action",
            },
          ]}
        </Block>
      </div>
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
      <div className="container-reverse paddingTop paddingBottom">
        <MarkdownBlock>## Join our Community</MarkdownBlock>
        <div className="container-flexbox">
          <div className="container-features">
            <h3>HODLers</h3>
            <div className="container-features-text">
              Discuss about Spanner and support us in our social channels.
            </div>
            <div
              className="promoRow buttonWrapper"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <a href="https://t.me/spannerprotocol" target="_blank">
                <img
                  src={`${baseUrl}img/icon-telegram.png`}
                  style={{ width: "32px" }}
                />
              </a>
            </div>
          </div>
          <div className="container-features">
            <h3>Ecosystem Partners</h3>
            <div className="container-features-text">
              Collaborate with our team to integrate Spanner with your project
            </div>
            <div
              className="promoRow buttonWrapper"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <a
                className="button-orange"
                href="mailto:ask@spanner.network?subject=Ecosystem Partner Inquiry"
              >
                Find out more
              </a>
            </div>
          </div>
          <div className="container-features">
            <h3>Ambassadors</h3>
            <div className="container-features-text">
              Join our Ambassador Program and help grow our community!
            </div>
            <div
              className="promoRow buttonWrapper"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <a
                className="button-orange"
                href="mailto:ask@spanner.network?subject=Ambassador Inquiry"
              >
                Become an Ambassador
              </a>
            </div>
          </div>
        </div>
      </div>
    );

    const InterestedInSpanner = () => (
      <div className="container-reverse paddingTop">
        <MarkdownBlock>## Learn more about Spanner</MarkdownBlock>
        <div style={{ maxWidth: "768px", margin: 'auto' }}>
          <MarkdownBlock>
            Whether you are a Project Owner, User or just curious, there's
            plenty of resources for you to learn more about Spanner.
          </MarkdownBlock>
        </div>
        <div className="container-flexbox">
          <div className="container-features-centered">
            <div style={{ marginTop: "1rem" }}>
              <img
                src={`${baseUrl}img/icon-spanner.svg`}
                style={{ width: "55px" }}
              />
            </div>

            <h3>Builders</h3>
            <div className="container-features-text-centered">
              Build your project on Spanner. No code required.
              <div className="promoRow buttonWrapper">
                <a
                  className="button-orange"
                  href={`${docUrl("build-on-spanner")}`}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="container-features-centered">
            <div style={{ marginTop: "1rem" }}>
              <img
                src={`${baseUrl}img/icon-user.svg`}
                style={{ width: "55px" }}
              />
            </div>

            <h3>Users</h3>
            <div className="container-features-text-centered">
              Check out our decentralized application, Spanner Dapp. 
              <div className="promoRow buttonWrapper">
                <a className="button-orange" href={`${docUrl("spanner-web")}`}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="container-features-centered">
            <div style={{ marginTop: "1rem" }}>
              <img
                src={`${baseUrl}img/icon-components.svg`}
                style={{ width: "55px" }}
              />
            </div>
            <h3>Blockchain Enthusiasts</h3>
            <div className="container-features-text-centered">
              Curious about Spanner's Blockchain? Read more about our blockchain
              parameters.
              <div className="promoRow buttonWrapper">
                <a className="button-orange" href={`${docUrl("params")}`}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
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
            <a className="button-orange" href={pageUrl("users.html")}>
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
          <DpoFeatures />
          <ComparisonChart />
          <ComparisonTable />
          <SpannerBlockchain />
          {/*<Description />*/}
          <BulletTrain />
          {/*<BulletTrainFeatures />*/}
          {/*<BoltToken />*/}
          {/*<BoltTokenFeatures />*/}
          {/* <SpannerComponents /> */}
          {/* <LaunchPad /> */}
          {/* <Features /> */}
          <Timeline />
          <InterestedInSpanner />
          <Partners />
          <Community />
        </div>
      </div>
    );
  }
}

module.exports = Index;
