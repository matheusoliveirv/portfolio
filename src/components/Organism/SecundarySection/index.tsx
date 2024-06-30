import styled from "styled-components";
import html from '../../assets/icons/html.svg';
import css from '../../assets/icons/css.svg';
import js from '../../assets/icons/js.svg';
import react from '../../assets/icons/react.svg';
import { GradientFill } from '../../Molecules/Gradient/Gradient';

const ContainerArea = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;
const BlocoTechLeft = styled.div`
    height: 35vh;
    display: flex;
    img{
        margin-left: -8rem;
    }
`;
const BlocoTechRight = styled.div`
    height: 35vh;
    display: flex;
    justify-content: center;
    img{
        margin-right: -8rem;
    }
`;
const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    padding: 0 .6rem;
`;
const Description = styled.p`
    padding: 0 25rem;
    
    //MOBILE
    @media(max-width:767px){
      padding: 0;
    }
`;

export const SecondarySection = () => {
    return (
      <>
        <ContainerArea>
          <BlocoTechLeft>
            <img src={html} height="100%" />
            <TextArea>
              <h2><GradientFill>HTML 5</GradientFill></h2>
              <Description>
                Comecei a estudar HTML há 3 anos, onde pude me aprofundar em
                tags, estrutura de código e realizar meus primeiros projetos.
              </Description>
            </TextArea>
          </BlocoTechLeft>

          <BlocoTechRight>
            <TextArea>
              <h2><GradientFill>CSS 3</GradientFill></h2>
              <Description>
                Na mesma época, tive contato com CSS, e fiquei surpreso com a liberdade 
                de estilização. Diria que foi o que me incentivou a ir pro 
                lado 'Frontend da Força!'
              </Description>
            </TextArea>
            <img src={css} height="100%" />
          </BlocoTechRight>

          <BlocoTechLeft>
            <img src={js} height="100%" />
            <TextArea>
              <h2><GradientFill>JavaScript</GradientFill></h2>
              <Description>
                Tempos depois comecei a buscar mais formas de animações e interações com 
                elementos e aí me deparei com o JavaScript. Assim como no CSS, fiquei surpreso com o poder do JS 
                e há cerca de 2 anos me mantenho estudando a linguagem.
              </Description>
            </TextArea>
          </BlocoTechLeft>

          <BlocoTechRight>
            <TextArea>
              <h2><GradientFill>React Js</GradientFill></h2>
              <Description>
                Seguindo esse caminho encontrei o React. No primeiro contato já gostei bastante 
                da estrutura, organização e os Hooks. Passei a estudar o framework há 1 ano.
              </Description>
            </TextArea>
            <img src={react} height="100%" />
          </BlocoTechRight>
        </ContainerArea>
      </>
    )
}