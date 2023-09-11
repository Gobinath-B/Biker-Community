import { MouseEventHandler } from "react";
function List() {
  const bikes = ["duke390", "cb unicorn", "vikrant"];
  const handleEvent = (event: React.MouseEvent<HTMLLIElement>) => {
    console.log(event);
  };

  return (
    <>
      <h1>Bikes</h1>
      <ul className="list-group">
        {bikes.map((bike) => (
          <li key={bike} onClick={handleEvent} className="list-group-item">
            {bike}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
