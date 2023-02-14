const DetailsPage=(props)=>{
    console.log(props)
 return <div id="info-wrapper">
 <h1>Details</h1>
 <p>Click on a table item to get detailed information</p>
 <div>
     <div><b>User selected:</b> {props.data.firstName}</div>
     <div>
         <b>Description: </b>
         <textarea cols="50" rows="5" readonly>
            {props.data.description}        
            </textarea>
     </div>
     <div><b>Address:</b> {props.data.address.streetAddress}</div>
     <div><b>City:</b> {props.data.address.city}</div>
     <div><b>State:</b> {props.data.address.state}</div>
     <div><b>Zip:</b> {props.data.address.zip}</div>
 </div>
</div>
}
export default DetailsPage