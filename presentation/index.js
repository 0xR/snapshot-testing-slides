// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

import AsciinemaPlayer from "./asciinema-player.jsx";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

function TitleElement({ children }) {
  const style = {
    flex: '0 0 auto',
    justifyContent: 'space-between'
  };
  return (
    <Fill {...{ style }}>
    {children}
    </Fill>
  );
}

// Should be a proper component to ensure HMR works
export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle>
        <Deck>
          <Slide>
            <Heading size={1} fit>
              Snapshot tests
            </Heading>
            <Heading size={2} fit>
              with Mocha in Jest
            </Heading>
            <Layout>
            <TitleElement>Ruben Oostinga</TitleElement>
            <TitleElement>Xebia</TitleElement>
            <TitleElement>@RubenOostinga</TitleElement>
            <TitleElement>https://github.com/0xR</TitleElement>
            </Layout>
          </Slide>
          <Slide>
            <Heading size={3} fit>
              About this talk
            </Heading>
          </Slide>
          <Slide>
            <Heading size={3} fit>
              What is snapshot testing
            </Heading>
          </Slide>
          <Slide>
            <Heading size={4} fit>
              What is snapshot testing
            </Heading>
            <List>
              <ListItem>asdf</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading size={3} fit>
              Alias jasmine and chai
            </Heading>
            <CodePane
              lang="jsx"
              source={require("!raw!../includes/alias-jasmine.js")}
              textSize="20pt"
            />
          </Slide>
          <Slide>
            <Heading size={3} fit>
            Combine jasmine and chai
            </Heading>
            <CodePane
              lang="jsx"
              source={require("!raw!../includes/combine-jasmine-chai.js")}
            />
          </Slide>
          <Slide>
            <Heading size={3} fit>
              Ensure CSS modules still work
            </Heading>
            <CodePane
              lang="jsx"
              source={require("!raw!../includes/css-modules-preprocessor.js")}
              margin="20px auto"
            />
          </Slide>
          <CodeSlide
            transition={[]}
            lang="js"
            code={require("!raw!../includes/inject-loader-compatibility-implementation.js")}
            ranges={[
              { loc: [0, 270], title: "injectLoaderCompatibility" },
              { loc: [3, 5], title: "Reset the modules first" },
              { loc: [6, 7], title: "Take the files to inject" },
              { loc: [8, 16], title: "Iterate over the those" },
              { loc: [13, 15], title: "Inject the mock using Jest" },
              { loc: [18, 19], title: "Return the module" },
              { loc: [21, 22], title: "Expose as a global" },
            ]}
            textSize="15pt"
          />
        </Deck>
      </Spectacle>
    );
  }
}

/* what is snapshot testing
 * what problem does it solve
 * Conferencetalk Driven development, not gonna fall for free tool ;)
 * Christoph worked on it for over a year, some months
 * chai-jest-snapshot
 * disadvantage: no way to hook into the CLI, doesn't clean up snapshots
 * migrating:
 * combining chai / jest
 * inject loader compatibility layer
 * proptype warnings because of resetModules
 * pro tip: make react proptype warning fail a test
 *
 * disadvantage: slow for integration, increade default timeout, cache sometimes confusing
 * only error: user error
 * pros: nice console output, DX: console.log, watch, rerun failed tests first, nice diff when test fails, buffered console, mocks that work, coverage of not included files
 */
