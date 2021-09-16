import { Container, H3, P, Btn, Wrapper } from './styles';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

const FilmePrincipal: React.FC<any> = ({ Dados }) => {
    return (
        <Wrapper url={`${Dados.backdrop_path}`}>
            <Container>
                <H3>{Dados.original_title}</H3>
                <P>{Dados.overview}</P>
                <div>
                    <Btn role="button">
                        <i>
                            <FaPlay />
                        </i>
                        ASSISTIR AGORA
                    </Btn>
                    <Btn role="button">
                        <i>
                            <FaInfoCircle />
                        </i>
                        MAIS INFORMAÇÕES
                    </Btn>
                </div>
            </Container>
        </Wrapper>
    );
};

export default FilmePrincipal;
