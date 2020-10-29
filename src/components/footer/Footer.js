import styles from "./Footer.module.css";
import SocialLinks from "../social-links/SocialLinks";
import Button, { ButtonList } from "../../components/button/Button";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className="pixel-transition" />
      <div className="content content_sm">
        <h2>Contact</h2>
        <p>
          Want to get in touch?
          <br />
          Please drop me an email.
        </p>
        <ButtonList>
          <Button href="https://www.raildiary.com/en" title="Send email" />
        </ButtonList>
        <div className="text-center pt-6">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
