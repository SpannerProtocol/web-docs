const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const translate = require("../../server/translate.js").translate;

class Guides extends React.Component {
  render() {

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div style={{ marginBottom: '4rem' }}>
            <header className="postHeader">
              <h1>
                <translate>Guides</translate>
              </h1>
            </header>
            <div>
              <p>
                <translate>
                  Guides are created by both the Spanner team and community. If
                  you would like to contribute to our guide compilation, please
                  contact us at
                </translate>
                <a href="mailto:ask@spanner.network"> ask@spanner.network.</a>
              </p>
            </div>
            <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
              <h4>
                <translate>Dapp Guides</translate>
              </h4>
              <a
                target="_blank"
                href="https://docs.google.com/presentation/d/1mHs8qF-PEk2zTXT2PG5Q-bjLTGUOHrMFMVapNXeXFYo/edit?usp=sharing"
              >
                Using Bridge with imToken
              </a>
            </div>
            <div>
              <h4>
                <translate>General Guides</translate>
              </h4>
              <a
                target="_blank"
                href="https://www.evernote.com/shard/s657/client/snv?noteGuid=a6c23d4c-8490-9c51-1ed4-70d97e468b9d&noteKey=dc8a6610e632ebbf8f20f7e2b9ec8871&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs657%2Fsh%2Fa6c23d4c-8490-9c51-1ed4-70d97e468b9d%2Fdc8a6610e632ebbf8f20f7e2b9ec8871&title=Spanner%2B101%2B%25E5%2585%25A5%25E9%2597%25A8%25E6%258C%2587%25E5%258D%2597"
              >
                <translate>Spanner 101 - Community guide (ZH)</translate>
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

Guides.defaultProps = {
  language: "en",
};

module.exports = Guides;
