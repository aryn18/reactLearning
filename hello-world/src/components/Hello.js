import React from "react";
const Hello= () => {

    //JSX from
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello React</h1>
    //     </div>
    // )

    return React.createElement('div', {id: 'hello', className: 'dummyClass'}, React.createElement( 'h1', null, 'Hello REACT.JS'))
}

export default Hello