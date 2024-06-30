import { darken } from "polished";
import backgroundImage from "../assets/themeMode/background-dark.jpg";
import lineEffect from "../assets/themeMode/line-dark.svg";

export default {
    title: 'dark',
    colors: {
        primary: '#0b1120', /*'#111827'*/
        text: '#d1d5db',
        subText: '#9ca3af',
        Avatar: darken(0.03, '#0b1120'),
        background: `url(${lineEffect}), url(${backgroundImage})`,
        blur: '#0b112050',
    },
}