import { GetStaticProps } from 'next'
import ICONS from './icons'
import SUBSCRIBE from './Subscribe'
import styles from "../styles/local/components/footer.module.scss"

function Footer() {
  return (
    <footer className={styles.footer} aria-label="footer">

      <div className={styles.subscribe}>
        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <SUBSCRIBE />
      </div>

      <div className={styles.contact}>
        <p>FIND ME AT</p>
        <ul>
          <li>github</li>
          <li>linkedIn</li>
          <li>Twitter</li>
          <li>github</li>
        </ul>
      </div>

      <div className={styles.rights}>
        <h1>Made With <span>{ICONS.love}</span> Using Next.js and Preact</h1>
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
