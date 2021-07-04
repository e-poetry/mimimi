/** @jsx jsx */
import { jsx, Themed } from "theme-ui"

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout seo={{ title: "404: archivo no encontrado 🤦" }}>
    <Themed.h1>
      404: archivo no encontrado{" "}
      <span role="img" aria-label="facepalm">
        🤦
      </span>
    </Themed.h1>
    <Themed.p>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Themed.p>
  </Layout>
)

export default NotFoundPage
