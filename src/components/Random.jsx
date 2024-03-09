import { useFunction } from "../hooks/useFunction";

const outDiv = {
  width: "400px",
  height: "400px",
  border: "1px solid black",
  display: "grid",
  gridTemplateColumns: "repeat(10,40px)",
  gridAutoRows: "40px",
};

const inDiv = {
  backgroundColor: "black"
};

const inDiv2 = {
  opacity: "0"
};




  const Random = () => {

    const { setClickCount,isFlag } = useFunction();

    const list = [];
    //listに１００個の値を追加
    for (let i = 1; i <= 99; i++) {
      list.push(i);
    }
  
    
    const blockClickCount = () => {
      isFlag && setClickCount((prev) => prev + 1);
      
    };

    //新たな配列の値に<span>を追加
    const listSpan = list.map((value) => <div style={inDiv2} key={value}></div>);
  
    const list2 = <div style={inDiv} key={0} onClick={blockClickCount} ></div>;
  
    listSpan.push(list2);
  
    // 乱数を用いり値をランダムに並べ替え、新たな配列を作成
    
      let num = listSpan.length;
      while (num) {
        let i = Math.floor(Math.random() * num);
        let str = listSpan[--num];
        listSpan[num] = listSpan[i];
        listSpan[i] = str;
      }
    
    return <div style={outDiv}>{listSpan}</div>;
  };




export default Random;