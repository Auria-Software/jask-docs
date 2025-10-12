import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

const banner = <Banner storageKey="2.0-release">
        <a href="/docs/intro">
          🎉 Read more →
        </a>
      </Banner>
const navbar = (
    <Navbar
        logo={<b><img src="/Logo JAsk.png" alt="Logo JAsk" width={100} height={100}/></b>}
    // ... Your additional navbar options
    />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Jask.</Footer>

export default async function RootLayout({ children }) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <Head>
                
            </Head>
            <body>
                <Layout
                    sidebar={{
                        defaultMenuCollapseLevel: 1,
                    }}
                    banner={null}
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    footer={null}
                    docsRepositoryBase='https://github.com/Auria-Software/jask-docs/tree/main'
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}