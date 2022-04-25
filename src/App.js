import React from 'react'
import {connect} from 'react-redux';
import {IAction,DAction} from './Action'



const App = ({local_variable,IAction,DAction}) => {
  return (
    <div>
      <center>
        <h2>{local_variable}</h2><br/>
         <button onClick={()=>IAction(5)}>Increment</button>
         <button onClick={DAction}>Decrement</button>
      </center>
    </div>
  )
}
const mapStateToProps=state=>({
  local_variable:state
})
export default connect(mapStateToProps,{IAction,DAction})(App);
