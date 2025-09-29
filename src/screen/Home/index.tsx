import React, { useRef, useEffect, useState } from "react";

import { FlatList } from "react-native";
import { imagesSlider } from "../../image/imagesSlider";
import { 
  AreaCoin, 
  AreaflexTitle, 
  AreaMoney, 
  AreaProfile, 
  AreaResult, 
  AreaWeek, 
  ButtonCurse, 
  CardReasultsWeek, 
  Container, 
  DescriptionWeek, 
  IconResultWeek, 
  ImageButtonCourse, 
  ImageProfile, 
  ImageSlider, 
  ImageSliderArea, 
  larguraSlider, 
  NameProfile, 
  ResultWeek, 
  Scrolli, 
  TableSell, 
  TextCoin, 
  TextWarnMoney, 
  TitleCategory, 
  TitleTable,
  WarnText
} from "./styles";
import * as Linking from "expo-linking";

export default function Home() {
  const flatListRef = useRef<FlatList>(null);
  const list = [...imagesSlider, ...imagesSlider];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (index + 1) % list.length;
      if (nextIndex === 0) {
        flatListRef.current?.scrollToOffset({ offset: 0, animated: false });
      } else {
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      }
      setIndex(nextIndex);
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  function handleOpenCourse(){
    Linking.openURL("https://youtube.com/playlist?list=PLCLwwdTTPWSj8SK3PyJv01TV4bwSP1afj&si=-pq4SRY51qV4cJFe");
  }

  return (
      <Container>
        <Scrolli>
          <FlatList
            ref={flatListRef}
            data={list}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, i) => item.id + i}
            renderItem={({ item }) => (
                <ImageSliderArea>
                    <ImageSlider source={{ uri: item.uri }} style={{ resizeMode: 'contain' }}/>
                </ImageSliderArea>
            )}
            onMomentumScrollEnd={e =>
                setIndex(Math.round(e.nativeEvent.contentOffset.x / larguraSlider))
            }
          />
          <AreaProfile>
            <ImageProfile 
              source={{ uri: "https://app.kuenha.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FhTSoMYvayVzOZtFL9IoBnSwUeu1aITil3cv5tkQYJHE26hAM&w=128&q=75" }}
            />
            <NameProfile>O vendedor</NameProfile>
            <AreaMoney>
              <TextWarnMoney>Seu Saldo na Kuenha:</TextWarnMoney>
              <AreaCoin>
                <TextCoin>2 300,00 Kz</TextCoin>
                <TextCoin>2 300,00 MZN</TextCoin>
              </AreaCoin>
            </AreaMoney>
          </AreaProfile>
          <AreaWeek>
            <TitleCategory>Perfomance desta semana</TitleCategory>

            <CardReasultsWeek>
              <IconResultWeek source={{ uri: "https://app.kuenha.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FVenda.37214f5d.png&w=48&q=75"}} />
              <AreaResult>
                <ResultWeek>0</ResultWeek>
                <DescriptionWeek>Vendas</DescriptionWeek>
              </AreaResult>
            </CardReasultsWeek>

            <CardReasultsWeek>
              <IconResultWeek source={{ uri: "https://app.kuenha.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMixeiro.9a1fb7f6.png&w=48&q=75"}} />
              <AreaResult>
                <ResultWeek>0</ResultWeek>
                <DescriptionWeek>Mixeiros</DescriptionWeek>
              </AreaResult>
            </CardReasultsWeek>

            <CardReasultsWeek>
              <IconResultWeek source={{ uri: "https://app.kuenha.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGanho.fe28c300.png&w=48&q=75"}} />
              <AreaResult>
                <ResultWeek>0,00 Kz</ResultWeek>
                <DescriptionWeek>Ganhos</DescriptionWeek>
              </AreaResult>
            </CardReasultsWeek>

            <TableSell>
              <TitleCategory>Últimas Vendas</TitleCategory>
              <AreaflexTitle>
                <TitleTable>Produto</TitleTable>
                <TitleTable>preço</TitleTable>
                <TitleTable>Canal de Venda</TitleTable>
              </AreaflexTitle>
              <WarnText>Nenhuma venda nos últimos 7 dias</WarnText>
            </TableSell>

            <ButtonCurse
              onPress={handleOpenCourse}
              activeOpacity={0.8}
            >
              <ImageButtonCourse source={{ uri: 'https://app.kuenha.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.e4ba61d0.png&w=2048&q=75' }}/>
            </ButtonCurse>

            <ButtonCurse
              onPress={() => console.log("Clicou")}
              activeOpacity={0.8}
            >
              <ImageButtonCourse source={{ uri: 'https://app.kuenha.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.77e45dcd.png&w=2048&q=75' }}/>
            </ButtonCurse>
          </AreaWeek>
        </Scrolli>
      </Container>
  );
}
