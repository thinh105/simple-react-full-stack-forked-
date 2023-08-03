import React, { useState } from "react";

const TreeNode = ({ data, expandedNodes }) => {
  const [collapsed, setCollapsed] = useState(
    !expandedNodes.includes(data.id) // If the id exists in expandedNodes, set to false, otherwise true
  );

  const handleToggleCollapse = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div>
      <div onClick={handleToggleCollapse}>
        {data.name}
        {data.children.length > 0 && (
          <span>{collapsed ? " [+] " : " [-] "}</span>
        )}
      </div>
      {!collapsed &&
        data.children.map((child) => (
          <div key={child.id} style={{ marginLeft: "20px" }}>
            <TreeNode data={child} expandedNodes={expandedNodes} />
          </div>
        ))}
    </div>
  );
};

export default TreeNode;
