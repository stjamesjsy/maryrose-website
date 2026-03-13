import { Accordion } from "@/components/Accordion";
import Container from "@/components/Container";
import { Item } from "@/components/FaqItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function FAQs() {
    return (
        <div className={clsx("page", styles.page)}>
            <div className="page-content">
                <Navbar />
                <Container>
                    <h1 className={styles.title}>Frequently Asked Questions</h1>
                    <div className={styles.items}>
                        <Accordion>
                            <Item id="ageRest" title="Is there an age restriction?">
                                18+ (Unless stated otherwise). ID may be required.
                            </Item>
                            <Item id="whereLoc" title="Where are you located?">
                                We are located at 18 Mulcaster St, St Helier, Jersey, JE2 3NJ on the site of the old Tanguys.
                            </Item>
                            <Item id="dressCode" title="What is the dress code?">
                                The dress code is smart casual.

                                <ul style={{ marginLeft: "30px", marginTop: "10px" }}>
                                    <li>No sports wear (After 10pm Thursday - Sunday only)</li>
                                    <li>No dirty work clothes (After 10pm Thursday - Sunday only)</li>
                                    <li>No football shirts (After 10pm Thursday - Sunday only)</li>
                                    <li>No hats (at any time)</li>
                                </ul>
                            </Item>
                            <Item id="parking" title="Is there parking nearby?">
                                Yes, Pier Road car park is a short walk up Pier Road hill.
                            </Item>
                            <Item id="cloakroom" title="Do you have a cloakroom?">
                                Unfortunately we do not
                            </Item>
                            <Item id="freeWifi" title="Do you have free Wi-Fi?">
                                Yes! The details can be found at the bar, ask the bar staff if you need help!
                            </Item>
                            <Item id="vapeInside" title="Can I vape inside?">
                                Unfortunately not!
                            </Item>
                            <Item id="ids" title="What forms of ID do you accept?">
                                We except the following:

                                <ul style={{ marginLeft: "30px", marginTop: "10px", marginBottom: "10px" }}>
                                    <li>Full Jersey Driving license</li>
                                    <li>Passport</li>
                                </ul>

                                We do not accept provisional licenses or out of date forms of ID. We also not not accept photocopies, digital images or screenshots of IDs.
                            </Item>
                        </Accordion>
                    </div>
                    <p className={styles.contactUs}>Still not sure? <a href="/#contact">Get in touch</a></p>
                </Container>
            </div>
            <Footer />
        </div>
    )
}