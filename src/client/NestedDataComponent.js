import React, { useState } from "react";
import TreeNode from "./TreeNode"; // Adjust the import path based on your directory structure
// import { nestedData as serverData } from "../server/data";

const NestedDataComponent = (nestedData) => {
  const [data, setData] = useState(nestedData);
  const [expandedNodes, setExpandedNodes] = useState([]);

  // Function to update the data received from the backend
  const handleDataUpdate = (updatedData) => {
    setData(updatedData);

    // Preserve the expandedNodes state for nodes that were previously expanded
    const newExpandedNodes = expandedNodes.filter((id) =>
      updatedData.some((node) => node.id === id)
    );

    setExpandedNodes(newExpandedNodes);
  };

  // Function to handle node expansion/collapse
  const handleToggleCollapse = (nodeId) => {
    if (expandedNodes.includes(nodeId)) {
      setExpandedNodes((prevExpandedNodes) =>
        prevExpandedNodes.filter((id) => id !== nodeId)
      );
    } else {
      setExpandedNodes((prevExpandedNodes) => [...prevExpandedNodes, nodeId]);
    }
  };

  return (
    <div>
      {data.map((parent) => (
        <div key={parent.id}>
          <TreeNode
            data={parent}
            expandedNodes={expandedNodes}
            onToggleCollapse={handleToggleCollapse}
          />
        </div>
      ))}
    </div>
  );
};

export default NestedDataComponent;
