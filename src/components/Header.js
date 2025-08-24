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
        display: "flex",
        flexDirection: "column",
        background: isScrolled
          ? "rgba(136, 135, 135, 0.9)"
          : "rgba(40, 40, 40, 1)",
        transition: "background 0.3s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>
          <img
            style={{ height: "50px", width: "auto" }}
            src="https://applied-nanodetectors.com/wp-content/uploads/2022/10/MicrosoftTeams-image-3-scaled.jpg"
            alt="Logo"
          />
        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: "24px",
          }}
        >
          ☰
        </button>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {/* Desktop Links */}
          <div className="nav-links" style={{ display: "flex", gap: "15px" }}>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </Link>
            <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>
              Dashboard
            </Link>
            <Link to="/feedback" style={{ color: "#fff", textDecoration: "none" }}>
              Feedback
            </Link>

            {isAuthenticated ? (
              <div style={{ position: "relative" }}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  style={{
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
                      top: "35px",
                      right: 0,
                      backgroundColor: "#fff",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      minWidth: "160px",
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
          </div>
        </nav>
      </div>

      {/* Mobile menu links */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px 20px",
            background: "#282828",
          }}
        >
          <Link to="/" style={{ color: "#fff", textDecoration: "none", margin: "5px 0" }}>
            Home
          </Link>
          <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none", margin: "5px 0" }}>
            Dashboard
          </Link>
          <Link to="/feedback" style={{ color: "#fff", textDecoration: "none", margin: "5px 0" }}>
            Feedback
          </Link>
        </div>
      )}

      {/* Inline CSS Media Queries */}
      <style>
        {`
          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }
            .mobile-menu-button {
              display: block;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
