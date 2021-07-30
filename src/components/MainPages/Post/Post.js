import React, { useEffect, useRef, useState } from "react";
// import React, { useState, useEffect} from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import classes from "./Post.module.css";
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems,secondaryListItems} from '../listItems.js';
import { Badge } from "@material-ui/core";
import Posts from "../../Posts/Posts.js";
import { addPost } from "../../../services.js";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  Input:{
    position: 'center',
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    display: 'none'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const Post = (props) => {
  const textRef = useRef();
  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     props.history.push("/login");
  //   }
  // }, [props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    addPost(textRef.current.value).then((data) => {
      props.fetchPosts();
      props.history.push("/post");
    });
  };

  let user = JSON.parse(localStorage.getItem('user'));
  console.log(user)

useEffect(() => {

  if(!localStorage.getItem('token')){
    props.history.push('/login')
  }else{
   
  }
}, [props.history])
const classes = useStyles();
const [open, setOpen] = React.useState(true);
const handleDrawerOpen = () => {
  setOpen(true);
};
const handleDrawerClose = () => {
  setOpen(false);
};
const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

const [, setPosts] = useState([])

useEffect(()=>{

  setPosts(props.posts.filter(post=> post.author._id === user._id))
}, [])

const logout= ()=>{

  localStorage.removeItem('token');
  localStorage.removeItem('user');
  props.history.push('/')
}

  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Profile
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
        <Button  onClick={logout}>Exit</Button>
      </Drawer>
    <div className={classes.Input}>
      <div>
        <h1>Welcome to I AM ONE MEDIA</h1>
        <h3>Introduce Yourself With A SMALL BLURB</h3>
        <form onSubmit={submitHandler}>
          <textarea ref={textRef}></textarea>
          <button>Post</button>
        </form>
      </div>
      <div>
        <h2>Last 3 Post on your wall</h2>
        <Posts last={3} posts={props.posts} />
      </div>
    </div>
    </div>
  );
};

export default Post;
