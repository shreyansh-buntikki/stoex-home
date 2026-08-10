import { CSSProperties } from "react";

const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };
const mona: CSSProperties = {
  fontFamily: "Mona Sans, sans-serif",
  fontSize: "20px",
  color: "#3B3C4A",
};

export const PrivacyPolicy = () => {
  return (
    <div className="bg-[#f8f6f6] p-4 lg:p-20">
      <div className="bg-white p-4 lg:p-8 rounded-xl">
        <h4
          className="text-[32px] text-[#00007F] lg:text-[64px] font-bold"
          style={sansation}
        >
          Privacy Policy
        </h4>

        <div style={mona} className="mt-6 space-y-4">
          <p className="text-start font-bold">
            P2 KOSHAYOJAN SERVICES PRIVATE LIMITED (STOEX)
            <br />
            PRIVACY POLICY
          </p>
          <p className="text-start">Effective Date: May 2026</p>

          <p>
            P2 Koshayojan Services Private Limited (
            <span className="font-bold">"Company"</span>,{" "}
            <span className="font-bold">"we"</span>,{" "}
            <span className="font-bold">"us"</span>,{" "}
            <span className="font-bold">"our"</span>) operates{" "}
            <span className="font-bold">STOEX,</span> a platform that
            facilitates access to Digital Gold services, enabling Users to
            purchase and sell Digital Gold and request physical delivery of
            Customer Gold through arrangements with independent bullion
            providers. We are committed to protecting your privacy and
            handling your personal information with care, transparency, and in
            compliance with applicable laws.
          </p>

          <p>
            This Privacy Policy ("Policy") describes how we collect, use, store,
            share, and protect the personal information of users ("you", "your")
            who access or use the STOEX platform, website, or mobile application
            (collectively, the "Platform"). By accessing or using the Platform,
            you agree to the terms of this Policy. If you do not agree, please
            discontinue use of the Platform.
          </p>

          <p>
            This Policy is published as an electronic record under the
            Information Technology Act, 2000 and the Information Technology
            (Reasonable Security Practices and Procedures and Sensitive Personal
            Data or Information) Rules, 2011 (
            <span className="font-bold">"SPDI Rules"</span>), and shall be
            construed in accordance therewith and any other applicable laws and
            regulations in force from time to time, including the Digital
            Personal Data Protection Act, 2023 (
            <span className="font-bold">"DPDP Act"</span>) to the extent
            applicable and as notified.
          </p>

          <h5 className="font-bold mt-6">1. Information We Collect</h5>
          <p>
            We collect personal information that is necessary to provide our
            services and to comply with applicable legal requirements. The
            categories of information we may collect include the following:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-bold">Personal Information:</span> Your
              name, date of birth, gender, mobile number, email address, and
              residential address, collected at the time of registration and
              onboarding on the Platform.
            </li>
            <li>
              <span className="font-bold">KYC and Identity Information:</span>{" "}
              Your Permanent Account Number (PAN), Aadhaar number (on a
              voluntary basis and in compliance with applicable law), and other
              identity or address proof documents as may be required to complete
              the Know Your Customer ("KYC") process mandated by applicable
              regulations. KYC information may also include a live selfie or
              photograph for identity verification.
            </li>
            <li>
              <span className="font-bold">Financial Information:</span> Your
              bank account details, UPI identifiers, and other payment
              instrument information required to facilitate transactions on the
              Platform. All payment transactions are processed by third-party
              payment service providers who are Payment Card Industry Data
              Security Standard ("PCI DSS") compliant.
            </li>
            <li>
              <span className="font-bold">Transaction Information:</span>{" "}
              Details of your Digital Gold purchases, sales, SIP instructions,
              transaction history, and related account activity on the Platform.
            </li>
            <li>
              <span className="font-bold">
                Device and Technical Information:
              </span>{" "}
              Your device model, operating system, IP address, browser type,
              unique device identifiers, and usage logs collected when you
              access the Platform. This information is used for security,
              troubleshooting, and service improvement purposes.
            </li>
            <li>
              <span className="font-bold">Permissions:</span> Certain features
              of the Platform may require access to your device camera (for KYC
              document capture), SMS (for OTP authentication), and location (for
              service customization). These permissions are sought at the time
              of use and are limited to the stated purpose.
            </li>
          </ul>
          <p>
            We do not collect any personal information beyond what is reasonably
            necessary for providing the services offered on the Platform.
          </p>

          <h5 className="font-bold mt-6">2. How We Use Your Information</h5>
          <p>
            We use the personal information collected for the following
            purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To create and manage your account on the Platform and verify your
              identity;
            </li>
            <li>
              To facilitate your Digital Gold transactions, SIP instructions,
              and payment requests;
            </li>
            <li>
              To complete the KYC process as required under applicable laws and
              regulatory guidelines;
            </li>
            <li>
              To send you transactional communications, service alerts, and
              updates relating to your account;
            </li>
            <li>
              To detect, prevent, and investigate fraudulent activity, money
              laundering, and other unlawful conduct;
            </li>
            <li>
              To comply with legal obligations, regulatory requirements, and
              directions from competent authorities;
            </li>
            <li>
              To improve the Platform, analyze usage patterns, and develop new
              features;
            </li>
            <li>
              To respond to your queries, complaints, and requests for customer
              support; and
            </li>
            <li>
              To send you promotional or marketing communications, where you
              have provided your consent.
            </li>
          </ul>
          <p>
            We will not use your personal information for any purpose other than
            those stated above without your prior consent.
          </p>

          <h5 className="font-bold mt-6">
            3. Sensitive Personal Data or Information
          </h5>
          <p>
            Under the SPDI Rules, certain categories of information are
            classified as Sensitive Personal Data or Information (
            <span className="font-bold">"SPDI"</span>), including financial
            information, passwords, biometric information, and KYC-related data.
            We collect and process SPDI only to the extent necessary for
            providing the services on the Platform, and with your explicit
            consent where required. All SPDI is handled with heightened care,
            stored in encrypted form, and shared only on a need-to-know basis in
            accordance with the terms of this Policy.
          </p>
          <p>
            The provision of your Aadhaar number is voluntary. Where provided,
            it shall be collected, used, and stored in strict compliance with
            applicable law.
          </p>

          <h5 className="font-bold mt-6">
            4. Cookies and Tracking Technologies
          </h5>
          <p>
            We use cookies and similar tracking technologies to enhance your
            experience on the Platform. Cookies are small data files stored on
            your device that help us recognize you, remember your preferences,
            and understand how you use the Platform. We use the following types
            of cookies:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-bold">Operationally Necessary:</span>{" "}
              Required for the basic functioning of the Platform, including
              login, session management, and fraud prevention.
            </li>
            <li>
              <span className="font-bold">Performance and Analytics:</span> Used
              to understand how users interact with the Platform, measure the
              effectiveness of features, and improve service quality.
            </li>
            <li>
              <span className="font-bold">Functionality:</span> Used to remember
              your preferences and personalize your experience on the Platform.
            </li>
          </ul>
          <p>
            You may configure your browser to decline cookies; however, doing so
            may affect the functionality of certain features on the Platform. We
            do not use cookies to store any sensitive personal information. For
            detailed information on the types of cookies we use and your
            choices, please refer to our Cookie Policy available on the Platform
          </p>

          <h5 className="font-bold mt-6">
            5. Sharing and Disclosure of Information
          </h5>
          <p>
            We do not sell your personal information to third parties. We may,
            however, share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-bold">
                Gold Provider and Settlement Partners:
              </span>{" "}
              As a platform facilitating digital gold transactions, we share
              necessary transaction and KYC information with the independent
              gold provider and settlement partners to execute your
              transactions.
            </li>
            <li>
              <span className="font-bold">Payment Service Providers:</span> We
              share financial information with payment gateways and processors
              to facilitate your payment transactions. All such partners are
              bound by contractual obligations to protect your information.
            </li>
            <li>
              <span className="font-bold">KYC and Verification Partners:</span>{" "}
              We may share your identity, KYC, and verification information with
              third-party KYC verification partners, regulated entities, and
              other service providers, as necessary to complete identity
              verification, comply with applicable laws, prevent fraud, and
              fulfil compliance obligations.
            </li>
            <li>
              <span className="font-bold">
                Legal and Regulatory Obligations:
              </span>{" "}
              We may disclose your information to law enforcement agencies,
              courts, or government authorities where required by applicable
              law, court order, or regulatory direction.
            </li>
            <li>
              <span className="font-bold">Service Providers:</span> We may share
              information with third-party service providers engaged for
              analytics, security, audit, or technology support, who are bound
              by confidentiality obligations and may only use your information
              for the stated purpose.
            </li>
            <li>
              <span className="font-bold">Business Transfers:</span> In the
              event of a merger, acquisition, or sale of all or a part of the
              Company's business, your information may be transferred to the
              relevant entity as part of that transaction.
            </li>
          </ul>
          <p>
            In all cases, we ensure that information is shared only to the
            extent necessary and with appropriate safeguards in place.
          </p>

          <h5 className="font-bold mt-6">6. Data Storage and Retention</h5>
          <p>
            Your personal information is stored on secure servers within India.
            We retain your personal information for as long as is reasonably
            necessary to fulfil the purposes for which it was collected, or as
            required under applicable laws, regulatory obligations, or
            contractual requirements. Factors considered in determining the
            retention period include the nature and sensitivity of the
            information, the purposes of processing, and applicable legal
            requirements.
          </p>
          <p>
            Where personal information is no longer required for any lawful
            purpose, it shall be deleted or anonymized in accordance with our
            internal data management practices and applicable law. We may,
            however, retain information where required to do so by law, to
            resolve disputes, or to enforce our agreements.
          </p>

          <h5 className="font-bold mt-6">7. Security</h5>
          <p>
            We employ industry-standard physical, electronic, and procedural
            safeguards to protect your personal information from unauthorized
            access, disclosure, alteration, or destruction. These measures
            include data encryption at rest and in transit, secure server
            infrastructure with access controls, firewalls, and regular security
            reviews. All personnel with access to personal information are bound
            by confidentiality obligations.
          </p>
          <p>
            While we take reasonable steps to protect your information, no
            method of transmission over the internet or electronic storage is
            entirely secure. We cannot guarantee absolute security, and you
            acknowledge that you transmit your information to us at your own
            risk. You are responsible for maintaining the confidentiality of
            your account credentials, OTPs, and UPI PIN, and should not share
            these with any person or entity, including persons claiming to
            represent STOEX.
          </p>
          <p>
            In the event of a data security breach that affects your personal
            information, we will notify you in accordance with applicable law.
          </p>

          <h5 className="font-bold mt-6">8. Third-Party Links</h5>
          <p>
            The Platform may contain links to third-party websites or services.
            These third-party sites operate independently of the Company and are
            governed by their own privacy policies. We do not control and are
            not responsible for the privacy practices, content, or security of
            any third-party site. We recommend that you review the privacy
            policy of any third-party site before providing any personal
            information.
          </p>

          <h5 className="font-bold mt-6">9. Children's Privacy</h5>
          <p>
            The Platform is not directed at or intended for use by persons under
            the age of 18 years. We do not knowingly collect personal
            information from minors. Use of the Platform is available only to
            persons who are capable of forming a legally binding contract under
            the Indian Contract Act, 1872. If you are under 18 years of age, you
            must not access or use the Platform. If we become aware that we have
            inadvertently collected personal information from a minor, we will
            take prompt steps to delete such information.
          </p>

          <h5 className="font-bold mt-6">10. Your Rights</h5>
          <p>
            Subject to applicable law, you have the following rights in relation
            to your personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-bold">Access:</span> You may request access
              to the personal information we hold about you.
            </li>
            <li>
              <span className="font-bold">Correction:</span> You may request
              correction of any inaccurate or incomplete personal information.
            </li>
            <li>
              <span className="font-bold">Deletion:</span> You may request
              deletion of your personal information, subject to any legal or
              regulatory obligations that require us to retain such information.
            </li>
            <li>
              <span className="font-bold">Withdrawal of Consent:</span> You may
              withdraw your consent to our processing of your personal
              information at any time. Withdrawal of consent may affect your
              ability to use certain features of the Platform.
            </li>
            <li>
              <span className="font-bold">Opt-Out:</span> You may opt out of
              receiving promotional or marketing communications from us at any
              time by contacting us at{" "}
              <a href="mailto:connectus@stoex.in" className="underline">
                connectus@stoex.in
              </a>
              .
            </li>
          </ul>
          <p>
            To exercise any of the above rights, please contact us at{" "}
            <a href="mailto:support@stoex.in" className="underline">
              support@stoex.in
            </a>
            . We will respond to your request within a reasonable period in
            accordance with applicable law. Please note that certain rights may
            be limited where we are required to retain or process your
            information under applicable law.
          </p>

          <h5 className="font-bold mt-6">11. Grievance Officer</h5>
          <p>
            In accordance with the Information Technology Act, 2000 and the
            rules made thereunder, the Company has designated a Grievance
            Officer to address complaints and concerns relating to this Policy
            and the processing of your personal information.
          </p>
          <p>Name:</p>
          <p>Designation: Grievance Officer</p>
          <p>Email:</p>
          <p>Address: 4, Bhagwan Das Road, New Delhi, Delhi 110001</p>
          <p>Working Hours: Monday to Friday, 10:00 AM to 6:00 PM IST</p>
          <p>
            The Grievance Officer shall acknowledge complaints within 24 hours
            and endeavor to resolve them within 15 days from the date of
            receipt, in accordance with the Information Technology (Intermediary
            Guidelines and Digital Media Ethics Code) Rules, 2021.
          </p>

          <h5 className="font-bold mt-6">12. Amendments</h5>
          <p>
            We reserve the right to revise or update this Policy from time to
            time in accordance with applicable laws, business requirements, or
            changes in our data processing practices. Any material changes will
            be communicated to you through the Platform or by email prior to the
            changes taking effect. Your continued use of the Platform following
            such notification shall constitute your acceptance of the revised
            Policy. We encourage you to review this Policy periodically.
          </p>
        </div>
      </div>
    </div>
  );
};
