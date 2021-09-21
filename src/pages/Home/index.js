import perfilImage from '../../assets/img/perfil.png';

import {
  Container, SectionInfo, SubTitle, Title, Article, Img, ContainerTitle, ContainerSocialIcons,
} from './style';

export default function Home() {
  return (
    <Container>
      <Img src={perfilImage} alt="imagem de perfil" />
      <SectionInfo>
        <ContainerTitle>
          <Title>Guilhermano Silva</Title>
          <SubTitle>Desenvolvedor Web</SubTitle>
        </ContainerTitle>
        <Article>
          <p>
            Utilizo a programação para desenvolver novos produtos e resolver desafios web
            com criatividade e amor.
          </p>
        </Article>
        <ContainerSocialIcons>
          <a href="https://linkedin.com/in/guilhermanosilva" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://github.com/guilhermanosilva" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github-alt" />
          </a>
          <a href="https://www.instagram.com/guilhermano.dev/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://twitter.com/guilhermano_dev" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.facebook.com/guilhermanon.silva/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f" />
          </a>
        </ContainerSocialIcons>
      </SectionInfo>
    </Container>
  );
}
