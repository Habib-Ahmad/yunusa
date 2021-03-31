import './App.css';
import Header from './components/Header';
import About from './components/About'
import NavBar from './components/NavBar';
import Publications from './components/Publications';
import Projects from './components/Projects';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <NavBar />
        <Switch>
          <Route path = "/" exact component = {About} />
          <Route path = "/publications" exact component = {Publications} />
          <Route path = "/projects" exact component = {Projects} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
