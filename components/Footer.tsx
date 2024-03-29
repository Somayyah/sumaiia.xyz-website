import { GetStaticProps } from 'next'
import SUBSCRIBE from './Subscribe'
import styles from "../styles/local/components/footer.module.scss"
import Image from 'next/Image'

function Footer() {
  return (
    <footer className={styles.footer} aria-label="footer">

      <div className={styles.subscribe}>
        <SUBSCRIBE /> 
      </div>

      <fieldset className={styles.middle}>
        <legend className={styles.title}>FIND ME AT</legend>
        <ul>
          <li className={styles.github}><a href="https://github.com/somayyah" target="_blank"><Image src='/github.svg' alt="github profile" width="25" height="25" /></a></li>
          <li className={styles.youtube}><a href="https://www.youtube.com/channel/UCV91hFH6IHsl6-sxbLmMtfA" target="_blank"><Image src='/youtube.svg' alt="youtube profile" width="25" height="25" /></a></li>
          <li className={styles.medium}><a href="https://medium.com/@sumaiiaxyz" target="_blank" ><Image src='/medium.svg' alt="medium profile" width="25" height="25" /></a></li>
        </ul>
      </fieldset> 
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
