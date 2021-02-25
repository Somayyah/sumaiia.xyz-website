import { GetStaticProps } from 'next'
import ICONS from './icons'
import SUBSCRIBE from './Subscribe'
import styles from "../styles/local/components/footer.module.scss"

function Footer() {
  return (
    <footer className={styles.footer} aria-label="footer">

      <div className={styles.subscribe}>
        <h1 className={styles.subtitle}>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <SUBSCRIBE />
      </div>

      <div className={styles.middle}>
        <div className={styles.contact}>
          <p className={styles.title}>FIND ME AT</p>
          <ul>
            <li className={styles.github}>Github</li>
            <li className={styles.linkedin}>LinkedIn</li>
            <li className={styles.medium}>Medium</li>
          </ul>
        </div>
        <h1>Made With {ICONS.love} Using Next.js and Preact</h1>
      </div>

      <div className={styles.rights}>
        <p>All rights reserved.</p>
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
