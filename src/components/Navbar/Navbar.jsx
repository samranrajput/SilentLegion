import "./Navbar.css";

function Navbar({ activeNav, setActiveNav }) {
  return (
    <nav data-aos="fade-down" data-aos-delay="2000">
      <h2 data-aos="fade-right" data-aos-delay="3000">
        ѕιℓєηтℓιση
      </h2>
      <ul data-aos="fade-left" data-aos-delay="3000">
        <li
          className={activeNav === "home" ? "active" : ""}
          onClick={() => setActiveNav("home")}
        >
          <a href="#home" onClick={(e) => e.preventDefault()}>
            Home
          </a>
        </li>
        <li
          className={activeNav === "rules" ? "active" : ""}
          onClick={() => setActiveNav("rules")}
        >
          <a href="#guild-rules" onClick={(e) => e.preventDefault()}>
            Guild Rules
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
