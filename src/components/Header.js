import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    setDropdownOpen(false);
  };

  return (
    <header
      style={{
        fontFamily: "'Google Sans Text', sans-serif",
        height: "60px",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        color: "#fff",
        transition: "background 0.3s ease",
        background: isScrolled
          ? "rgba(136, 135, 135, 0.9)"
          : "rgba(40, 40, 40, 1)",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>
        <img
          style={{ height: "80px", width: "auto" }}
          src="https://applied-nanodetectors.com/wp-content/uploads/2022/10/MicrosoftTeams-image-3-scaled.jpg"
          alt="Logo"
        />
      </div>

      <nav>
        <Link
          to="/"
          style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}
        >
          Dashboard
        </Link>
        <Link
          to="/feedback"
          style={{ color: "#fff", margin: "0 15px", textDecoration: "none" }}
        >
          Feedback
        </Link>

        {isAuthenticated ? (
          <div style={{ position: "relative", display: "inline-block" }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                margin: "0 15px",
                padding: "5px 10px",
                cursor: "pointer",
                border: "none",
                borderRadius: "5px",
                color: "#fff",
                background: "transparent",
              }}
            >
              <img
                style={{ height: "20px" }}
                src="https://cdn-icons-png.flaticon.com/128/456/456212.png"
                alt="User"
              />
            </button>

            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "40px",
                  right: 0,
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  minWidth: "180px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  zIndex: 1000,
                }}
              >
                <p style={{ padding: "10px", margin: 0, color: "black" }}>
                  {user?.name || user?.email}
                </p>

                <button
                  onClick={handleLogout}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "none",
                    backgroundColor: "#ff4d4d",
                    color: "#fff",
                    cursor: "pointer",
                    borderRadius: "0 0 5px 5px",
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            style={{
              margin: "0 15px",
              padding: "5px 10px",
              cursor: "pointer",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "#ff4d4d",
              color: "#fff",
            }}
          >
            Login/Signup
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
