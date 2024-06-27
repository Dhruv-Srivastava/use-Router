# use-Router

# Requirements
- A 'BrowserRouter' component to wrap our app.
- A 'Route' component to perform routing.
- A 'Link' component to perform navigation.


## What, Why and How?
What:

```
<BrowserRouter>
  <App />
</BrowserRouter>
```
```
 App
 
 function App(){
   return (
     <>
       <h1>Hey!</h1>
       
       <Route path="/">
         <Home />
       </Route>
       
       <Route path="/about">
         <About />
       </Route>
       
       <Route path="/contact">
         <Contact />
       </Route>
     </>
   )
 }
```
```
Link

<Link to="/about">Take me to about</Link>
```


Why?

> React internally doesn't give the ability to route things.



How?

> That's the most challenging part :)



### Key Challenges
1. How to actually navigate?
2. How to keep state intact?
3. How to not refresh page during navigation
4. How to handle forward and back button?
5. ...more
6. Every component inside the `BrowserRouter` needs to know what the current route is? How to make them know?
7. Heck, what's even the current URL?


### Some Insights
1. Need to keep track of the URL -> URL WEB API
2. For forward and back button -> History WEB API
3. ...more
4. Use Context so that children can access the current route without prop drilling

