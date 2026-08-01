import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy — SecureShare",
  description:
    "How SecureShare collects, uses, and protects your personal information and file data.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="August 1, 2026">
      <p style={{ marginBottom: "24px" }}>
        At SecureShare, we take your privacy seriously. This Privacy Policy explains how we
        collect, use, store, and protect your information when you use our file sharing platform
        and related services.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        1. Information We Collect
      </h2>
      <p style={{ marginBottom: "16px" }}>
        We collect information you provide directly to us, such as your name, email address, and
        organization details when you join the waitlist or create an account. We also automatically
        collect technical data including IP address, browser type, device information, and usage
        data when you interact with our service.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        2. How We Use Your Information
      </h2>
      <ul style={{ marginBottom: "16px", paddingLeft: "20px", listStyleType: "disc" }}>
        <li style={{ marginBottom: "8px" }}>To provide, maintain, and improve our services</li>
        <li style={{ marginBottom: "8px" }}>To communicate with you about updates, announcements, and support</li>
        <li style={{ marginBottom: "8px" }}>To monitor and analyze trends, usage, and activities on our platform</li>
        <li style={{ marginBottom: "8px" }}>To detect, prevent, and address technical issues, fraud, and security concerns</li>
        <li style={{ marginBottom: "8px" }}>To comply with legal obligations and enforce our Terms of Service</li>
      </ul>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        3. File Data and Encryption
      </h2>
      <p style={{ marginBottom: "16px" }}>
        All files transferred through SecureShare are encrypted end to end. We do not have access
        to the contents of your files. File metadata, such as file names, sizes, and transfer
        timestamps, may be stored for the purpose of providing transfer history and service
        functionality.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        4. Data Sharing and Disclosure
      </h2>
      <p style={{ marginBottom: "16px" }}>
        We do not sell, rent, or trade your personal information. We may share your data with
        trusted third-party service providers who assist us in operating our platform, subject to
        confidentiality obligations. We may also disclose information when required by law or to
        protect our rights, property, or safety.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        5. Data Retention
      </h2>
      <p style={{ marginBottom: "16px" }}>
        We retain your personal information for as long as your account is active or as necessary to
        provide our services. You may request deletion of your account and associated data at any
        time by contacting us.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        6. Your Rights
      </h2>
      <p style={{ marginBottom: "16px" }}>
        Depending on your jurisdiction, you may have the right to access, correct, export, or
        delete your personal data. You may also have the right to object to certain processing
        activities or withdraw consent where applicable.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        7. Security
      </h2>
      <p style={{ marginBottom: "16px" }}>
        We implement industry-standard security measures including end-to-end encryption, secure
        data transmission, and access controls to protect your information. However, no method of
        transmission over the internet is completely secure, and we cannot guarantee absolute
        security.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        8. Changes to This Policy
      </h2>
      <p style={{ marginBottom: "16px" }}>
        We may update this Privacy Policy from time to time. We will notify you of significant
        changes by posting the updated policy on this page and updating the &quot;last updated&quot;
        date. We encourage you to review this policy periodically.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        9. Contact Us
      </h2>
      <p style={{ marginBottom: "16px" }}>
        If you have questions about this Privacy Policy, please reach out to us at
        privacy@secureshare.app.
      </p>
    </LegalLayout>
  );
}
