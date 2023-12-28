import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement('h1', {id: 'heading'}, 'Hello world from React !!!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
const Title = () => {
    return <h1> Iam from Title component.</h1>
}

// React Element
const heading = (<h1> 
    iam heading react 
    </h1>)

// Component composition and also React functional componet
// RFC:Its normal JS function which returns JSX or React element is known as React functional component.
const HeadingComponent = ()=> (
    <div id="heading">
      <Title/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>);