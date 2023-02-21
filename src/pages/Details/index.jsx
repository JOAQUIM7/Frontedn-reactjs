import { Container, Links, Content } from "./styles"

import { Tag } from "../../components/Tag"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText/"


export function Details() {
 
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ratione odio veniam tenetur doloremque distinctio?
            Ducimus est illo rerum aliquid consequatur,
            corporis numquam cum earum?
            Magnam omnis sint debitis totam nihil?


            
          </p>

          <Section title="links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button title= "Voltar" loading/>      
        </Content>
      </main>
    </Container>
  )
}