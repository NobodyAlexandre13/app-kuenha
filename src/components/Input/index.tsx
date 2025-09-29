import { 
    Container, 
    InputText, 
    LabelInput
} from "./styles";

interface Props {
  title: string;
  label: string;
}


export function Input({title, label, ...rest}: Props){
    return(
        <Container>
            <LabelInput>{label}</LabelInput>
            <InputText 
                {...rest}
                placeholder={title}
            />
        </Container>
    )
}