import React from "react";

const Blog = () => {
  return (
    <div className="my-8 px-4">
        <div>
        <h2 className="text-2xl font-bold">1.What is react?</h2>
        <p>
          ReactJS is one of the most popular JavaScript libraries for mobile and
          web application development. Created by Facebook, React contains a
          collection of reusable JavaScript code snippets called components that
          are used for user interface (UI) building. It’s important to note that
          ReactJS is not a JavaScript framework. That’s because it’s only
          responsible for rendering the components of an application’s view
          layer. React is an alternative to frameworks like Angular and Vue,
          which all allow to create complex functions. This article will explore
          React’s features, explain how it works, and go over its benefits for
          front-end developers. We’ll also cover the differences between ReactJS
          and React Native regarding their roles in the web and mobile app
          development industry.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">1.How does react work?</h2>
        <p>
        React creates a VIRTUAL DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. React only changes what needs to be changed!
        </p>
      </div>
      
    </div>
  );
};

export default Blog;
