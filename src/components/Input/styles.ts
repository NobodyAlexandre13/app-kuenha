import { TextInput, View, Text } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
    margin: 8px 0;
    width: 90%;
`
export const InputText = styled(TextInput)`
    background-color: #e8f0fd;
    border: 1px solid #e6e7eb;
    border-radius: 5px;
    padding: 15px 20px;
    height: 55px;
    width: 100%;
`;

export const LabelInput = styled(Text)`
    font-size: 14px;
    color: #141414ff;
    margin-bottom: 4px;
`;