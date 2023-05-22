import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header/Header";
import ErrorMessage from "./components/Error/Error";
import Register from "./components/Account/Register";
import Login from "./components/Account/Login";
import Profile from "./components/Account/Profile";
import Chat from "./components/Chat/Chat";
import LoggedIn from "./utils/LoggedIn";

function App() {
  return (
    <AuthProvider>
      <Header />
      <ErrorMessage />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <LoggedIn>
              <Profile />
            </LoggedIn>
          }
        />
        <Route
          path="/"
          element={
            <LoggedIn>
              <Chat />
            </LoggedIn>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
