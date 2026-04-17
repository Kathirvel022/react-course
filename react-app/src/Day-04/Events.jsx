function Events(){
    function handleClick(name){
        alert("Hi Sriii" + name)
    }
    return(
        <button onClick={()=> handleClick(" Balan")}>click me</button>
    );
}
export default Events