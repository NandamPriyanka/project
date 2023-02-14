import React from "react";

const Table=(props)=>{
    // console.log(props)
  return (<tr class="data-row" onClick={()=>{
    props.setdetails(true)
    props.setshow(props.data)
}
  }>

    <td class="column1">{props.data.id}</td>
     <td class="column2">{props.data.firstName} </td>
     <td class="column3">{props.data.lastName}</td>
     <td class="column4">{props.data.email}</td>
     <td class="column5">{props.data.phone} </td>
   </tr>)
}
export default Table