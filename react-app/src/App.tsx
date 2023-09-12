import "bootstrap/dist/css/bootstrap.css";
import Message from "./components/Message";
import List from "./components/List";
import React from "react";
import Table from "./components/Table";
function App() {
  const bikes = ["duke390", "cb unicorn", "vikrant"];
  return (
    <>
      {/* <Message />  */}
      <List bikes={bikes} heading="Our Bikes" />
      <br />
      {/* <Table /> */}
    </>
  );
}

export default App;
