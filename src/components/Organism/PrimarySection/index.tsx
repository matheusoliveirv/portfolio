import styled from "styled-components";
import { GradientFill } from "../../Molecules/Gradient/Gradient";
import { Avatar } from "../../Atom/Avatar";
import { Socials } from "../../Atom/Socials";

const ContainerArea = styled.div`
    background: ${props => props.theme.colors.background};
    background-size: auto, cover;
    background-position: center;
`;
const Background = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 11rem //TOP
             1.5rem //RIGHT AND LEFT
             0; //BOTTOM
    background: linear-gradient(${props => props.theme.colors.primary}, transparent 50%, ${props => props.theme.colors.primary});
`;

export const PrimarySection = () => {
    return (
        <>
            <ContainerArea>
              <Background>
                <h1><GradientFill>Matheus Oliveira</GradientFill></h1>
                <h3>Frontend Developer Jr.</h3>
                <p>
                    Estudante de desenvolvimento há aproximadamente 2 anos.
                    Atualmente imerso em React e buscando minha primeira oportunidade como dev!
                </p>
                <Socials />
                <Avatar />
              </Background>
            </ContainerArea>
        </>
    )
}