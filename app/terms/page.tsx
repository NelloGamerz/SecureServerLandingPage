import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service — VilSend",
  description:
    "The terms and conditions governing your use of VilSend's file sharing platform and services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="August 1, 2026">
      <p style={{ marginBottom: "24px" }}>
        Welcome to VilSend. These Terms of Service govern your use of our file sharing platform
        and related services. By accessing or using VilSend, you agree to be bound by these
        terms.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        1. Acceptance of Terms
      </h2>
      <p style={{ marginBottom: "16px" }}>
        By creating an account or using any VilSend service, you confirm that you have read,
        understood, and agree to these Terms of Service and our Privacy Policy. If you do not agree,
        you may not use our services.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        2. Eligibility
      </h2>
      <p style={{ marginBottom: "16px" }}>
        You must be at least 16 years old to use VilSend. By using our services, you represent
        and warrant that you meet this age requirement and have the legal capacity to enter into
        these terms.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        3. Your Account
      </h2>
      <p style={{ marginBottom: "16px" }}>
        You are responsible for maintaining the confidentiality of your account credentials and
        for all activities that occur under your account. You agree to notify us immediately of any
        unauthorized use of your account or any other security breach.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        4. Acceptable Use
      </h2>
      <p style={{ marginBottom: "8px" }}>You agree not to use VilSend to:</p>
      <ul style={{ marginBottom: "16px", paddingLeft: "20px", listStyleType: "disc" }}>
        <li style={{ marginBottom: "8px" }}>Share, store, or transmit any unlawful, harmful, or infringing content</li>
        <li style={{ marginBottom: "8px" }}>Distribute malware, viruses, or any malicious code</li>
        <li style={{ marginBottom: "8px" }}>Attempt to gain unauthorized access to any part of the service</li>
        <li style={{ marginBottom: "8px" }}>Interfere with or disrupt the service or servers</li>
        <li style={{ marginBottom: "8px" }}>Use the service to send spam or unsolicited communications</li>
        <li style={{ marginBottom: "8px" }}>Reverse engineer, decompile, or disassemble any part of the platform</li>
      </ul>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        5. File Transfers and Content
      </h2>
      <p style={{ marginBottom: "16px" }}>
        You retain all ownership rights to the content and files you transfer through VilSend.
        You are solely responsible for the content you share and for ensuring you have the rights to
        do so. VilSend provides the infrastructure for transfer but does not claim ownership of
        your content.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        6. Privacy
      </h2>
      <p style={{ marginBottom: "16px" }}>
        Our data practices are described in our Privacy Policy. By using VilSend, you agree to
        the collection and use of information as outlined in that policy.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        7. Service Availability
      </h2>
      <p style={{ marginBottom: "16px" }}>
        We strive to maintain high availability but do not guarantee uninterrupted access to our
        services. We may modify, suspend, or discontinue any part of the service at any time
        without prior notice. We are not liable for any downtime, data loss, or service
        interruptions.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        8. Intellectual Property
      </h2>
      <p style={{ marginBottom: "16px" }}>
        VilSend, its logo, design, software, and all associated intellectual property are owned
        by us. You may not use our trademarks or branding without prior written consent.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        9. Disclaimers
      </h2>
      <p style={{ marginBottom: "16px" }}>
        VilSend is provided &quot;as is&quot; and &quot;as available&quot; without warranties
        of any kind, whether express or implied. We do not warrant that the service will be
        error-free, secure, or available at all times.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        10. Limitation of Liability
      </h2>
      <p style={{ marginBottom: "16px" }}>
        To the fullest extent permitted by law, VilSend shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages arising from your use of or
        inability to use our services.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        11. Termination
      </h2>
      <p style={{ marginBottom: "16px" }}>
        We may suspend or terminate your account at any time for violation of these terms. You may
        stop using VilSend at any time. Upon termination, all provisions that should reasonably
        survive termination shall remain in effect.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        12. Changes to These Terms
      </h2>
      <p style={{ marginBottom: "16px" }}>
        We may update these Terms of Service from time to time. We will post the updated terms on
        this page and update the &quot;last updated&quot; date. Continued use of VilSend after
        changes constitutes acceptance of the new terms.
      </p>

      <h2 className="font-serif text-paper" style={{ fontSize: "20px", fontWeight: 500, marginTop: "36px", marginBottom: "12px" }}>
        13. Contact Us
      </h2>
      <p style={{ marginBottom: "16px" }}>
        If you have questions about these Terms of Service, please contact us at
        legal@VilSend.app.
      </p>
    </LegalLayout>
  );
}
