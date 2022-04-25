export const IAction=(value)=>async dispatch=>{
    dispatch({
        type:"Increment",
        payload:value
    })
}
export const DAction=()=>async dispatch=>{
    dispatch({
        type:"Decrement"
    })
} 