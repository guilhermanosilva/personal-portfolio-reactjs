import Programming from './Programming';
import Skills from './Skills';
import {
  Title, Paragraph, Container, Article,
} from './style';

export default function About() {
  return (
    <Container>
      <Title>Hello, world! 🖖</Title>
      <Article>
        <Paragraph>
          Sou o Guilhermano Silva, tenho 31 anos e sou natural de Fortaleza, Ceará.
          Possuo curso superior de tecnologia em Análise e Desenvolvimento de Sistemas
          pela Universidade Estácio de Sá desde 2016.
        </Paragraph>
        <Paragraph>
          Boa parte do meu background de trabalho é no setor administrativo, lidando com
          processos gerenciais, financeiros e de produção.
        </Paragraph>

        <Paragraph>
          Atualmente estou focado em minha transição de carreira para a área na qual sou
          formado, pois desde quando descobri o mundo da tecnologia - o que foi um pouco tarde,
          diga-se de passagem - senti uma tendencia natual para viver nesse mundo.
        </Paragraph>

        <Paragraph>
          Meu foco de estudos e programação está no ambiente javascript tanto no front-end
          como no back-end. Escolhi essa stack por conta da grande comunidade que a envolve e de
          me sentir muito a vontade com a sintax e os modos da linguagem, apesar de também
          ter interesse e vontade de aprender outras tecnogias.
        </Paragraph>
      </Article>

      <Programming />
      <Skills />

    </Container>
  );
}
