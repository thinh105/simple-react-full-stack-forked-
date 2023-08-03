import React, { useEffect, useState } from "react";
import NestedDataComponent from "./NestedDataComponent";

function App() {
  const [nestedData, setNestedData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/getNestedData");
      const data = await response.json();

      console.log({data});
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
