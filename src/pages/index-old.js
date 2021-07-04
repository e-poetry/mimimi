/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout seo={{ title: "home old home" }}>
    <Themed.h1>hi people</Themed.h1>
    <Themed.p>Welcome to your new Gatsby site.</Themed.p>
    <Themed.p>Now go build something great.</Themed.p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <Themed.p>
      <Themed.a as={Link} to="/page-2/">
        Go to page 2
      </Themed.a>{" "}
      <br />
      <Themed.a as={Link} to="/using-typescript/">
        Go to "Using TypeScript"
      </Themed.a>
    </Themed.p>
  </Layout>
)

export default IndexPage
