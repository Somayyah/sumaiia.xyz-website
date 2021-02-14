import { GetStaticProps } from 'next'
import ICONS from './icons'

function Footer() {
  return (
    <footer aria-label="footer">

      <div className="subscribe">
        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
      </div>

      <div className="contact">
        <p>FIND ME AT</p>
        <ul>
          <li>github</li>
          <li>linkedIn</li>
          <li>Twitter</li>
          <li>github</li>
        </ul>
      </div>

      <div className="rights">
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
