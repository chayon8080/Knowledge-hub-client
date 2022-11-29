import React from 'react';

const Blogs = () => {
    return (
        <div className='mb-20'>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Question 1: What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Answer 1: In React apps, there are at least seven ways to handle the state. here some example given below
                        Example :
                        * URL= We can use URL to store some data .

                        * Web Storage = The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.

                        * Local State = The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc.

                        * Lifted State = The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state.

                        * Derived State = The fifth option is to compute the new state based on the available state.
                    </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Question 2: How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Answer 2: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Question 3: What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Answer 3: Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected.
                        Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.
                    </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    Question 4: React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Answer 4: Angular, React and Vue are all highly popular JavaScript libraries and frameworks that help developers build complex, reactive and modern user interfaces for the web. Actually, with additional libraries like React Native, Ionic with Angular or with React or NativeScript you can even build native mobile apps for mobile devices with help of Angular, React and Vue.
                        Angular is a framework developed by Google: Google also uses Angular internally, hence we'll not see Angular disappear over night. It will be maintained and continuously improved
                        React is a library built by Facebook: Facebook also uses React internally, hence we'll not see React disappear over night. It will be maintained and continuously improved
                        Vue is a "standalone" project that is not built inside of any company. It used to be a one-man show but those days are long gone. Nowadays, it has a dedicated team of core contributors that work on Vue.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;