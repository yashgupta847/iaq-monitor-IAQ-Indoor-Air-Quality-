import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./Footer";
import Header from "./Header";

const Feedback = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (msg.length === 0) return;

    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, email: user?.email }),
      });

      if (res.ok) {
        setSuccess(
          "Thank you for your feedback! , We will work on your feedback"
        );
        setMsg("");
      } else {
        setSuccess(" Something went wrong. Try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccess("⚠️ Server not responding.");
    } finally {
      setLoading(false);
    }
  };
  const [selectedImg, setSelectedImg] = useState(null);
  const images = [
    "https://www.mouser.in/images/microsites/build-indoor-air-quality-monitor-theme.jpg",
    "https://www.smartspaces.app/wp-content/uploads/2021/05/indoor-air-quality-monitoring-software.jpg",
    "https://d3pcsg2wjq9izr.cloudfront.net/files/132034/products/919864/132034_4_202212260837340251375_raw.jpg",
    "https://www.hibouair.com/images/img-05.png",
  ];

  return (
    <>
      <Header />
      <div
        style={{
          minHeight: "100vh",
          padding: "0px",
          background: "linear-gradient(135deg, #ffffffff, #bef0f7ff)",
          fontFamily: "'Google Sans Text', sans-serif",
        }}
      >
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Google Sans Text', sans-serif" }}>
            Your Feedback is precious for us.
          </h2>
          <form onSubmit={handleSubmit}>
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Your feedback here..."
              rows={5}
              style={{
                width: "40%",
                height: "400px",
                padding: "10px",
                fontFamily: "'Google Sans Text', sans-serif",
              }}
            />
            <br />
            <button
              type="submit"
              disabled={msg.length === 0 || loading}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                cursor: msg.length === 0 ? "not-allowed" : "pointer",
                backgroundColor: msg.length === 0 ? "#e2e2e2ff" : "#aeaeaeff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
              }}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            {success && <p style={{ marginTop: "10px" }}>{success}</p>}
            <br />
            <hr />
            <br />
          </form>

          <div
            style={{
              width: "100%",
              display: "flex",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {images.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Image${idx + 1}`}
                    style={{
                      flex: "1 1 200px",
                      maxWidth: "calc(25% - 10px)",
                      height: "auto",
                      borderRadius: "10px",
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}
                    onClick={() => setSelectedImg(src)}
                  />
                ))}
              </div>

              {/* Modal for full-screen image */}
              {selectedImg && (
                <div
                  onClick={() => setSelectedImg(null)}
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                  }}
                >
                  <img
                    src={selectedImg}
                    alt="FullScreen"
                    style={{
                      maxWidth: "90%",
                      maxHeight: "90%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Feedback;
