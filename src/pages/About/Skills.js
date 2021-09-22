import { ContainerSkills, ListItem, Title } from './style';

export default function Skills() {
  return (
    <ContainerSkills>
      <Title>Habilidades</Title>
      <ul>
        <ListItem>Desenvolvimento de Web Sites</ListItem>
        <ListItem>Criação de Landing Pages</ListItem>
        <ListItem>Páginas de captura de leads</ListItem>
        <ListItem>Formulários de cadastro</ListItem>
        <ListItem>Autenticação de usuário</ListItem>
        <ListItem>Desenvolvimento API Rest</ListItem>
        <ListItem>Persistência em Bando de Dados</ListItem>
        <ListItem>Serviços em Núvem</ListItem>
      </ul>
    </ContainerSkills>
  );
}
