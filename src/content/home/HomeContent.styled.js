import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 960px;
    margin: auto;
    height: 100%;
    padding: 8px;
`;

const Main = styled.main`
    display: flex;
`;

const Footer = styled.footer`
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default { Header, Main, Wrapper, Footer };
