### 1. Explain using code examples what is meant by props and state in React JS?
Prop is the data passed into a React component and it works like HTML attributes or JavaScript functions arguments. They are part of pure functions and cannot change components modifying its own props. An example of React prop  is 
```
ReactDOM.render(<App subject="Adam"/>, document.getElementById('root'));
```
The prop part of it is subject.
```
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: "Maze Runner"};
  }
  render() {
    return (
      <div>
        <h1>Book</h1>
      </div>
    );
  }
}
```
A state is a built in React object that is used to contain data or information about the component. This state can change over time and when it does it re-renders.
State is part of the code above. the title for state can be changed.

### 2. In functional programming, what does the term functor mean? Can you give an example in JavaScript
A functor is a data object that can hold elements of any data type and it implements the map operation. This map operation is a function. The map() function takes an argument which is another function and calls the function for each element of the functor. This results in a new functor. It essentially unwraps value from context and applies a function. After the function is done it rewraps value in context. An example of a functor would be a JavaScript array. 
```
['232', '435', '753']
.map(s => parseInt(s))
.map(n => n / 10)
```

### 3. We have looked at three kinds of asynchronous programming mechanisms, namely callbacks, promises and streams. Mention one advantage and one disadvantage of each type.
**Callback**
*Advantage:* You can wait for the results of a previous function call and then execute another function call. 
```setTimeOut()``` is a good example of this where the function executes a block of code after a specified time and this time is given in milliseconds. 
*Disadvantage:* Nested callbacks maybe be used and this would happen if a further asynchronous request needs to be made from the previous one. The second request must be made with the first request's callback logic. 

**Promises**
*Advantage:* It is had better handling of asynchronous operations. The handles that will be called are queued up a promise and then the methods are called. 
*Disadvantage:* It kills the purpose of asynchronous non-blocking input and output. Only one object is returned, not multiple arguments.

**Streams**
*Advantage:* They increase the performance, even when memory is limited and it allows access to data straight away, rather than having to wait for the whole file to download which was the case before.
*Disadvantage:* The more data is received, the more the memory of the application is consumned or more memory will be required, which will grow linearly or exponentially. 

### 4. With the aid of a diagram and example code, describe the Cascading Style Sheets (CSS) Box Model and show how it can be used to space DOM elements
The diagram can be found [here](https://levelup.gitconnected.com/css-box-model-explained-60fc76fe9c4d)
![CSS Box Model](https://miro.medium.com/max/1400/1*E_YuB8x1B3T3h6PIJ_I9qQ.png)
The CSS Box Model basically is box that wraps around HTML elements. The different elements of the box model do different things for the styling. 
The interior of the object includes the space occupied by the width and height of the object. 

The *padding* refers to the spacing between the object content and edges of the object. An example of padding would be the following. This will add around 10px of padding space around the image tags. 
```
img {
    padding: 10px;
}
```
The *border* is the exterior of the object and has its own width. If a border width is greater than zero it grows the size of the object by the amount. An example of the border being used is this example where there will be a border around the div tag. The border, size, decoration and colour can be specified. This border will be black, solid and 1px in size. 
```
div {
    border: 1px solid black
}
```
Finally, the *margin*, relates to the exterior spacing between the object and the objec beside. An example of margin is below, where margin adds 10px of spacing between the object, which is h2 header tag, and neighboring objects. 
```
h2 {
    margin: 10px;
}
```

### 5. Detail how the browser loads and bootstraps a rich web application from an initial URL
A user will navigate to a URL in the browser. This browser will go to the DNS (Domain Name Service). This is like an address book which will tell where the website is. 
The browser will make a TCP/IP connection to the server's IP address and the port that is associated with this. These will load the website. 
The application server/HTTP proxy is listening to the IP address and will accept the connection. Browser will now send a HTTP request to the open TCP/IP connection.
Application server will now parse the request and responds to the browser over the same open TCP/IP connections. The files are now delievered.