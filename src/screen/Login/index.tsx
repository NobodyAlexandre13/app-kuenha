import { Input } from "../../components/Input"
import * as Linking from 'expo-linking';
import { 
    AreaInputs,
    AreaSigup,
    Container, 
    LogoKuenha,
    TextSigup
} from "./styles"
import { Button } from "../../components/Button"
import { Link } from "../../components/Link"


export default function Login(){

    function handleOpenLink(url: string){
        Linking.openURL(url)
    }

    return(
        <Container>
            <LogoKuenha source={{uri: "https://app.kuenha.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLOTOTIPO_KUENHA-23.a01ebaf5.png&w=750&q=75"}}/>
            <AreaInputs>
                <Input 
                    label="E-mail" 
                    title="Digite seu e-mail"
                />
                <Input 
                    label="Senha" 
                    title="Digite sua senha"
                />
                <Button 
                    title="ENTRAR" 
                    onpress={()=> console.log("Clicado...")}
                />
            </AreaInputs>
            <Link 
                title="Esqueceu senha?"
                color="#cdcfce"
                onpress={()=>handleOpenLink("https://consumer.kuenha.com/auth/forgotPassword")}
            />
            <AreaSigup>
                <TextSigup>Não possui conta? </TextSigup>
                <Link 
                    title="Crie uma agora!"
                    color="#353365"
                    onpress={()=>handleOpenLink("https://consumer.kuenha.com/auth/register?redirect=dashboard")}
                />
            </AreaSigup>
            
        </Container>
    )
}