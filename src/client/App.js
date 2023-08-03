// import React, { Component } from 'react';
// import './app.css';
// import ReactImage from './react.png';

// export default class App extends Component {
//   state = { username: null };

//   componentDidMount() {
//     fetch('/api/getUsername')
//       .then(res => res.json())
//       .then(user => this.setState({ username: user.username }));
//   }

//   render() {
//     const { username } = this.state;
//     return (
//       <div>
//         {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
//         <img src={ReactImage} alt="react" />
//       </div>
//     );
//   }
// }

import React, { useEffect, useState } from "react";
import NestedDataComponent from "./NestedDataComponent";

function App() {
  const [nestedData, setNestedData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/getNestedData");
      const data = await response.json();
      setNestedData(data);
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <NestedDataComponent nestedData={nestedData} />
    </div>
  );
}

export default App;
