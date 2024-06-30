import { darken } from "polished";
import backgroundImage from "../assets/themeMode/background-light.jpg";
import lineEffect from "../assets/themeMode/line.svg";

export default {
    title: 'light',
    colors: {
        primary: '#F8FAFC',/*'#CCC'*/
        text: '#555',
        subText: '#444',
        Avatar: darken(0.08, '#F8FAFC'),
        background: `url(${lineEffect}), url(${backgroundImage})`,
        blur: '#F8FAFC80',
    },
}