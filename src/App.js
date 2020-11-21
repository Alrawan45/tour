import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setloading] = useState(false);
  const [tour, setTour] = useState([]);
  const removeFun=(id)=>{
  
      const rawanAl=tour.filter((mann)=>mann.id !==id)
      setTour(rawanAl);
    }
  const fetchHost=async () =>{
    setloading(true);
    try {
      const response = await fetch(url);
      const human = await response.json();
      setloading(false);
      setTour(human);
      
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };
  useEffect(()=>{
    fetchHost();
  },[]);
  if(loading){
    return(
    <main>
    <Loading />
  </main>)
}
if(tour.length === 0){
  return(
    <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={fetchHost}>refresh</button>
      </div>
    </main>
  )
}
  return (
     <main>
    <Tours hello={tour} butt={removeFun} />
  </main>
  )
  
   }

export default App;
