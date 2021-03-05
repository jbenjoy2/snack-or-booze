### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  A: React Router is a library used in React for client-side routing (changing URL without pinging a server and loading a new page)

- What is a single page application?

  A: A single-page application is an app that uses Client-side routing to manipulate the dom and the url to load resources without actually ever doing a full page load. 

- What are some differences between client side and server side routing?

  A: In server-side routing, the browser has to keep making requests to the server to render retrieve and render resources on the page, whereas client-side routing does not. The server will be pinged on first load, but after that the dom is simply manipulated on the front-end to show the resources.

- What are two ways of handling redirects with React Router? When would you use each?

  A: The Redirect component can be used as a catch-all, which is useful when no exact route is matched and you simply want a bad URL to send the user back to a certain route. The useHistory() hook can also be used to access the history object, and using the push method on that object, a user is redirected to that newly pushed route. This is good to use after form submission because this method will allow full access to the browser's back and reload buttons (a user can hit back and go back to the previously visited route, which is not the case in Redirect)

- What are two different ways to handle page-not-found user experiences using React Router? 

  A: In a switch component, after all of the routes have been declared with "exact" props, add a route at the bottom with no path prop as a catch-all. Inside of that, just render something that says "not found". The other option would be to use a redirect so that any not-found page just redirects to a desired route. 

- How do you grab URL parameters from within a component using React Router?

  A: To grab URL params, there are two steps. First, the route must be declared in the express-y way (/:param). Then, in the component rendered in that way, the useParams hook has to be imported from react-router-dom. Within the functional component, the param can be destructured from useParams and referenced as needed. 

- What is context in React? When would you use it?

  A: Context is a way to pass data between components in react that is not simply from parent to next child. It is designed to circumvent "prop drilling", where a parent defines some variable that is then used or updated by some distant subcomponent, and all of the components in between are simply passing it along. Instead, context can be used so that a parent can provide the context, and any child wrapped in that context provider can utilize it as needed. 

- Describe some differences between class-based components and function
  components in React.


  A: Class-based components are generally longer and more explicit than function components. Since hooks cannot be used, methods have to be written for every situation. State is also different in class components; there is a single this.state property that is an object containing ALL pieces of state being used. Updating this state can be difficult due to the way "this" works and the utilization of binding. It is also much more difficult to pass data between elements in class-based components. 
- What are some of the problems that hooks were designed to solve?

  A: As mentioned above, class-based components made it very difficult to pass data between components. Hooks helped solve this problem. They also helped to solve the crazy amount of code duplication that arose from different lifecycle methods doing essentially the same job at different points in the lifecycle. They also made state significantly easier to use and update, and made code generally smaller, more modular, and cleaner. 