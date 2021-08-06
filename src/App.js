import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Swap from "./components/swap/Swap";
import Header from "./components/global/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="bg-black font-roboto h-screen text-white">
          <Header />
          <Swap />
        </div>
        
      </Router>
    </div>
  );
}

export default App;
