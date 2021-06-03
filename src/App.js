import { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import User from "./component/user";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const location = useLocation();

  const onSave = (MSG) => {
    const msg = {
      id: Math.random(),
      msg: MSG,
      user_no: Number(location.pathname[1]),
    };
    if (location.pathname === "/1") {
      fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(msg),
      });
      setData([...data, { id: Math.random(), msg: MSG, user_no: 1 }]);
    } else if (location.pathname === "/2") {
      fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(msg),
      });
      setData([...data, { id: Math.random(), msg: MSG, user_no: 2 }]);
    }
  };
  return (
    <div className="App">
      <Switch>
        <Route path="/1">
          <User onSave={onSave} data={data} id="1"></User>
        </Route>
        <Route exact path="/2">
          <User onSave={onSave} data={data} id="2"></User>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
