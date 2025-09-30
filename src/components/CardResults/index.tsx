import { 
    CardReasultsWeek, 
    IconResultWeek,
    AreaResult,
    ResultWeek,
    DescriptionWeek
} from "./styles";

interface CardResultsProps{
    url: string;
    result: string;
    description: string;
}

export function CardResults({ url, result, description }: CardResultsProps){
    return(
        <CardReasultsWeek>
            <IconResultWeek source={{ uri: url}} />
            <AreaResult>
                <ResultWeek>{result}</ResultWeek>
                <DescriptionWeek>{description}</DescriptionWeek>
            </AreaResult>
        </CardReasultsWeek>
    );
}