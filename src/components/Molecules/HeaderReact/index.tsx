import styled from "styled-components";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { shade } from "polished";
import LightIcon from "../../Icons/assets/day-mode.png";
import DarkIcon from "../../Icons/assets/night-mode.png";

interface Props {
    toggleTheme(): void;
}

const HeaderContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    font-family: 'Burtons';
    color: ${props => props.theme.colors.text};
`

export const Header: React.FC<Props> = ({toggleTheme}) => {
    const {colors, title} = useContext(ThemeContext);
    return(
        <>
            <HeaderContainer>
                Developed by Matt

                <Switch 
                    onChange={toggleTheme}
                    checked={title == 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={17}
                    width={38}
                    handleDiameter={23}
                    onColor={shade(0.5, colors.primary)}
                    offColor={shade(0.2, colors.primary)}
                />

                {/*<Button>Projects</Button>*/}
            </HeaderContainer>
        </>
    )
}