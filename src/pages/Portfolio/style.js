import styled from 'styled-components';

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.sizing.mp1} auto;
  max-width: 90vw;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizing.l4};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.sizing.mp1};
  `;

const ListRepo = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  gap: 1rem;
  width: 100%;
`;

const RepoCard = styled.li`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.text8};
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 0 2px ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};

  }

  a:hover{
    text-decoration: underline;
  }
`;

const RepoCardTitle = styled.h3`
  border-bottom: 1px solid ${({ theme }) => theme.colors.text8};
  color: ${({ theme }) => theme.colors.text5};
  font-size: ${({ theme }) => theme.sizing.m2};
  font-weight: bold;
  text-align: center;
  padding: ${({ theme }) => theme.sizing.s4} ${({ theme }) => theme.sizing.s1};

  i {
    color: ${({ theme }) => theme.colors.text8};
    font-size: ${({ theme }) => theme.sizing.s4};
    margin-left: ${({ theme }) => theme.sizing.s1};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text6};
  margin: ${({ theme }) => theme.sizing.m1};
  flex: 1;
`;

const Language = styled.p`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.sizing.s4};
  font-weight: bold;
  margin: 0 ${({ theme }) => theme.sizing.m1} ${({ theme }) => theme.sizing.s1};
`;

const ContainerLoading = styled.div`
  margin: ${({ theme }) => theme.sizing.mp2} auto;
  text-align: center;
  width: 100%;
`;

export {
  Container, Title, ListRepo, RepoCard, RepoCardTitle, Description, Language, ContainerLoading,
};
