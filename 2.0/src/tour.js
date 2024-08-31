import React,{useState,useEffect} from "react";
import './tour.css';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';


function Tour ()
{

    const [tourData,setTourData]= useState([]);

    const fetchTour =()=> fetch('https://www.course-api.com/react-tours-project')
    .then(response=>response.json())
    .then(data=>setTourData(data));

    useEffect(()=>{
        fetchTour();
    },[])

    const handleInterest=(id)=>
    {
        const filteredTour = tourData.filter(td=>td.id!==id)
        setTourData(filteredTour)
    }

    const handlerefresh=()=>
    {
        fetchTour();
    }


    return(
        <div >
            <h1>Our Tours</h1>
            <div className="borderLine-container">
  <div className="borderLine"></div>
</div>

            <div className="container">
            {tourData.map(td=>

          <div className=" col-md-6 mb-4 card_Container ">  
          <card><img src={td.image}/>
            
            <div className="d-flex"> <h4>{td.name}</h4> <h5>${td.price}</h5> </div>
             <p>{td.info}</p>

             <button className="btn btn-primary" onClick={()=>handleInterest(td.id)}>Not Interested</button>
             
             </card>  

             
            </div>)}

            {(tourData.length==0) && <div className="d-flex flex-column mt-1"><h2 className="tr">No Tours Available</h2><button className="btn btn-primary" onClick={handlerefresh}>Refresh </button></div>}


        </div>
        </div>
    )
}
export default Tour