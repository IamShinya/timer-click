import Random from "./Random";
import Start from "./Start";
import Result from "./Result";

export const App = () => {
  const containerStyle = {
    margin: "auto",
  };
    
  return(
    <div style={containerStyle}>
      <Random />

      <Start>{["スタート","ストップ"]}</Start>

      <Result />
    </div>
  );
};
// 50px 400px
