import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home.tsx";
import SignInPage from "./components/SignInPage.tsx";
import Account from "./components/Account.tsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignInPage />} />
              <Route path="/account" element={<Account />} />
          </Routes>
      </Router>
  )
}

export default App
