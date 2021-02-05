import { Twemoji } from 'react-emoji-render';

const arabic2Eng: any = <Twemoji text=":us:"/>

const eng2Arabic: any = <Twemoji text=":flag_saudi_arabia:"/>

const light: any = <Twemoji text=":sun:"/>

const dark: any = <Twemoji text=":waxing_crescent_moon:"/>

const complex: any = <Twemoji text=":sparkles:"/>

const minimalist: any = <Twemoji text=":star:"/>

const ICONS: any = {
    arabic2Eng: arabic2Eng,
    eng2Arabic: eng2Arabic,
    light: light,
    dark: dark,
    complex: complex,
    minimalist: minimalist
};

export default ICONS
