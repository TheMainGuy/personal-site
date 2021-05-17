import Head from 'next/head'
import Layout, { siteTitle } from '@components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hello, I'm a software engineer from Croatia currently living in Spain.</p>
                <p>
                    This is my first attempt at Next.js!
                </p>
            </section>
        </Layout>
    )
}