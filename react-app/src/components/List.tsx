import { MouseEventHandler, useState } from "react";

interface Props{
  bikes : string[],
  heading : string
} 
function List({bikes,heading}:Props) {
  
  const handleEvent = (event: React.MouseEvent<HTMLLIElement>) => {
    console.log(event);
  };

const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>Bikes</h1>
      <ul className="list-group">
        {bikes.map((bike,index) => (
          <li key={bike} onClick={()=>{setSelectedIndex(index);}} className={selectedIndex == index? "list-group-item active" : "list-group-item"}>
            {bike}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
