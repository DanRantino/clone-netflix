import { Logo, A, HeaderContainer } from './styles';

const Header: React.FC = () => {
    return (
        <header>
            <HeaderContainer>
                <Logo>NETFLIX</Logo>
                <nav>
                    <A href="#"> Início</A>
                    <A href="#"> Séries</A>
                    <A href="#"> Filmes</A>
                    <A href="#"> Documentários</A>
                </nav>
            </HeaderContainer>
        </header>
    );
};

export default Header;
