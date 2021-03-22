/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Info and Docs</h5>
            <a href={this.docUrl("getting_started.html")}>
              Spanner Introduction
            </a>
            <a href={this.docUrl("launch_phases.html")}>White Paper</a>
            <a href={`${this.props.config.baseUrl}#roadmap`}>Roadmap</a>
          </div>
          {<div>
            <h5>Community</h5>
            {/*<a href={`${this.props.config.baseUrl}users`}>User Showcase</a>*/}
            {/*<a*/}
            {/*  href="https://t.me/spannerprotocol"*/}
            {/*  target="_blank"*/}
            {/*  rel="noreferrer noopener"*/}
            {/*>*/}
            {/*  Stack Overflow*/}
            {/*</a>*/}
            <a href="https://t.me/spannerprotocol">Telegram Chat</a>
            <a href="https://t.me/spannerprotocol">Telegram Official</a>
            {/*<a*/}
            {/*  href="https://twitter.com/"*/}
            {/*  target="_blank"*/}
            {/*  rel="noreferrer noopener"*/}
            {/*>*/}
            {/*  Twitter*/}
            {/*</a>*/}
          </div>}
          <div>
            <h5>More</h5>
            <a href="https://spannerprotocol.medium.com/">Blog</a>
            <a href="https://docs.google.com/presentation/d/1DepGxC1x1IH_8L02r_0Vzg3AFd7fZMKnxJOkIs4IoE8/edit?usp=sharing">Pitch Deck</a>
            <a href="https://github.com/SpannerProtocol">GitHub</a>
            <a href="mailto:spannerprotocol@gmail.com">Contact Us</a>
            {/* <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a> */}
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button"
                >
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
