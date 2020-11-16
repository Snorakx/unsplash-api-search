import logo from "./logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SearchResultView from "./Pages/SearchResultView";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Results" component={SearchResultView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
