import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/header";
import PostList from "./components/postlist";
import PostView from "./components/postview";
function App() {
  return (
    <Router>
      <div>
         <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
         <Header />
           
        <Route exact path="/" component={PostList} />
        <Route path="/about" component={About} />
        <Route   path="/:slug" component = {PostView} />
       
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}



ReactDOM.render(<App />, document.getElementById("app"));
