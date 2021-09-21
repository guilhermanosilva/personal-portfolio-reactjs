import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.sizing.mp2};

  @media(max-width: 992px) {
    padding: 0 ${({ theme }) => theme.sizing.mp2};
  }
`;

const Img = styled.img`
  border-radius:  50% 50% 55% 80%;
  max-height: 60vh;
  -webkit-filter: drop-shadow(0 0 3px rgba(0,0,0,0.5));
  filter: drop-shadow(0 0 3px rgba(0,0,0,0.5));

  @media(max-width: 992px) {
    margin-bottom: ${({ theme }) => theme.sizing.mp2};
    max-height: 50vh;

  }
`;

const SectionInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizing.l1};
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  transition: all 0.5s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media(max-width: 768px) {
    font-size: ${({ theme }) => theme.sizing.l4};
  }
`;

const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text6};
  font-size: ${({ theme }) => theme.sizing.m2};
  letter-spacing: .5px;
  text-transform: uppercase;

  @media(max-width: 768px) {
    font-size: ${({ theme }) => theme.sizing.m1};
  }
`;

const Article = styled.article`
  max-width: 24rem;
  text-align: justify;
  line-height: 1.3;

  p {
    font-size: ${({ theme }) => theme.sizing.m2};
    margin-bottom: ${({ theme }) => theme.sizing.mp2};
  }
`;

const ContainerSocialIcons = styled.div`
  display: flex;
  justify-content: center;

  a {
    & + a {
      margin-left: ${({ theme }) => theme.sizing.mp1};
    }
  }

  i {
    color: ${({ theme }) => theme.colors.text6};
    font-size: ${({ theme }) => theme.sizing.m4};
    transition: all 0.25s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
      transform: rotate(370deg) scale(1.4);
      -webkit-filter: drop-shadow(0 0 3px rgba(0,0,0,0.1));
      filter: drop-shadow(0 0 1px rgba(0,0,0,0.1));
    }
  }

  @media(max-width: 768px) {
    margin-bottom: ${({ theme }) => theme.sizing.mp2};

    i {
      font-size: ${({ theme }) => theme.sizing.l4};
    }
  }
`;

export {
  Container, SectionInfo, ContainerTitle, Title, SubTitle, Article, Img, ContainerSocialIcons,
};
