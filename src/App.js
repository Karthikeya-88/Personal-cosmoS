import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import About from "./components/About";
import Home from "./components/Home";
import Books from "./components/Books";
import NotFound from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
