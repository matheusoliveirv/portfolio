import styled from "styled-components";
import DevNote from '../../assets/icons/avatarNote.webp';

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 45%;
`;

export const AvatarNote = () => {
    return(
        <>
          <Container>
            <img src={DevNote} width="100%" />
          </Container>
        </>
    )
}