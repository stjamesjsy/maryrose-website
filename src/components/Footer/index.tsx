import { CONTACT_EMAIL, FACEBOOK_URL, INSTAGRAM_URL } from "@/constants";
import { FaEnvelope, FaFacebook, FaInstagram } from "react-icons/fa";
import Container from "../Container";
import SocialLink from "../SocialLink";
import styles from "./styles.module.css";

export default function Footer({ smallContainer }: { smallContainer?: boolean }) {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.links}>
                    <a href="/">Home</a>
                    <a href="/faqs">FAQs</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
                <div className={styles.socialLinks}>
                    <SocialLink href={FACEBOOK_URL} icon={<FaFacebook color="white" />} />
                    <SocialLink href={INSTAGRAM_URL} icon={<FaInstagram color="white" />} />
                    <SocialLink href={`mailto:${CONTACT_EMAIL}`} icon={<FaEnvelope color="white" />} />
                </div>
                <div className={styles.copyright}>Copyright &copy; {new Date().getFullYear()} JKOLI LIMITED t/a The Mary Rose. All rights reserved.</div>
            </Container>
        </footer>
    )
}