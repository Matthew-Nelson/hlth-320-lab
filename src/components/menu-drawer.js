import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { Link } from "gatsby";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  listStyle: {
    marginLeft: 0,
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
          <Link to='/'>
            <IconButton style={{color:'white'}}>
                <HomeIcon />
            </IconButton>
          </Link>
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
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <h4 style={{display: 'flex', justifyContent: 'center', margin: '2rem 0 1rem'}}>Weeks</h4>
        <List className={classes.listStyle}>
          {
            [
                {
                    title: 'Week 1',
                    classification: 'week',
                    url: '/week-1/',
                },
                {
                    title: 'Week 2',
                    classification: 'week',
                    url: '/week-2/',
                },
                {
                    title: 'Week 3',
                    classification: 'week',
                    url: '/week-3/',
                },
                {
                    title: 'Week 4',
                    classification: 'week',
                    url: '/week-4/',
                },
            ].map((obj, index) => {
                let icon;
                switch (obj.classification) {
                    case 'week':
                        icon = <DateRangeIcon />;
                        break;
                    case 'assignment':
                        icon = <AssignmentIcon />;
                        break;
                    default:
                        icon = <DateRangeIcon />;
                } 

                return (
                    <Link to={obj.url}>
                        <ListItem button key={index+1}>
                            <ListItemIcon style={{color: '#035642'}}>{icon}</ListItemIcon>
                            <ListItemText primary={obj.title} />
                        </ListItem>
                    </Link>
                )
            })
          }
        </List>
        <Divider />
        <h4 style={{display: 'flex', justifyContent: 'center', margin: '2rem 0 1rem'}}>Assignments</h4>
        <List className={classes.listStyle}>
          {
            [
                {
                    title: 'HTML Site Checkpoint #1',
                    classification: 'assignment',
                    url: '/html-checkpoint-one/',
                }
            ].map((obj, index) => {
                let icon;
                switch (obj.classification) {
                    case 'week':
                        icon = <DateRangeIcon />;
                        break;
                    case 'assignment':
                        icon = <AssignmentIcon />;
                        break;
                    default:
                        icon = <DateRangeIcon />;
                } 

                return (
                    <Link to={obj.url}>
                        <ListItem button key={obj.title}>
                            <ListItemIcon style={{color: '#035642'}}>{icon}</ListItemIcon>
                            <ListItemText primary={obj.title} />
                        </ListItem>
                    </Link>
                )
            })
          }
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
  );
}
