// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Home from "./components/Home";
// import ChartDisplayPage from "./components/ChartDisplayPage";
// import Feedback from "./components/Feedback";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import { useState, useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./firebase";
// import ForgotPassword from "./components/ForgotPassword";
// import { Auth0Provider } from "@auth0/auth0-react";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Auth0Provider
//     domain="YOUR_AUTH0_DOMAIN"
//     clientId="YOUR_AUTH0_CLIENT_ID"
//     authorizationParams={{ redirect_uri: window.location.origin }}
//   >
//     <App />
//   </Auth0Provider>
// );

// function App() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // to wait for Firebase to load user

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/signup"
//           element={<Signup onSignup={(user) => setUser(user)} />}
//         />
//         <Route
//           path="/login"
//           element={<Login onLogin={(user) => setUser(user)} />}
//         />
//         <Route
//           path="/dashboard"
//           element={user ? <ChartDisplayPage /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/feedback"
//           element={user ? <Feedback /> : <Navigate to="/login" />}
//         />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// App.js
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import ChartDisplayPage from "./components/ChartDisplayPage";
import Feedback from "./components/Feedback";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPage from "./components/Loading";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading)
    return (
      <p>
        <LoadingPage></LoadingPage>
      </p>
    );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <ChartDisplayPage /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/feedback"
          element={isAuthenticated ? <Feedback /> : <Navigate to="/login" />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/loading" element={<LoadingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
