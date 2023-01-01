import React from 'react';

const Blogs = () => {
    return (
        <section className='m-4 h-screen'>
            <div className="collapse collapse-plus rounded-t-md">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title text-xl font-medium bg-primary-content text-neutral peer-checked:bg-primary peer-checked:text-base-100">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-primary-content text-neutral peer-checked:bg-primary peer-checked:text-base-100"> 
                    <p>React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself.</p>
                    <p>The different ways to manage a state in a react application are: useState, useReducer, useMemo & useCallback, useEffect, useRef, Context and Custom Hooks, React Query & React Location, Zustand, Valtio, Jotai, Redux etc.</p>
                </div>
            </div>
            <div className="collapse collapse-plus">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title text-xl font-medium bg-primary-content text-neutral peer-checked:bg-primary peer-checked:text-base-100">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-primary-content text-neutral peer-checked:bg-primary peer-checked:text-base-100"> 
                    <p>Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                </div>
            </div>
            <div className="collapse collapse-plus">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title text-xl font-medium bg-primary-content text-neutral peer-checked:bg-primary peer-checked:text-base-100">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-primary-content text-neutral peer-checked:bg-primary peer-checked:text-base-100"> 
                    <p>Unit testing is a testing method that tests an individual software unit in isolation. This involves verifying the output of a function or component for a given input. For React components, this could mean checking that the component renders correctly for the specified props. In other words, writing unit tests means that we write code that verifies that our code works as expected. We'll go over the other goals of unit testing later on.</p>
                    <p>There are so many opinions about when to write the unit tests. We can write by Test-Driven Development (TDD) which tells us to write test cases before writing the code, and prefer to write the unit tests when the code has been written. The most significant advantage of unit testing is when you write tests during the actual deployment, that doesn't mean we have to follow the advice. It is the best idea to write test cases in the following situations: During or before the implementation of new functionality, Before and during refactoring, Before fixing a bug</p>
                </div>
            </div>
            <div className="collapse collapse-plus rounded-b-md">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title text-xl font-medium bg-primary-content text-neutral peer-checked:bg-primary peer-checked:text-base-100">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content bg-primary-content text-neutral peer-checked:bg-primary peer-checked:text-base-100"> 
                    <p><strong>React:</strong> React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages. One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts.</p>
                    <p><strong>Angular:</strong> Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular. Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.</p>
                    <p><strong>Vue:</strong> Vue is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks. Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.</p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;