import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/MainPages/Home';
import Platforms from './components/MainPages/Platforms';
import Niches from './components/MainPages/Niches';
import SignUp from './components/MainPages/SignUp';
import Login from './components/MainPages/Login';
import Dashboard from './components/MainPages/Dashboard';
import Post from './components/MainPages/Post/Post';
import {getPosts} from './services'
// keep routes in my switch staetment
//
//
//
//
//
function App(){

  const [posts, setPosts] = useState([]); 

  const fetchPosts = ()=>{
    const res = getPosts();
    res.then((posts) => {
      console.log(posts)
      setPosts(posts.reverse())
    });
  }

  useEffect(()=>{fetchPosts()}, [])

  return(
    <>
    <Router>
       <Navbar/>
       <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/platforms' component={Platforms} />
          <Route path='/niches' component={Niches} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} /> 
          <Route path='/dashboard' render={(props)=><Dashboard {...props} posts={posts} /> } />
          <Route path='/post' render={(props) => <Post {...props} posts={posts} fetchPosts={fetchPosts}/>}
            />
          {/* <Route path='/logout' component={Logout} /> */}
       </Switch>
    </Router>
     
    </>
  );
}


export default App;

