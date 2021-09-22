import {
  ContainerStack, Title, Techs, TechItem,
} from './style';

export default function ProgrammingStack() {
  return (
    <ContainerStack>
      <Title>Stack de Desenvolvimento</Title>
      <Techs>
        <TechItem href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
          <i className="devicon-html5-plain" />
          <span>HTML5</span>
        </TechItem>
        <TechItem href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
          <i className="devicon-css3-plain" />
          <span>CSS3</span>
        </TechItem>
        <TechItem href="https://developer.mozilla.org/pt-BR/docs/Web/javascript" target="_blank" rel="noopener noreferrer">
          <i className="devicon-javascript-plain" />
          <span>JAVASCRIPT</span>
        </TechItem>
        <TechItem href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
          <i className="devicon-typescript-plain" />
          <span>TYPESCRIPT</span>
        </TechItem>
        <TechItem href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <i className="devicon-react-original" />
          <span>REACT.JS</span>
        </TechItem>
        <TechItem href="http://expressjs.com/pt-br/" target="_blank" rel="noopener noreferrer">
          <i className="devicon-express-original" />
          <span>EXPRESS</span>
        </TechItem>
        <TechItem href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
          <i className="devicon-nodejs-plain" />
          <span>NODE.JS</span>
        </TechItem>
        <TechItem href="https://www.mongodb.com/pt-br" target="_blank" rel="noopener noreferrer">
          <i className="devicon-mongodb-plain" />
          <span>MONGO.DB</span>
        </TechItem>
        <TechItem href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
          <i className="devicon-postgresql-plain" />
          <span>POSTGRE.SQL</span>
        </TechItem>
      </Techs>
    </ContainerStack>
  );
}
