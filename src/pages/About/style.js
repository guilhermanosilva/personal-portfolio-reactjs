import styled from 'styled-components';

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.sizing.mp1} 0;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizing.l1};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.sizing.mp1};
`;

const Article = styled.article`
  margin-bottom: ${({ theme }) => theme.sizing.mp1};
  max-width: 60vw;

  @media(max-width: 768px) {
  max-width: 80vw;
  }
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.sizing.m2};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.sizing.m1};
  text-align: justify;
`;

const ContainerStack = styled(Container)`
  margin-top: ${({ theme }) => theme.sizing.mp2};
`;

const Techs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  max-width: 60vw;

  @media(max-width: 768px) {
    max-width: 80vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TechItem = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${({ theme }) => theme.sizing.m1};
  transition: all .25s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    text-shadow: 0 0 1px ${({ theme }) => theme.colors.text6};
    transform: scale(1.03);
  }

  i {
    font-size: ${({ theme }) => theme.sizing.mp1};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.sizing.s1};
  }

  span {
    color: ${({ theme }) => theme.colors.text5};
    font-size: ${({ theme }) => theme.sizing.s4};
    font-weight: bold;
  }
`;

const ContainerSkills = styled(Container)`
  margin-top: ${({ theme }) => theme.sizing.mp2};

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.sizing.s4};

    @media(max-width: 768px) {
      display: flex;
      min-width: 80vw;
      flex-direction: column;
    }
  }
`;

const ListItem = styled.ol`
  border: 1px solid ${({ theme }) => theme.colors.text6};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.sizing.m3};
  padding: ${({ theme }) => theme.sizing.s4} ${({ theme }) => theme.sizing.mp1};
  transition: all .25s;

  &:hover{
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export {
  Container, Title, Article, Paragraph, ContainerStack, Techs, TechItem, ListItem, ContainerSkills,
};
