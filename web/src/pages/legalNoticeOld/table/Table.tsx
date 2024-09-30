import * as React from "react"
import * as styles from "./table.module.scss"

const Table: React.FC = () => {
  return (
    <table className={styles.policiesPurposesTable}>
      <thead>
        <tr>
          <th>PURPOSE</th>
          <th>COLLECTED DATA</th>
          <th>LEGAL BASIS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-th="Purpose">
            <p>
              To provide you with access to our Services and execute the legal
              contracts that govern the use of our Services
            </p>
          </td>
          <td data-th="Collected data">
            <p>
              Identity, contact, technical, usage, ordering, and payment data
            </p>
          </td>
          <td data-th="Legal basis">
            <ul>
              <li>
                <p>
                  <b></b>Necessary for the provisioning of the Service
                </p>
              </li>
              <li>
                <p>
                  <b></b>Necessary to comply with legal obligations
                </p>
              </li>
              <li>
                <p>
                  <b></b>Legitimate interest in improving our Service
                </p>
              </li>
              <li>
                <p>
                  <b></b>Consent of the Data Subject
                </p>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-th="Purpose">
            To respond to any inquiry raised by you in the "Contact us" section
            of our Website
          </td>
          <td data-th="Collected data">
            Identity, contact, and correspondence data
          </td>
          <td data-th="Legal basis">Consent of the Data Subject</td>
        </tr>
        <tr>
          <td data-th="Purpose">
            To provide customer support and to detect, prevent and address
            technical issues of the Service
          </td>
          <td data-th="Collected data">
            Identity, contact, correspondence, profile, technical & usage data
          </td>
          <td data-th="Legal basis">
            <ul>
              <li>
                <p>
                  <b></b>Necessary for the provisioning of the Service
                </p>
              </li>
              <li>
                <p>
                  <b></b>Necessary for the performance of a contract to which
                  the data subject is party
                </p>
              </li>
              <li>
                <p>
                  <b></b>Legitimate interest in improving our Service
                </p>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td data-th="Purpose">To improve our Service</td>
          <td data-th="Collected data">Technical & usage data</td>
          <td data-th="Legal basis">
            Legitimate interest in improving our Service
          </td>
        </tr>
        <tr>
          <td data-th="Purpose">
            To provide you with news, special offers and general information
            about other goods, services and events which we offer that are
            similar to those that you have already purchased
          </td>
          <td data-th="Collected data">Identity and contact</td>
          <td data-th="Legal basis">
            <ul>
              <li>
                <p>
                  <b></b>Legitimate interest in advertising our products and
                  services unless the Data Subject opted not to receive such
                  information.
                </p>
              </li>
              <li>
                <p>
                  <b></b>Consent of the Data Subject
                </p>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
