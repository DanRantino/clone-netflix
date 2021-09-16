import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global/globastyles';
import PrimaryWrapper from '../styles/Wrapper';
import Header from '../../components/Header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <PrimaryWrapper>
            <Header />
            <GlobalStyle />
            <Component {...pageProps} />
        </PrimaryWrapper>
    );
};
export default MyApp;
