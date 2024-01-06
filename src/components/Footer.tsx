import linkedInIcon from "../assets/linkedIn.png";
import instagramIcon from "../assets/instagramIcon.png";
import githubIcon from "../assets/githubIcon.png";

export function Footer() {
  return (
    <footer>
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/sarahvb/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedInIcon} alt="LinkedIn logo" />
        </a>
        <a
          href="https://github.com/sarahvberg"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="Github logo" />
        </a>
        <a
          href="https://www.instagram.com/sarahvberg"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram logo" />
        </a>
      </div>
    </footer>
  );
}
