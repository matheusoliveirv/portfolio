import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import LightIcon from "../../assets/ThemeMode/LightMode.svg";
import DarkIcon from "../../assets/ThemeMode/DarkMode.svg";

 interface Props{
    toggleTheme(): void,
 }

const Switcher = styled.input`
&{
    width: 3rem;
    height: 1.3rem;
    background: #00000030;
    cursor: pointer;
    -webkit-appearance: none;
    border-radius: 1.2rem;
    transition: all 0.3s;
    position: relative;
}
&:checked{
    background: #dbf0fa40;
}
&:before{
    position: absolute;
    content: ''; 
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    top: -.25rem;
    background-image: url(${DarkIcon}), linear-gradient(90deg,#3b82f6 2.34%,#6366f1 100.78%);
    background-size: contain;
    transition: all 0.3s;
}
&:checked::before{
    margin-left: 1.2rem;
    background-image: url(${LightIcon}), linear-gradient(90deg,#3b82f6 2.34%,#6366f1 100.78%); 
    /*linear-gradient(90deg,#fb923c 2.34%,#fbbf24 100.78%);*/
}
`;

export const Switch: React.FC<Props> = ({toggleTheme}) => {

    const { title } = useContext(ThemeContext);
    return(
        <>
            <Switcher type="checkbox" checked={title == 'dark'} onChange={toggleTheme} />
        </>
    )
}