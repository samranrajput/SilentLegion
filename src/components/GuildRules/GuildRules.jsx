import "./GuildRules.css";

function GuildRules() {
  return (
    <div className="rules-container" data-aos="fade-up">
      <h1>📜 Official Guild Rules</h1>
      <p className="quote-box">“We don’t talk. We execute.”</p>

      <div className="rule-section">
        <h3>1. 🔥 Activity & Discipline</h3>
        <ul>
          <li>• Daily login lazmi hai.</li>
          <li>
            • 14 din bina inform offline ={" "}
            <span className="highlight">Direct Kick</span>.
          </li>
          <li>• Weekly 7–10 matches guild ke sath khelna zaroori hai.</li>
        </ul>
      </div>

      <div className="rule-section">
        <h3>2. 🧠 Behaviour & Respect</h3>
        <p>
          Zero Toxicity Policy: Gali, toxic chat, aur ego show strictly banned
          hain. SilentLegion ka naam kharab karne par instant action hoga.
        </p>
      </div>

      <div className="rule-section">
        <h3>3. ⚔️ Teamwork Above Ego</h3>
        <p>
          Solo hero ban’na mana hai. Orders aur strategies follow karna
          mandatory hai. Disagreement ho toh match ke baad calmly discuss
          karein.
        </p>
      </div>

      <div className="rule-section">
        <h3>4. 🧨 Cheating = Lifetime Ban</h3>
        <p className="highlight">
          Hack, mod, script, ya glitch use karne par permanent blacklist aur
          instant kick.
        </p>
      </div>

      <div className="rule-section">
        <h3>5. ⚔️ Guild Wars Priority</h3>
        <p>
          Guild Wars unlock hotay hi koi aur mode allowed nahi. Har member sirf
          Guild Wars khelega. Skip karne par valid reason dena hoga.
        </p>
      </div>

      <div className="rule-section">
        <h3>6. 🩸 Brotherhood & Loyalty</h3>
        <p>
          SilentLegion ek family hai. No internal politics. Jo guild chhor kar
          drama karega, uski dobara entry band hogi.
        </p>
      </div>

      <p style={{ textAlign: "center", color: "#e7c27d", marginTop: "20px" }}>
        <b>SilentLegion un logon ke liye hai jo bolte kam, jeet zyada hain.</b>
      </p>
    </div>
  );
}

export default GuildRules;
