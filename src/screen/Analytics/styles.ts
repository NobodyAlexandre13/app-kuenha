import { ScrollView, Text, View } from "react-native";
import styled from "styled-components";
import { fonts } from "../../styles/fonts";

export const Container = styled(View)`
    flex: 1;
`;

export const Scrolli = styled(ScrollView)`
`;

export const AreaMain = styled(View)`
    width: 90%;
    align-self: center;
    margin-top: 24px;
`;
export const Title = styled(Text)`
    color: #e78b00ff;
    font-size: 24px;
    font-family: ${fonts.medium};
`;

export const AreaCards = styled(View)`
`;

export const AreaCharts = styled(View)`

`;