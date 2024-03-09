import { createContext,useState } from "react";

export const StateFlagContext = createContext({});

export const StateFlagProvider = (props) => {
  const { children } = props;

  const [clickCount,setClickCount] = useState(0);
  const [isFlag,setIsFlag] = useState(false);
  const [btnValue,setBtnValue] = useState("クリックでスタート!");
  const [timer,setTimer] = useState(0);

  return (
    <StateFlagContext.Provider value={{
      clickCount,setClickCount,
      isFlag,setIsFlag,
      btnValue,setBtnValue,
      timer,setTimer,

    }}>
      {children}
    </StateFlagContext.Provider>
  )
}