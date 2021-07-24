import './App.css';
import Main from './New_component/Main';
import New from './Page2/New';
import { HashRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/New" component={New}/>
      </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
