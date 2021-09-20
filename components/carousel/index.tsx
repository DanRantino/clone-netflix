import { memo } from 'react';
import { DivPoster } from './styles';
import { FilmesData } from '../../@types/FilmesData';

type Props = {
    dados: FilmesData;
    index: number;
    state: any;
    display: string;
    mov: string;
};

const CompCarousel: React.FC<Props> = ({
    dados,
    index,
    state,
    display,
    mov
}) => {
    console.log(state);
    return (
        <DivPoster
            state={state}
            id={'P-' + index}
            url={dados.poster_path}
            Quantidade={display}
            mov={mov}
        >
            {index}
        </DivPoster>
    );
};
export default memo(CompCarousel);
