import { useState, useEffect } from "react";

function Fetch(){
    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch("/data.json")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    },[])
    return(
        <div>
            {users.map((u) => (
                <h2 key={u.id}>{u.id}:{u.email}</h2>
            ))}
        </div>
    )
}
export default Fetch;