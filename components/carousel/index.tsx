import { memo } from 'react';
import { DivPoster } from './styles';
import { FilmesData } from '../../@types/FilmesData';

type Props = {
    dados: FilmesData;
    index: number;
    state: never;
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
        />
    );
};
export default memo(CompCarousel);
