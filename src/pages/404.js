import React from 'react'
import { Link } from 'gatsby'
import Layout from "../layouts/Layout"
import notFoundStyles from '../styles/pages/404.module.scss'
import { Button } from "carbon-components-react"
import ctaStyles from "../components/CtaSection/cta.module.scss"

export default function NotFound() {
    return (
        <Layout page="404" bgColor="inherit">
            <div className={notFoundStyles.notFound__container}>
                    <h2>Oops, Something went wrong.</h2>
                    <p>We cannot find this page. Let's go to one that we know exists.</p>
                <Link to="/">
                  <Button
                    className={ctaStyles.ctaButton}
                    disabled={false}
                    iconDescription="Button icon"
                    kind="primary"
                    onClick={function noRefCheck(){}}
                    onFocus={function noRefCheck(){}}
                    renderIcon={undefined}
                    size="default"
                    tabIndex={0}
                    type="button"
                  > Home</Button>
                </Link>
            </div>
        </Layout>
    )
}
