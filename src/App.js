import React, { useEffect, useState } from "react";
import { Drawer,JoinedClasses } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useLocalContext } from "./context/context";
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api-new-demo.herokuapp.com/api/classroom/',
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  const [createdClasses, setCreatedClasses] = useState([]);
  const [joinedClasses, setJoinedClasses] = useState([]);

  return (
    <Router>
      <Switch>     
          <Route exact path="/">
            <Drawer />
            <ol className="joined">
            {data.map((item) => (
              <JoinedClasses classData={item} />
            ))}

        {data.map((item, index) => (
          <Route key={index} exact path={`/${item._id}`}>
            <Drawer />
          </Route>
        ))}
          </ol>
          </Route>       
      </Switch>
    </Router>
  );
}

export default App;
