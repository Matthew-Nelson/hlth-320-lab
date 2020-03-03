import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import AssignmentIcon from "@material-ui/icons/Assignment"
import PostAddIcon from "@material-ui/icons/PostAdd"
import HomeIcon from "@material-ui/icons/Home"
import DateRangeIcon from "@material-ui/icons/DateRange"
import { Link } from "gatsby"
import calPolyLogo from "../../content/assets/cal-poly-logo.png"

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  listStyle: {
    marginLeft: 0,
  },
  logoStyle: {
    marginBottom: 0,
    maxWidth: "35px",
    position: "absolute",
    right: "20px",
  },
}))

export default function PersistentDrawerLeft() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <IconButton style={{ color: "white" }}>
              <HomeIcon />
            </IconButton>
          </Link>
          <img
            src={calPolyLogo}
            alt="Cal Poly Logo"
            className={classes.logoStyle}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem 0 1rem",
          }}
        >
          Week Outlines
        </h4>
        <List className={classes.listStyle}>
          {[
            {
              title: "Week 1",
              classification: "week",
              url: "/week-1/",
            },
            {
              title: "Week 2",
              classification: "week",
              url: "/week-2/",
            },
            {
              title: "Week 3",
              classification: "week",
              url: "/week-3/",
            },
            {
              title: "Week 4",
              classification: "week",
              url: "/week-4/",
            },
            {
              title: "Week 5",
              classification: "week",
              url: "/week-5/",
            },
            {
              title: "Week 6",
              classification: "week",
              url: "/week-6/",
            },
            {
              title: "Week 7",
              classification: "week",
              url: "/week-7/",
            },
            {
              title: "Week 8",
              classification: "week",
              url: "/week-8/",
            },
            {
              title: "Week 9",
              classification: "week",
              url: "/week-9/",
            },
            {
              title: "Week 10",
              classification: "week",
              url: "/week-10/",
            },
          ].map((obj, index) => {
            let icon
            switch (obj.classification) {
              case "week":
                icon = <DateRangeIcon />
                break
              case "assignment":
                icon = <AssignmentIcon />
                break
              default:
                icon = <DateRangeIcon />
            }

            return (
              <Link to={obj.url}>
                <ListItem button key={index + 1}>
                  <ListItemIcon style={{ color: "#035642" }}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={obj.title} />
                </ListItem>
              </Link>
            )
          })}
        </List>
        <Divider />
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem 0 1rem",
          }}
        >
          Lab Assignments
        </h4>
        <List className={classes.listStyle}>
          {[
            {
              title: "5x5 Digital Video Story",
              classification: "assignment",
              url: "#",
            },
            {
              title: "HTML Site Checkpoint #1",
              classification: "assignment",
              url: "/html-checkpoint-one/",
            },
            {
              title: "HTML Site Checkpoint #2",
              classification: "assignment",
              url: "/html-checkpoint-two/",
            },
            {
              title: "HTML Site Checkpoint #3",
              classification: "assignment",
              url: "/html-checkpoint-three/",
            },
            {
              title: "HTML Site Checkpoint #4",
              classification: "assignment",
              url: "#",
            },
            {
              title: "Final HTML Site",
              classification: "assignment",
              url: "/final-html-site/",
            },
            {
              title: "Footage Challenge #1",
              classification: "assignment",
              url: "/footage-challenge-one/",
            },
            {
              title: "Footage Challenge #2",
              classification: "assignment",
              url: "/footage-challenge-two/",
            },
          ].map((obj, index) => {
            let icon
            switch (obj.classification) {
              case "week":
                icon = <DateRangeIcon />
                break
              case "assignment":
                icon = <AssignmentIcon />
                break
              default:
                icon = <DateRangeIcon />
            }

            let linkStyle
            let buttonStyle
            if (obj.url === "#") {
              linkStyle = {
                pointerEvents: "none",
              }
              buttonStyle = {
                backgroundColor: "rgba(0, 0, 0, 0.08)",
              }
            }

            return (
              <Link to={obj.url} style={linkStyle}>
                <ListItem button key={obj.title} style={buttonStyle}>
                  <ListItemIcon style={{ color: "#035642" }}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={obj.title} />
                </ListItem>
              </Link>
            )
          })}
        </List>
        <Divider />
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem 0 1rem",
            textAlign: "center",
          }}
        >
          Helpful Documents
        </h4>
        <List className={classes.listStyle}>
          <Link to="/posting-blogs/">
            <ListItem button key="1">
              <ListItemIcon style={{ color: "#035642" }}>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Posting New Blog Posts" />
            </ListItem>
          </Link>
          <Link to="/fonts-and-colors/">
            <ListItem button key="2">
              <ListItemIcon style={{ color: "#035642" }}>
                <PostAddIcon />
              </ListItemIcon>
              <ListItemText primary="Fonts and Color Pallette Resources" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  )
}
