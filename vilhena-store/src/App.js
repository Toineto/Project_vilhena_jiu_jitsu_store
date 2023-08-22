import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Professores from "./pages/Professores";
import About from "./pages/About";
import Store from "./pages/Store";
import ProfessorDetails from "./pages/ProfessorDetails";
import professores from "./components/ProfessoresDetailsList";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/professores">
          <Professores />
        </Route>
        <Route path="/sobre">
          <About />
        </Route>
        <Route path="/loja">
          <Store />
        </Route>
        <Route path="/ProfessorDetails">
          <ProfessorDetails />
        </Route>
        {professores.map((professor) => (
          <Route
            key={professor.id}
            path={`/professores/${professor.id}`}
            render={() => <ProfessorDetails professor={professor} />}
          />
        ))}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;