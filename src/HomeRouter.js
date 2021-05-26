import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserHome from "./components/public/UserHome";
import LoginForm from "./components/public/LoginForm";
import GuestHome from "./components/public/GuestHome";

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
        <Route path="/guesthome">
          <GuestHome />
        </Route>
        <Route path="/profile/:id"></Route>
        <Route path="/search/:q">
          <UserHome />
        </Route>
        <Route path="/">
          <LoginForm />
        </Route>
      </Switch>
    </Router>
  );
}
