# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

   React is a UI library built in Javascript. In a large project, too many operations on DOM gives a very poor performance on the user end. React has its own virtual DOM (ReactDOM) and does it operations on it and then later injects the final result to the actual DOM through the anchor point (usually #root). React is powerful because it responds faster to the data changes in applications state and updates its individual components thanks to the virtual DOM feature of it.

2. What does it mean to think in react?

   It means that when we are creating components and designing our app flow, we should consider the React principles and design accordingly. For example, in a React project, every component should do one job and one job only. If it starts getting bigger, than we should consider breaking it into smaller components. Or we should be able to identify what piece of information is supposed to be in our state since updates in state re-renders our components. If we put unnecessary information in state, we might end up having unnecessary re-renders.

3. Describe state.

   State is the underlying memory of a React application. When state is updated, components are re-rendered. We should not mutate the state by writing something like this: `state = 'blabla;` instead we should call `setState` function to update our state.

4. Describe props.

   Props are used to pass data from parent component to child component. We can send props like this: `<Component data={data} />`. Here the first data is what we want to name our props and second `{data}` is the actual variable that holds the data. In our component, we recieve this piece of data by referring to `props.data`.

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

   Side effects are the things that happen outside of our component's function. For example, an API call or directly adding an event listener to the actual DOM are side effects that are outside of our function's scope. When we use `useEffect`, we define what is going to happen after the component is rendered. `useEffect` function takes a callback function as an argument and executes that function everytime the component is re-rendered. HOWEVER, `useEffect` also takes a second argument, called `dependency array` to watch a piece of information and 'REACT' to the changes that happen only in that variable. Syntax: `useEffect(callback, [ watchThis ]);` In this example, `callback()` is executed only if `watchThis` changes. We can add more variables in our `dependency array` just like that: `useEffect(callback, [ watchThis, andThis ]);`. If we don't pass an empty array as dependency to our `useEffect` function, `useEffect` will watch an empty array to see if there is any changes but since an hard-coded empty array would never change, that `useEffect` will never be triggered after the initial load. By the way, every `useEffect` hook is triggered after the initial render regardless of having a dependency array, having variables in that array, or not.
