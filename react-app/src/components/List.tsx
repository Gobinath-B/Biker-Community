function List(){
    const bikes = ["duke390","cb unicorn","vikrant"];
    
     return(
        
       <> 
       <h1>Bikes</h1>
        <ul className="list-group">
          {bikes.map(bike=><li key={bike} onClick={()=>{console.log(bike + "clicked")}} className="list-group-item">{bike}</li>)}      
      </ul>
      </>
     );
};

export default List;