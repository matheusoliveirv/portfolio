import { useState, useContext } from "react";
import styled from "styled-components";
import { Switch } from "../../Atom/Switch";

interface Props {
    toggleTheme(): void,
}

const HeaderContainer = styled.div`
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    padding: 0 3rem;
    font-family: 'Burtons';
    color: ${props => props.theme.colors.text};
`;

const SwitchFixed = styled.div`
&{
    display: none;
}
&.sticky{
    margin-right: -3rem;
    width: 6rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4rem 0 0 4rem;
    position: fixed;
    background-color: ${props => props.theme.colors.blur};
    backdrop-filter: saturate(150%) blur(20px); /*BLUR EFFECT*/
}
`;

export const Header:React.FC<Props> = ({toggleTheme}) => {

    const [sticky, setSticky] = useState(false);
    const changeSticky = () => {
        if (window.scrollY > 700) {
            setSticky(true)
        } else (
            setSticky(false)
        );
    }
    window.addEventListener('scroll', changeSticky);

    return (
        <>
            <HeaderContainer>
                
                <Switch toggleTheme={toggleTheme}/>
                
                Developed by Matt

                <SwitchFixed className={sticky ? 'sticky' : ''}>
                    <Switch toggleTheme={toggleTheme}/>
                </SwitchFixed>

            </HeaderContainer>
        </>
    )
}