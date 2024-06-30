import styled from "styled-components";

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
    background: linear-gradient(${props => props.theme.colors.primary}, transparent 50%, ${props => props.theme.colors.primary});
`;
const BlurArea = styled.div`
    width: 67rem;
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
        margin: 0 1rem;
    }
`;
export const QuadSection = () => {
    return(
        <>
          <ContainerArea>
            <Background>
              <BlurArea />
            </Background>
          </ContainerArea>
        </>
    )
}