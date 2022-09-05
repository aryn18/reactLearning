import React from 'react'
// functional component
// these are the two ways to destruture props in the functional components


// Method one destructing props

// const Greet = ({name, heroName}) => {
//     return (
//         <div>
//         <h1>Hello {name} a.k.a {heroName}</h1>
//         </div>
//     )
// }
// export default Greet;


// Method two destructing props
const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
        <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}
export default Greet;