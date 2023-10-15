import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import waitlist from '@zootools/waitlist-js'

const Home: NextPage = () => {
  const clickPopup = (event: any) => {
    event.preventDefault();
  
    // Pass your waitlist ID
    waitlist.openPopup("ABYohYREh8UlVXmPQiSI")
  }
  
  return (
    <div>
      <Head>
        <title>GooseDAO</title>
        <meta name="description" content="GooseDAO is a decentralized student run organization using Goobi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <a href='https://app.realms.today/dao/CtjPXeaKHpZLHMgQhKmwfwXGsGterCE2CbQpGiA6CE42'><h1>GooseDAO</h1></a>
          <a href='https://app.realms.today/dao/CtjPXeaKHpZLHMgQhKmwfwXGsGterCE2CbQpGiA6CE42'>Realms</a>
        </div>
        <Image className={styles.backgroundImage} src='/geese_flying.jpg' width={900} height={500} alt='Goose Flying https://www.freepik.com/free-photo/flock-canada-geese-flying-blue-sky-utah-usa_14704141.htm#query=website%20background%20flying%20geese&position=47&from_view=search&track=ais Image by wirestock on Freepik' />
        <div className={styles.container}>
          <div className={styles.text}>
            <h1>What is GooseDAO</h1>
            <p>Decentralized student organization at the University of Waterloo.</p>
          </div>
        </div>
        <div className={styles.horizontalContainer}>
          <iframe className={styles.iframe}src="https://docs.google.com/presentation/d/e/2PACX-1vTh5txElEmqsvPzCuFYDsllUWxEKqxBcbCG2MCCuvXO3zP3DebG5AxB8D9c3tf0ZRFemI-HZQgX4pw2/embed?start=false&loop=true&delayms=5000" width="800" height="400"></iframe>
          <div className={styles.verticalContainer}>
            <ul>
              <h1>Decentralize Campus</h1>
              <li>Decentralized and transparent voting process</li>
              <li>Ability to create new proposals</li>
              <li>Weighted student voting on proposals</li>
              <li>Use cryptocurrencies to match student contribution to clubs</li>
              <li>Provide financial and operational mobility to clubs</li>
            </ul>
            <div className={styles.alignEnd}>
              <Image src='/black_waterloo_blockchain.png' width={200} height={50} alt='Waterloo Blockchain Logo' />
            </div>
          </div>
        </div>
        <div className={styles.joinContainer}>
          <div className={styles.alignBetween}>
            <Image src='/goobi.png' width={400} height={400} alt='Goobi is GooseDAOs community token.'/>
            <p>Goobi is a community governance token that cannot be transferred or sold, and allow you to participate in GooseDAO.</p>
          </div>
          <div className={styles.alignEnd}>
            <div className={styles.button} onClick={clickPopup}>
              <h1>Get Goobi</h1>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
