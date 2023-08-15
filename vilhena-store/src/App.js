import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Professores from "./pages/Professores"
import About from "./pages/About";
import Store from "./pages/Store";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/professores">
          <Professores />
        </Route>
        <Route path="/sobre">
          <About />
        </Route>
        <Route path="/loja">
          <Store />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;