import { useState } from "react";
import "./MainContent.css";

const FONT_MAP = {
  a: "α",
  b: "в",
  c: "c",
  d: "d",
  e: "є",
  f: "ғ",
  g: "g",
  h: "н",
  i: "ι",
  j: "j",
  k: "κ",
  l: "ℓ",
  m: "м",
  n: "η",
  o: "σ",
  p: "ρ",
  q: "q",
  r: "я",
  s: "ѕ",
  t: "τ",
  u: "υ",
  v: "v",
  w: "ω",
  x: "χ",
  y: "у",
  z: "z",
  A: "α",
  B: "в",
  C: "c",
  D: "d",
  E: "є",
  F: "ғ",
  G: "g",
  H: "н",
  I: "ι",
  J: "j",
  K: "κ",
  L: "ℓ",
  M: "м",
  N: "η",
  O: "σ",
  P: "ρ",
  Q: "q",
  R: "я",
  S: "ѕ",
  T: "τ",
  U: "υ",
  V: "v",
  W: "ω",
  X: "χ",
  Y: "у",
  Z: "z",
};

function MainContent({ fireConfetti }) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [finalName, setFinalName] = useState("");
  const [copyStatus, setCopyStatus] = useState("Copy Name");

  const handleInputChange = (e) => {
    const val = e.target.value;
    const lastChar = val.slice(-1);
    if (val.length > 0 && !/[a-zA-Z]/.test(lastChar)) {
      setError("Only letters allowed! No numbers or symbols.");
    } else {
      setError("");
      setInputValue(val);
    }
  };

  const handleGenerate = () => {
    if (inputValue.trim() === "") {
      setError("Please enter a name first!");
      return;
    }
    let converted = "";
    for (let char of inputValue) {
      converted += FONT_MAP[char] || char;
    }
    setFinalName(`╾ѕℓ╼ㅤ${converted}`);
    setShowModal(true);
    fireConfetti();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(finalName).then(() => {
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus("Copy Name"), 2000);
    });
  };

  return (
    <>
      <div
        className="main-content container"
        data-aos="zoom-in"
        data-aos-delay="3000"
      >
        <h1>Welcome Back ѕιℓєηтℓιση.</h1>
        <div className="form-wraper">
          <div className="form-group">
            <span className="sl">
              <span className="left-screw"></span>
              <p>ѕℓ</p>
              <span className="right-screw"></span>
            </span>
            <input
              id="guild-input"
              type="text"
              placeholder=" "
              maxLength="7"
              value={inputValue}
              onChange={handleInputChange}
            />
            <label>Enter your id name</label>
          </div>
          <p id="error-msg">{error}</p>
        </div>
        <button id="generate-btn" onClick={handleGenerate}>
          Generate Name
        </button>
      </div>

      {showModal && (
        <div
          className="modal"
          style={{ display: "flex" }}
          onClick={() => setShowModal(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h3>CONGRATULATIONS!</h3>
            <p>Your Guild Name is Ready</p>
            <div className="result-box">
              <span>{finalName}</span>
            </div>
            <button
              id="copy-btn"
              onClick={handleCopy}
              style={{
                background: copyStatus === "Copied!" ? "#22c55e" : "#560000",
              }}
            >
              {copyStatus}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MainContent;
