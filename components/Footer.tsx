import { GetStaticProps } from 'next'
import SUBSCRIBE from './Subscribe'
import styles from "../styles/local/components/footer.module.scss"
import Image from 'next/Image'

function Footer() {
  return (
    <footer className={styles.footer} aria-label="footer">

      <div className={styles.subscribe}>
        <h1 className={styles.subtitle}>SUBSCRIBE TO MY NEWSLETTER</h1>
        <SUBSCRIBE />
      </div>

      <div className={styles.middle}>
        <p className={styles.title}>FIND ME AT</p>
        <ul>
          <li className={styles.github}><Image src='/github.svg' alt="github profile" width="32" height="32" /></li>
          <li className={styles.youtube}><Image src='/youtube.svg' alt="youtube profile" width="32" height="32" /></li>
          <li className={styles.medium}><Image src='/medium.svg' alt="medium profile" width="32" height="32" /></li>
          <li className={styles.twitter}><Image src='/twitter.svg' alt="twitter profile" width="32" height="32" /></li>
        </ul>
      </div>

      <div className={styles.rights}>
        <p>Copyright &copy; Sumaia Mohammed 2021 All rights reserved.</p>
      </div>

    </footer>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
      title: "Blog - alt f4",
      name: "description",
      content: "Read about technologies and topics like cloud computing, DevOps, react front end development. Find tips about Kubernetes, Docker, Puppet, Azure, Firebase and Google cloud platform. Explore tutorials on Python programming, and front end."
    }
  }
}

export default Footer
