## Exercises
#### Explain what is meant by the stream abstraction. What is the relationship between streams and the observer pattern? What are streams useful for modeling and when might you use them in Rich Web development?

Streams are data that are created and consumed incrementally. Chunks of the resource are broken down to make it easier to send, receive and transform. This is an abstract concept. Streams are used to increase the performance and allow data to be accessed immediately. Streams can be used to live stream content. For Instagram, another account can be added and removed.

#### Assume that you are building an interface to an API in your Rich Web App. Describe in detail how you could use the RxJS library to handle asynchronous network responses to API requests. In your opinion, what are the benefits to using a streams library for networking over, say, promises? And what do you think are the downsides?

Rxjs calls using Observables will be used to do API calls. It uses common HTTP methods like GET, POST, PUT, DELETE and PATCH. The API is called and using the pipe and map operators. 
Streams would be useful in the ability to transmit any set of data with the strict type checking by the complier. They support multiple observers and are able to control th lifetime of the subscription. The disadvantage to using a stream would be that the long list of functions make it difficult for the developer. They have to go about looking up definitions. The semantics would need to be read carefully. 

#### Consider three asynchronous tasks, A,B & C. What are the consequences of these functions sharing global state? What is a good practice to alleviate any problems associated with this?
This can pose a problem as modifying the variable on one thread and reading it is a problem and modifying more than one thread is worse. Instead of using global variables, atomic variables can be used. 