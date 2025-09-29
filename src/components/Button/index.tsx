import { ButtonGradient, Container, TextButton, AreaButton } from "./styles";

interface Props {
    title: string;
    onpress: () => void;
}

export function Button({title, onpress}: Props){
    return(
        <Container>
            <AreaButton onPress={onpress} >
                <ButtonGradient
                    colors={['#1f3fb0' ,'#353365']}
                    dither={false}
                    start={{x: 0.2, y: 0.1 }}
                >
                    <TextButton>{title}</TextButton>
                </ButtonGradient>
            </AreaButton>
        </Container>
    );
}