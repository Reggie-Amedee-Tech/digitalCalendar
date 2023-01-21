import { Route, Routes, Navigate } from "react-router-dom"
import Main from "./components/Main"
import Signup from "./components/SignUp"
import Login from "./components/Login"
import { Provider } from "react-redux"
import store from "./app/store"

function App() {
  const user = localStorage.getItem("token")
  return (
    <div className="App">
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  )
}

export default App
