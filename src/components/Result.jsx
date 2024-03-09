import { useFunction } from "../hooks/useFunction";

const resultStyle = {
    
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center", 
  width: "400px",
  height: "50px",
  fontSize: "20px",
};

const resultStyleChild = {
  border:"1px solid black",
  display: "inlineBlock",
  width: "40%",
  textAlign: "right",
};

const Result = () => {
  const {clickCount,timer} = useFunction();

  return(
    <>
      <div style={resultStyle}>
          <p style={resultStyleChild}>{clickCount}</p>
          <p style={resultStyleChild}>{`${timer}秒`}</p>
      </div>
    </>
  )
};


export default Result;