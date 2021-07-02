/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"

// import Header from "./header"

const Container = props => (
  <div
    {...props}
    sx={{
      width: "100%",
      maxWidth: "container",
      mx: "auto",
      px: 3,
    }}
  />
)

export default function Layout(props) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        variant: "layout.root",
      }}
    >
      <header
        sx={{
          width: "100%",
          variant: "layout.header",
        }}
      >
        <Container>
          <Themed.a as={Link} to="/">
            <Themed.h1 style={{ mb: 0 }}>
              {data.site.siteMetadata?.title || `Title`}
            </Themed.h1>
          </Themed.a>
        </Container>
      </header>
      <main
        sx={{
          width: "100%",
          flex: "1 1 auto",
          variant: "layout.main",
        }}
      >
        <Container>{props.children}</Container>
      </main>
      <footer
        sx={{
          width: "100%",
          variant: "layout.footer",
        }}
      >
        <Container sx={{ textAlign: "center" }}>
          <Themed.a href="https://e-poetry.institute">
            e-poetry.institute
          </Themed.a>{" "}
          <small>{new Date().getFullYear()}</small>
        </Container>
      </footer>
    </div>
  )
}
