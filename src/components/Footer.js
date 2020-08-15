import styles from "./Footer.module.css";
import SocialLinks from "./SocialLinks";
import Button, { ButtonList } from "../components/Button";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
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
      </div>
    </>
  );
};

export default Footer;
