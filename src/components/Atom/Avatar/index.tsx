import styled from "styled-components";
import DevImage from '../../assets/icons/avatar.webp';

const Background = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(200deg, transparent 55%, ${props=> props.theme.colors.Avatar});
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 1.5rem;
`;
const Image = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    right: 2rem;
    width: 20rem;

`;

export const Avatar = () => {
    return(
        <>
            <Background>
                <Image>
                    <img src={DevImage} width="100%" />
                </Image>
            </Background>
        </>
    )
}