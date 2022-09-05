import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import { Component } from 'react';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionalClick';
import ClassClick from './components/ClassClick';
class App extends Component{
  render(){
    return(
      <div className='App'>
        {/* <Greet/>
        <Welcome/> */}
        {/* <Message/> */}

        {/* DO & Dont's with state and setState */}
        {/* <Counter/> */}

        
        {/* This show that components are reusable */}
        {/* Here name and heroName are the properties of reusable component */}
        {/* <Greet name="Yash" heroName="IronMan">
          <p>This child is fan of IronMan</p>
        </Greet>
        <Greet name = "David" heroName="ShaktiMan"/>
        <Greet name="Surabhi" heroName="WonderWoman">
          <button>Action</button>
        </Greet> */}
        {/* <Welcome name="Yash" heroName="IronMan"/>
        <Welcome name="Surabhi" heroName="WonderWoman"/>
        <Welcome name = "David" heroName="ShaktiMan"/> */}
        {/* <Hello/> */}

        {/* Event Handling */}
        <FunctionClick/>
        <ClassClick/>

       
      </div>
    );
  }
}

export default App;
