import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home.tsx";
import Sign from "./components/Sign.tsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Sign type={'up'}/>} />
              <Route path="/signip" element={<Sign type={'in'}/>} />
          </Routes>
      </Router>
  )
}

export default App
