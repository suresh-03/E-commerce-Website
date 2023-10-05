import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/home";
import Signin from "./containers/signin";
import Signup from "./containers/signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/signin" Component={Signin} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
