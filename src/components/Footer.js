import styles from "./Footer.module.css";
import SocialLinks from "./SocialLinks";
import Button, { ButtonList } from "../components/Button";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="pixel-transition" />
        <div className="content content_sm">
          <h2>Get in touch</h2>
          <p>
            Interested in something lorem ipsum dolor
            <br />
            Two lines looked real nice didn't it
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
