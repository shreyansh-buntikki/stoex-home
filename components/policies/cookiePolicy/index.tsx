import { CSSProperties } from "react";

const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };
const mona: CSSProperties = {
  fontFamily: "Mona Sans, sans-serif",
  fontSize: "20px",
  color: "#3B3C4A",
};

export const CookiePolicy = () => {
  return (
    <div className="bg-[#f8f6f6] p-4 lg:p-20">
      <div className="bg-white p-4 lg:p-8 rounded-xl">
        <h4 className="text-[32px] text-[#00007F] lg:text-[64px] font-bold" style={sansation}>
          Cookie Policy
        </h4>

        <div style={mona} className="mt-6 space-y-4">
          <p className="text-start font-bold">
            P2 KOSHAYOJAN SERVICES PRIVATE LIMITED (STOEX)
            <br />
            COOKIE POLICY
          </p>
          <p className="text-start">Effective Date: May, 2026</p>

          <p>
            P2 Koshayojan Services Private Limited (<span className="font-bold">"Company"</span>, <span className="font-bold">"we"</span>, <span className="font-bold">"us"</span>) operates <span className="font-bold">STOEX</span>, a platform that facilitates access to digital gold services, accessible via website and mobile application (collectively, the <span className="font-bold">"Platform"</span>). This Cookie Policy ("Policy") explains what cookies and similar tracking technologies are, how we use them on the Platform, and the choices available to you. This Policy should be read alongside our Privacy Policy, which is available on the Platform
          </p>

          <h5 className="font-bold mt-6">1. What Are Cookies</h5>
          <p>
            Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website or use an application. They allow the Platform to recognize your device, remember your preferences, and collect information about how you interact with the Platform. Similar technologies include web beacons, pixel tags, and local storage, which function in a comparable manner and are collectively referred to as "cookies" in this Policy.
          </p>

          <h5 className="font-bold mt-6">2. How We Use Cookies</h5>
          <p>
            We use cookies strictly for the purposes described below. We do not use cookies to store any sensitive personal information or financial data.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-bold">Operationally Necessary Cookies:</span> These cookies are essential for the Platform to function. They enable core features such as user login, session management, and transaction security. Without these cookies, certain parts of the Platform cannot operate. These cookies cannot be disabled.
            </li>
            <li>
              <span className="font-bold">Performance and Analytics Cookies:</span> These cookies collect information about how users interact with the Platform, such as which pages are visited most frequently, how long users spend on the Platform, and any error messages encountered. This information is used in aggregated and anonymised form to improve Platform performance and user experience. This information is used in aggregated, anonymised, or pseudonymised form to improve Platform performance and user experience.
            </li>
            <li>
              <span className="font-bold">Functionality Cookies:</span> These cookies allow the Platform to remember your preferences and settings, such as your language preference or previously entered information, to provide a more personalized experience. Disabling these cookies may affect the quality of your experience on the Platform.
            </li>
            <li>
              <span className="font-bold">Third-Party Cookies:</span> Certain third-party service providers engaged by us, such as analytics and technology partners, may place their own cookies on your device when you use the Platform. These cookies are governed by the respective third party's cookie and privacy policies, and we do not have control over them. We ensure that any third-party providers we engage are bound by appropriate data protection obligations.
            </li>
          </ul>

          <h5 className="font-bold mt-6">3. What We Do Not Use Cookies For</h5>
          <p>
            We do not use cookies to collect, store, or transmit your sensitive personal data, financial information, passwords, or any information that can directly identify you for advertising purposes. We do not use cookies to sell or share your personal information with unrelated third parties for their own marketing purposes.
          </p>

          <h5 className="font-bold mt-6">4. Session and Persistent Cookies</h5>
          <p>
            Session cookies are temporary and are deleted from your device when you close your browser or end your session on the Platform. Persistent cookies remain on your device for a set period of time or until you delete them manually. We use both types of cookies for the purposes described in Section 2.
          </p>

          <h5 className="font-bold mt-6">5. Your Choices</h5>
          <p>
            You have the ability to manage and control the use of cookies on your device. Most web browsers allow you to view, manage, delete, and block cookies through the browser's settings. Instructions for managing cookies vary by browser and can typically be found in the browser's help menu. You may also disable cookies on your mobile device through your device settings.
          </p>
          <p>
            Please note that disabling or blocking operationally necessary cookies will affect the functionality of the Platform and may prevent you from accessing certain features, including login and transaction processing. Disabling performance or functionality cookies will not prevent you from using the Platform but may result in a less personalized experience.
          </p>
          <p>
            Where required under applicable law, we will seek your consent before placing non-essential cookies on your device. You may withdraw your consent at any time by adjusting your browser or device settings as described above.
          </p>

          <h5 className="font-bold mt-6">6. Applicable Law</h5>
          <p>
            This Policy is framed in accordance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023, to the extent applicable and as notified. We will update this Policy as and when further guidelines or rules are issued under applicable law in respect of cookies and tracking technologies.
          </p>

          <h5 className="font-bold mt-6">7. Contact Us</h5>
          <p>
            If you have any questions or concerns about this Cookie Policy or our use of cookies on the Platform, please contact us at:
          </p>
          <p>
            Email: <a href="mailto:support@stoex.in" className="underline">support@stoex.in</a>
          </p>
          <p>Address: 4, Bhagwan Das Road, New Delhi, Delhi 110001</p>
          <p>
            For privacy-related complaints, please refer to the Grievance Officer details set out in our Privacy Policy. For all other complaints and grievances, please refer to our Grievance Redressal Policy, both of which are available on the Platform.
          </p>

          <h5 className="font-bold mt-6">8. Amendments</h5>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or applicable law. Any material changes will be communicated through the Platform or by email. Your continued use of the Platform following such notification shall constitute your acceptance of the revised Policy.
          </p>
        </div>
      </div>
    </div>
  );
};
