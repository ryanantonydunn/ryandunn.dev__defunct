import SocialLinks from "../social-links/SocialLinks";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className="pixel-transition" />
      <div className="content content_sm">
        <div className="text-center pt-6">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
