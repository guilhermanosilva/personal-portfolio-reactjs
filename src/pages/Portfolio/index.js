import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import RepoItem from './RepoItem';

import {
  Container, Title, ListRepo, ContainerLoading,
} from './style';

function getGithubUserData() {
  return fetch('https://api.github.com/users/guilhermanosilva/repos?sort=created')
    .then((res) => res.json());
}

function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [userRepo, setUserRepo] = useState();

  useEffect(async () => {
    const repos = await getGithubUserData();
    const filterRepos = repos.filter((repo) => !!repo.description);
    setUserRepo(filterRepos);
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <Title>
        Projetos | Github
      </Title>
      {isLoading && (<ContainerLoading><Loading /></ContainerLoading>)}
      <ListRepo>
        {userRepo?.map((repo) => {
          const repoData = {
            url: repo.html_url,
            name: repo.name,
            description: repo.description,
            language: repo.language,
          };
          return <RepoItem dataItemRepo={repoData} key={repo.id} />;
        })}
      </ListRepo>
    </Container>
  );
}

export default Portfolio;
