import { useState } from "react";

function Like (){
    const [liked, setLiked] = useState(false);

    const handleClick = () => {setLiked(!liked);}
    return (
        <span onClick={handleClick}>
            {liked ? "❤️" : "🤍"}
        </span>
    );
}
export default Like