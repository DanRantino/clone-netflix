import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import FilmePrincipal from '../../components/filme-principal';
import Carousel from '../../components/carousel-filmes';

const url = process.env.NEXT_PUBLIC_ENV_API_URL;
const key = process.env.NEXT_PUBLIC_ENV_API_KEY;

type Props = {
    children?: FC;
    dados?: any;
};

const Home: FC<Props> = ({ dados }) => {
    const [Dados, setDados] = useState<any>('');

    useEffect(() => {
        console.log('Aqui');
        setDados(dados);
        console.log(Dados);
    }, [Dados]);
    if (Dados !== '') {
        return (
            <>
                <FilmePrincipal Dados={Dados.results[0]} />
                <Carousel Dados={Dados.results} />
            </>
        );
    } else {
        return <div>carregando ...</div>;
    }
};

export async function getServerSideProps(): Promise<unknown> {
    const urlCompleta = `${url}/movie?api_key=${key}&language=en-US&query=Wonde%20Woman&page=1&include_adult=false`;
    const data = await axios.get(urlCompleta);
    const urlList =
        'https://api.themoviedb.org/3/search/movie?api_key=c96b60799b28470258233ef105a827f5&page=1&query=all';
    const list = await axios.get(urlList);
    console.log();
    return {
        props: {
            dados: data.data,
            listfilm: list.data.results
        }
    };
}

export default Home;
