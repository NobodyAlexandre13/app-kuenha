import { Image, Text, View } from "react-native";
import styled from "styled-components";
import { fonts } from "../../styles/fonts";

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