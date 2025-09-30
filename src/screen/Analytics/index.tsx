import { PieChart, BarChart } from "react-native-gifted-charts";
import { 
    AreaCards, 
    AreaCharts, 
    AreaMain, 
    Container, 
    Scrolli, 
    Title 
} from "./styles";
import { CardResults } from "../../components/CardResults";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'setLayoutAnimationEnabledExperimental is currently a no-op',
]);

export default function Analytics(){
    return(
      <Container>
        <Scrolli>
            <AreaMain>
                <Title>Análise e Estatística</Title>
                <AreaCards>
                    <CardResults 
                        url="https://app.kuenha.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAlcance.66783038.png&w=48&q=75" 
                        result="270" 
                        description="Alcance"
                    />
                    <CardResults 
                        url="https://app.kuenha.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FVenda.37214f5d.png&w=48&q=75" 
                        result="39" 
                        description="Vendas"
                    />
                    <CardResults 
                        url="https://app.kuenha.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMixeiro.9a1fb7f6.png&w=48&q=75" 
                        result="20" 
                        description="Mixeiros"
                    />
                    <CardResults 
                        url="https://app.kuenha.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGanho.fe28c300.png&w=48&q=75" 
                        result="240.5K" 
                        description="Ganhos"
                    />
                </AreaCards>
                <AreaCharts>
                </AreaCharts>
            </AreaMain>
        </Scrolli>
      </Container>
    );
}