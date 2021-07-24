import './App.css';
import Main from './New_component/Main';
import New from './Page2/New';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/New" component={New}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
