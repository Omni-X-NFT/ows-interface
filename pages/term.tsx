import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import termstyles from "../styles/term.module.css";

import FeatureContenImg from "../static/feature-overview-bg.png";

import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const term: NextPage = () => {
  return (
    <>
      <Head>
        <title>Omni X | Terms & Conditions</title>
        <meta name="description" content="Omnix Terms & Conditions" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <ToastContainer />
      <div className={termstyles.mintHero}>
        <Navbar />
        <div className={termstyles.featureContentWrap}>
          <div className={termstyles.featureImg}>
            <Image src={FeatureContenImg} layout="responsive" alt="bg"></Image>
          </div>
          <div className={termstyles.ContentWrap}>
            <div className={termstyles.contentBody}>
              <h3>Terms & Conditions</h3>
              <div className={termstyles.term}>
                <h3>GREG NFT PURCHASE AGREEMENT & LICENSING TERMS</h3>
                <p>
                  As used in these terms, “GREG” means a non-fungible, unique
                  token (“ONFT/NFT”) on the
                  Ethereum/Polygon/Arbitrum/Binance/Optimism/Avalanche/Fantom
                  blockchains that, as of its genesis issuance, contains a link
                  to a unique image (“Art”). Each owner of an GREG (“Owner”) has
                  the non-exclusive right to use, copy and display the Art
                  linked to his/her GREG to the extent that such use, copy, or
                  display results from the operation of the smart contract
                  related to the GREG and only for so long as the Owner owns the
                  GREG (as recorded on the relevant blockchain), in each case,
                  solely for his/her own personal, non-commercial use (e.g.,
                  home display, display in a virtual gallery), including to
                  create a reasonable number of back-up copies and a physical
                  print out. This right is personal and cannot be transferred
                  (other than in connection with a sale or transfer of the GREG)
                  or sub-licensed. For the avoidance of doubt, this right does
                  not include any right or license to use, copy, display or
                  otherwise exploit the Art for any non-personal or commercial
                  purposes, or to create any derivative works of the Art.
                </p>

                <h3>GREG LICENSE AGREEMENT</h3>
                <p>
                  This GREG License Agreement (this “Agreement”) is a legally
                  binding agreement by and between The Company, Inc. (“The
                  Company” or “us”), a Delaware corporation, and any owner of
                  any GREG (defined below) (“you” or “Purchaser”). The Company
                  and each Purchaser may be referred to throughout this
                  Agreement collectively as the “Parties” or individually as a
                  “Party”. This Agreement governs the rights and obligations
                  with respect to a GREG. By purchasing or otherwise owning a
                  GREG, you acknowledge that you have carefully read and agree
                  to the terms of this Agreement.
                </p>

                <h3>Artistic Purposes Only.</h3>
                <p>
                  Purchaser represents and warrants that Purchaser (A) is
                  purchasing the Greg for personal enjoyment purposes, and (B)
                  is not purchasing any Greg with the intent or expectation of
                  profits from any appreciation in value or otherwise from the
                  Greg or any Access Rights that may from time to time be
                  granted by Omni X or third parties. IMPORTANT NOTICE REGARDING
                  ARBITRATION: WHEN YOU AGREE TO THIS AGREEMENT, YOU ARE
                  AGREEING (WITH LIMITED EXCEPTION) TO RESOLVE ANY DISPUTE
                  BETWEEN YOU AND The Company THROUGH BINDING, INDIVIDUAL
                  ARBITRATION RATHER THAN IN COURT. PLEASE REVIEW CAREFULLY
                  SECTION 16 “DISPUTE RESOLUTION” BELOW FOR DETAILS REGARDING
                  ARBITRATION. HOWEVER, IF YOU ARE A RESIDENT OF A JURISDICTION
                  WHERE APPLICABLE LAW PROHIBITS ARBITRATION OF DISPUTES, THE
                  AGREEMENT TO ARBITRATE IN SECTION 16 WILL NOT APPLY TO YOU BUT
                  THE PROVISIONS OF SECTION 15 (GOVERNING LAW AND FORUM CHOICE)
                  OR RELEVANT PROVISIONS OF APPLICABLE LAW WILL STILL APPLY.
                </p>

                <h3>1. GREG Defined.</h3>
                <p>
                  “GREG” refers to a non-fungible, unique token on the
                  Ethereum/Polygon/Arbitrum/Binance/Optimism/Avalanche/Fantom
                  blockchains (“ONFT/NFT”) (i.e., a controllable electronic
                  record on a blockchain) and that, as of its genesis issuance,
                  contains an image of Art. “Art” means each of the unique
                  images of the 4,500 “GREGs” each associated with, and linked
                  to, an individual GREG ONFT/NFT.
                </p>

                <h3>2. Additional Terms.</h3>
                <p>
                  GREGs may be available for purchase or transfer (i) on one or
                  more third-party platforms, such as OpenSea, or other
                  marketplaces that may be established from time to time (each,
                  an “ONFT/NFT Marketplace”), which we do not operate, or (ii)
                  directly from third-party owners of GREGs (such transactions,
                  “Direct Sales”). The access and use of any ONFT/NFT
                  Marketplace is subject to the separate terms of that ONFT/NFT
                  Marketplace and any Direct Sales are subject to the terms
                  thereof. In addition, although we do not guarantee that they
                  will, third parties may grant GREG owners various entitlements
                  and benefits. If a third party does so, such entitlements and
                  benefits will be subject to whatever terms are provided by
                  such third parties. We are not responsible or liable for any
                  third-party ONFT/NFT Marketplace, any Direct Sales, or any
                  third-party entitlements or benefits. You covenant not to sue
                  The Company based on activities that may occur on such
                  ONFT/NFT Marketplaces, any Direct Sales (except Direct Sales
                  for which The Company is the seller or purchase), due to
                  third-party benefits or entitlements.
                </p>

                <h3>3. Ownership of a GREG.</h3>
                <p>
                  (a) When Purchaser acquires a GREG, Purchaser owns all
                  personal property rights to that GREG (e.g., the right to
                  freely sell, transfer, or otherwise dispose of that GREG);
                  however, such rights expressly do not include the ownership of
                  the intellectual property rights in the Art. Such rights are
                  licensed pursuant to Section 4 below and those terms govern.
                  In accordance with the foregoing, at no point may we seize,
                  freeze, or otherwise modify the ownership of any GREG. (b)
                  Purchaser may freely sell or otherwise transfer its GREG
                  consistent with Purchaser’s rights in such GREG as defined in
                  this Agreement (e.g., posting a sales listing on an ONFT/NFT
                  Marketplace, by Direct Sale, or otherwise) (a “Permitted
                  Transfer”), so long as the Transferee (as defined below) is
                  not (i) located in a country that is subject to a U.S.
                  Government embargo, or that has been designated by the U.S.
                  Government as a terrorist-supporting country; or (ii) listed
                  on any U.S. Government list of prohibited or restricted
                  parties (a “Prohibited Transferee”). Purchaser represents and
                  warrants that it is not and will not transfer a GREG to a
                  Prohibited Transferee.
                </p>

                <h3>4. License</h3>
                <p>
                  (a) Non-Commercial License to the Art. Subject to your
                  compliance with this Agreement, The Company hereby grants to
                  you, for so long as you own a GREG (as recorded on the
                  relevant blockchain), a non-exclusive, worldwide,
                  royalty-free, revocable license, with no right to sublicense,
                  to use, copy, and display the Art linked to your purchased
                  GREG solely for the following purposes: (i) for your own
                  personal, non-commercial use (e.g., home display, display in a
                  virtual gallery, or as a social media avatar), including to
                  create a reasonable number of back-up copies and a physical
                  print out, each to be retained only for so long as you own the
                  associated GREG; and (ii) as part of a The Company’ or third
                  party’s website or application that permits the inclusion,
                  involvement, or participation of your GREG, provided that the
                  website/application cryptographically verifies that only the
                  actual owner can display the Art, and the Art is no longer
                  visible once the owner of the GREG leaves the
                  website/application. (b) Full Commercial License to the Art.
                  In addition, subject to your compliance with this Agreement,
                  The Company hereby grants to you, for so long as you own a
                  GREG (as recorded on the relevant blockchain), an exclusive,
                  royalty-free, worldwide, revocable license, with the right to
                  sublicense, to use, copy, distribute, create derivative works
                  of (subject to the below), and display the Art linked to your
                  purchased GREG for Commercial Purposes. “Commercial Purposes”
                  means the use of the Art for all lawful commercial purposes,
                  whether known now or created in the future. Such purposes may
                  include merchandising, inclusion in physical or digital media,
                  or display in “metaverses” or other interactive digital
                  environments. You will have the right to retain all revenue
                  that you generate through your exercise of your rights under
                  this Section. (c) Derivative Works. Your rights also include
                  the right to create derivative works of the Art to depict the
                  character depicted in the GREG that you own in goods or media
                  by, for example, showing their full body or back, or
                  reformatting the relevant Art for a particular medium. You may
                  also modify the Art to create minor variations in the
                  appearance or clothing, but such rights do not include the
                  right to create characters substantially or confusingly
                  similar to GREGs that you do not own. (d) Enforcement. You
                  will have the non-exclusive right, but not the obligation, to
                  bring an action to enforce any infringement of any rights you
                  hold in the Art linked to your GREG as set forth in Sections
                  4(a)-(c). We will have no obligation to support any such
                  action. We may also choose to bring such an action in our sole
                  discretion. (e) Protection. You will have the right to procure
                  registration or other intellectual property protection in the
                  works that you create in exercising your license to the Art
                  linked to your GREG in a manner that complies with the terms
                  of this Agreement, including that The Company retains
                  ownership of the underlying Art. However, you must and hereby
                  do agree to transfer any such registration or other protection
                  in connection with a Permitted Transfer of your GREG, unless
                  you expressly agree otherwise in writing with the Transferee.
                  (f) Name and Trademarks. As provided in Section 5(c), no
                  trademark rights are granted to you by The Company. However,
                  you may acquire trademark rights yourself in your GREG (which,
                  for avoidance of doubt, do not include rights to the “GREG”
                  trademark) through the exercise of your license rights above
                  in accordance with, and subject to, applicable law. Any
                  trademark rights that you acquire, and the associated
                  goodwill, will transfer in connection with a Permitted
                  Transfer of your GREG unless you expressly agree otherwise in
                  writing with the Transferee. (g) Transfer. The licenses in
                  Section 4 are non-transferrable, except that they will
                  automatically transfer in connection with a Permitted Transfer
                  of your GREG.
                </p>

                <h3>5. Reservation of Rights.</h3>
                <p>
                  (a) General. All rights in and to the Art not expressly
                  provided for in this Agreement are hereby reserved by The
                  Company. The Art is licensed, not sold. The Company owns and
                  will retain all title, interest, ownership rights and
                  intellectual property rights in and to the Art. (b)
                  Limitations. Without limitation of Section 5(a) above, the
                  license in Section 4(b) does not include: (i) the right to use
                  the Art to create non-fungible tokens or other digital items
                  accounted for on a distributed ledger; (ii) the right to
                  create derivative works of the Art, except as expressly
                  provided herein; or (iii) the right to use the GREG or the Art
                  to create, or as the basis of, any token or digital items
                  accounted for or recorded on a distributed ledger, including,
                  but not limited to, any token or digital items accounted for
                  or recorded on a distributed ledger that represent (A) an
                  ownership interest in the GREG, or (B) any right that is
                  convertible for, exchangeable into, or exercisable for, any
                  right, title or interest in or to the GREG or the Art. (c) No
                  Rights to Trademarks. For avoidance of doubt, the licenses in
                  Section 4 do not include the right to use any The Company’
                  trademarks (e.g., GREG, Omni X and The Company). No trademark
                  or other rights based on designation of source or origin are
                  licensed to you. Notwithstanding the foregoing, to the extent
                  you acquire any rights to any The Company’ trademarks, in
                  consideration for the licenses granted pursuant to Section
                  4(b), you hereby assign to The Company all rights, title, and
                  interest in and to such trademarks, together with all
                  associated goodwill. (d) Disputes Among Owners. The Company
                  has no obligation to support the resolution of or to resolve
                  any dispute that may arise between or among GREG owners. (e)
                  Clarifications. The Company reserves the right, but has no
                  obligation, to clarify the terms of this Agreement in relation
                  to novel or unforeseen circumstances in its sole and exclusive
                  discretion. If The Company issues or provides any
                  clarification about the terms of this Agreement, such
                  clarification will be binding on the Purchaser, and Purchaser
                  hereby waives any right that Purchaser may have to dispute it
                  in any manner.
                </p>

                <h3>6. Transfers.</h3>
                <p>
                  You hereby agree that all subsequent transactions involving
                  your GREG are subject to the following terms: (a) the GREG
                  transferee (the “Transferee”) shall, by purchasing, accepting,
                  accessing or otherwise using the GREG or Art, be deemed to
                  accept all of the terms of this Agreement as a “Purchaser”
                  hereof; (b) the GREG transferor (the “Transferor”) shall
                  provide notice to the Transferee of this Agreement, including
                  a link or other method by which the terms of this Agreement
                  can be accessed by the Transferee. Purchaser further
                  acknowledges and agrees that all subsequent transactions
                  involving your GREG will be effected on the blockchain network
                  governing the GREG, and Purchaser will be required to make or
                  receive payments exclusively through Purchaser’s
                  cryptocurrency wallet; (c) the Transferor shall pay or cause
                  to be paid to The Company amount equal to 5% of the total
                  purchase price for the GREG in connection with the transaction
                  between the Transferor and the Transferee (the “Royalty
                  Payment”), which Royalty Payment shall be paid on the same
                  terms and at the same time as the Transferor is paid by the
                  Transferee. You acknowledge and agree that the Royalty
                  Payment; and (d) each such subsequent transaction shall be
                  effected on the
                  Ethereum/Polygon/Arbitrum/Binance/Optimism/Avalanche/Fantom
                  blockchains. For the avoidance of doubt, you (as Transferor)
                  and all subsequent Transferees (to the extent they are
                  Transferors) are responsible for paying each Royalty Payment
                  to the extent such Royalty Payment is not automatically paid
                  as a result of the operation of the smart contract related to
                  the GREG.
                </p>

                <h3>7. The Company’ Rights and Obligations to the Art. </h3>
                <p>
                  The Company is not responsible for the ultimate rendering of
                  the Art.
                </p>

                <h3>8. Purchaser’s Representations and Warranties.</h3>
                <p>
                  {" "}
                  Purchaser represents and warrants that Purchaser (a) is the
                  age of majority in Purchaser’s place of residence (which is
                  typically 18 years of age) and has the legal capacity to enter
                  into this Agreement; (b) that Purchaser will use and interact
                  with the GREG and Art only for lawful purposes and in
                  accordance with this Agreement; and (c) will not use the GREG
                  or Art to violate any law, regulation or ordinance or any
                  right of The Company, its licensors, or any third party,
                  including without limitation, any right of privacy, publicity,
                  copyright, trademark, or patent. Purchaser further represents
                  and warrants that Purchaser will comply with all applicable
                  law in the exercise of its rights and obligations under this
                  Agreement.
                </p>

                <h3>9. Warranty Disclaimers.</h3>
                <p>
                  EACH GREG IS PROVIDED “AS IS,” WITHOUT WARRANTY OF ANY KIND.
                  WITHOUT LIMITING THE FOREGOING, The Company EXPLICITLY
                  DISCLAIMS ANY AND ALL WARRANTIES, EXPRESS OR IMPLIED,
                  INCLUDING, WITHOUT LIMITATION ANY IMPLIED WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET
                  ENJOYMENT AND NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT
                  OF COURSE OF DEALING OR USAGE OF TRADE. The Company MAKES NO
                  WARRANTY THAT ANY GREG WILL MEET PURCHASER’S REQUIREMENTS, BE
                  CONTINUALLY DISPLAYED, OR BE AVAILABLE ON AN UNINTERRUPTED,
                  SECURE, OR ERROR-FREE BASIS. The Company MAKES NO WARRANTY
                  REGARDING THE QUALITY, ACCURACY, TIMELINESS, TRUTHFULNESS,
                  COMPLETENESS, OR RELIABILITY OF ANY INFORMATION OR CONTENT
                  MADE AVAILABLE WITH RESPECT TO ANY GREG. The Company WILL NOT
                  BE RESPONSIBLE OR LIABLE TO PURCHASER FOR ANY LOSS IN
                  CONNECTION WITH ANY GREG AND TAKES NO RESPONSIBILITY FOR, AND
                  WILL NOT BE LIABLE TO PURCHASER FOR, ANY USE OF OR INABILITY
                  TO USE ANY GREG, INCLUDING BUT NOT LIMITED TO ANY LOSSES,
                  DAMAGES OR CLAIMS ARISING FROM: (I) USER ERROR SUCH AS
                  FORGOTTEN PASSWORDS, INCORRECTLY CONSTRUCTED TRANSACTIONS, OR
                  MISTYPED WALLET ADDRESSES; (II) THE BEHAVIOR OR OUTPUT OF ANY
                  SOFTWARE, NODE SERVER ERROR OR FAILURE, OR DATA LOSS OR
                  CORRUPTION; (III) ANY FEATURES, DEVELOPMENT, ERRORS, OR OTHER
                  ISSUES WITH BLOCKCHAIN NETWORKS; (IV) UNAUTHORIZED ACCESS TO
                  ANY GREG; OR (V) ANY THIRD PARTY ACTIVITIES, INCLUDING WITHOUT
                  LIMITATION, THE USE OF VIRUSES, PHISHING, BRUTEFORCING OR
                  OTHER MEANS OF ATTACK. EACH GREG IS AN INTANGIBLE DIGITAL
                  ASSET THAT EXISTS ONLY BY VIRTUE OF THE OWNERSHIP RECORD
                  MAINTAINED ON THE
                  Ethereum/Polygon/Arbitrum/Binance/Optimism/Avalanche/Fantom
                  blockchains. ANY TRANSFER OF TITLE THAT MIGHT OCCUR IN ANY
                  UNIQUE DIGITAL ASSET OCCURS ON THE DECENTRALIZED LEDGER WITHIN
                  THE
                  Ethereum/Polygon/Arbitrum/Binance/Optimism/Avalanche/Fantom
                  blockchains, WHICH The Company DOES NOT CONTROL. The Company
                  DOES NOT GUARANTEE THAT The Company CAN EFFECT THE TRANSFER OF
                  TITLE OR RIGHT IN ANY GREG. PURCHASER BEARS FULL
                  RESPONSIBILITY FOR VERIFYING THE IDENTITY, LEGITIMACY, AND
                  AUTHENTICITY OF ASSETS. NOTWITHSTANDING INDICATORS AND
                  MESSAGES THAT SUGGEST VERIFICATION, The Company MAKES NO
                  CLAIMS ABOUT THE IDENTITY, LEGITIMACY, OR AUTHENTICITY OF
                  ASSETS. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF
                  IMPLIED WARRANTIES IN CONTRACTS WITH CONSUMERS, SO THE ABOVE
                  EXCLUSION MAY NOT APPLY TO YOU.
                </p>

                <h3>10. Assumption of Risk.</h3>
                <p>
                  {" "}
                  Purchaser accepts and acknowledges all risks associated with
                  the following: (a) The disclaimers in Section 9 above; (b)
                  Purchaser is solely responsible for determining what, if any,
                  taxes apply to Purchaser’s purchase, sale, or transfer of
                  rights in each GREG. The Company is not responsible for
                  determining or paying the taxes that apply to such
                  transactions. (c) Each GREG is a digital asset recorded and
                  transferable on the
                  Ethereum/Polygon/Arbitrum/Binance/Optimism/Avalanche/Fantom
                  blockchains. Any transfer of digital assets occurs through
                  automated processes within the
                  Ethereum/Polygon/Arbitrum/Binance/Optimism/Avalanche/Fantom
                  blockchains, possibly with support from an ONFT/NFT
                  Marketplace or other third-party services, all of which are
                  not controlled in any capacity by The Company. Transactions
                  relating to GREGs may be irreversible, and, accordingly,
                  losses due to fraudulent or accidental transactions may not be
                  recoverable. Some transactions relating to the GREGs shall be
                  deemed to be made when recorded on the
                  Ethereum/Polygon/Arbitrum/Binance/Optimism/Avalanche/Fantom
                  blockchains ledger, which is not necessarily the date or time
                  that Purchaser initiated the transaction. (d) There are risks
                  associated with using an Internet based digital asset,
                  including but not limited to, the risk of hardware, software,
                  and Internet connection and service issues, the risk of
                  malicious software introduction, and the risk that third
                  parties may obtain unauthorized access to information stored
                  within your wallet. The Company will not be responsible for
                  any communication failures, disruptions, errors, distortions,
                  or delays you may experience when effecting transactions
                  relating to any GREG, however caused. (e) Transactions
                  involving GREGs may rely on third-party or decentralized
                  platforms or systems. We do not maintain, control, or assume
                  any obligations with respect to such platforms or systems. The
                  Company does not store your password, passkey, private key or
                  other credentials needed to access the GREGs, and will not be
                  able to recover such items if you should lose them. Purchaser
                  should keep a copy of Purchaser’s password, passkey or private
                  key in a secure location.
                </p>

                <h3>11. Links to Third-Party Websites or Resources.</h3>
                <p>
                  Use and interaction of the GREG and the Art may allow
                  Purchaser to access third-party websites or other resources.
                  To the extent that The Company provides links or access to
                  such sites and/or resources, it does so only as a convenience
                  and is not responsible for the content, products, or services
                  on or available from those resources or through any links
                  displayed on such websites. Purchaser acknowledges sole
                  responsibility for, and assumes all risk arising from,
                  Purchaser’s use of any third-party sites or resources. Under
                  no circumstances shall Purchaser’s inability to view or use
                  Art on a third-party website serve as grounds for a claim
                  against The Company.
                </p>

                <h3>12. Termination of License to the Art.</h3>
                <p>
                  {" "}
                  Purchaser’s licenses to the Art shall automatically terminate
                  and all rights shall revert to The Company if at any time: (a)
                  Purchaser breaches any portion of this Agreement, including
                  any failure to pay any Royalty Payment, (b) Purchaser engages
                  in any unlawful activity related to the GREG (including
                  transferring the GREG to a Prohibited Transferee), or (c) if
                  The Company has a reasonable basis for believing that you have
                  engaged in a subsequent transaction with respect to a GREG
                  that is not recorded on, effected by, or otherwise conducted
                  using the
                  Ethereum/Polygon/Arbitrum/Binance/Optimism/Avalanche/Fantom
                  blockchains, or is otherwise conducted in a manner reasonably
                  likely to cause the Royalty Payment to not be timely paid.
                  Upon any termination, discontinuation or cancellation of
                  Purchaser’s licenses to the Art, The Company may disable
                  Purchaser’s access to the Art and Purchaser shall delete,
                  remove, or otherwise destroy any back up or other digital or
                  physical copy of the Art. Upon any termination,
                  discontinuation, or cancellation of the license in this
                  Agreement, the following Sections will survive: 3, 5 through
                  17.
                </p>

                <h3>13. Indemnity.</h3>
                <p>
                  Purchaser shall defend, indemnify, and hold The Company, its
                  licensors, affiliates, representatives, and service providers,
                  and each of them, and all of their respective officers,
                  directors, employees and agents (the “Indemnified Parties”)
                  harmless from and against any and all claims, damages, losses,
                  costs, investigations, liabilities, judgments, fines,
                  penalties, settlements, interest, expenses and other similar
                  results or occurrences (including attorneys’ fees) that
                  directly or indirectly arise from or are related to any claim,
                  suit, action, demand, or proceeding or other similar
                  occurrence, process or activity, that is initiated, made,
                  brought or financed by a third party (including any person who
                  accesses or transacts using any GREG whether or not such
                  person personally purchased a GREG) against the Indemnified
                  Parties, or on account of the investigation, defense, or
                  settlement thereof, arising out of or in connection with (a)
                  your access to or use of the ONFT/NFT Marketplace or any
                  third-party services or products, (b) your breach or alleged
                  breach of this Agreement, (c) your exercise of the licenses in
                  Section 4, or (d) your actual or alleged violation of
                  applicable law.
                </p>

                <h3>14. Limitation of Liability.</h3>
                <p>
                  (a) TO THE MAXIMUM EXTENT PERMITTED BY LAW, NO INDEMNIFIED
                  PARTY WILL BE LIABLE FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY,
                  OR CONSEQUENTIAL DAMAGES, OR DAMAGES FOR LOST PROFITS, LOST
                  REVENUES, LOST SAVINGS, LOST BUSINESS OPPORTUNITY, LOSS OF
                  DATA OR GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR
                  SYSTEM FAILURE, OR THE COST OF SUBSTITUTE SERVICES OF ANY KIND
                  ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT OR FROM
                  THE USE OF OR INABILITY TO USE OR INTERACT WITH ANY GREG OR
                  ACCESS THE ART, WHETHER BASED ON WARRANTY, CONTRACT, TORT
                  (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, OR ANY OTHER LEGAL
                  THEORY, AND WHETHER OR NOT The Company OR ITS SERVICE
                  PROVIDERS HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH
                  DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO
                  HAVE FAILED OF ITS ESSENTIAL PURPOSE. (b) TO THE MAXIMUM
                  EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE AGGREGATE
                  LIABILITY OF ALL INDEMNIFIED PARTIES ARISING OUT OF OR IN
                  CONNECTION WITH THIS AGREEMENT, OR THE USE OF OR INABILITY TO
                  USE OR INTERACT WITH THE GREGS OR ACCESS THE ART, OR ANY OF
                  THE RIGHTS AND LICENSES GRANTED HEREIN, EXCEED ONE HUNDRED
                  U.S. DOLLARS ($100). (c) BY PURCHASING OR OWNING A GREG,
                  PURCHASER ACKNOWLEDGES THAT THE EXCLUSIONS AND LIMITATIONS OF
                  DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS
                  OF THE BARGAIN BETWEEN The Company AND PURCHASER.
                </p>

                <h3>15. Governing Law and Forum Choice.</h3>
                <p>
                  This Agreement and any action related thereto will be governed
                  by the U.S. Federal Arbitration Act, federal arbitration law,
                  and the laws of the State of New York, without regard to its
                  conflict of laws provisions. Except as otherwise expressly set
                  forth in Section 16 “Dispute Resolution,” the exclusive
                  jurisdiction for all Disputes (defined below) will be the
                  state and federal courts located in the State and City of New
                  York, and you and The Company each waive any objection to
                  jurisdiction and venue in such courts.
                </p>

                <h3>16. Dispute Resolution.</h3>
                <p>
                  (a) Informal Dispute Resolution. Without limitation of The
                  Company’ rights in Section 12, the Parties must first attempt
                  to resolve any dispute, claim, or controversy arising out of
                  or relating to this Agreement or the breach, termination,
                  enforcement, interpretation, or validity thereof, or the use
                  of the GREG (collectively, “Disputes”) informally.
                  Accordingly, neither Party may start a formal arbitration
                  proceeding for at least sixty (60) days after one party
                  notifies the other party of a claim in writing. As part of
                  this informal resolution process, Purchaser must deliver a
                  written notice of any Dispute via first-class mail to The
                  Company at: The Company, 1450 S Dixie Hwy Ste 105 1075, Coral
                  Gables, FL 33146. (b) Mandatory Arbitration of Disputes. The
                  Parties agree that any Dispute will be resolved solely by
                  binding, individual arbitration and not in a class,
                  representative, or consolidated action or proceeding. The
                  Parties agree that the U.S. Federal Arbitration Act governs
                  the interpretation and enforcement of this Agreement, and that
                  each Party is waiving the right to a trial by jury or to
                  participate in a class action. This arbitration provision
                  shall survive termination of this Agreement. (c) Exceptions.
                  As limited exception to Section 16(b) above: (i) the Parties
                  may seek to resolve a Dispute in small claims court if it
                  qualifies; and (ii) each Party retains the right to seek
                  injunctive or other equitable relief from a court to prevent
                  (or enjoin) the infringement or misappropriation of our
                  intellectual property rights. (d) Conducting Arbitration and
                  Arbitration Rules. The arbitration will be conducted by the
                  American Arbitration Association (“AAA”) under its Consumer
                  Arbitration Rules (the “AAA Rules”) then in effect, except as
                  modified by this Agreement. The AAA Rules are available at or
                  by calling 1-800-778-7879. A Party who wishes to start
                  arbitration must submit a written Demand for Arbitration to
                  AAA and give notice to the other Party as specified in the AAA
                  Rules. The AAA provides a form Demand for Arbitration at . Any
                  arbitration hearings will take place in the county (or parish)
                  where you live, with provision to be made for remote
                  appearances to the maximum extent permitted by the AAA rules,
                  unless we both agree to a different location. The Parties
                  agree that the arbitrator shall have exclusive authority to
                  decide all issues relating to the interpretation,
                  applicability, enforceability and scope of this arbitration
                  agreement. (e) Arbitration Costs. Payment of all filing,
                  administration and arbitrator fees will be governed by the AAA
                  Rules, and The Company won’t seek to recover the
                  administration and arbitrator fees The Company is responsible
                  for paying, unless the arbitrator finds your Dispute is
                  frivolous. If The Company prevails in arbitration, The Company
                  will pay all of its attorneys’ fees and costs and won’t seek
                  to recover them from you. If you prevail in arbitration you
                  will be entitled to an award of attorneys’ fees and expenses
                  to the extent provided under applicable law. (f) Injunctive
                  and Declaratory Relief. Except as provided in Section 16(c)
                  above, the arbitrator shall determine all issues of liability
                  on the merits of any claim asserted by either party and may
                  award declaratory or injunctive relief only in favor of the
                  individual party seeking relief and only to the extent
                  necessary to provide relief warranted by that party’s
                  individual claim. To the extent that you or The Company
                  prevail on a claim and seek public injunctive relief (that is,
                  injunctive relief that has the primary purpose and effect of
                  prohibiting unlawful acts that threaten future injury to the
                  public), the entitlement to and extent of such relief must be
                  litigated in a civil court of competent jurisdiction and not
                  in arbitration. The Parties agree that litigation of any
                  issues of public injunctive relief shall be stayed pending the
                  outcome of the merits of any individual claims in arbitration.
                  (g) Class Action Waiver. YOU AND The Company AGREE THAT EACH
                  MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS
                  INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN
                  ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, if
                  a Dispute is resolved through arbitration, the arbitrator may
                  not consolidate another person’s claims with your claims, and
                  may not otherwise preside over any form of a representative or
                  class proceeding. If this specific provision is found to be
                  unenforceable, then the entirety of this Dispute Resolution
                  section shall be null and void. (h) Severability. With the
                  exception of any of the provisions in Section 16(g) of this
                  Agreement (“Class Action Waiver”), if an arbitrator or court
                  of competent jurisdiction decides that any part of this
                  Agreement is invalid or unenforceable, the other parts of this
                  Agreement will still apply.
                </p>

                <h3>17. General Terms.</h3>
                <p>
                  This Agreement will transfer and be binding upon and will
                  insure to the benefit of the Parties and their permitted
                  successors and assigns, in particular any permitted
                  Transferee. This Agreement constitutes the entire agreement,
                  and supersedes any and all prior or contemporaneous
                  representations, understandings and agreements, between the
                  Parties with respect to the subject matter of this Agreement,
                  all of which are hereby merged into this Agreement. Without
                  limitation, the terms of any other document, course of
                  dealing, or course of trade will not modify this Agreement,
                  except as expressly provided in this Agreement or as the
                  Parties may agree in writing. This Agreement may be amended by
                  The Company in its absolute and sole discretion; provided,
                  that The Company shall give notice of any material amendments
                  to this Agreement to the holders of the GREG ONFT/NFTs through
                  reasonable and public means (i.e., public post on a social
                  media network, e.g., Twitter). Failure to promptly enforce a
                  provision of this Agreement will not be construed as a waiver
                  of such provision. Nothing contained in this Agreement will be
                  deemed to create, or be construed as creating, a joint venture
                  or partnership between the parties. Neither Party is, by
                  virtue of this Agreement or otherwise, authorized as an agent
                  or legal representative of the other Party. Neither Party is
                  granted any right or authority to assume or to create any
                  obligation or responsibility, express or implied, on behalf or
                  in the name of the other Party, or to bind such other Party in
                  any manner. Nothing contained in this Agreement will be deemed
                  to create any third-party beneficiary right upon any third
                  party whatsoever. Each of the Parties acknowledges that it has
                  had the opportunity to have this Agreement reviewed or not by
                  independent legal counsel of its choice. If any one or more of
                  the provisions of this Agreement should be ruled wholly or
                  partly invalid or unenforceable, then the provisions held
                  invalid or unenforceable will be deemed amended, and the
                  arbitrator, court or other government body is authorized to
                  reform the provision(s) to the minimum extent necessary to
                  render them valid and enforceable in conformity with the
                  Parties’ intent as manifested herein. The headings to Sections
                  of this Agreement are for convenience or reference only and do
                  not form a part of this Agreement and will not in any way
                  affect its interpretation. Neither Party will be afforded or
                  denied preference in the construction of this Agreement,
                  whether by virtue of being the drafter or otherwise. For
                  purposes of this Agreement, the words and phrases “include,”
                  “includes”, “including” and “such as” are deemed to be
                  followed by the words “without limitation”. Except as set
                  forth in Section 16(a), Purchaser may give notice to The
                  Company by contacting The Company at . Notice is effective
                  upon receipt. The Parties have agreed to contract
                  electronically, and accordingly, electronic signatures and
                  other forms of acceptance will be given the same effect and
                  weight as original signatures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default term;
