note: agar class component use nhi krna hai to reacthook use kr sakte hai. because
in functional component react hooks is everything.


Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.


What is a Hook? 

A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.


When would I use a Hook? 

If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!


Note:

There are some special rules about where you can and can’t use Hooks within a component. We’ll learn them in Rules of Hooks.
---------------------------------------

Only Call Hooks at the Top Level
Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls. (If you’re curious, we’ll explain this in depth below.)

Only Call Hooks from React Functions
Don’t call Hooks from regular JavaScript functions. Instead, you can:

✅ Call Hooks from React function components.
✅ Call Hooks from custom Hooks (we’ll learn about them on the next page).
By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.

