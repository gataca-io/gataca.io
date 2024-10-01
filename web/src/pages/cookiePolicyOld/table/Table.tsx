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
          <td>gatc_token</td>
          <td data-th="Location">
            <p>Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">To authenticate users.</td>
          <td data-th="Entity">Gataca</td>
          <td data-th="Active time">30 min</td>
        </tr>
        <tr>
          <td>i18nextLng</td>
          <td data-th="Location">
            <p>Website, Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">
            User display language settings. Used to keep language settings used
            for displaying site content.
          </td>
          <td data-th="Entity">Gataca</td>
          <td data-th="Active time">Persistent (local storage)</td>
        </tr>
        <tr>
          <td>TMSeen</td>
          <td data-th="Location">
            <p>Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">
            Save if some platform elements has been displayed.
          </td>
          <td data-th="Entity">Gataca</td>
          <td data-th="Active time">While session is active</td>
        </tr>
        <tr>
          <td>TMClosed</td>
          <td data-th="Location">
            <p>Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">
            Save if some platform elements has been closed.
          </td>
          <td data-th="Entity">Gataca</td>
          <td data-th="Active time">Until logout (local storage)</td>
        </tr>
        <tr>
          <td>{"<license_key>"}</td>
          <td data-th="Location">
            <p>Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">Save selected license by user.</td>
          <td data-th="Entity">Gataca</td>
          <td data-th="Active time">
            While registration and license acquisition are in progress.
          </td>
        </tr>
        <tr>
          <td>{"<t_key>"}</td>
          <td data-th="Location">
            <p>Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">Authentication purposes.</td>
          <td data-th="Entity">Gataca</td>
          <td data-th="Active time">While session is active.</td>
        </tr>
        <tr>
          <td>gataca_io_accepted</td>
          <td data-th="Location">
            <p>Website</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">Stores information about user consents.</td>
          <td data-th="Entity">Gataca</td>
          <td data-th="Active time">While session is active</td>
        </tr>
        <tr>
          <td>_gatc_tutS</td>
          <td data-th="Location">
            <p>Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">
            Used to store the user's preferences regarding whether or not to
            display a tutorial when using the technology.
          </td>
          <td data-th="Entity">Gataca</td>
          <td data-th="Active time">180 days</td>
        </tr>
        <tr>
          <td>__cf_bm</td>
          <td data-th="Location">
            <p>Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">
            It’s a cookie necessary to support Cloudflare Bot Management,
            currently in private beta. This cookie helps manage incoming traffic
            that matches criteria associated with bots.
          </td>
          <td data-th="Entity">Hubspot (Cloudflare)</td>
          <td data-th="Active time">30 min</td>
        </tr>
        <tr>
          <td>__cfruid</td>
          <td data-th="Location">
            <p>Website</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">
            This cookie is set in connection with rate-limiting policies.
          </td>
          <td data-th="Entity">Hubspot (Cloudflare)</td>
          <td data-th="Active time">While session is active</td>
        </tr>
        <tr>
          <td>_cfuvid</td>
          <td data-th="Location">
            <p>Website, Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">
            This cookie is only set when a site uses this option in a Rate
            Limiting Rule, and is only used to allow the Cloudflare WAF to
            distinguish individual users who share the same IP address. Visitors
            who do not provide the cookie are likely to be grouped together and
            may not be able to access the site if there are many other visitors
            from the same IP address.
          </td>
          <td data-th="Entity">Hubspot (Cloudflare)</td>
          <td data-th="Active time">While session is active</td>
        </tr>
        <tr>
          <td>_hs_cookie_cat_pref</td>
          <td data-th="Location">
            <p>Website, Gataca Studio, Document Knowledge Base</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">
            This cookie is used to record the categories a visitor consented to.
            It contains data on the consented categories.
          </td>
          <td data-th="Entity">Hubspot</td>
          <td data-th="Active time">6 mo</td>
        </tr>
        <tr>
          <td>AEC</td>
          <td data-th="Location">
            <p>Website, Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">
            To ensure that requests within a browsing session are made by the
            user, and not by other sites. This cookies prevent malicious sites
            from acting on behalf of a user without that user’s knowledge.
          </td>
          <td data-th="Entity">Google</td>
          <td data-th="Active time">6 mo</td>
        </tr>
        <tr>
          <td>SOCS</td>
          <td data-th="Location">
            <p>Website, Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">
            To store a user’s state regarding their cookies choices.
          </td>
          <td data-th="Entity">Google</td>
          <td data-th="Active time">2 yr + 1 mo</td>
        </tr>
        <tr>
          <td>__stripe_mid</td>
          <td data-th="Location">
            <p>Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">
            This cookie is set by the Stripe payment gateway. This cookie is
            used to enable online payments without storing any payment
            information on a server.
          </td>
          <td data-th="Entity">Stripe</td>
          <td data-th="Active time">1 yr</td>
        </tr>
        <tr>
          <td>__stripe_sid</td>
          <td data-th="Location">
            <p>Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">
            This cookie is set by the Stripe payment gateway. This cookie is
            used to enable online payments without storing any payment
            information on a server.
          </td>
          <td data-th="Entity">Stripe</td>
          <td data-th="Active time">1 day while session is active</td>
        </tr>
        <tr>
          <td>_ab</td>
          <td data-th="Location">
            <p>Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">
            Used in connection with access to admin.
          </td>
          <td data-th="Entity">Stripe</td>
          <td data-th="Active time">While session is active</td>
        </tr>
        <tr>
          <td>_mf</td>
          <td data-th="Location">
            <p>Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">
            This cookie is necessary for making credit card transactions on the
            website without storing any credit card information.
          </td>
          <td data-th="Entity">Stripe</td>
          <td data-th="Active time">While session is active</td>
        </tr>
        <tr>
          <td>m</td>
          <td data-th="Location">
            <p>Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Necessary functional</p>
          </td>
          <td data-th="Description">
            Determines the device used to access the website. This allows the
            website to be formatted accordingly.
          </td>
          <td data-th="Entity">Stripe</td>
          <td data-th="Active time">400 days</td>
        </tr>
        <tr>
          <td>_hssc</td>
          <td data-th="Location">Website, Gataca Studio</td>
          <td data-th="Purpose">Analytics and web optimization</td>
          <td data-th="Description">
            This cookie tracks sessions. This is used to determine if HubSpot
            should increase the session number and timestamps in the __hstc
            cookie. Contains the domain, the view count viewCount (incremented
            with each page view in a session), and the start timestamp of a
            session.
          </td>
          <td data-th="Entity">Hubspot</td>
          <td data-th="Active time">30 min</td>
        </tr>
        <tr>
          <td>_hssrc</td>
          <td data-th="Location">Website, Gataca Studio</td>
          <td data-th="Purpose">Analytics and web optimization</td>
          <td data-th="Description">
            When HubSpot changes the session cookie, this cookie is also set to
            determine if the visitor has restarted their browser. If this cookie
            does not exist when HubSpot manages cookies, it is considered a new
            session. Contains the value "1" when present. Expires at the end of
            the session.
          </td>
          <td data-th="Entity">Hubspot</td>
          <td data-th="Active time">While session is active</td>
        </tr>
        <tr>
          <td>_hstc</td>
          <td data-th="Location">Website, Gataca Studio</td>
          <td data-th="Purpose">Analytics and web optimization</td>
          <td data-th="Description">
            This cookie tracks different visitors. Contains the domain, utk,
            initial timestamp (first visit), most recent timestamp (last visit),
            current timestamp (this visit), and session number (increments for
            each subsequent session).
          </td>
          <td data-th="Entity">Hubspot</td>
          <td data-th="Active time">6 mo</td>
        </tr>
        <tr>
          <td>__ptq.gif</td>
          <td data-th="Location">Website, Gataca Studio</td>
          <td data-th="Purpose">Analytics and web optimization</td>
          <td data-th="Description">
            Tracks the visitor across devices and marketing channels.
          </td>
          <td data-th="Entity">Hubspot</td>
          <td data-th="Active time">While session is active</td>
        </tr>
        <tr>
          <td>embed/v3/counters.gif</td>
          <td data-th="Location">Website</td>
          <td data-th="Purpose">Analytics and web optimization</td>
          <td data-th="Description">
            Collect information on user preferences and/or interaction with
            web-campaign content.
          </td>
          <td data-th="Entity">Hubspot</td>
          <td data-th="Active time">While session is active</td>
        </tr>
        <tr>
          <td>hubspotutk</td>
          <td data-th="Location">Website, Gataca Studio</td>
          <td data-th="Purpose">Analytics and web optimization</td>
          <td data-th="Description">
            Contains an opaque GUID to represent the current visitor.
          </td>
          <td data-th="Entity">Hubspot</td>
          <td data-th="Active time">6 mo</td>
        </tr>
        <tr>
          <td>_ga</td>
          <td data-th="Location">
            <p>Website, Gataca Studio, Document Knowledge Base</p>
          </td>
          <td data-th="Purpose">
            <p>Analytics and web optimization</p>
          </td>
          <td data-th="Description">
            This cookie is used to distinguish unique users by assigning a
            randomly generated number as a customer identifier. It is included
            in every page request on a site and is used to calculate visitor,
            session, and campaign data for site analytics reports.
          </td>
          <td data-th="Entity">Google Analytics</td>
          <td data-th="Active time">2 yr</td>
        </tr>
        <tr>
          <td>_ga_{"<container-id>"}</td>
          <td data-th="Location">
            <p>Website, Gataca Studio, Document Knowledge Base</p>
          </td>
          <td data-th="Purpose">
            <p>Analytics and web optimization</p>
          </td>
          <td data-th="Description">Used to persist session state.</td>
          <td data-th="Entity">Google Analytics</td>
          <td data-th="Active time">2 yr</td>
        </tr>
        <tr>
          <td>_gat_UA-{"<property-id>"}</td>
          <td data-th="Location">
            <p>Website, Gataca Studio</p>
          </td>
          <td data-th="Purpose">
            <p>Analytics and web optimization</p>
          </td>
          <td data-th="Description">
            This is a pattern type cookie, where the pattern element in the name
            contains the unique identity number of the account or website it
            relates to. It appears to be a variation of the _gat cookie that is
            used to limit the amount of data recorded by Google on high-traffic
            websites.
          </td>
          <td data-th="Entity">Google Analytics</td>
          <td data-th="Active time">1 min</td>
        </tr>
        <tr>
          <td>_gid</td>
          <td data-th="Location">
            Website, Gataca Studio, Document Knowledge Base
          </td>
          <td data-th="Purpose">Analytics and web optimization</td>
          <td data-th="Description">
            This cookie is used to distinguish unique users by assigning a
            randomly generated number as a customer identifier. It is included
            in every page request on a site and is used to calculate visitor,
            session, and campaign data for site analytics reports.
          </td>
          <td data-th="Entity">Google Analytics</td>
          <td data-th="Active time">After 24 hours of inactivity</td>
        </tr>
        <tr>
          <td>Ads/Ga-Audiences</td>
          <td data-th="Location">Website</td>
          <td data-th="Purpose">Analytics and web optimization</td>
          <td data-th="Description">
            Used by Google AdWords to re-engage visitors that are likely to
            convert to customers based on the visitor's online behaviour across
            websites.
          </td>
          <td data-th="Entity">Google Analytics</td>
          <td data-th="Active time">While session is active</td>
        </tr>
        <tr>
          <td>collect</td>
          <td data-th="Location">Website</td>
          <td data-th="Purpose">Analytics and web optimization</td>
          <td data-th="Description">Used to collect recorded data.</td>
          <td data-th="Entity">Google Analytics</td>
          <td data-th="Active time">While session is active</td>
        </tr>
        <tr>
          <td>gcl_au</td>
          <td data-th="Location">
            Website, Gataca Studio, Document Knowledge Base
          </td>
          <td data-th="Purpose">Advertising</td>
          <td data-th="Description">
            Stores information from ad clicks, so that conversions can be
            attributed outside of the landing page.
          </td>
          <td data-th="Entity">Google Ads</td>
          <td data-th="Active time">90 days</td>
        </tr>
        <tr>
          <td>DV</td>
          <td data-th="Location">Website, Gataca Studio</td>
          <td data-th="Purpose">Analytics and web optimization</td>
          <td data-th="Description">
            Identifies the user if they are logged in with their Google account.
          </td>
          <td data-th="Entity">Google Analytics</td>
          <td data-th="Active time">While session is active</td>
        </tr>
        <tr>
          <td>NID</td>
          <td data-th="Location">Website, Gataca Studio</td>
          <td data-th="Purpose">Advertising</td>
          <td data-th="Description">
            This cookie is used to provide ad delivery or retargeting, store
            user preferences and collect website statistics and track conversion
            rates and Google ad personalization.
          </td>
          <td data-th="Entity">Google Ads</td>
          <td data-th="Active time">6 mo</td>
        </tr>
        <tr>
          <td>__gitbook_cookie_grandted</td>
          <td data-th="Location">Document Knowledge Base</td>
          <td data-th="Purpose">Necessary functional</td>
          <td data-th="Description">
            This cookie is used to provide ad delivery or retargeting, store
            user preferences and collect website statistics and track conversion
            rates and Google ad personalization.
          </td>
          <td data-th="Entity">Gitbook</td>
          <td data-th="Active time">While session is active</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
