import styled from "styled-components";

const ContainerIcons = styled.div`
    display: flex;
    gap: 16px;
    height: 2.1rem;
    margin-top: 3rem;
`;

export const TechIcons = () => {
    return(
        <>
          <ContainerIcons>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="100%" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="100%" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" height="100%" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="100%" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" height="100%" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" height="100%" />
          </ContainerIcons>
        </>
    )
}