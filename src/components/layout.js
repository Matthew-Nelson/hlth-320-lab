import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import MenuDrawer from "./menu-drawer.js"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `#035642`,
    },
  },
  typography: {
    fontFamily: `Merriweather, Georgia, serif`,
  },
})

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <ThemeProvider theme={theme}>
        <MenuDrawer />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            position: `relative`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
          <hr />
          <footer>© {new Date().getFullYear()}, Built by Matt Nelson</footer>
        </div>
      </ThemeProvider>
    )
  }
}

export default Layout
