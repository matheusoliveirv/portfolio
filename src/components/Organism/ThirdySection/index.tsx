import styled from "styled-components";
import { AvatarNote } from "../../Atom/AvatarNote";

const ContainerArea = styled.div`
    background: ${props => props.theme.colors.background};
    background-size: auto, cover;
    background-position: center;
`;
const Background = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7rem;
    background: linear-gradient(${props => props.theme.colors.primary}, transparent 50%, ${props => props.theme.colors.primary});

    @media (max-width: 767px){
        height: auto;
        flex-direction: column;
        gap: 2rem;
    }
`;
const BlurArea = styled.div`
    width: 30rem;
    height: 40rem;
    display: flex;
    align-items: start;
    justify-content: center;
    border-radius: 1rem;
    background: rgba( 255, 255, 255, 0.03 );
    box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.12 );
    backdrop-filter: blur( 14px );
    -webkit-backdrop-filter: blur( 14px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    @media (max-width: 767px){
        height: 70vh;
        width: 85vw;
    }
`;

export const ThirdySection = () =>{
    return(
        <>
          <ContainerArea>
            <Background>
                {/*SPACE 1 */}
                <BlurArea />

                {/*SPACE 2 */}
                <BlurArea>
                    <AvatarNote />
                </BlurArea>
            </Background>
          </ContainerArea>
        </>
    )
}