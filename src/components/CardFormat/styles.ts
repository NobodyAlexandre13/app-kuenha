import { TouchableOpacity, View, Text, Image } from "react-native";
import styled from "styled-components";
import { fonts } from "../../styles/fonts";

export const Container = styled(View)`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

export const AreaCard = styled(TouchableOpacity)`
    background-color: #fafafaff;
    width: 100%;

`;

export const ImageFormat = styled(Image)`
    width: 100%;
    height: 165.27px;
`;

export const NameFormat = styled(Text)`
    font-size: 20px;
    font-family: ${fonts.medium};
    color: #555555;
    margin: 10px;
`;