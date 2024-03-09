import { useContext,useRef } from "react";
import { StateFlagContext } from "../components/providers/StateProvider";


export const useFunction = () => {
  const {clickCount,setClickCount,isFlag,setIsFlag,btnValue,setBtnValue,timer,setTimer,} = useContext(StateFlagContext);
  const intervalRef = useRef(null);



  return ({clickCount,setClickCount,isFlag,setIsFlag,btnValue,setBtnValue,timer,setTimer,intervalRef,}) 
};