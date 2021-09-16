import { useEffect, useState } from 'react';
import { Container } from './styles';

const Carousel: React.FC<any> = ({ Dados }) => {
    const [Qnt, setQnt] = useState(4);
    useEffect(() => {
        console.log(Qnt);
    });
    if (Dados.length < 0) {
        return <>Carregando...</>;
    }
    return (
        <Container>
            <button
                onClick={() => setQnt(Qnt <= 4 ? Dados.length + 1 : Qnt - 4)}
            >
                back
            </button>
            {Dados.map((dados: any, index: number) => {
                if (index > Qnt - 5 && index < Qnt) {
                    return <div>{dados.original_title}</div>;
                } else return null;
            })}
            <button onClick={() => setQnt(Qnt > Dados.length ? 4 : Qnt + 4)}>
                next
            </button>
        </Container>
    );
};

export default Carousel;
