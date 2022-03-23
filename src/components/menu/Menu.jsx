import "./menu.scss";

export const Menu = ({ menuOpen, setMenuOpen }) => {
  const handleChange = () => {
    setMenuOpen(false);
  };
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={handleChange}>
          <a href="#home">Home</a>
        </li>
        <li onClick={handleChange}>
          <a href="#about">About</a>
        </li>
        <li onClick={handleChange}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={handleChange}>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a
            target=" _blank"
            href="https://drive.google.com/file/d/1QvflGH5R_BklVGjtSA_07nq1nQGidRV4/view?usp=sharing"
          >
            Resume
          </a>
        </li>
        <li onClick={handleChange}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};
