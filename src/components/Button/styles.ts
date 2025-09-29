import styled from "styled-components";
import { TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(View)`
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const AreaButton = styled(TouchableOpacity)`
    width: 100%;
    border-radius: 5px;
    padding: 18px;
    justify-content: center;
    align-items: center;
`;

export const ButtonGradient = styled(LinearGradient)`
    width: 100%;
    background-color: #293a8c;
    border-radius: 5px;
    padding: 18px;
    justify-content: center;
    align-items: center;
`

export const TextButton = styled(Text)`
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
`