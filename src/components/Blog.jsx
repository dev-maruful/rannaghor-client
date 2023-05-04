import React from "react";
import Pdf from "react-to-pdf";
import Lottie from "lottie-react";
import blog from "../assets/87979-work-hard.json";
const ref = React.createRef();

const Blog = () => {
  return (
    <>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button
            className="btn btn-error flex mx-auto mb-8 md:mb-0 mt-8 font-bold"
            onClick={toPdf}
          >
            Download Pdf
          </button>
        )}
      </Pdf>
      <div
        ref={ref}
        className="max-w-7xl mx-auto my-10 flex items-center gap-5"
      >
        <div className="flex-1">
          <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
            <input type="checkbox" />
            <div className="collapse-title text-2xl font-medium">
              Tell us the differences between uncontrolled and controlled
              components.
            </div>
            <div className="collapse-content text-lg">
              <div>
                uncontrolled components and controlled components are two
                different approaches to handling user input and state
                management.
                <br />
                <strong>Uncontrolled components:</strong>
                <ul className="list-disc">
                  <li className="ml-5">
                    Uncontrolled components are typically form elements, like
                    input, textarea, and select, that manage their own state
                    internally.
                  </li>
                  <li className="ml-5">
                    The value of the form element is set initially with the
                    value attribute, and can be accessed later with the same
                    attribute.
                  </li>
                  <li className="ml-5">
                    When a user interacts with the form element, the component
                    manages its own state and updates the value attribute
                    accordingly.
                  </li>
                  <li className="ml-5">
                    Since the state is managed internally by the component, it
                    can be difficult to access or manipulate the value of the
                    form element from outside the component.
                  </li>
                </ul>
                <strong>Controlled components:</strong>
                <ul className="list-disc">
                  <li className="ml-5">
                    Controlled components are form elements whose values are
                    controlled by the React component, rather than the form
                    element itself.
                  </li>
                  <li className="ml-5">
                    The value of the form element is set by the value prop
                    passed to the component, and can be accessed later with the
                    same prop.
                  </li>
                  <li className="ml-5">
                    When a user interacts with the form element, the React
                    component updates the value prop, which in turn updates the
                    value of the form element.
                  </li>
                  <li className="ml-5">
                    Since the state is managed by the React component, it can be
                    easily accessed and manipulated from outside the component.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
            <input type="checkbox" />
            <div className="collapse-title text-2xl font-medium">
              How to validate React props using PropTypes?
            </div>
            <div className="collapse-content text-lg">
              <div>
                <strong>
                  {" "}
                  Here's are the steps how we can use PropTypes to validate
                  React props:
                </strong>
                <ul className="list-disc">
                  <li className="ml-5">
                    Import the PropTypes library from the 'prop-types' package.
                  </li>
                  <li className="ml-5">
                    Define the PropTypes for the component by adding a propTypes
                    object to the component class.
                  </li>
                  <li className="ml-5">
                    Use the component and pass the props with the correct data
                    types.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
            <input type="checkbox" />
            <div className="collapse-title text-2xl font-medium">
              Tell us the difference between node js and express js.
            </div>
            <div className="collapse-content text-lg">
              <div>
                Node.js is a JavaScript runtime built on the V8 JavaScript
                engine, while Express.js is a minimal and flexible Node.js web
                application framework. Here are some differences between Node.js
                and Express.js:
                <br />
                <strong>Purpose:</strong>
                <ul className="list-disc">
                  <li className="ml-5">
                    Node.js is a runtime environment that allows developers to
                    execute JavaScript code outside of a web browser, making it
                    possible to build scalable and high-performance web
                    applications on the server-side.
                  </li>
                  <li className="ml-5">
                    Express.js is a web application framework built on top of
                    Node.js that provides a set of tools and features to make
                    building web applications easier and more efficient.
                  </li>
                </ul>
                <strong>Features:</strong>
                <ul className="list-disc">
                  <li className="ml-5">
                    Node.js provides a powerful set of built-in features,
                    including a file system API, networking capabilities, and a
                    module system, that allow developers to build complex
                    applications.
                  </li>
                  <li className="ml-5">
                    Express.js provides additional features on top of Node.js to
                    simplify the process of building web applications, including
                    routing, middleware, and templating engines.
                  </li>
                </ul>
                <strong>Learning curve:</strong>
                <ul className="list-disc">
                  <li className="ml-5">
                    Node.js can be more complex to learn than Express.js, as it
                    requires an understanding of core programming concepts such
                    as modules, callbacks, and event-driven programming.
                  </li>
                  <li className="ml-5">
                    Express.js is built on top of Node.js and provides a simpler
                    and more intuitive API, making it easier for developers to
                    build web applications.
                  </li>
                </ul>
                <strong>Flexibility:</strong>
                <ul className="list-disc">
                  <li className="ml-5">
                    Node.js is a more flexible platform than Express.js, as it
                    can be used for a wide variety of applications beyond web
                    development, such as building desktop applications or
                    running JavaScript code on embedded devices.
                  </li>
                  <li className="ml-5">
                    Express.js is designed specifically for web development,
                    making it a more specialized and focused framework.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
            <input type="checkbox" />
            <div className="collapse-title text-2xl font-medium">
              What is a custom hook, and why will you create a custom hook?
            </div>
            <div className="collapse-content text-lg">
              <div>
                In React, a custom hook is a function that allows us to reuse
                stateful logic across multiple components. Custom hooks are a
                powerful feature of React, as they enable us to create reusable
                logic that can be shared between components without duplicating
                code or introducing complex inheritance hierarchies.
                <br />
                <strong>
                  we would create a custom hook for various reasons such as:
                </strong>
                <ul className="list-disc">
                  <li className="ml-5">
                    Reusability: When we find us repeating the same logic across
                    multiple components, it can be a good indication that a
                    custom hook would be helpful to reduce code duplication.
                  </li>
                  <li className="ml-5">
                    Abstraction: we might want to encapsulate complex logic or
                    API calls into a reusable hook that can be used across
                    multiple components, thus abstracting away implementation
                    details and making it easier to use.
                  </li>
                  <li className="ml-5">
                    Simplification: we might want to simplify the code in your
                    components by moving some of the stateful logic to a custom
                    hook, making the code in the components more focused and
                    easier to read.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Lottie animationData={blog} loop={true}></Lottie>
        </div>
      </div>
    </>
  );
};

export default Blog;
