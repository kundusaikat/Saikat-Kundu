import "./Contact.scss";
import { LinkedIn, GitHub, Email, Call, Favorite } from "@material-ui/icons";

export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h3>GET IN TOUCH</h3>
      <div className="iconContainer">
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/kundusaikat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>

          <a
            href="https://www.linkedin.com/in/kundusaikat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>

          <a
            href="https://www.linkedin.com/in/kundusaikat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email />
          </a>

          <a
            href="https://www.linkedin.com/in/kundusaikat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Call />
          </a>
        </div>
      </div>
      <p>
        Mede with <Favorite /> by Saikat Kundu.
      </p>
    </div>
  );
};
