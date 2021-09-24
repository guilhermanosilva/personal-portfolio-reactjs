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
          Atualmente estou focado em minha transição de carreira para a área em que sou
          formado, mais especificamente para o desenvolvimento de software. Sinto que tenho
          uma tendência natural para viver nesse universo e quero permanecer nele por toda
          minha vida. Amo toda abundancia de possibilidades e melhorias que a tecnologia está
          trazendo e trará para o nosso mundo.
        </Paragraph>

        <Paragraph>
          Meu foco de estudos e programação está no ambiente javascript tanto no front-end
          como no back-end. Escolhi essa stack por conta da grande comunidade que a envolve e de
          me sentir muito a vontade com a sintaxe e os modos da linguagem, apesar de também
          ter interesse e vontade de aprender outras tecnologias.
        </Paragraph>
      </Article>

      <Programming />
      <Skills />

    </Container>
  );
}
