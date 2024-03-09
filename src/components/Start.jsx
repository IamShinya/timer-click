import { useFunction } from "../hooks/useFunction";

const btnStyle = {
  width: "400px",
  height: "50px",
  fontSize: "20px",
  marginTop: "10px",
  
};

const Start = (props) => {

  const {isFlag,setIsFlag,btnValue,setBtnValue,setTimer,intervalRef} = useFunction();
  
  
  const timeCount = () => {
    setIsFlag(true);
    setBtnValue(props.children[1]);
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    },500);
  };
      
  const pauseTime = () => {
    setBtnValue(props.children[0]);
    clearInterval(intervalRef.current);
    setIsFlag(false);
  };

  return (
    <>
      {isFlag ? (
        <button style={btnStyle} onClick={pauseTime}>{btnValue}</button>
      ) : (
        <button style={btnStyle} onClick={timeCount}>{btnValue}</button>
      )}
    </>
    
  )

}



export default Start;