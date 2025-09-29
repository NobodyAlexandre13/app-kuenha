import { Image, ScrollView, View, Dimensions, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { fonts } from "../../styles/fonts";


export const { width } = Dimensions.get('window');
export const larguraSlider = width * 0.9;

export const Container = styled(SafeAreaView)`
    flex: 1;
`;

export const Scrolli = styled(ScrollView)`

`;

export const ImageSliderArea = styled(View)`
    width: ${larguraSlider}px;
    margin-left: ${ width * 0.05 }px;
    margin-right: ${ width * 0.05 }px;
`;

export const ImageSlider = styled(Image)`
    width: 100%;
    height: 200px;
`;

export const AreaProfile = styled(View)`
    width: 90%;
    border: 1px solid #cdcfce;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding-top: 20px;
`;

export const ImageProfile = styled(Image)`
    width: 128px;
    height: 128px;
    border-radius: 64px;
`;

export const NameProfile = styled(Text)`
    font-size: 16px;
    margin-top: 6px;
    font-weight: 500;
    color: #2b2b2bff;
    font-family: ${fonts.medium};
`;

export const AreaMoney = styled(View)`
    margin-top: 20px;
    border-top-color: #cdcfce;
    border-top-width: 1px;
    border-top-style: solid;
    width: 100%;
    padding: 10px 15px;
`;

export const TextWarnMoney = styled(Text)`
    font-size: 17px;
    color: #2c2c2cff;
    margin-bottom: 10px;
    font-family: ${fonts.regular};
`;

export const AreaCoin = styled(View)`

`;

export const TextCoin = styled(Text)`
    font-size: 20px;
    color: #04ce47ff;
    font-family: ${fonts.semibold};
    line-height: 24px;
`;

export const AreaWeek = styled(View)`
    width: 90%;
    align-self: center;
    margin-top: 20px;
`;

export const TitleCategory = styled(Text)`
    font-family: ${fonts.medium};
    font-size: 18px;
    color: #202020ff;
`;

export const CardReasultsWeek = styled(View)`
    padding: 15px;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    border: 1px solid #cdcfce;
    border-radius: 4px;
    margin: 10px 0;
`;

export const IconResultWeek = styled(Image)`
    width: 50px;
    height: 50px;
`;

export const AreaResult = styled(View)`
    justify-content: center;
    align-items: center;
`;

export const ResultWeek = styled(Text)`
    color: #001f4eff;
    font-size: 20px;
    font-family: ${fonts.semibold};
    line-height: 25px;
`;

export const DescriptionWeek = styled(Text)`
    color: #001f4eff;
    font-size: 14px;
    font-family: ${fonts.regular};
    line-height: 22px;
`;

export const TableSell = styled(View)`
    margin: 20px 0;
`;

export const AreaflexTitle = styled(View)`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10px 0;
    border-bottom-color: #cdcfce;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    padding: 10px;
`;

export const TitleTable = styled(Text)`
    font-family: ${fonts.bold};
    text-transform: capitalize;
    font-size: 13px;
    color: #2b2b2bff;
`;

export const WarnText = styled(Text)`
    text-align: center;
    color: #acacacff;
    font-family: ${fonts.regular};
    font-size: 16px;
    margin-top: 18px;
`;

export const ButtonCurse = styled(TouchableOpacity)`
    margin: 10px 0;
`;

export const ImageButtonCourse = styled(Image)`
    width: 100%;
    height: 208px;
`;