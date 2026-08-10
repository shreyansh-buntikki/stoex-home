import { CSSProperties } from "react";

const sansation: CSSProperties = { fontFamily: "Sansation, sans-serif" };
const mona: CSSProperties = {
  fontFamily: "Mona Sans, sans-serif",
  fontSize: "20px",
  color: "#3B3C4A",
};

export const ReturnRefundPolicy = () => {
  return (
    <div className="bg-[#f8f6f6] p-4 lg:p-20">
      <div className="bg-white p-4 lg:p-8 rounded-xl">
        <h4 className="text-[32px] text-[#00007F] lg:text-[64px] font-bold" style={sansation}>
          Return and Refund Policy
        </h4>

        <div style={mona} className="mt-6 space-y-4">
          <p className="text-start font-bold">
            P2 KOSHAYOJAN SERVICES PRIVATE LIMITED (STOEX)
            <br />
            RETURN AND REFUND POLICY
          </p>
          <p className="text-start">Effective Date: May 2026</p>

          <p>
            P2 Koshayojan Services Private Limited (<span className="font-bold">"Company"</span>, <span className="font-bold">"we"</span>, <span className="font-bold">"us"</span>) operates <span className="font-bold">STOEX</span>, a platform that facilitates access to Digital Gold services, enabling Users to purchase and sell Digital Gold and request physical delivery of Customer Gold through arrangements with independent bullion providers. STOEX does not own, hold, or deal in gold directly. This Return and Refund Policy (<span className="font-bold">"Policy"</span>) sets out the terms applicable to refunds in respect of failed transactions, failed sale transactions, physical delivery-related returns, and other specific circumstances as described herein. This Policy is framed in consonance with the applicable provisions of the Consumer Protection Act, 2019, the Information Technology Act, 2000, and any other applicable laws and regulations in force from time to time. This Policy forms an integral part of the Agreement and shall be read together with the STOEX Platform General Terms and Conditions. Users are advised to read this Policy carefully before transacting on the Platform.
          </p>

          <h5 className="font-bold mt-6">1. Nature of Digital Gold Transactions</h5>
          <p>
            Digital Gold transactions executed on the STOEX platform are subject to live market prices and are confirmed in real time. Once a purchase or sale of Digital Gold has been confirmed by the user, the transaction is final and binding. Cancellation or refund of such confirmed transactions is not possible, as the relevant transaction is executed with the Gold Provider at the prevailing market rate at the time of confirmation. Users are strongly advised to verify all transaction details before confirming any order.
          </p>

          <h5 className="font-bold mt-6">2. General No-Return and No-Refund Position</h5>
          <p>
            As a general rule, all confirmed Digital Gold transactions on the STOEX platform are non-cancellable and non-refundable. This position is consistent with the nature of live market-linked Digital Gold transactions, where market prices fluctuate continuously and transactions are executed at real-time rates. STOEX does not accept returns or issue refunds on the basis of price movements following confirmation of a transaction.
          </p>
          <p>
            Refunds shall, however, be considered only in the specific circumstances set out in this Policy.
          </p>

          <h5 className="font-bold mt-6">3. Systematic Investment Plans (SIP) and Auto-Invest</h5>
          <p>
            Users may opt into SIP or auto-invest features available on the STOEX platform, whereby a defined amount is periodically applied to the purchase of Digital Gold. Once a SIP instalment has been processed and confirmed, the same cannot be reversed or refunded. A SIP on the STOEX platform is not a financial product, investment scheme, or collective investment vehicle and STOEX does not provide any guaranteed returns or investment advice in connection with any SIP feature.
          </p>
          <p>
            Users may, however, pause or cancel their SIP mandate at any time through the settings section of the Platform. Pausing or cancelling a SIP shall take effect from the next scheduled instalment and shall not affect instalments already processed. The Company shall not be liable for any SIP instalment processed prior to the receipt of a valid pause or cancellation instruction.
          </p>

          <h5 className="font-bold mt-6">4. Failed Transactions</h5>
          <p>
            In the event that a transaction fails after the user's payment has been debited but before Digital Gold has been credited to the user's account, the debited amount shall be refunded to the user's original payment method within 7 (seven) working days from the date on which the failure is confirmed, without the user being required to initiate a refund request. In the event that the refund is not received within the aforesaid period, the user may contact the customer support team at <a href="mailto:support@stoex.in" className="underline">support@stoex.in</a> with relevant transaction details to enable STOEX to investigate and coordinate resolution with the relevant Payment Gateway Partner.
          </p>
          <p>
            The Company shall not be liable for any difference in gold rates between the time of the failed transaction and the time of refund. Where a technical or network issue occurs during transaction processing, users are advised to initiate a fresh transaction separately and not to treat any partially processed transaction as confirmed.
          </p>

          <h5 className="font-bold mt-6">5. Failed Sale Transactions</h5>
          <p>
            In the event that a user initiates a sale of Digital Gold and the sale proceeds are not credited to the user's linked bank account within 72 (seventy-two) hours of the sale being confirmed, the equivalent quantity of Digital Gold sold shall be automatically reinstated to the user's account within 10 (ten) days from the date of such failure. Users may report such instances to the customer support team at <a href="mailto:support@stoex.in" className="underline">support@stoex.in</a> for expedited resolution.
          </p>

          <h5 className="font-bold mt-6">6. Physical Delivery and Returns</h5>
          <p>
            Where a user requests physical delivery of Customer Gold accumulated on the STOEX platform, delivery shall be arranged through an appointed delivery partner and made to the registered address of the user. Users are required to keep valid proof of identity available at the time of delivery, as the delivery partner may require verification. If the user is not available to accept delivery at the registered address, the consignment shall be returned, and the corresponding quantity of gold shall be credited back to the user's account in the form of Digital Gold. In such an event, the making charges paid by the user in respect of the undelivered consignment (along with applicable GST thereon) shall be refunded to the user's original payment method within 7 (seven) working days of the consignment being received back at the vault. However, shipping, logistics, and handling charges already paid by the user shall be non-refundable, as such services have been rendered by the appointed delivery partner. Shipping charges shall be payable afresh upon any subsequent delivery request.
          </p>
          <p>
            Users are required to inspect the package at the time of delivery and verify that it has not been tampered with and is in acceptable condition. If the package appears to be damaged or tampered with at the time of delivery, the user must refuse acceptance and immediately notify the customer support team at <a href="mailto:support@stoex.in" className="underline">support@stoex.in</a> with photographic evidence and the relevant delivery details. Once delivery has been accepted by the user, returns and refunds are not permitted.
          </p>
          <p>
            Once the user has accepted delivery and signed the delivery confirmation, all sales are final and no returns, replacements, or refunds shall be entertained under any circumstances. The user is required to satisfy themselves as to the quality, quantity, weight, purity, and condition of the product at the time of delivery and before signing the delivery confirmation. If the user has any concerns regarding the product, they must refuse delivery at that point and not sign the delivery confirmation. A signed delivery confirmation constitutes the user's unconditional acceptance of the product in full and final settlement.
          </p>

          <h5 className="font-bold mt-6">7. Fraudulent Transactions</h5>
          <p>
            Users are responsible for maintaining the confidentiality of their login credentials, UPI PIN, OTP, and any other payment information. The Company does not solicit such information through calls or otherwise. In the event that a user's payment instrument or account is fraudulently used to conduct a transaction on the STOEX platform, the user must report the matter promptly to the customer support team at <a href="mailto:support@stoex.in" className="underline">support@stoex.in</a>, along with supporting documentation from the relevant public or police authority or cyber cell, if available.
          </p>
          <p>
            On receipt of such a report, the Company shall conduct an internal review and, where the fraudulent nature of the transaction is established to its reasonable satisfaction, shall endeavor to assist the affected user in recovering their funds. The Company may, in such cases, freeze the relevant account, reverse the fraudulent transaction to the extent practicable, and share relevant transaction information with the appropriate authorities. The Company shall not be obligated to reverse a transaction where the Digital Gold purchased through the fraudulent transaction has already been sold and the proceeds have been withdrawn, or where physical delivery of Customer Gold has been completed.
          </p>

          <h5 className="font-bold mt-6">8. Promotional Credits and Coupons</h5>
          <p>
            Any coupon or discount applied to a Digital Gold purchase on the STOEX platform shall be verified and adjusted within 7 (seven) days of application.
          </p>
          <p>
            Gold credited through promotional offers, including cashback in the form of Digital Gold, may be subject to a minimum holding period before it becomes eligible for sale, receipt of sale proceeds, or physical delivery, as specified in the terms of the relevant promotional offer. The applicable holding period, if any, shall be clearly disclosed to the user at the time the promotional offer is made and shall not exceed 30 (thirty) days from the date of credit, unless a longer period is expressly agreed by the user as part of a specific promotional campaign. Upon expiry of the applicable holding period, such promotional gold shall be treated on the same footing as Digital Gold purchased by the user and shall be eligible for sale, receipt of sale proceeds, or physical delivery, in accordance with the standard terms of this Policy and the General Terms.
          </p>

          <h5 className="font-bold mt-6">9. Refund Process and Timelines</h5>
          <p>
            All eligible refunds shall be credited exclusively to the user's original payment method used at the time of the transaction. The Company does not issue refunds through any other mode. The timelines for processing refunds under this Policy are as follows:
          </p>
          <p>
            <span className="font-bold">Failed Transactions:</span> Refund processed automatically to the user's original payment method within 7 (seven) working days of the failure being confirmed.
          </p>
          <p>
            <span className="font-bold">Failed Sale Transactions:</span> Equivalent quantity of Digital Gold reinstated to the user's account within 10 (ten) days of the failure being confirmed.
          </p>
          <p>
            <span className="font-bold">Failed Delivery:</span> Corresponding quantity of gold credited back to the user's account upon return of the consignment, and refund of making charges (along with applicable GST thereon) processed to the user's original payment method within 7 (seven) working days of the consignment being received back at the vault.
          </p>
          <p>
            <span className="font-bold">Damaged or Incorrect Physical Delivery:</span> Refund or replacement processed within 7 (seven) working days of successful verification by the Company and, where applicable, the appointed Vault Service Provider.
          </p>
          <p>
            Users are required to contact the customer support team through the channels set out below to initiate any eligible refund:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Email: <a href="mailto:support@stoex.in" className="underline">support@stoex.in</a>
            </li>
            <li>Customer Support: +91 8448358943, available Monday to Friday, 10:00 AM to 6:00 PM IST</li>
            <li>
              Platform / App: Through the <span className="font-bold">"Contact Us"</span> section the STOEX platform.
            </li>
          </ul>
          <p>
            For any complaint or grievance relating to the refund process that remains unresolved, users may refer to the Company's Grievance Redressal Policy available on the STOEX platform.
          </p>

          <h5 className="font-bold mt-6">10. Limitation of Liability</h5>
          <p>
            STOEX operates as a platform facilitating access to Digital Gold services and does not own, hold, or deal in gold directly. The Company shall not be liable for any loss arising from fluctuations in gold prices, market conditions, acts or omissions of independent Gold Providers, Vault Service Providers, payment gateway partners, or delivery partners, or for delays or failures attributable to such third-party service providers. The Company's liability under this Policy shall in all cases be limited to facilitating the resolution of eligible refund requests in accordance with the timelines specified herein, and the Company shall have no liability beyond such facilitation.
          </p>

          <h5 className="font-bold mt-6">11. Amendments</h5>
          <p>
            This Policy is subject to revision and amendment from time to time in accordance with applicable laws, regulatory guidance, and business requirements. Any material changes to this Policy shall be communicated to users through the STOEX platform or by email. Continued use of the STOEX platform following such notification shall constitute acceptance of the revised Policy.
          </p>
        </div>
      </div>
    </div>
  );
};
