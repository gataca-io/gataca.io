import * as React from "react"
import * as styles from "./table.module.scss"

const Table: React.FC = () => {
  return (
    <table className={styles.cookiesTable}>
      <thead>
        <tr>
          <th></th>
          <th>Location</th>
          <th>Purpose</th>
          <th>Description</th>
          <th>Entity</th>
          <th>Active time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>_ga</td>
          <td data-th="Location">
            <p>Website</p>
          </td>
          <td data-th="Purpose">
            <p>Analytical </p>
          </td>

          <td data-th="Description">
            To control unique visits. A cookie will be installed the first time
            a user logs into the website using a browser. When this user visits
            the website again using the same browser, the cookie distinguishes
            that it is the same user. Only if the user changes their browser
            will they be considered a different user.
          </td>
          <td data-th="Entity">Google Analytics</td>
          <td data-th="Active time">2yr</td>
        </tr>
        <tr>
          <td>_gid</td>
          <td data-th="Location">Website</td>
          <td data-th="Purpose">Analytical</td>
          <td data-th="Description">It is used to profile users</td>
          <td data-th="Entity">Google Analytics</td>
          <td data-th="Active time">24h</td>
        </tr>
        <tr>
          <td>_gat _ {"<property-id>"}</td>
          <td data-th="Location">Website</td>
          <td data-th="Purpose">Analytical</td>

          <td data-th="Description">
            to limit the request rate (to read and filter requests from bots)
          </td>
          <td data-th="Entity">Google Analytics</td>
          <td data-th="Active time">1 min</td>
        </tr>
        <tr>
          <td>fs_uid</td>
          <td data-th="Location">Website</td>
          <td data-th="Purpose">Analytical</td>

          <td data-th="Description">To track different sessions</td>
          <td data-th="Entity">Fullstory</td>
          <td data-th="Active time">While session is active</td>
        </tr>
        <tr>
          <td>_hssc</td>
          <td data-th="Location">Website</td>
          <td data-th="Purpose">Analytical</td>

          <td data-th="Description">To track different sessions</td>
          <td data-th="Entity">Hubspot</td>
          <td data-th="Active time">30 min</td>
        </tr>
        <tr>
          <td>_hssrc</td>
          <td data-th="Location">Website</td>
          <td data-th="Purpose">Analytical</td>

          <td data-th="Description">To track different sessions</td>
          <td data-th="Entity">Hubspot</td>
          <td data-th="Active time">While session is active</td>
        </tr>
        <tr>
          <td>_hstc</td>
          <td data-th="Location">Website</td>
          <td data-th="Purpose">Analytical</td>

          <td data-th="Description">To track different visitors</td>
          <td data-th="Entity">Hubspot</td>
          <td data-th="Active time">6 mo</td>
        </tr>
        <tr>
          <td>_hs_cookie_ cat_pref</td>
          <td data-th="Location">Website</td>
          <td data-th="Purpose">Preference</td>

          <td data-th="Description">
            To record the categories a visitor consented to
          </td>
          <td data-th="Entity">Hubspot</td>
          <td data-th="Active time">6 mo</td>
        </tr>
        <tr>
          <td>hubspotutk</td>
          <td data-th="Location">Website</td>
          <td data-th="Purpose">Analytical</td>

          <td data-th="Description">
            To keep track of a visitor's identity. It is passed to HubSpot on
            form submission and used when deduplicating contacts.
          </td>
          <td data-th="Entity">Hubspot</td>
          <td data-th="Active time">6 mo</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
