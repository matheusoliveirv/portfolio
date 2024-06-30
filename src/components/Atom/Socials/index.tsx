import styled from "styled-components";

const ContainerArea = styled.div`
    display: flex;
    height: 2.5rem;
    gap: 2rem;
    margin-top: 1.5rem;
    a{
        text-decoration: none;
    }
    i{
        font-size: 2rem;
        color: ${props => props.theme.colors.text};
    }
`;

export const Socials = () => {
    return(
        <>
          <ContainerArea>
            <a href="https://github.com/matheusoliveirv"><i className="devicon-github-original"></i></a>
            <a href="https://www.linkedin.com/in/matheusoliveirast/"><i className="devicon-linkedin-plain"></i></a>
            <a href="https://www.google.com"><i className="devicon-google-plain"></i></a>
          </ContainerArea>
        </>
    )
}