// 1: Always write it inside the component or function
// 2: Component name must be PascleCase (first letter should be uppercase)
// 3: we cane directly import or we can directly write it using React.hookName.
// 4: Don't call Hooks inside loops, conditions, or nested functions.

import React, { useState } from "react";
const HookRules = () => {
  const [myName, serName] = useState("HookRulesFile");

  return (
    <div>
      <h1>{myName}</h1>
    </div>
  );
};

export default HookRules;
