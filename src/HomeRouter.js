import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserHome from "./components/public/UserHome";
import LandingPage from "./components/public/LandingPage";

export default function HomeRouter() {
  // const [token, setToken] = useState("");

  // useEffect(() => {
  //   if (token) {
  //     salvaToken(token);
  //   }
  // }, [token]);

  // useEffect(() => {
  //   chiamaToken();
  // }, []);

  // const salvaToken = (token) => {
  //   localStorage.setItem("token", `${token}`);
  // };

  // const chiamaToken = () => {
  //   const itemToken = localStorage.getItem("token");
  //   if (itemToken !== "") {
  //     setToken(itemToken);
  //   } else {
  //     console.log("token non trovato");
  //   }
  // };

  return (
    <Router>
      <Switch>
        <Route path="/userhome">
          <UserHome />
        </Route>
        <Route path="/profile/:id"></Route>
        <Route path="/search/:q">
          <UserHome />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
