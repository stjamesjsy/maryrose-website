import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FACEBOOK_URL, INSTAGRAM_URL } from "@/constants";
import clsx from "clsx";
import { useRef } from "react";
import styles from "./styles.module.css";
import { LuCalendar, LuChevronDown, LuClock, LuFacebook, LuHeadphones, LuInstagram, LuMic, LuVolleyball } from "react-icons/lu";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";

export default function Index() {
    const contactRef = useRef<HTMLDivElement>(null);

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    return (
        <div className="page">
            <div className={clsx("page-content")}>
                <Navbar homepage />
                <div className={styles.hero}>
                    <div className={styles.heroBg} />
                    <div className={styles.heroContent}>
                        <Container>
                            <div className={styles.heroInner}>
                                <div className={styles.heroInnerContent}>
                                    <img className={styles.logo} src="/images/logo.png" />
                                    {/* <h1>THE <span className={styles.mary}>MARY</span></h1>
                                        <h1>ROSE</h1> */}
                                    <p className={styles.tagline}>
                                        Pub · Bar · Nightclub
                                    </p>
                                    <p className={styles.tagline2}>
                                        Sports on the big screens. Karaoke every Friday. Quiz night every other Tuesday. Located at the Weighbridge, the heart of Jersey's nightlife.
                                    </p>

                                    <div className={styles.heroButtons}>
                                        <a href="#whats-on" className={clsx(styles.button, styles.buttonBlue)}>
                                            What's on
                                        </a>
                                        <a href="#contact" className={styles.button}>
                                            Find us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <button className={styles.scrollButton}>
                        <LuChevronDown />
                    </button>
                </div>

                <div className={styles.headerSeparatorBar} />

                <div id="whats-on" className={styles.whatsOnSection}>
                    <Container>
                        <div className={styles.sectionContent}>
                            <div className={styles.sectionTagline}>Never miss a night out</div>
                            <h2 className={styles.sectionTitle}>What's on at the Mary</h2>

                            <div className={styles.whatsOnGrid}>
                                <div className={styles.whatsOnItem}>
                                    <LuMic className={styles.whatsOnIcon} />
                                    <h3>Karaoke</h3>
                                    <p className={styles.whatsOnDate}><LuCalendar /> Every Friday</p>
                                    <p className={styles.whatsOnTime}><LuClock /> 23:00 - 02:00</p>
                                    <p className={styles.whatsOnDesc}>
                                        Grab the mic and belt out your favourite tunes. Whether you're a shower singer or a true star, Friday nights are made for it at The Mary Rose.
                                    </p>
                                </div>
                                <div className={styles.whatsOnItem}>
                                    <LuVolleyball className={styles.whatsOnIcon} />
                                    <h3>Live Sports</h3>
                                    <p className={styles.whatsOnDate}><LuCalendar /> All Week</p>
                                    <p className={styles.whatsOnTime}><LuClock /> Whenever the action is on</p>
                                    <p className={styles.whatsOnDesc}>
                                        Never miss a match. We screen live sports across multiple screens - football, rugby and more. Pull up a stool and cheer on your team.
                                    </p>
                                </div>
                                <div className={styles.whatsOnItem}>
                                    <img className={styles.whatsOnIcon} src="/images/regulate.png" alt="Regulate DNB Logo" height="50" width="50" />
                                    <h3>Regulate DNB</h3>
                                    <p className={styles.whatsOnDate}><LuCalendar /> Last Saturday of the month</p>
                                    <p className={styles.whatsOnTime}><LuClock /> 22:00 - 02:00</p>
                                    <p className={styles.whatsOnDesc}>
                                        Non stop drum'n'bass bangers from Regulate DNB on the last Satuday of every month!
                                    </p>
                                </div>
                            </div>

                            <div className={styles.whatsOnFacebook}>
                                <h3>Find us on Social Media</h3>
                                <div className={styles.whatsOnSocialButtons}>
                                    <a href={FACEBOOK_URL} target="_blank" className={styles.button}>
                                        <LuFacebook /> Facebook
                                    </a>
                                    <a href={INSTAGRAM_URL} target="_blank" className={styles.button}>
                                        <LuInstagram /> Instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className={styles.contactSection} id="contact" ref={contactRef}>
                    <Container>
                        <div className={styles.sectionContent}>
                            <div className={styles.sectionTagline}>Got a question?</div>
                            <h2 className={styles.sectionTitle}>Get in touch</h2>
                            
                            <ContactSection />
                        </div>
                    </Container>
                </div>
            </div >
            <Footer />
        </div >
    )
}