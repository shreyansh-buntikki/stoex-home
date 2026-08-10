import { CSSProperties } from "react";

const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };
const mona: CSSProperties = {
  fontFamily: "Mona Sans, sans-serif",
  fontSize: "20px",
  color: "#3B3C4A",
};

export const TermsAndConditions = () => {
  return (
    <div className="bg-[#f8f6f6] p-4 lg:p-20">
      <div className="bg-white p-4 lg:p-8 rounded-xl">
        <h4 className="text-[32px] text-[#00007F] lg:text-[64px] font-bold" style={sansation}>
          Terms and Conditions
        </h4>

        <div style={mona} className="mt-6 space-y-4">
          <p className="text-start font-bold">
            STOEX PLATFORM – GENERAL TERMS AND CONDITIONS
          </p>
          <p className="text-start italic font-bold">Effective Date – May 2026</p>

          <p>
            These General Terms comprise the following sections, each of which is material. Each section provides a summary to highlight their relevance, to encourage you to read them. We rely on these terms to enter into and provide you access to our platforms and services.
          </p>

          <ol className="list-decimal pl-6 space-y-1">
            <li>Introduction</li>
            <li>Acceptance</li>
            <li>Definitions</li>
            <li>Eligibility and Registration</li>
            <li>Nature of Digital Gold</li>
            <li>Platform Access and Account Security</li>
            <li>Digital Gold Transactions</li>
            <li>Trustee / Administrator, Intermediaries and Safe Keeping Arrangement</li>
            <li>Payment and Purchase Conditions</li>
            <li>Fees and Taxes</li>
            <li>Death or Incapacity of Customer</li>
            <li>Risk Disclosures and Limitations of Liability</li>
            <li>Data Protection and Privacy</li>
            <li>Prohibited Conduct</li>
            <li>Limitation of Liability</li>
            <li>Suspension and Termination</li>
            <li>Indemnity</li>
            <li>Force Majeure</li>
            <li>Record Retention</li>
            <li>Confidentiality</li>
            <li>Intellectual Property Rights</li>
            <li>Notices</li>
            <li>Modification of Terms</li>
            <li>Governing Law and Dispute Resolution</li>
            <li>Miscellaneous</li>
          </ol>

          <h5 className="font-bold mt-6">1. Introduction</h5>
          <p className="italic">
            This document is an electronic record in terms of the Information Technology Act, 2000 and the rules made thereunder, and does not require any physical or digital signatures. This document is published in accordance with Rule 3(1) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.
          </p>
          <p>
            1.1. These General Terms and Conditions (<span className="font-bold">"General Terms"</span>) form a legally binding agreement between <span className="font-bold">P2 Koshayojan Services Private Limited</span> (CIN: <span className="font-bold">U72900DL2022PTC400351</span>), a company incorporated under the Companies Act, 2013, with its registered office at <span className="font-bold">4, Bhagwan Das Road, New Delhi, Delhi 110001</span> (<span className="font-bold">"STOEX,"</span> <span className="font-bold">"we,"</span> <span className="font-bold">"us,"</span> or <span className="font-bold">"our"</span>) and you, the user of the STOEX platform (<span className="font-bold">"you"</span> or <span className="font-bold">"User"</span>). STOEX and the User may each be referred to individually as a "Party" and collectively as the "Parties."
          </p>
          <p>
            1.2. These General Terms govern your use of the STOEX Platform, and the services made available through it (together, the "Services"). STOEX operates as a platform that facilitates access to digital gold services, enabling users to buy and sell Digital Gold and request physical delivery of gold through arrangements with authorised independent bullion providers. STOEX does not own, hold, or deal in gold directly. STOEX may engage one or more third-party payment gateway service providers ("Payment Gateway Partner") to facilitate the collection of payments on the Platform. The Payment Gateway Partner assumes no liability for the Digital Gold services or any obligations of STOEX or the Gold Provider under this Agreement, and is responsible solely for payment processing and payment-related customer support.
          </p>
          <p>
            1.3. You may only use the STOEX Platform and Services in accordance with these General Terms, any applicable policy documents notified by STOEX from time to time, and any additional terms that may apply to specific features (together, the "Agreement"). In the event of any conflict between such policy documents and these General Terms, these General Terms shall take precedence unless expressly stated otherwise.
          </p>
          <p>
            1.4. If you have any questions regarding the STOEX Platform or Services, you may contact our support team at <a href="mailto:support@stoex.in" className="underline">support@stoex.in</a>.
          </p>

          <h5 className="font-bold mt-6">2. Acceptance</h5>
          <p>
            2.1. You may use the STOEX Platform only if you are at least eighteen (18) years of age, a resident of India and are legally competent to enter into binding contracts under the laws applicable to you. You further confirm that you are accessing the Platform from within India and that you have completed or will complete valid KYC documentation in accordance with applicable Indian law. By accessing or using the Platform in any manner, you represent and warrant that you satisfy these conditions. If you do not meet these requirements, you must immediately cease all use of the Platform.
          </p>
          <p>
            2.2. You further confirm that neither you nor any stakeholder (if you are an entity) is a Politically Exposed Person (PEP) or subject to sanctions under Indian or international law. Entity users must ensure that all shareholders, directors, and UBOs meet eligibility criteria.
          </p>
          <p>
            2.3. These General Terms apply to all persons who access or use any part of the STOEX Platform (www.stoex.in or other domains operated by STOEX) and any application or related interface or service. Any such person is a "User." Some services may require registration and verification, in which case the User may become a "Registered User" or "Customer." Not all Users may become Customers.
          </p>
          <p>
            2.4. The Platform is made available for your personal, non-commercial use only. You may not use the Platform as an intermediary, advisor, broker or service provider to others, nor may you engage in speculative trading on behalf of any third party. If you are licensed or registered as an investment adviser, securities broker, commodities trader or financial services intermediary in any jurisdiction, you are prohibited from using the Platform to offer services to clients or others unless expressly permitted by STOEX in writing.
          </p>
          <p>
            2.5. By accessing, browsing or using the Platform, you confirm that you have read, understood and agreed to be bound by this Agreement in its entirety. This Agreement is a legally binding contract between you and STOEX. If you do not agree with any provision of this Agreement, you must not use the Platform.
          </p>
          <p>
            2.6. Your access to the Platform constitutes valid and sufficient consideration for this Agreement. You may not selectively accept or reject parts of this Agreement. If you have any questions regarding the meaning or effect of any provision, you are encouraged to seek independent legal advice. This Agreement does not create any rights enforceable by third parties.
          </p>
          <p>
            2.7. If you are accessing or using the Platform on behalf of a company, trust, partnership or other legal entity, you represent and warrant that you have full authority to bind that entity to this Agreement. In such cases, references to "you," "your," or "User" in this Agreement refer to that entity and you agree to use the Platform solely for commercial purposes on its behalf.
          </p>

          <h5 className="font-bold mt-6">3. Definitions</h5>
          <p>
            Capitalized terms used but not defined in the body of this Agreement shall have the meanings ascribed to them in <span className="font-bold">Schedule A</span>.
          </p>

          <h5 className="font-bold mt-6">4. Eligibility and Registration</h5>
          <p>
            4.1. Eligibility requirements, including minimum age, residency, legal competence and restrictions on use by brokers, advisers and intermediaries, are set out under Clause 2 (Acceptance). You must review and satisfy all such conditions before registering or using the Platform.
          </p>
          <p>
            4.2. To access certain features of the Platform, you must complete the registration process by providing accurate, complete and up-to-date information. You represent and warrant that all information you submit in connection with registration and KYC is true, current and not misleading. STOEX reserves the right to verify any information provided by you and may require corrections, reject incomplete or inaccurate submissions or suspend or terminate your access to the Platform. STOEX may also report false, misleading or fraudulent information to competent authorities, as required under applicable law.
          </p>
          <p>
            4.3. You are required to complete Know Your Customer (KYC) and Anti-Money Laundering (AML) checks as per applicable Indian laws and as stipulated by STOEX from time to time. You agree to promptly submit all information or documentation requested for verification. STOEX may restrict or suspend access to the Platform for failure to comply.
          </p>
          <p>
            4.4. You must keep your registration and KYC details up to date. STOEX may request additional verification at any time. Failure to comply may result in suspension, account termination or regulatory reporting, where applicable.
          </p>
          <p>
            4.5. The Platform may not be accessed or used by persons located in, incorporated in or otherwise associated with jurisdictions that are subject to economic sanctions, trade restrictions or blacklisted under Indian or other applicable laws. At present and unless expressly notified otherwise by STOEX, access to the Platform is intended only for individuals who are residents of India and who have completed valid KYC documentation in accordance with applicable Indian law. STOEX reserves the right to restrict, suspend or terminate access from any jurisdiction or individual that does not meet these requirements or as required under applicable legal or regulatory obligations.
          </p>

          <h5 className="font-bold mt-6">5. Nature of Digital Gold</h5>
          <p>
            5.1. STOEX operates as a platform that facilitates access to digital gold services through arrangements with independent bullion providers. STOEX does not own, hold, or deal in gold directly.
          </p>
          <p>
            5.2. Digital Gold on the Platform represents a User's digitally recorded beneficial interest in a corresponding quantity of physical gold stored by the Vault Service Provider in a secured vault on the User's behalf. Title to the physical gold corresponding to a User's Digital Gold balance shall be deemed to pass to the User immediately and irrevocably upon the relevant quantity of gold being stored in the vault with the Vault Service Provider on the User's behalf, subject to applicable law and completion of payment.
          </p>
          <p>
            5.3. All Digital Gold purchased through the Platform remains the sole and absolute property of the User. STOEX and the Gold Provider do not, at any time, claim any ownership or title rights over a User's Customer Gold.
          </p>
          <p>
            5.4. Digital Gold is not legal tender, currency, or a financial instrument under Indian law. It does not carry any voting, dividend, or ownership rights in STOEX or its affiliates and does not confer any shareholder, creditor, or similar status with respect to any entity.
          </p>
          <p>
            5.5. Digital gold is presently an unregulated product in India. It does not fall under the regulatory jurisdiction of the Securities and Exchange Board of India or the Reserve Bank of India. You are advised to exercise independent judgment and consult a qualified financial or legal advisor before transacting on the Platform.
          </p>
          <p>
            5.6. STOEX does not provide investment advice, portfolio management services, or any recommendation regarding the suitability of Digital Gold. You are solely responsible for evaluating whether the purchase, holding, or sale of Digital Gold is appropriate for your individual circumstances.
          </p>
          <p>
            5.7. STOEX acts solely as a facilitating platform and is not a party to any transaction between you and the Gold Provider.
          </p>
          <p>
            5.8. You are contracting with the Gold Provider for the purchase and sale of Digital Gold and physical delivery of Gold and with STOEX solely for access to and use of the Platform. The Gold Provider is the seller, counterparty, and delivery obligor for all gold transactions and physical delivery requests facilitated through the Platform. STOEX facilitates those transactions and delivery requests as a platform but does not bear the obligations of the Gold Provider under them.
          </p>
          <p>
            5.9. Digital Gold on the Platform is not a deposit, savings instrument, or value storage mechanism. Buying and selling Digital Gold constitutes independent purchase and sale transactions in physical gold and does not constitute a mechanism for depositing or withdrawing funds.
          </p>

          <h5 className="font-bold mt-6">6. Platform Access and Account Security</h5>
          <p>
            6.1. You are solely responsible for maintaining the confidentiality and security of all credentials, authentication methods and access controls associated with your account on the Platform, including login IDs, passwords, one-time passwords (OTPs). You must not share your credentials with any other person or permit any unauthorized access to your account. You are responsible for all activity carried out through your account, whether or not authorized by you.
          </p>
          <p>
            6.2. STOEX may rely on any instructions orders or actions initiated through your account as having been validly given by you. STOEX shall not be liable for any loss, damage or liability arising from unauthorized access to your account.
          </p>
          <p>
            6.3. You must notify STOEX immediately if you suspect any unauthorized access to your account, loss of control over your credentials or compromise of any authentication mechanism. STOEX may, at its discretion and without prior notice, suspend or restrict access to your account where there is a reasonable belief of unauthorized use, fraud, identity theft or a security breach.
          </p>
          <p>
            6.4. Access to and use of Digital Gold on the Platform is managed through your account maintained by STOEX. Your Digital Gold balance is recorded on STOEX's internal systems. Your ability to view, purchase, sell, or request delivery of Digital Gold is subject to the features and permissions available on the Platform from time to time.
          </p>
          <p>
            6.5. In the event that you lose access to your account credentials or authentication tools, STOEX may, at its sole discretion and subject to its account recovery policies, assist you with a recovery process. However, STOEX does not guarantee that access will be restored in all cases and shall not be responsible for any loss resulting from account inaccessibility caused by outdated or incorrect user information.
          </p>
          <p>
            6.6. You may not create more than one account without STOEX's prior written consent. You may not register an account on behalf of another person or entity unless expressly authorized to do so. Any impersonation, falsification of identity or misrepresentation of affiliation may result in termination of your account and may be reported to relevant regulatory authorities.
          </p>
          <p>
            6.7. STOEX implements reasonable technical and organizational safeguards to protect the Platform and user accounts. However, you acknowledge that no system is entirely secure and that the Platform may be subject to cyberattacks, unauthorized access, malware or other security threats. STOEX does not warrant or guarantee the absolute security of the Platform and shall not be liable for any loss or damage resulting from such events. STOEX WILL NEVER ASK YOU TO SHARE YOUR PASSWORD OR LOGIN CREDENTIALS BY EMAIL, PHONE, OR THROUGH ANY OTHER MEANS. WE WILL NOT SEND EMBEDDED LINKS ASKING YOU TO LOG IN OR VERIFY YOUR ACCOUNT. YOU ARE RESPONSIBLE FOR EXERCISING CAUTION AGAINST PHISHING ATTEMPTS, FRAUDULENT MESSAGES, OR IMPERSONATION SCAMS. STOEX DISCLAIMS ALL LIABILITY FOR LOSSES RESULTING FROM YOUR DISCLOSURE OF CREDENTIALS OR RELIANCE ON UNAUTHORISED COMMUNICATIONS.
          </p>
          <p>
            6.8. Platform access may be suspended, restricted or unavailable from time to time due to system maintenance, technical failures, upgrades or force majeure events. STOEX does not guarantee uninterrupted or error-free access and shall not be liable for any loss arising from such unavailability.
          </p>
          <p>
            6.9. If your account remains inactive for a period of twelve (12) consecutive months or more, STOEX may classify the account as dormant. STOEX may, in accordance with applicable laws and its internal policies, initiate procedures for reclaiming or restricting access to dormant accounts. You may be required to undergo additional verification to reactivate a dormant account. STOEX shall not be liable for any loss arising due to the classification of an account as dormant, including inability to access Digital Gold holdings, unless required by applicable law. Any costs incurred for such reactivation, verification, or investigation may be deducted from your account balance.
          </p>
          <p>
            6.10. You must take care not to share your login credentials, UPI PIN, OTP, mobile wallet details, or any other payment information ("Payment Information") with any third party, whether intentionally or unintentionally. STOEX never solicits Payment Information over a call, email, or through any other channel. STOEX and any third-party payment gateway involved in processing your transactions shall not be liable for any fraud or loss arising from your disclosure of Payment Information to any third party.
          </p>
          <p>
            In the event you suspect that your account has been used for an unauthorised or fraudulent transaction, you must notify STOEX immediately through the customer support channels available on the Platform with all relevant details and supporting documentation.
          </p>
          <p>
            Where STOEX and/or any third-party payment gateway has flagged any transaction or account as suspicious under its internal policies, or where it is found that a user has utilised Payment Information or a payment instrument in an unauthorised or fraudulent manner ("Fraudulent User"), STOEX and/or the relevant third-party payment gateway shall be entitled to:
          </p>
          <ul className="list-[lower-alpha] pl-10 space-y-2">
            <li>request further KYC information or documentation from the Fraudulent User to verify the flagged transaction;</li>
            <li>pending verification, block the Fraudulent User and freeze any accounts associated with them;</li>
            <li>reverse any such fraudulent transaction to the extent operationally possible, including by selling any Digital Gold purchased through the fraudulent transaction at the prevailing sale price; and</li>
            <li>share information on the Fraudulent User and relevant transaction details with the appropriate authorities.</li>
          </ul>
          <p>
            STOEX shall make reasonable efforts to assist the victim in recovering their funds, subject to supporting evidence and documentation being provided. Any funds recovered and returned to the victim shall be net of any payment gateway charges not refunded by the relevant third-party payment gateway.
          </p>
          <p>
            STOEX shall not be obligated to reverse any transaction where the Digital Gold has already been sold by the Fraudulent User and proceeds received, or where physical delivery of Customer Gold has been completed. In such cases, STOEX shall, to the best of its ability, provide the victim or relevant authorities with available information on the Fraudulent User, including bank account or payment wallet details to which proceeds were settled, or the delivery address to which gold was dispatched.
          </p>
          <p>
            6.11. You are responsible for monitoring your account activity and transaction records. You must notify STOEX of any irregularity, discrepancy, or error in your account or any transaction immediately and in any event no later than 10 (Ten) Business Days from the date of the relevant transaction, failing which it shall be deemed that your account accurately reflects all transactions and that no error or discrepancy exists. All records maintained by STOEX, whether in electronic or documentary form, of your instructions, transactions, and other account activity shall, as against you, be deemed conclusive evidence of such instructions and activity unless you notify STOEX of a specific discrepancy within the period specified above.
          </p>

          <h5 className="font-bold mt-6">7. Digital Gold Transactions</h5>
          <p>
            7.1. <span className="font-bold">Placing an Order:</span> You may purchase or sell Digital Gold on the Platform on a pre-payment basis. Prices displayed on the Platform represent live market-linked quotes and constitute an invitation to offer. An order placed and confirmed by you constitutes a binding offer at the price prevailing at the time of confirmation. Prices may vary multiple times within a day and your payment obligation will depend on the price displayed at the time of confirmation. Prices are sourced from the Gold Provider and STOEX does not independently verify or guarantee the accuracy of such prices at any given moment.
          </p>
          <p>
            7.2. <span className="font-bold">Order Confirmation.</span> Once payment is received and KYC is verified, an invoice confirming your order shall be issued to you. Orders cannot be cancelled once confirmed. In the event of payment failure, the order shall stand cancelled automatically.
          </p>
          <p>
            7.3. <span className="font-bold">Title:</span> Your purchase shall be deemed completed and title to the specific quantity of physical gold corresponding to your order shall pass to you immediately and irrevocably upon the relevant quantity of gold being stored in the vault with the Vault Service Provider on your behalf, subject to applicable law and completion of payment. From that moment, your Customer Gold is your property and not the property of the Gold Provider.
          </p>
          <p>
            7.4. <span className="font-bold">Digital Gold Passbook:</span> STOEX generates and maintains a Digital Gold Passbook for each registered User. The Digital Gold Passbook is a non-transferable digital certificate that functions solely as an immutable audit trail and transaction record of the User's gold purchase and sale history on the Platform. The Digital Gold Passbook is not a financial instrument, security, token, or Virtual Digital Asset within the meaning of Section 2(47A) of the Income Tax Act, 1961. It carries no monetary value, cannot be sold, transferred, or traded, and does not in itself constitute or evidence title to gold. Your gold entitlement derives solely from the contractual framework governing your purchase from the Gold Provider, as reflected in the internal STOEX records and the invoice issued by the Gold Provider. The Digital Gold Passbook merely records that entitlement and does not create it. One Passbook exists per User account. STOEX shall have no obligation to recreate or reinstate a Passbook other than through the standard account recovery process set out in Clause 6.5.
          </p>
          <p>
            7.5. <span className="font-bold">Storage:</span> Free storage shall be provided for 5 (five) years from the date of purchase, or such other period as may be notified on the Platform. After expiry of the free storage period, storage charges may apply at rates specified on the Platform, which may be revised from time to time. Storage charges shall be recovered by deducting the equivalent value from your Digital Gold balance. In the event that your Digital Gold balance is insufficient to cover applicable storage charges, the Gold Provider shall be entitled to sell such portion of your Customer Gold as is necessary to recover the outstanding charges at the prevailing sale price.
          </p>
          <p>
            7.6. <span className="font-bold">Insurance:</span> Insurance for Customer Gold stored in the vault is maintained by the Vault Service Provider at its own cost. The insurance covers losses arising from theft or loss of gold while in vault custody, subject to the terms and conditions of the applicable insurance policy. In the event of any loss or damage not covered under the applicable insurance policy, the Customer Gold may be at risk and STOEX shall have no obligation to compensate or restore affected balances in such circumstances.
          </p>
          <p>
            7.7. STOEX reserves the right to delay, reject, or cancel any transaction without prior notice where:
          </p>
          <ul className="list-[lower-alpha] pl-10 space-y-2">
            <li>the transaction is suspected to be fraudulent, unlawful or in breach of this Agreement;</li>
            <li>the Customer has not satisfied verification requirements or is subject to regulatory restrictions;</li>
            <li>there is a technical failure, system risk or security concern affecting the Platform;</li>
            <li>such action is necessary to comply with legal or regulatory obligations.</li>
          </ul>
          <p>
            Payments received for a rejected order shall be refunded in accordance with the Return and Refund Policy.
          </p>
          <p>
            7.8. All purchases and sales confirmed on the Platform are final and binding. STOEX is under no obligation to reverse any confirmed transaction except where required by applicable law or as provided in the Return and Refund Policy.
          </p>
          <p>
            7.9. <span className="font-bold">Sale of Digital Gold:</span> You may sell your Digital Gold at the prevailing sale price displayed on the Platform at the time of your sale request. Once a sale request is confirmed, it is final and binding. The payment pursuant to the sale request shall be disbursed to your registered bank account. You are solely responsible for ensuring that your registered bank account details are accurate and up to date. If there is any inaccuracy in the bank account number, IFSC code, or other payment details provided by you, STOEX shall not be responsible for any resulting delay or non-credit of the payment. All sell transactions on the Platform are executed with the Gold Provider, who acts as the counterparty to all user sale requests. The Platform does not facilitate peer-to-peer transfers or secondary market transactions between users. Digital Gold purchased on the Platform cannot be sold within 48 (forty-eight) hours from the time of purchase. The ability to sell Digital Gold is subject to the Gold Provider's operational availability and prevailing market conditions. STOEX does not guarantee that the sell feature will be available at all times or at any specific time requested by you. A sale transaction on the Platform constitutes an independent market transaction between you and the Gold Provider.
          </p>
          <p>
            7.10. <span className="font-bold">Systematic Investment Plans:</span> You may opt into a SIP or auto-invest feature on the Platform, whereby a defined amount is periodically applied to the purchase of Digital Gold. Once a SIP instalment is processed and confirmed, it cannot be reversed or refunded. You may pause or cancel your SIP mandate at any time through the settings section of the Platform. Cancellation takes effect from the next scheduled instalment. Further terms governing SIP and refunds are set out in the Return and Refund Policy available on the Platform. A Systematic Investment Plan is neither a financial product nor a deposit scheme but a disciplined method of accumulating Digital Gold through periodic purchase transactions. STOEX offers no investment advice or assured returns in connection with the SIP feature.
          </p>
          <p>
            7.11. <span className="font-bold">Physical Delivery:</span> Where you request physical delivery of your Digital Gold, you will be required to pay applicable delivery charges and making charges. No payment is collected for the intrinsic value of gold corresponding to your existing Digital Gold balance, as you already hold title to such Customer Gold. Upon initiation of a valid delivery request and receipt of applicable charges, the equivalent Digital Gold units in your account will be locked pending successful delivery. The locked units will only be released upon receipt of confirmed delivery. Delivery will be facilitated by the Gold Provider through its appointed delivery partner. Once you have accepted delivery and signed the delivery confirmation, the transaction is final and no returns, replacements, or refunds shall be entertained. Physical delivery is available for Customer Gold holdings above the minimum quantity specified on the Platform from time to time. Users holding below the minimum delivery quantity may sell their holdings to the Gold Provider in accordance with Clause 7.9. Where your Digital Gold balance is below the minimum delivery quantity, you may also make an additional purchase of the shortfall quantity at the prevailing price plus applicable GST in order to meet the minimum threshold and proceed with physical delivery. In the event of a failed delivery attempt, unavailability of a recipient at the registered address, or receipt of a damaged or incorrect product, the terms set out in the Return and Refund Policy shall apply.
          </p>
          <p>
            7.12. <span className="font-bold">Goods and Services Tax:</span> A Goods and Services Tax of 3% is applicable on all purchases of Digital Gold as per applicable government regulations. You confirm that you are not registered under the Goods and Services Tax Act, 2017. You are solely responsible for any compliance obligations arising from your status under the said Act.
          </p>
          <p>
            7.13. <span className="font-bold">Return and Refund:</span> Terms governing returns, refunds, failed sale transactions, and fraudulent transactions are set out in the Return and Refund Policy, which forms an integral part of this Agreement.
          </p>

          <h5 className="font-bold mt-6">8. Administrator, Intermediaries and Safe Keeping Arrangement</h5>
          <p className="font-bold">8.1. Appointment and Consent</p>
          <p>
            The physical gold corresponding to your Digital Gold balance is stored by the Vault Service Provider in secured vaults on your behalf. The Administrator has been appointed to monitor the Customer Gold held by the Vault Service Provider and to act in the interest of Users with respect to the custody and safekeeping arrangements for Customer Gold. By accepting these General Terms, you acknowledge and consent to the appointment of the Administrator and Vault Service Provider and agree to accede to the terms of any arrangement entered into between the Gold Provider, the Vault Service Provider, and the Administrator in connection with the safe keeping of Customer Gold. STOEX, as a facilitating platform, is not a party to such arrangements but acts as a conduit to ensure your interests are communicated to the relevant intermediaries.
          </p>
          <p>
            The arrangements between the Gold Provider, the Vault Service Provider, and the Administrator are governed by a separate agreement to which you are not a party. Your rights in respect of your Customer Gold are set out in these General Terms.
          </p>
          <p>
            By accepting these General Terms, you are deemed to be a beneficiary of the obligations owed by the Vault Service Provider and Administrator under the arrangements governing the safekeeping of Customer Gold. The Administrator acts as your representative in monitoring compliance with these obligations to the extent that such obligations relate to the protection and safekeeping of your Customer Gold. The Administrator is also responsible for independently monitoring and periodically reconciling the total Digital Gold balance recorded in the STOEX records against the physical gold held in vault custody by the Vault Service Provider, to ensure that the aggregate user holdings are at all times fully backed by corresponding physical gold. YOU HEREBY VOLUNTARILY AND IRREVOCABLY AUTHORISE STOEX TO ACT AS YOUR LIMITED AGENT SOLELY FOR THE PURPOSE OF FACILITATING THE DIGITAL GOLD SERVICES THROUGH THE PLATFORM, INCLUDING INTERACTING WITH THE GOLD PROVIDER, THE VAULT SERVICE PROVIDER, AND THE ADMINISTRATOR ON YOUR BEHALF IN CONNECTION WITH STORAGE, DELIVERY, AND ANY MATTER RELATING TO YOUR CUSTOMER GOLD. ALL ACTIONS TAKEN BY STOEX ON THIS AUTHORISATION SHALL BE BINDING ON YOU AND SHALL BE DEEMED TO HAVE BEEN TAKEN WITH YOUR AUTHORITY AND CONSENT.
          </p>
          <p>
            8.2. <span className="font-bold">Role of the Administrator:</span> The Administrator is responsible for monitoring the Customer Gold held by the Vault Service Provider on your behalf. In the event of any expenses or charges remaining payable to any intermediary until actual delivery or fulfilment of your Customer Gold, including where the Gold Provider is unable to service such requests due to insolvency, cessation of business, or any other event of default, the Administrator shall be entitled to sell such portion of Customer Gold as is necessary to satisfy such outstanding expenses or charges at the prevailing sale price. The balance due to you after settling such charges shall be dealt with in accordance with the terms of the relevant Administrator arrangement.
          </p>
          <p className="font-bold">8.3. Vaulting and Safe Keeping</p>
          <p>
            The Customer Gold purchased by you shall be securely stored in a vault by the Vault Service Provider on your behalf. Your purchase of the physical gold corresponding to your Digital Gold balance shall be deemed completed and title shall be deemed to have passed to you immediately and irrevocably upon the relevant quantity of gold being stored in the vault with the Vault Service Provider on your behalf, subject to applicable law and completion of payment. The Customer Gold stored in such vault shall be in the form of bullion bars at a minimum purity equivalent to 24-karat gold in accordance with the applicable standards of the Gold Provider. All Customer Gold remains the sole and absolute property of the User at all times. STOEX and the Gold Provider do not, at any time, claim any ownership or title rights over your Customer Gold.
          </p>
          <p className="font-bold">8.4. Insurance</p>
          <p>
            To ensure that the Customer Gold stored in the vault is adequately protected, the Vault Service Provider maintains, at its own cost, an insurance policy from a reputable insurance company covering the aggregate value of all gold held in vault custody. The insurance coverage applies to losses arising from theft or loss of gold while in the Vault Service Provider's custody, computed at the prevailing daily closing gold rate as on the date of the incident. It does not cover losses arising from purity mismatch, variation in gold quality, war, revolution, derelict weapons of war, nuclear radiation, or any other event excluded under the terms of the applicable policy. Valid claim settlements are subject to satisfactorily meeting the insurer's requirements. In the event of a loss or damage not covered under the applicable insurance policy, the Customer Gold may be at risk and STOEX shall have no obligation to compensate or restore affected balances in such circumstances. STOEX shall use reasonable efforts to facilitate communication between you and the relevant parties in the event of an insurance claim affecting your Customer Gold.
          </p>
          <p className="font-bold">8.5. Events of Default - Gold Provider Insolvency</p>
          <p>
            In the event that the Gold Provider ceases to carry on its business, is adjudged insolvent, commences winding up proceedings, has a receiver or liquidator appointed over its assets, or is otherwise unable to continue servicing Customer Orders, STOEX shall notify the Administrator. The Administrator shall thereupon prepare a list of all Customers holding a Digital Gold balance and shall notify each Customer of the event and the process to be followed. Customers holding less than 1 gram of Customer Gold shall have their holdings sold at the prevailing sale price displayed on the Platform with the proceeds remitted to their registered bank account. Customers holding 1 gram or more shall be given 30 (thirty) days to pay applicable making and delivery charges and request physical delivery of their Customer Gold. Where delivery is not requested within such period, or where no valid delivery address has been provided, the Customer Gold shall be sold at the prevailing price and proceeds shall be remitted to the Customer's registered bank account.
          </p>
          <p className="font-bold">8.6. Platform Disclaimer</p>
          <p>
            STOEX's role in all matters under this Clause 8 is limited to that of a facilitating platform. STOEX does not own, control, or operate the vaulting, custody, or trustee arrangements described herein. All such arrangements are between the Gold Provider, the Vault Service Provider, and the Administrator.
          </p>
          <p>
            8.7. STOEX shall use reasonable efforts to facilitate communication between you and the relevant intermediaries in the event of any dispute or default but shall not be liable for the acts or omissions of the Gold Provider, Vault Service Provider, or Administrator.
          </p>
          <p>
            8.8. The Administrator, Vault Service Provider, and Gold Provider are independent parties and do not constitute a partnership, joint venture, or collective obligor. No party shall be liable for the acts, omissions, or defaults of any other, and you agree not to bring any claim against any such party that falls outside the scope of their defined role as set out in this Clause 8.
          </p>

          <h5 className="font-bold mt-6">9. Payment and Purchase Conditions</h5>
          <p>
            9.1. You may only purchase Digital Gold on the Platform on a pre-payment basis using a supported payment method. STOEX does not extend credit or allow purchases without cleared funds. All Digital Gold purchases must be fully prepaid and no transaction shall be processed unless payment is successfully received at the time of order placement.
          </p>
          <p>
            9.2. Payments may be made through supported payment mechanisms including domestic bank transfers, UPI, payment gateway integrations, or such other channels as notified by STOEX from time to time. Payments made through payment gateway integrations may involve redirection to a payment page hosted by a third-party payment gateway service provider. STOEX reserves the right to reject or reverse any payment that does not comply with its policies or applicable law.
          </p>
          <p>
            9.3. STOEX may impose transaction limits (minimum or maximum), verify the source of funds, or require proof of payment at its discretion. All payments must originate from a bank account or payment instrument held in your own name. STOEX may reject any payment received from third-party accounts or unidentified sources. You are solely responsible for ensuring that the source of your funds complies with applicable laws, including anti-money laundering and foreign exchange control regulations. Failure to comply may result in rejection, delay, or freezing of the payment or suspension of your access to the Platform.
          </p>
          <p>
            9.4. Your payment shall be deemed received only upon actual confirmation and successful reconciliation through STOEX's systems. STOEX shall not be responsible for delays, reversals, or errors caused by third-party banks, payment providers, or technical failures. You are responsible for ensuring accurate payment details and references.
          </p>
          <p>
            9.5. You shall bear all bank charges, payment gateway fees, or third-party processing costs associated with failed, reversed, or disputed transactions, including chargebacks, insufficient funds, incorrect payment details, or rejected payments. STOEX shall be entitled to recover such charges directly from you. STOEX is not responsible for any delay, loss, or error arising from such failed transactions.
          </p>
          <p>
            9.6. All payments made by you for the purchase of Digital Gold are received into a designated, ring-fenced client pool account operated by STOEX, which is maintained separately from STOEX's own operational funds. User funds held in the client pool account are not commingled with STOEX's own funds at any time. Settlement of the purchase amount to the Gold Provider is processed on an end-of-day basis under the oversight of the Administrator. STOEX is compensated through fees charged for its platform services as set out in Clause 10. User funds do not at any time constitute deposits with or liabilities of STOEX.
          </p>
          <p>
            9.7. STOEX may engage one or more third-party payment gateway service providers ("Payment Gateway Partner") to facilitate the collection of payments on the Platform. The Payment Gateway Partner is responsible solely for processing payment transactions and providing reasonable support for payment-related queries. The Payment Gateway Partner does not bear any responsibility for the Digital Gold services, the gold transactions, or any obligations of STOEX or the Gold Provider under these General Terms. STOEX shall not be responsible for any failure, delay, error, or unavailability of any payment gateway service and shall not be liable for any loss or damage arising from the acts or omissions of the Payment Gateway Partner. Any payment gateway charges that are not refunded by the Payment Gateway Partner in connection with a refund, reversal, or fraudulent transaction shall be deducted from the amount returned to you.
          </p>
          <p>
            9.8. STOEX shall not be liable for any unauthorized use of any credit card, debit card, UPI instrument, net banking credential, or any other payment instrument used to make a transaction on the Platform. The Payment Gateway Partner assumes no liability to the rightful holder of any payment instrument or to the issuing bank or financial institution for any unauthorized or fraudulent use of such instrument in connection with a transaction on the Platform, except for providing payment processing services and reasonable support for payment-related queries. In the event of a transaction executed on the basis of a fraudulently used payment instrument where the Digital Gold has already been purchased and allocated to an account, STOEX shall not be obligated to reverse such transaction but shall use reasonable efforts to cooperate with the affected party and relevant authorities upon receipt of appropriate documentation.
          </p>

          <h5 className="font-bold mt-6">10. Fees and Taxes</h5>
          <p>
            10.1. STOEX may charge fees for various activities conducted on the Platform, including but not limited to Digital Gold purchases, sales, SIP transactions, physical delivery, and account maintenance. The applicable fee structures will be published on the Platform and may be amended from time to time. By initiating any transaction, you agree to pay all applicable fees.
          </p>
          <p>
            10.2. Fees may be displayed to you at the time of transaction confirmation or automatically charged as part of the transaction settlement. STOEX may deduct fees directly from your account balance or from the transaction amount or proceeds. You are responsible for reviewing the current fee schedule before initiating any transaction.
          </p>
          <p>
            10.3. Unless otherwise specified, all fees are denominated in Indian Rupees (INR) or such other currency as may be supported by the Platform. You are solely responsible for any currency conversion, settlement, reversal, bank processing, or third-party transaction charges incurred in connection with your use of the Platform.
          </p>
          <p>
            10.4. You are solely responsible for determining, reporting, and paying any taxes including income tax, capital gains tax, goods and services tax (GST), stamp duty, or any other applicable taxes or duties arising from your use of the Platform or from holding, transferring or selling Digital Gold. STOEX does not provide tax advice and makes no representation regarding your tax obligations. You are advised to consult a qualified tax advisor.
          </p>
          <p>
            10.5. If STOEX is required under applicable law to deduct or withhold any tax (including but not limited to tax deducted at source (TDS) under the Income Tax Act, 1961) or to report any transaction, holding or payment to a tax or regulatory authority, it may do so without your prior consent and without informing you. STOEX may request additional information or declarations from you in connection with such obligations, and failure to provide the same may result in suspension or termination of your access to the Platform.
          </p>
          <p>
            10.6. STOEX shall not be liable to reimburse or gross-up any amount withheld or paid in compliance with applicable tax laws.
          </p>

          <h5 className="font-bold mt-6">11. Death or Incapacity of Customer</h5>
          <p>
            11.1. In the event of your death, your legal heirs or successors may claim your Digital Gold holdings in accordance with applicable succession laws, subject to submission of valid legal documentation, including but not limited to a succession certificate, probate of will, legal heir certificate or court order, as STOEX may require. STOEX shall not be obliged to act on any claim of succession unless and until such documentation is verified to its satisfaction.
          </p>
          <p>
            11.2. STOEX reserves the right to deduct reasonable administrative costs, legal expenses or verification fees from the account balance prior to any transfer of rights, especially where any claim is contested or suspected to be fraudulent.
          </p>
          <p>
            11.3. In the event of conflicting or disputed claims by multiple heirs or successors, STOEX may, at its discretion, suspend all access to the relevant account and decline to act on any instructions until the dispute is resolved through appropriate legal process and verified documentation. If STOEX initiates winding up or ceases operations while such a dispute remains unresolved, STOEX may, upon prior notice, transfer the Digital Gold holdings associated with the deceased Customer to a third-party Vault Service Provider, escrow arrangement or regulatory authority as applicable and shall have no further liability thereafter. Any such transfer shall be subject to applicable law and STOEX shall be entitled to recover its reasonable costs from the account prior to such transfer.
          </p>
          <p>
            11.4. Unless expressly permitted under the Platform and completed in accordance with applicable procedures, Digital Gold holdings are not transferable by nomination or joint ownership. STOEX does not maintain nominee details or automatic succession pathways unless enabled by applicable law.
          </p>
          <p>
            11.5. If you become legally incapacitated, your authorised representative or legal guardian may access your account only upon submission of valid legal documents evidencing their authority. STOEX reserves the right to restrict access until such time as your status and the authority of the representative are verified.
          </p>

          <h5 className="font-bold mt-6">12. Risk Disclosures and Limitations of Liability</h5>
          <p>
            12.1. Digital Gold on the Platform is subject to price volatility linked to prevailing gold market rates. The value of your Digital Gold balance may fluctuate continuously. There is no guarantee that Digital Gold can be sold at a desired price or time. Past performance is not indicative of future results. You may incur losses on your holdings.
          </p>
          <p>
            12.2. Digital gold is presently an unregulated product in India. It does not fall under the regulatory jurisdiction of SEBI or RBI. The regulatory framework governing digital gold may evolve and any change in applicable law or policy may affect your rights, the enforceability of transactions, or the continued availability of the Platform and Services. STOEX shall not be liable for any loss, restriction, or inability to access Digital Gold resulting from government actions including seizure, freezing, or regulatory enforcement. STOEX does not guarantee that the Platform or any Service will remain lawful or operational following any such change.
          </p>
          <p>
            12.3. The physical gold underlying your Digital Gold is held by the Vault Service Provider and safeguarded by the Administrator. While reasonable efforts are made to ensure the appointment of reputable and capable third-party service providers, STOEX does not guarantee the security, solvency, or uninterrupted services of the Vault Service Provider or Administrator. Operational failures, fraud, insolvency, or regulatory actions involving such third parties may impact your rights over your Digital Gold holdings.
          </p>
          <p>
            12.4. The Platform may be vulnerable to cyberattacks, data breaches, denial-of-service attacks or other technical failures. While STOEX implements commercially reasonable security safeguards, it does not guarantee that the Platform will be free from disruptions, vulnerabilities or unauthorized access. You are responsible for maintaining secure access credentials and understanding that the use of digital platforms entails inherent cybersecurity risks.
          </p>
          <p>
            12.5. STOEX does not act as a fiduciary, investment adviser, portfolio manager, broker or agent for you. No communication or information on the Platform should be interpreted as investment advice, legal advice or a recommendation to buy, sell or hold Digital Gold.
          </p>
          <p>
            12.6. Internet and telecommunications services are not guaranteed to be uninterrupted or error-free, and a failure by one or more connectivity or infrastructure providers may affect your ability to access the Platform or submit orders. You acknowledge that the order entry system on the Platform is an electronic system which may be subject to failures, delays, or interruptions beyond STOEX's control. STOEX shall not be responsible for any errors, inability to execute orders, delays in transmission, delivery, or execution of orders arising from breakdown or failure of transmission or communication facilities, failure of any device used to connect to the Platform, internet outages, or any other cause beyond STOEX's reasonable control or anticipation. You are responsible for maintaining a stable and secure internet connection when accessing the Platform and placing orders.
          </p>
          <p>12.7. You acknowledge and agree that:</p>
          <ul className="list-[lower-alpha] pl-10 space-y-2">
            <li>In the event of a system breach, cyberattack, technical failure, or similar Platform-specific incident, your rights will be limited to the extent of your individually held Digital Gold holdings. There shall be no pooling, mutualization, or socialization of losses across Customers unless required by law. Digital Gold is backed by physical gold held by the Vault Service Provider, and such gold is not extinguished by technical failures alone.</li>
            <li>In the event of a loss, impairment, or unavailability of the underlying physical gold, such as theft, fraud, insolvency, or regulatory action involving the Vault Service Provider or Administrator, STOEX shall use reasonable efforts to assist you in recovering your holdings. STOEX does not guarantee full recovery in all circumstances, and such events may result in a partial or total reduction in the value of your Digital Gold holdings.</li>
          </ul>

          <h5 className="font-bold mt-6">13. Data Protection and Privacy</h5>
          <p>
            13.1. STOEX will collect, use, store and process your personal data in accordance with applicable laws and STOEX's Privacy Policy, as published and updated from time to time.
          </p>
          <p>
            13.2. Your personal data may be processed for purposes including but not limited to onboarding, identity verification, enabling access to the Platform, facilitating transactions, ensuring compliance with legal obligations (including KYC, AML and tax reporting), customer support, fraud prevention, audit, dispute resolution, and improving the functionality and security of the Platform.
          </p>
          <p>
            13.3. STOEX may share your personal data with service providers, Vault Service Providers, payment processors, affiliates, auditors or other third parties who assist in operating the Platform, under appropriate contractual obligations. We may also disclose your data to competent legal, regulatory, or governmental authorities where required under applicable law.
          </p>
          <p>
            13.4. You are responsible for ensuring that all personal data you provide is accurate, complete, and lawfully obtained. You must update your data to keep it current. If you provide data on behalf of another individual or entity, you confirm that you are authorised to do so.
          </p>
          <p>
            13.5. You may have rights under applicable data protection laws or other applicable laws to access, correct, or request deletion of your personal data, or to withdraw consent. To understand how to exercise these rights, please refer to our Privacy Policy. Please note that if you withdraw your consent, or request deletion of personal data that is essential for us to perform all or part of our obligations under this Agreement, we may be unable to provide the affected services or maintain your account. STOEX shall not be liable for any loss or inability to use the Platform resulting from such actions.
          </p>
          <p>
            13.6. For certain services or types of processing, STOEX may require you to accept a separate data protection addendum. In such cases, the terms of that addendum shall apply in addition to this Agreement.
          </p>
          <p>
            13.7. You must not access, attempt to access, or misuse any personal data of other Users or Customers. Any unauthorised use or disclosure of personal data may result in immediate suspension or termination of access and may be reported to authorities.
          </p>
          <p>
            13.8. By accessing or using the Platform, you acknowledge that you have read and understood the STOEX Privacy Policy and agree to its terms. The Privacy Policy forms an integral part of this Agreement and may be amended from time to time in compliance with applicable law.
          </p>

          <h5 className="font-bold mt-6">14. Prohibited Conduct</h5>
          <p>14.1. You agree not to use the Platform, or assist any third party in using the Platform, in any manner that:</p>
          <ul className="list-[lower-alpha] pl-10 space-y-2">
            <li>Violates applicable laws or regulations, including laws relating to money laundering, terrorism financing, corruption, securities, taxation, or foreign exchange;</li>
            <li>Attempts to circumvent or avoid sanctions, export controls, embargoes or other government-imposed restrictions applicable under Indian or international law.</li>
            <li>Provides false, inaccurate, incomplete or misleading information during account registration, KYC verification, or in any communication with STOEX, or misrepresents your identity, eligibility, or authority to act.</li>
            <li>Gains or attempts to gain unauthorized access to any part of the Platform or its related systems, accounts, infrastructure, or data, including by hacking or other form of intrusion.</li>
            <li>Introduces or transmits malware, viruses, malicious code or engages in any activity that could damage, disable, disrupt or impair the functioning of the Platform or its related services.</li>
            <li>Uses automated tools, including bots, crawlers, scrapers, or spiders to access the Platform or collect data without STOEX's prior written authorization.</li>
            <li>Attempts to reverse-engineer, decompile, disassemble or otherwise derive or interfere with any source code, software, algorithm or technology forming part of the Platform.</li>
            <li>Engages in any form of deceptive conduct, price manipulation, or coordinated activity intended to distort the price or availability of Digital Gold on the Platform;</li>
            <li>Uses the Platform to conduct or facilitate transactions on behalf of any other person or entity, or to act as a broker, advisor, dealer or intermediary, without STOEX's prior written consent.</li>
            <li>Uses the Platform to hold, transfer or transact Digital Gold connected to unlawful activity, including dealings with persons or entities subject to sanctions or appearing on government watchlists.</li>
            <li>Accesses or uses an account that is not your own without valid legal authorization and STOEX's prior written approval.</li>
            <li>Harasses, threatens or engages in abusive or inappropriate conduct toward STOEX personnel or other users of the Platform, whether through the Platform or by other means.</li>
            <li>Misappropriates, infringes, or otherwise violates STOEX's intellectual property rights or proprietary information, including copying or distributing Platform materials without authorization.</li>
            <li>Uses the Platform in a manner that STOEX reasonably determines is contrary to the intended use of the Platform, inconsistent with the letter or spirit of this Agreement, or potentially harmful to STOEX, its Users, or the digital gold services offered on the Platform.</li>
          </ul>
          <p>
            14.2. If STOEX reasonably believes that you have engaged in any prohibited conduct, it may take any action it deems appropriate, including without limitation suspending or terminating your access to the Platform, freezing or restricting your account, refusing to process or reversing any transactions, reporting your activity to relevant authorities, and initiating legal action. You acknowledge that such actions may be taken without prior notice and that STOEX shall not be liable to you or any third party for any resulting loss or damage.
          </p>

          <h5 className="font-bold mt-6">15. Limitation of Liability</h5>
          <p>
            15.1. TO THE MAXIMUM EXTENT PERMITTED BY LAW, STOEX AND ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AND SERVICE PROVIDERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF PROFITS, LOSS OF DATA, LOSS OF REPUTATION, OR LOSS OF OPPORTUNITY, ARISING FROM OR RELATED TO YOUR USE OF OR INABILITY TO USE THE PLATFORM, ANY DIGITAL GOLD HOLDINGS, OR ANY RELATED SERVICES, EVEN IF STOEX HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p>
            15.2. STOEX DOES NOT GUARANTEE THAT THE PLATFORM WILL BE AVAILABLE WITHOUT INTERRUPTION, DELAY, OR ERROR, OR THAT THE PLATFORM OR DIGITAL GOLD SERVICES WILL MEET YOUR EXPECTATIONS OR ACHIEVE ANY SPECIFIC OUTCOME. THE PLATFORM AND ALL RELATED SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED.
          </p>
          <p>
            15.3. STOEX'S TOTAL AND AGGREGATE LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING OUT OF OR RELATED TO THIS AGREEMENT, WHETHER ARISING UNDER CONTRACT, INDEMNITY, TORT (INCLUDING NEGLIGENCE), UNDER STATUTE OR ANY OTHER LEGAL THEORY, SHALL NOT EXCEED THE TOTAL AMOUNT OF FEES ACTUALLY PAID BY YOU TO STOEX IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
          </p>
          <p>15.4. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, STOEX SHALL NOT BE LIABLE FOR ANY LOSSES OR LIABILITIES RESULTING FROM:</p>
          <ul className="list-[lower-alpha] pl-10 space-y-2">
            <li>ANY SYSTEM FAILURE, MALFUNCTION, OR SUSPENSION OF ACCESS TO THE PLATFORM;</li>
            <li>UNAUTHORIZED ACCESS TO YOUR ACCOUNT, DATA, OR CREDENTIALS;</li>
            <li>ACTS OR OMISSIONS OF VAULT SERVICE PROVIDERS, PAYMENT PROVIDERS, OR OTHER THIRD PARTIES NOT UNDER STOEX'S DIRECT CONTROL;</li>
            <li>REGULATORY ACTIONS, CHANGES IN LAW, TAX ENFORCEMENT, SEIZURE, OR GOVERNMENTAL INTERVENTION AFFECTING DIGITAL GOLD; OR</li>
            <li>ANY LOSS, THEFT, OR INACCESSIBILITY OF DIGITAL GOLD HOLDINGS DUE TO CYBERATTACKS, TECHNICAL ISSUES, OR PLATFORM COMPROMISE.</li>
            <li>ANY FAILURE, DELAY, ERROR, UNAUTHORIZED TRANSACTION, OR LOSS ARISING FROM THE ACTS OR OMISSIONS OF ANY THIRD-PARTY PAYMENT GATEWAY, BANK, PAYMENT PROCESSOR, OR OTHER THIRD-PARTY PAYMENT SERVICE PROVIDER INVOLVED IN PROCESSING YOUR TRANSACTIONS ON THE PLATFORM.</li>
          </ul>
          <p>
            15.5. YOU ACKNOWLEDGE THAT STOEX DOES NOT ACT AS YOUR AGENT, FIDUCIARY, FINANCIAL ADVISER, OR TRUSTEE, AND THAT ALL DECISIONS RELATING TO YOUR USE OF THE PLATFORM ARE YOUR SOLE RESPONSIBILITY. STOEX ACTS SOLELY AS A FACILITATING PLATFORM AND IS NOT A PARTY TO ANY TRANSACTION BETWEEN YOU AND THE GOLD PROVIDER, EXCEPT FOR THE LIMITED AGENCY EXPRESSLY SET OUT IN CLAUSE 8.1.
          </p>

          <h5 className="font-bold mt-6">16. Suspension and Termination</h5>
          <p>16.1. STOEX may, at its sole discretion and without prior notice, suspend, restrict, or terminate your access to the Platform or any part of the Services at any time, including where:</p>
          <ul className="list-[lower-alpha] pl-10 space-y-2">
            <li>you have breached any provision of this Agreement or any applicable law;</li>
            <li>STOEX has reasonable grounds to suspect fraudulent, unlawful, or suspicious activity on your account;</li>
            <li>you have provided false, inaccurate, or misleading information during registration or KYC;</li>
            <li>STOEX is required to do so by a court order, regulatory directive, or applicable law; or</li>
            <li>STOEX ceases to operate the Platform or discontinues any Service, whether due to a change in applicable law, regulatory direction, or business decision.</li>
          </ul>
          <p>
            16.2. You may close your account at any time by following the account termination process available on the Platform or by submitting a written request to STOEX through the customer support channels. Closure of your account shall not affect any rights or obligations that have accrued prior to the date of closure.
          </p>
          <p>
            16.3. Upon termination of your account for any reason, your outstanding Digital Gold balance shall be dealt with in accordance with the terms of the Gold Provider and the Administrator arrangement as set out in Clause 8. STOEX shall use reasonable efforts to notify you of the process for liquidating or taking physical delivery of your Customer Gold where operationally feasible. Where STOEX is unable to contact you, the provisions of Clause 8.6 shall apply.
          </p>
          <p>
            16.4. STOEX may, in the event of any change in applicable laws, regulations, or governmental policies that materially affects its ability to operate the Platform or offer the Services, suspend, modify, or discontinue any feature of the Platform or the Services without incurring any liability to you. STOEX shall endeavour to provide reasonable prior notice to Users in such circumstances.
          </p>
          <p>
            16.5. Upon termination, your right to access and use the Platform shall cease immediately. Transaction records shall be retained by STOEX in accordance with Clause 19. The following provisions shall survive termination of this Agreement: Clause 12 (Risk Disclosures), Clause 15 (Limitation of Liability), Clause 17 (Indemnity), Clause 19 (Record Retention), Clause 20 (Confidentiality), and Clause 24 (Governing Law and Dispute Resolution).
          </p>

          <h5 className="font-bold mt-6">17. Indemnity</h5>
          <p>17.1. You agree to indemnify, defend, and hold harmless STOEX, its affiliates, directors, officers, employees and agents (<span className="font-bold">"Indemnified Parties"</span>) from and against any and all claims, actions, proceedings, losses, liabilities, damages, penalties, fines, costs, and expenses (including reasonable legal fees) arising out of or in connection with:</p>
          <ul className="list-[lower-alpha] pl-10 space-y-2">
            <li>your breach of this Agreement or violation of any applicable law, regulation, or regulatory directive;</li>
            <li>your use or misuse of the Platform or any Digital Gold holdings, including any transaction initiated from your account;</li>
            <li>any false, inaccurate, or misleading information provided by you during registration, KYC, or at any other time;</li>
            <li>any unauthorised access to or use of your account;</li>
            <li>your failure to comply with tax, regulatory, or reporting obligations arising from your use of the Platform or holding of Digital Gold;</li>
            <li>any third-party claim relating to your conduct on the Platform, including infringement of intellectual property rights, violation of privacy.</li>
          </ul>
          <p>
            17.2. STOEX reserves the right, at its sole discretion, to assume the exclusive defence and control of any matter otherwise subject to indemnification by you, in which case you agree to cooperate fully in asserting any available defences and supporting STOEX in resolving the matter.
          </p>
          <p>
            17.3. Your obligations under this clause will survive the termination of this Agreement and your use of the Platform.
          </p>

          <h5 className="font-bold mt-6">18. Force Majeure</h5>
          <p>18.1. STOEX shall not be responsible for any delay, failure, interruption, or inability to perform any of its obligations under this Agreement or to provide access to the Platform or related services, if such delay or failure results from any event beyond its reasonable control, including but not limited to:</p>
          <ul className="list-[lower-alpha] pl-10 space-y-2">
            <li>natural disasters (such as floods, earthquakes, fires, or storms);</li>
            <li>pandemics, epidemics, or outbreaks of disease;</li>
            <li>acts of God or nature;</li>
            <li>war, terrorism, armed conflict, or civil unrest;</li>
            <li>labour disputes or industrial action;</li>
            <li>power failures or utility outages;</li>
            <li>cyberattacks, ransomware, data breaches, denial-of-service (DoS) or distributed denial-of-service (DDoS) attacks, malware infections, or other security incidents affecting STOEX or its third-party providers;</li>
            <li>failures or outages of internet, telecommunications, or infrastructure systems;</li>
            <li>actions or omissions of Vault Service Providers, payment processors, or technology vendors not under STOEX's direct control;</li>
            <li>enactment of new laws or regulations, or any change in or reinterpretation of existing laws, regulatory guidance, or government policies that materially affects STOEX's ability to operate the Platform or offer related services;</li>
            <li>refusal, suspension, or discontinuation of services by any third-party provider (including Vault Service Providers, banks, payment gateways, technology vendors, or infrastructure providers) where such refusal is beyond STOEX's reasonable control and materially impacts the availability or operation of the Platform.</li>
          </ul>
          <p>
            18.2. If a Force Majeure event continues for a period of more than thirty (30) days, STOEX may, in its sole discretion, suspend or terminate access to all or part of the Platform without incurring any liability.
          </p>
          <p>
            18.3. STOEX will use commercially reasonable efforts to resume performance or restore Platform access as soon as practicable after the Force Majeure event ceases but shall not be required to do so if doing so would be commercially unreasonable, unlawful, or otherwise infeasible.
          </p>

          <h5 className="font-bold mt-6">19. Record Retention</h5>
          <p>
            19.1. STOEX will maintain records of transactions, user activity, communications, KYC documentation and other relevant data relating to your use of the Platform in accordance with applicable law, regulatory guidance and internal policies. STOEX may retain such records for as long as required to comply with legal obligations, respond to regulatory or law enforcement requests, or protect its own legal interests.
          </p>
          <p>
            19.2. You are responsible for maintaining accurate records of all transactions conducted on the Platform, including trade confirmations, account statements, and any communications with STOEX, for a minimum of five (5) years from the date of each transaction or longer if required by applicable law.
          </p>
          <p>
            19.3. Nothing in this Agreement shall be construed to grant Users any right to audit, inspect, or otherwise access STOEX's systems, infrastructure, books or records. STOEX may, in its sole discretion or where required by law, make information available to Users or regulators upon formal request and subject to applicable confidentiality and security protocols.
          </p>
          <p>
            19.4. Notwithstanding anything in this Agreement or our Privacy Policy, you acknowledge that STOEX's obligations to retain records under applicable laws, including anti-money laundering, tax, and regulatory requirements, will override any request to delete or erase personal data under applicable data protection laws, including the Digital Personal Data Protection Act of 2023. Where retention is required by law or necessary for compliance, such data will be retained securely for the prescribed period and will not be erased until such retention obligations cease to apply.
          </p>

          <h5 className="font-bold mt-6">20. Confidentiality</h5>
          <p>
            20.1. "Confidential Information" means any non-public information, in any form, disclosed by STOEX or its Affiliates that relates to its business, operations, technology, financials, systems, services, processes, methodologies, intellectual property (including software, algorithms, source code, and tools), business plans, platform architecture (including custody and trading systems), technical specifications, data, customer or vendor information, or any other proprietary material that a reasonable person would understand to be confidential given the nature of the information and the circumstances of its disclosure.
          </p>
          <p>20.2. You agree to:</p>
          <ul className="list-[lower-alpha] pl-10 space-y-2">
            <li>keep all Confidential Information strictly confidential and not disclose such information to any third party, except as permitted under this Agreement;</li>
            <li>use the Confidential Information solely for the purpose of accessing and using the Platform in accordance with this Agreement; and</li>
            <li>ensure that any person or entity to whom you disclose such Confidential Information (where permitted) is bound by confidentiality obligations no less stringent than those set out herein.</li>
          </ul>
          <p>20.3. You may disclose Confidential Information:</p>
          <ul className="list-[lower-alpha] pl-10 space-y-2">
            <li>to your legal, financial, or professional advisors strictly on a need-to-know basis, provided such recipients are subject to confidentiality obligations materially similar to those under this Agreement; or</li>
            <li>where required by applicable law, regulation, or order of a court or regulatory authority, provided that (i) you give STOEX prompt written notice of such requirement (unless prohibited by law), (ii) you reasonably cooperate with STOEX in seeking confidential treatment or a protective order, and (iii) you disclose only the minimum Confidential Information necessary to comply with such requirement.</li>
          </ul>
          <p>
            20.4. Upon written request by STOEX or upon termination of this Agreement, you shall promptly return or securely delete all Confidential Information in your possession or control, unless you are required to retain it under applicable law, in which case your confidentiality obligations shall survive for as long as such retention is legally required.
          </p>
          <p>
            20.5. Your obligations under this Clause 20 shall survive the termination or expiration of this Agreement for a period of five (05) years, or such longer period as may be required by applicable law.
          </p>

          <h5 className="font-bold mt-6">21. Intellectual Property Rights</h5>
          <p>
            21.1. All rights, title, and interest in and to the STOEX Platform, including its software, architecture, source code, user interfaces, databases, algorithms, documentation, processes, and all related technology or intellectual property (whether registered or unregistered), shall remain exclusively owned by STOEX or its licensors. Nothing in this Agreement shall be construed to transfer or assign any intellectual property rights in the STOEX Platform or any component thereof to you.
          </p>
          <p>
            21.2. STOEX grants you a limited, non-exclusive, non-transferable, revocable licence to access and use the STOEX Platform solely for the purposes expressly permitted under this Agreement. You shall not (and shall not permit any third party to) reverse-engineer, decompile, disassemble, copy, modify, translate, adapt, or create derivative works from the STOEX Platform or any of its components.
          </p>
          <p>
            21.3. The purchase or holding of Digital Gold on the Platform does not confer on you any rights in or to the underlying technology, codebase, branding, or intellectual property of STOEX or its affiliates. Digital Gold does not carry any proprietary interest in the Platform.
          </p>
          <p>
            21.4. If you provide any feedback, suggestions, ideas, or recommendations relating to the Platform or its services (<span className="font-bold">"Feedback"</span>), STOEX may use such Feedback freely and without any obligation to you. You hereby grant STOEX a perpetual, worldwide, irrevocable, royalty-free licence to use and incorporate such Feedback in its products and services.
          </p>
          <p>
            21.5. Except for the limited licence expressly granted under Clause 21.2, all rights not expressly granted to you are reserved by STOEX and its licensors.
          </p>
          <p>
            21.6. The names "STOEX", "STOEX Platform", the STOEX logo, and all related names, logos, product and service names, designs, and slogans are trademarks or service marks of STOEX or its affiliates or licensors. You may not use or reproduce any of these marks without the prior written permission of STOEX.
          </p>

          <h5 className="font-bold mt-6">22. Notices</h5>
          <p>
            22.1. All notices, communications, and disclosures required or permitted under this Agreement shall be provided by STOEX to you electronically. We may deliver such notices by posting them on the Platform, by sending them to your registered email address, or through any other communication method linked to your user account. You agree that all such electronic communications satisfy any legal requirement that such communications be in writing.
          </p>
          <p>
            22.2. Any notice sent by STOEX shall be deemed to have been received by you at the time of posting on the Platform or, if sent by email, at the time it is sent to your registered email address, regardless of whether you access or read the communication.
          </p>
          <p>
            22.3. If you are required to give notice to STOEX under this Agreement, such notice must be sent by email to the designated support email address published on the Platform or as otherwise specified by STOEX. STOEX may require you to verify your identity before acting on any such notice.
          </p>
          <p>
            22.4. All notices shall be in English unless STOEX explicitly agrees otherwise in writing.
          </p>

          <h5 className="font-bold mt-6">23. Modification of Terms</h5>
          <p>
            23.1. STOEX reserves the right to modify, update, or revise these General Terms (including any policies, or notices referenced herein) at any time, in whole or in part, at its sole discretion. Such changes may be made to reflect legal, regulatory, technical, or business developments.
          </p>
          <p>
            23.2. Material changes to these General Terms will be communicated by posting the updated version on the Platform and, where appropriate, by notifying you via your registered email address or through in-app notifications. The updated General Terms will specify the "Last Updated" date at the top.
          </p>
          <p>
            23.3. Your continued use of the Platform after the effective date of any modification will constitute your acceptance of the modified Terms. If you do not agree to any changes, you must discontinue use of the Platform and close your account in accordance with the account termination process available on the Platform.
          </p>
          <p>
            23.4. Unless expressly stated otherwise, modifications will not apply retrospectively and will become effective as of the date they are posted or as otherwise specified in the notice.
          </p>

          <h5 className="font-bold mt-6">24. Governing Law and Dispute Resolution</h5>
          <p>
            24.1. This Agreement, and any dispute or claim arising out of or in connection with it, shall be governed by and construed in accordance with Indian laws.
          </p>
          <p>
            24.2. If you have any grievance, complaint, or concern arising out of the Platform, your user account, a transaction, or these General Terms, you agree to first raise it with STOEX's Grievance Officer through the contact details provided on the Platform. You must provide a clear description of the nature of your grievance, relevant facts, and supporting documentation, if any.
          </p>
          <p>
            24.3. You agree that you shall not initiate any legal or arbitral proceeding unless you have first made a good faith attempt to resolve the issue through the internal grievance redressal process outlined above and at least thirty (30) days have passed without satisfactory resolution from the date your complaint was formally acknowledged by STOEX. For grievance escalation procedures, timelines, and Grievance Redressal Officer contact details, please refer to the Company's Grievance Redressal Policy available on the Platform.
          </p>
          <p>
            24.4. Subject to Clause 24.2 above, the courts at Delhi, India shall have exclusive jurisdiction over any proceedings arising from this Agreement, except where arbitration is elected in accordance with the following clause.
          </p>
          <p>
            24.5. Notwithstanding Clause 24.2, STOEX, at its sole discretion, may elect to refer any dispute, controversy, or claim arising out of or in connection with this Agreement to final and binding arbitration administered by the Delhi International Arbitration Centre ("DIAC") in accordance with its rules in force at the time of the commencement of arbitration. The arbitration shall be conducted by a sole arbitrator appointed by DIAC. The seat and venue of arbitration shall be New Delhi, India. The language of the arbitration shall be English.
          </p>

          <h5 className="font-bold mt-6">25. Miscellaneous</h5>
          <p>
            25.1. <span className="italic">Independent Status.</span> Nothing in this Agreement shall be construed to create any agency, partnership, joint venture, or employment relationship between you and STOEX, except for the limited agency expressly set out in Clause 8.1. You agree that you are acting solely for your own account and not on behalf of any third party, unless otherwise authorized under this Agreement. STOEX acts solely as a facilitating platform and is not a party to any transaction between you and the Gold Provider.
          </p>
          <p>
            25.2. <span className="italic">Expenses.</span> Each Party shall bear its own costs, expenses, and professional fees incurred in connection with the use of the Platform and the transactions carried out hereunder.
          </p>
          <p>
            25.3. <span className="italic">Entire Agreement.</span> This Agreement, including any documents or policies incorporated by reference (such as the Privacy Policy, Return and Refund Policy, and Grievance Redressal Policy), constitutes the entire agreement between you and STOEX regarding the subject matter hereof and supersedes all prior or contemporaneous understandings, communications, or agreements, whether written or oral.
          </p>
          <p>
            25.4. <span className="italic">Amendments.</span> STOEX reserves the right to modify this Agreement at any time in accordance with Clause 23 (Modification of Terms). Continued use of the Platform following any such changes shall constitute your acceptance of the revised Agreement.
          </p>
          <p>
            25.5. <span className="italic">Waiver.</span> No waiver of any right, remedy, or provision of this Agreement shall be effective unless made in writing and signed by STOEX. Any such waiver shall not be deemed a continuing waiver or a waiver of any other provision or breach.
          </p>
          <p>
            25.6. <span className="italic">Severability.</span> If any provision of this Agreement is held to be invalid, illegal, or unenforceable under applicable law, the remainder of the Agreement shall remain in full force and effect. The invalid or unenforceable provision shall be interpreted in a manner consistent with the intent of the original provision to the maximum extent permitted by law.
          </p>
          <p>
            25.7. <span className="italic">Binding Effect and No Third-Party Rights.</span> This Agreement is binding on you and STOEX and does not confer any rights or remedies on any third party, unless expressly stated otherwise.
          </p>
          <p>
            25.8. <span className="italic">Assignment.</span> You may not assign or transfer your rights or obligations under this Agreement without STOEX's prior written consent. STOEX may assign or transfer its rights and obligations under this Agreement without restriction, including in connection with any merger, acquisition, or sale of assets.
          </p>
          <p>
            25.9. <span className="italic">Cumulative Rights.</span> All rights and remedies of STOEX under this Agreement are cumulative and not exclusive of any rights or remedies otherwise available under law.
          </p>
          <p>
            25.10. <span className="italic">Construction and Interpretation.</span> This Agreement shall not be construed against either party by reason of authorship. References to the singular include the plural, and vice versa. References to any gender shall include all genders. The words "including," "include," and their derivatives shall be interpreted as "without limitation." Clause headings are for convenience only and shall not affect interpretation.
          </p>

          <h5 className="font-bold mt-6">Schedule A - Definitions</h5>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-[#3B3C4A] text-left" style={{ fontSize: "18px" }}>
              <thead>
                <tr>
                  <th className="border border-[#3B3C4A] px-4 py-3 font-bold w-1/3">Defined Term</th>
                  <th className="border border-[#3B3C4A] px-4 py-3 font-bold">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#3B3C4A] px-4 py-3 font-bold align-top">Agreement</td>
                  <td className="border border-[#3B3C4A] px-4 py-3 align-top">These General Terms together with the Privacy Policy, Return and Refund Policy, and Grievance Redressal Policy, as published on the Platform from time to time.</td>
                </tr>
                <tr>
                  <td className="border border-[#3B3C4A] px-4 py-3 font-bold align-top">Customer Gold</td>
                  <td className="border border-[#3B3C4A] px-4 py-3 align-top">The quantity of physical gold corresponding to your Digital Gold balance, held by the Vault Service Provider on your behalf.</td>
                </tr>
                <tr>
                  <td className="border border-[#3B3C4A] px-4 py-3 font-bold align-top">Vault Service Provider</td>
                  <td className="border border-[#3B3C4A] px-4 py-3 align-top">Sequel Logistic Services Private Limited, or such other Vault Service Provider as may be appointed from time to time, responsible for the physical safekeeping of Customer Gold in secured vaults.</td>
                </tr>
                <tr>
                  <td className="border border-[#3B3C4A] px-4 py-3 font-bold align-top">Digital Gold</td>
                  <td className="border border-[#3B3C4A] px-4 py-3 align-top">A digitally recorded beneficial interest in a corresponding quantity of physical gold of 24-karat purity, held by the Vault Service Provider on your behalf.</td>
                </tr>
                <tr>
                  <td className="border border-[#3B3C4A] px-4 py-3 font-bold align-top">Gold Provider</td>
                  <td className="border border-[#3B3C4A] px-4 py-3 align-top">The independent bullion provider through whose arrangement the physical gold underlying your Digital Gold is sourced and sold.</td>
                </tr>
                <tr>
                  <td className="border border-[#3B3C4A] px-4 py-3 font-bold align-top">Platform</td>
                  <td className="border border-[#3B3C4A] px-4 py-3 align-top">The STOEX website, mobile application, and any related interface or service through which you access the Services.</td>
                </tr>
                <tr>
                  <td className="border border-[#3B3C4A] px-4 py-3 font-bold align-top">Services</td>
                  <td className="border border-[#3B3C4A] px-4 py-3 align-top">The features made available on the Platform, including the purchase and sale of Digital Gold, SIP, and physical delivery, as available from time to time.</td>
                </tr>
                <tr>
                  <td className="border border-[#3B3C4A] px-4 py-3 font-bold align-top">SIP</td>
                  <td className="border border-[#3B3C4A] px-4 py-3 align-top">A Systematic Investment Plan, being a periodic automated purchase feature available on the Platform.</td>
                </tr>
                <tr>
                  <td className="border border-[#3B3C4A] px-4 py-3 font-bold align-top">Administrator</td>
                  <td className="border border-[#3B3C4A] px-4 py-3 align-top">Vistra ITCL (India) Limited ('Vistra ITCL') or such successor as may be appointed, acting in the interest of Users with respect to the custody and safekeeping arrangements for Customer Gold.</td>
                </tr>
                <tr>
                  <td className="border border-[#3B3C4A] px-4 py-3 font-bold align-top">User</td>
                  <td className="border border-[#3B3C4A] px-4 py-3 align-top">Any individual who accesses or uses the Platform.</td>
                </tr>
                <tr>
                  <td className="border border-[#3B3C4A] px-4 py-3 font-bold align-top">Payment Gateway Partner</td>
                  <td className="border border-[#3B3C4A] px-4 py-3 align-top">Any third-party payment gateway service provider engaged by STOEX from time to time to facilitate the collection and processing of payments made by Users on the Platform.</td>
                </tr>
                <tr>
                  <td className="border border-[#3B3C4A] px-4 py-3 font-bold align-top">Client Pool Account</td>
                  <td className="border border-[#3B3C4A] px-4 py-3 align-top">The designated, ring-fenced bank account operated by STOEX for receiving client purchase payments, maintained separately from STOEX's operational funds, through which settlement to the Gold Provider is processed on an end-of-day basis under the oversight of the Administrator.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
