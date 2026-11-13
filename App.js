// const heading = React.createElement("h1",{id:"heading"},"hello from seperate react");

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**************************************/

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

 /**************************************/
