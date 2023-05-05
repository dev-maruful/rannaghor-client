import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    fontSize: "18px",
    fontWeight: 500,
  },
});

const Pdf = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>
            1. What is the differences between uncontrolled and controlled
            components?
          </Text>
          <Text>
            uncontrolled components and controlled components are two different
            approaches to handling user input and state management. <br />
            Uncontrolled components are typically form elements, like input,
            textarea, and select, that manage their own state internally. Where,
            Controlled components are form elements whose values are controlled
            by the React component, rather than the form element itself. <br />
            In uncontrolled components, the value of the form element is set
            initially with the value attribute, and can be accessed later with
            the same attribute. Where, in controlled components, the value of
            the form element is set by the value prop passed to the component,
            and can be accessed later with the same prop. <br />
            In uncontrolled components, when a user interacts with the form
            element, the component manages its own state and updates the value
            attribute accordingly. Where, in controlled components, when a user
            interacts with the form element, the React component updates the
            value prop, which in turn updates the value of the form element.{" "}
            <br />
            In uncontrolled components, since the state is managed internally by
            the component, it can be difficult to access or manipulate the value
            of the form element from outside the component. Where, in controlled
            components, since the state is managed by the React component, it
            can be easily accessed and manipulated from outside the component.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>
            2. How to validate React props using PropTypes?
          </Text>
          <Text>
            Here's are the steps how we can use PropTypes to validate React
            props: <br />
            1. Import the PropTypes library from the 'prop-types' package.
            <br />
            2. Define the PropTypes for the component by adding a propTypes
            object to the component class.
            <br />
            3. Use the component and pass the props with the correct data types.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>
            3. What is the difference between nodejs and express js?
          </Text>
          <Text>
            Node.js is a runtime environment that allows developers to execute
            JavaScript code outside of a web browser, making it possible to
            build scalable and high-performance web applications on the
            server-side. Node.js provides a powerful set of built-in features,
            including a file system API, networking capabilities, and a module
            system, that allow developers to build complex applications. Node.js
            can be more complex to learn than Express.js, as it requires an
            understanding of core programming concepts such as modules,
            callbacks, and event-driven programming. Node.js is a more flexible
            platform than Express.js, as it can be used for a wide variety of
            applications beyond web development, such as building desktop
            applications or running JavaScript code on embedded devices.
            <br />
            Express.js is a web application framework built on top of Node.js
            that provides a set of tools and features to make building web
            applications easier and more efficient. Express.js provides
            additional features on top of Node.js to simplify the process of
            building web applications, including routing, middleware, and
            templating engines. Express.js is built on top of Node.js and
            provides a simpler and more intuitive API, making it easier for
            developers to build web applications. Express.js is designed
            specifically for web development, making it a more specialized and
            focused framework.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>
            4. What is a custom hook, and why will you create a custom hook?
          </Text>
          <Text>
            In React, a custom hook is a function that allows us to reuse
            stateful logic across multiple components. Custom hooks are a
            powerful feature of React, as they enable us to create reusable
            logic that can be shared between components without duplicating code
            or introducing complex inheritance hierarchies. <br />
            We would create a custom hook for various reasons such as: When we
            find us repeating the same logic across multiple components, it can
            be a good indication that a custom hook would be helpful to reduce
            code duplication. we might want to encapsulate complex logic or API
            calls into a reusable hook that can be used across multiple
            components, thus abstracting away implementation details and making
            it easier to use. we might want to simplify the code in your
            components by moving some of the stateful logic to a custom hook,
            making the code in the components more focused and easier to read.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
