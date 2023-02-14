
import { useEffect, useState } from 'react';
import './App.css';
import DetailsPage from './react/details';
import Table from './react/script';
import logo from "./search-icon.svg"
import loadimage from "./preloader.gif"




function App() {
  const [show,setshow]=useState()
  const [data,setdata]=useState()
  const [value,setvalue]=useState("")
  const [searchdata,setsearchdata]=useState()
  const [loader,setloader]=useState(true)
  const[Details,setdetails]=useState(false)

  useEffect(()=>{
    GetData()
  },[])




  const handleChange=(e)=>{
  setvalue(e.value)
  const filterData=data.filter(i=>{
    if(i.firstName.toLowerCase().includes(e.value.toLowerCase())){
      return i
    }
    if(i.lastName.toLowerCase().includes(e.value.toLowerCase())){
      return i
    }
    if(i.email.toLowerCase().includes(e.value.toLowerCase())){
      return i
    }
  })
  setsearchdata(filterData)
  }






 







const GetData=()=>{
  // console.log(loadimage)
  setloader(true)
  fetch("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
  .then(res=>res.json())
  .then(res=>{
    setdata(res)
  setsearchdata(res)
  setloader(false)
})
}

  return (loader?
  <div id="overlay">
      <img src={loadimage} alt="Preloader icon" />
  </div>:
  <main>
    <div id='tableSection'>
      <form action="/">
        <img src={logo} alt="Search Icon" />
        <input type="text" placeholder="Enter something" name="search-box" id="search-box" value={value} onChange={(e)=>handleChange(e.target)}/>
      </form>
      <div id='table-wrapper'>
      <div id="table-headers">
            <table>
              <thead>
                  <tr>
                    <th class="column1">Id</th>
                    <th class="column2">FirstName</th>
                    <th class="column3">LastName</th>
                    <th class="column4">Email</th>
                    <th class="column5">Phone</th>
                  </tr>
              </thead>
            </table>
      </div>
      <div id='tableData'>
        <table>
          <tbody>
            {searchdata?.map((data)=><Table data={data} Details={Details} setdetails={setdetails} setshow={setshow}/>)}
          </tbody>
        </table>
        </div>
      </div>
    </div>
    {Details && <DetailsPage data={show}/> }
    </main>
  );
}

export default App;
