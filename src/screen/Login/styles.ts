import { View, Image, Text } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const LogoKuenha = styled(Image)`
    width: 200px;
    height: 85px;
`;

export const AreaInputs = styled(View)`
    width: 90%;
    align-items: center;
    margin-top: 20px;
`;
export const TextSigup = styled(Text)`
    color: #cdcfce;
    font-size: 16px;
` 
export const AreaSigup = styled(View)`
    flex-direction: row;
    margin-top: 10px;
`