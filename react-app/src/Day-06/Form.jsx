import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        alert ("Welcome" + name);
    }
  return (
    <form onSubmit={handleSubmit}>
        <input placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
        <button type="Submit">Submit</button>
    </form>
  );
}
export default Form