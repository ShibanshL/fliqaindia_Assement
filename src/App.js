import './App.css';
import Main from './New-component/Main'
import { HashRouter, Switch, Route } from 'react-router-dom';
import Apirequest3 from './New-component/Apirequest3';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/API/:final" component={Apirequest3}/>
      </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
