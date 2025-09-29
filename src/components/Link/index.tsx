import { Container, LinkBtn, TextLink } from "./styles";

interface Props {
    title: string;
    onpress: ()=> void;
    color: string;
}

export function Link({title, onpress, color}: Props){
    return(
        <Container>
            <LinkBtn onPress={onpress}>
                <TextLink style={{color: color}}>{title}</TextLink>
            </LinkBtn>
        </Container>
    );
}