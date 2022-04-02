import Twemoji from 'react-twemoji';

const arabic2Eng: string = "https://twemoji.maxcdn.com/2/72x72/1f1fa-1f1f8.png"

const eng2Arabic: string = "https://twemoji.maxcdn.com/2/72x72/1f1f8-1f1e6.png"

const light: string = "https://twemoji.maxcdn.com/2/72x72/2600.png"

const dark: string = "https://twemoji.maxcdn.com/2/72x72/1f312.png"

const complex: string = "https://twemoji.maxcdn.com/2/72x72/26c8.png"

const minimalist: string = "https://twemoji.maxcdn.com/2/72x72/2601.png"

const emoji: any = <Twemoji options={{ className: 'twemoji' }}>
  <p>😂<span>😉</span></p>
</Twemoji>

const github: string = "../images/github.svg"

const youtube: string = "../images/youtube.svg"

const medium: string = '../images/medium.svg'

const twitter: string = '../images/twitter.svg'

const ICONS: any = {
  arabic2Eng: arabic2Eng,
  eng2Arabic: eng2Arabic,
  light: light,
  dark: dark,
  complex: complex,
  minimalist: minimalist,
  github: github,
  youtube: youtube,
  twitter: twitter,
  medium: medium,
};

export default ICONS
