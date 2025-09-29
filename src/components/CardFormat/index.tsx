import { AreaCard, Container, ImageFormat, NameFormat } from "./styles";

interface Props {
    title: string;
    uri: string;
    onpress: () => void;
}

export function CardFormat( { title, uri, onpress }: Props ){
    return(
        <Container>
            <AreaCard onPress={onpress} >
                <ImageFormat source={{ uri: uri }} />
                <NameFormat>{ title }</NameFormat>
            </AreaCard>
        </Container>
    )
}