// const heading = React.createElement("h1",{id:"heading"},"hello from seperate react");

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**************************************/

/*

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child" ,key:"child1"},
        [React.createElement("h1",{key:"heading1"},"i am h1 inside nested divs"),React.createElement("h2",{key:"heading2"},"i am h2 inside nested divs")]
    ),
React.createElement("div",{id:"child2",key:"child2"},
        [React.createElement("h1",{key:"heading3"},"i am h1 inside nested divs"),React.createElement("h2",{key:"heading4"},"i am h2 inside nested divs")]
    )]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);
 
 */

 /**************************************/

 import React from "react";
 import ReactDOM from "react-dom/client";

 // JSX - JavaScript XML
 
 // const jsxHeading = <h1 id="jsx-heading">hello from jsx</h1>; 
 // is converted to React.createElement("h1",{id:"jsx-heading"},"hello from jsx") by babel compiler 
 // which finally converted to javascript code and then rendered on the browser as html.
 //  it is a syntactic sugar for react.createElement() method.

 // JSX (transpiled by Babel) ⇒ React.createElement ⇒ ReactElement ⇒ JS Object ⇒ HTML Element(render)


 /*const multilinejsxHeading = (
 <h1 id="jsx-heading-multiline">
    hello from jsx multiline heading
    </h1>
 );

 const jsxHeading = <h1 id="jsx-heading">hello from jsx</h1>;



 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(jsxHeading);

 // this  will render the multilinejsxHeading on the browser as html element.after clearing the root element.
 root.render(multilinejsxHeading);*/


 //componnent in react is a function which returns a react element(JSX) and it can be reused multiple times in the application.
 //it must start with capital letter and it can be a class based component or functional component.

 const TitleComponent = () => {
    return (
        <h1 id="title-component">hello from title component</h1>
    );
  }
//javascript variable can be used inside JSX by using {} curly braces.
  const number = 10;

  //jsx element can be stored in a variable and can be used inside JSX by using {} curly braces.
  const element = <span id="number">{number}</span>;

  const HeaderComponent = () => {
    return (
        <div id="header-component">
            {number}
            {element}

        {/* comment inside a functional component  is insde paranthesis , we can write TitleComponent() or <TitleComponent/> to render the TitleComponent inside HeaderComponent. */}

        
        <TitleComponent />
        <TitleComponent > </TitleComponent>
        {TitleComponent()}
        <h1 id="header-component">hello from header component</h1>
        </div>
    );
  }
  
  

//if i use <TitleComponent/> inside <HeaderComponent/> it is called composition of components in react.

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HeaderComponent/>);



