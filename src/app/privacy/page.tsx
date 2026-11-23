import { PrivacyPage } from "@/components/maryrose/privacy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy"
}

export default function Privacy() {
  return <PrivacyPage />
}
