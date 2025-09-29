import { Link } from "../../components/Link";
import { AreaCards, AreaSubTitle, AreaTitle, Container, Scrolli, SubTitle, Title } from "./styles";
import { ImagesInfro } from "../../image/imagesInfro";
import { CardFormat } from "../../components/CardFormat";


export default function CreateInfro(){
    return(
        <Container>
            <Scrolli>
                <AreaTitle>
                    <Title>Qual produto deseja criar?</Title>
                    <AreaSubTitle>
                        <SubTitle>Escolha o formato do seu produto.</SubTitle>
                        <Link 
                            color="#000000"
                            onpress={()=>console.log("Testou")}
                            title="Clique aqui para saber mais!"
                        />
                    </AreaSubTitle>
                </AreaTitle>

                <AreaCards>
                    <CardFormat 
                        title="Curso online"
                        uri={ImagesInfro[0]}
                        onpress={()=>console.log("clicou")}
                    />
                    <CardFormat 
                        title="E-book"
                        uri={ImagesInfro[1]}
                        onpress={()=>console.log("clicou")}
                    />
                    <CardFormat 
                        title="Ficheiros/Arquivos"
                        uri={ImagesInfro[2]}
                        onpress={()=>console.log("clicou")}
                    />
                    <CardFormat 
                        title="Assinatura"
                        uri={ImagesInfro[3]}
                        onpress={()=>console.log("clicou")}
                    />
                    <CardFormat 
                        title="Ingresso para Evento"
                        uri={ImagesInfro[4]}
                        onpress={()=>console.log("clicou")}
                    />
                    <CardFormat 
                        title="Comunidade"
                        uri={ImagesInfro[5]}
                        onpress={()=>console.log("clicou")}
                    />
                </AreaCards>

            </Scrolli>
        </Container>
    )
}