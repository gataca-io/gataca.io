import * as React from "react"
import * as styles from "./table.module.scss"

const Table: React.FC = () => {
  return (
    <table className={styles.studioTosTable}>
      <thead>
        <tr>
          <th></th>
          <th>Initial Response Time</th>
          <th>Resolution Time</th>
          <th>Penalty</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>Incidences</b>
          </td>
          <td data-th="Initial Response Time">
            <p>L1: 2 business hours</p>
            <p>L2: 4 business hours</p>
            <p>L3: 2 business days</p>
            <p>L4: 5 business days</p>
          </td>
          <td data-th="Resolution Time">
            <p>L1: 4 business hours</p>
            <p>L2: 2 business days</p>
            <p>L3: 5 business days</p>
            <p>L4: 20 business days</p>
          </td>
          <td data-th="Penalty">
            <p>5%</p>
          </td>
        </tr>
        <tr>
          <td>
            <b>Technical doubts</b>
          </td>
          <td data-th="Initial Response Time">
            <p>1 business day</p>
          </td>
          <td data-th="Resolution Time">
            <p>5 business days</p>
          </td>
          <td data-th="Penalty">
            <p>-</p>
          </td>
        </tr>
        <tr>
          <td>
            <b>Service requests</b>
          </td>
          <td data-th="Initial Response Time">
            <p>1 business day</p>
          </td>
          <td data-th="Resolution Time">
            <p>-</p>
          </td>
          <td data-th="Penalty">
            <p>-</p>
          </td>
        </tr>
        <tr>
          <td>
            <b>Availability</b>
          </td>
          <td data-th="Initial Response Time">
            <p>99%</p>
          </td>
          <td data-th="Resolution Time">
            <p></p>
          </td>
          <td data-th="Penalty">
            <p>5%</p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
