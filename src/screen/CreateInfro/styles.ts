import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import { fonts } from "../../styles/fonts";

export const Container = styled(SafeAreaView)`
    flex: 1;
`;

export const Scrolli = styled(ScrollView)`
    
`;

export const AreaTitle = styled(View)`
    align-self: center;
    width: 90%;
    margin-top: 10px;
`;

export const Title = styled(Text)`
    color: #e78b00ff;
    font-size: 24px;
    font-family: ${fonts.medium};
`;

export const AreaSubTitle = styled(View)`
    flex-direction: row;
    flex-wrap: wrap;
`;

export const SubTitle = styled(Text)`
    color: #4e4e4eff;
    font-size: 14px;
    font-family: ${fonts.regular};
`;

export const AreaCards = styled(View)`
    width: 90%;
    align-self: center;
`;
