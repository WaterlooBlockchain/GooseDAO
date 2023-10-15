import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import waitlist from '@zootools/waitlist-js'
import Link from 'next/link'

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
        </div>
        <Image className={styles.backgroundImage} src='/geese_flying.jpg' width={900} height={500} alt='Goose Flying https://www.freepik.com/free-photo/flock-canada-geese-flying-blue-sky-utah-usa_14704141.htm#query=website%20background%20flying%20geese&position=47&from_view=search&track=ais Image by wirestock on Freepik' />
        <div className={styles.container}>
            <h1>Have a UWaterloo Email? 
              You can own&nbsp;
              <a target='_blank' rel='noreferrer' href='https://solana.fm/address/5rYxFdm4GRkyHjJpGu5rsvbrvMt4SxdUTQJGb8HMuUF7?cluster=mainnet-qn1'>
               Goobi
              </a> in&nbsp;
              <a target='_blank' rel='noreferrer' href='https://app.realms.today/dao/CtjPXeaKHpZLHMgQhKmwfwXGsGterCE2CbQpGiA6CE42'>
               GooseDAO
              </a>.</h1>
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
              <Link target='_blank' rel='noreferrer' href='https://discord.gg/2vHmAAssAb'>
                <Image src='/black_waterloo_blockchain.png' width={200} height={50} alt='Waterloo Blockchain Logo' />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.joinContainer}>
          <div className={styles.alignBetween}>
            <Link target='_blank' rel='noreferrer' href='https://solana.fm/address/5rYxFdm4GRkyHjJpGu5rsvbrvMt4SxdUTQJGb8HMuUF7?cluster=mainnet-qn1'>
              <Image src='/goobi.png' width={400} height={400} alt='Goobi is GooseDAOs community token.'/>
            </Link>
            <p>Goobi is a community governance token that cannot be transferred or sold, and allow you to participate in GooseDAO.</p>
          </div>
          <div className={styles.alignEnd}>
            <div className={styles.button} onClick={clickPopup}>
              <h1>Get Goobi</h1>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <h2>Roadmap</h2>
          <ol>
            <li>Get feedback and support on Goobi from Hyperdrive Hackathon</li>
            <li>Elect council members who are stakeholders at the University of Waterloo.</li>
            <li>Fund Goobi and create community treasury and benefits for students who hold Goobi.</li>
            <li>Send out Goobi to eligible students and coordinate Goobi benefits using proposals.</li>
            <li>Scale Goobi and automate airdrops of Goobi to students who are eligible.</li>
          </ol>
        </div>
      </main>
      <hr />
      <div className={styles.alignEnd}>
        <a className={styles.footer} href='https://twitter.com/GoobiGooseDAO' target='_blank' rel='noreferrer'>Twitter</a>
        <a className={styles.footer} href='https://docs.google.com/presentation/d/1RpTszZhW5PH3pSY_V8G7ZHP3z_HNcYGFjcHDTzZvKOY/edit?usp=sharing' target='_blank' rel='noreferrer'>Deck</a>
        <p className={styles.footer}>goobi.goose.dao@gmail.com</p>
      </div>
    </div>
  )
}

export default Home
