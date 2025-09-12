import React, { useState } from "react";

const CrochetWebsite = () => {
  const [activeModal, setActiveModal] = useState(null);

  const infoBoxes = {
    basicStitches: { title: "Basic Crochet Stitches", content: "Learn the foundation of crochet with these essential stitches: Chain (ch), Single Crochet (sc), Half Double Crochet (hdc), Double Crochet (dc), and Treble Crochet (tr). Master these and you can create almost anything!" },
    tools: { title: "Essential Crochet Tools", content: "You'll need: Crochet hooks (various sizes), yarn scissors, stitch markers, measuring tape, and a yarn needle for weaving in ends. Start with aluminum hooks - they're smooth and affordable!" },
    yarnTypes: { title: "Yarn Weight Guide", content: "Yarn weights range from 0 (lace) to 6 (super bulky). Worsted weight (4) is perfect for beginners! Cotton is great for dishcloths, acrylic for blankets, and wool for cozy sweaters." },
    patterns: { title: "Reading Patterns", content: "Crochet patterns use abbreviations and symbols. Always check the pattern's abbreviation key! Start with simple projects like scarves or granny squares before tackling complex amigurumi." },
    tips: { title: "Beginner Tips", content: "Keep consistent tension, count your stitches, and don't be afraid to frog (rip out) your work if needed. Practice makes perfect, and every crocheter has dropped stitches - it's part of learning!" },
    projects: { title: "Fun Project Ideas", content: "Start with: dishcloths, scarves, simple hats, granny square blankets, or cute amigurumi animals. These projects help you practice different techniques while creating useful items!" },
  };

  const openModal = (modalKey) => setActiveModal(modalKey);
  const closeModal = () => setActiveModal(null);

  const cardStyle = {
    background: "white",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "0.3s",
    textAlign: "center",
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#faf5ff", minHeight: "100vh" }}>
      <header style={{ background: "linear-gradient(to right, pink, violet, skyblue)", color: "white", padding: "40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>💖 Cozy Crochet Corner 💖</h1>
        <p>Your magical journey into the world of yarn and hooks begins here! ✨</p>
      </header>

      <main style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {Object.keys(infoBoxes).map((key) => (
            <div key={key} style={cardStyle} onClick={() => openModal(key)}>
              <div style={{ fontSize: "40px", marginBottom: "10px" }}>🧶</div>
              <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>{infoBoxes[key].title}</h3>
              <p style={{ color: "#555" }}>Click to learn more!</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "40px", textAlign: "center", background: "lavender", borderRadius: "20px", padding: "20px" }}>
          <div style={{ fontSize: "40px" }}>⭐</div>
          <blockquote style={{ fontSize: "20px", fontStyle: "italic", margin: "10px 0" }}>
            "You'll learn to love crocheting, you can create anything you can think of!"
          </blockquote>
          <div style={{ fontSize: "24px" }}>💖 🧶 ✨</div>
        </div>
      </main>

      {activeModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div style={{ background: "white", borderRadius: "16px", padding: "20px", maxWidth: "400px", width: "100%", textAlign: "center", boxShadow: "0 6px 12px rgba(0,0,0,0.2)" }}>
            <h2 style={{ fontSize: "22px", color: "purple" }}>{infoBoxes[activeModal].title}</h2>
            <p style={{ margin: "20px 0", color: "#444" }}>{infoBoxes[activeModal].content}</p>
            <button onClick={closeModal} style={{ background: "linear-gradient(to right, pink, violet)", color: "white", padding: "10px 20px", border: "none", borderRadius: "25px", cursor: "pointer" }}>
              Got it! 💕
            </button>
          </div>
        </div>
      )}

      <footer style={{ marginTop: "40px", background: "linear-gradient(to right, purple, pink)", color: "white", padding: "20px", textAlign: "center" }}>
        <p>Happy Crocheting! 🧶✨</p>
        <p>Made with love and lots of yarn 💖</p>
      </footer>
    </div>
  );
};

export default CrochetWebsite;
