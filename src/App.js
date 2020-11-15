import Navigation from './components/Navigation'
import Home from './pages/Home'
import Writers from './pages/Writers'
import About from './pages/About'
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      

      <Router>
        <Navigation />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/writers" component={Writers} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
