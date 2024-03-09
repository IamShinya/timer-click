
import ReactDOM from "react-dom";
import { App } from "./components/App.jsx";
import { StateFlagProvider } from "./components/providers/StateProvider.jsx";

ReactDOM.render(
  <StateFlagProvider>
    <App />
  </StateFlagProvider>
  
  ,document.getElementById("root")
);