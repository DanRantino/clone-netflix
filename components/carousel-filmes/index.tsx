import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import {
    ButtonCarousel,
    Container,
    ContainerCarousel,
    WrapperCarousel
} from './styles';
import CompCarousel from '../carousel';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { FilmesData } from '../../@types/FilmesData';
import { Transition } from 'react-transition-group';

type Props = {
    children: ReactNode;
    Dados: Array<FilmesData>;
};

enum Mov {
    esq = '-400',
    dir = '400'
}

const Carousel: React.FC<Props> = ({ Dados }) => {
    const [Data] = useState<Array<FilmesData>>([
        ...Dados,
        { poster_path: 'vazio' }
    ]);
    const [Qnt, setQnt] = useState(4);
    const [Count, setCount] = useState<Array<number>>([0, 1, 2, 3]);
    const [Teste, setTeste] = useState(true);
    const [Animate, setAnimate] = useState(false);
    const [Mov, setMov] = useState<string>('0');

    async function prevFilm(e: MouseEvent) {
        setQnt(Qnt - 4 <= 0 ? Data.length : Qnt - 4);
        setCount([Qnt - 1, Qnt - 2, Qnt - 3, Qnt - 4]);
        setTeste(!Teste);
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
        }, 1000);
        setMov('-400');
    }

    async function nextFilm(e: MouseEvent) {
        setCount([Qnt - 1, Qnt - 2, Qnt - 3, Qnt - 4]);
        setQnt(Qnt + 4 > Data.length ? 4 : 4 + Qnt);
        setTeste(!Teste);
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
        }, 1000);
        setMov('400');
    }

    useEffect(() => {
        setTeste(!Teste);
    }, [Qnt, Count]);
    if (Dados.length < 0) {
        return <>Carregando...</>;
    }
    return (
        <Container>
            <div>
                <h1>Recomendados</h1>
            </div>
            <WrapperCarousel>
                <ButtonCarousel onClick={prevFilm}>
                    <i>
                        <GoArrowLeft
                            style={{ width: '2rem', height: '3rem' }}
                        />
                    </i>
                </ButtonCarousel>
                <ContainerCarousel>
                    {Data.map((dados: FilmesData, index: number) => {
                        let display = 'block';
                        if (index < Qnt - 4 || index > Qnt - 1) {
                            display = 'none';
                        }
                        return (
                            <Transition key={index} in={Animate} timeout={900}>
                                {state => (
                                    <CompCarousel
                                        state={state}
                                        key={index}
                                        index={index}
                                        dados={dados}
                                        display={display}
                                        mov={Mov}
                                    />
                                )}
                            </Transition>
                        );
                    })}
                </ContainerCarousel>
                <ButtonCarousel onClick={nextFilm}>
                    <i>
                        <GoArrowRight
                            style={{ width: '2rem', height: '3rem' }}
                        />
                    </i>
                </ButtonCarousel>
            </WrapperCarousel>
        </Container>
    );
};

export default Carousel;
