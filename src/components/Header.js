import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        fontFamily: "'Google Sans Text', sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        background: isScrolled
          ? "rgba(136, 135, 135, 0.9)"
          : "rgba(40, 40, 40, 1)",
        transition: "background 0.3s ease",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        {/* Logo */}
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>
          <img
            style={{ height: "50px", width: "auto" }}
            src="https://applied-nanodetectors.com/wp-content/uploads/2022/10/MicrosoftTeams-image-3-scaled.jpg"
            alt="Logo"
          />
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            fontSize: "24px",
            background: "transparent",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            display: "none", // show only on mobile via media query
          }}
          className="hamburger"
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav
          className="nav-desktop"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/dashboard"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Dashboard
          </Link>
          <Link
            to="/feedback"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Feedback
          </Link>

          {isAuthenticated ? (
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  padding: "5px",
                  cursor: "pointer",
                  border: "none",
                  background: "transparent",
                }}
              >
                <img
                  style={{ height: "25px", borderRadius: "50%" }}
                  src="https://cdn-icons-png.flaticon.com/128/456/456212.png"
                  alt="User"
                />
              </button>

              {dropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "35px",
                    right: 0,
                    backgroundColor: "#fff",
                    color: "#000",
                    borderRadius: "5px",
                    minWidth: "160px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    zIndex: 1000,
                  }}
                >
                  <p style={{ padding: "10px", margin: 0 }}>
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
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px 20px",
            background: "#282828",
            color: "#fff",
          }}
          className="nav-mobile"
        >
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/dashboard"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Dashboard
          </Link>
          <Link
            to="/feedback"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Feedback
          </Link>
          {isAuthenticated ? (
            <>
              <p>{user?.name || user?.email}</p>
              <button
                onClick={handleLogout}
                style={{
                  padding: "10px",
                  border: "none",
                  backgroundColor: "#ff4d4d",
                  color: "#fff",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              style={{
                padding: "10px",
                border: "none",
                backgroundColor: "#ff4d4d",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Login/Signup
            </button>
          )}
        </div>
      )}

      {/* Media Queries */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .hamburger { display: block; }
        }
      `}</style>
    </header>
  );
};

export default Header;
