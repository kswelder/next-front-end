import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <span>REQUISIÇÕES HTTP</span>
          <nav>
            <div>
              <span>GET</span>
              <Link href="/">
                <input type="button" value="Veja mais" onClick={() => console.log("")}/>
              </Link>
            </div>
            <div>
              <span>POST</span>
              <Link href="/">
                <input type="button" value="Veja mais" onClick={() => console.log("")}/>
              </Link>
            </div>
            <div>
              <span>PUT</span>
              <Link href="/">
                <input type="button" value="Veja mais" onClick={() => console.log("")}/>
              </Link>
            </div>
            <div>
              <span>DELETE</span>
              <Link href="/">
                <input type="button" value="Veja mais" onClick={() => console.log("")}/>
              </Link>
            </div>
          </nav>
        </div>
      </main>
    </div>
  )
}
