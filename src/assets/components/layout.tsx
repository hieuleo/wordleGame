import React from 'react';
import Header from './header';
import styled from 'styled-components';

const StyleLayout = styled.div`
    background-color: #121213 !important;
`
const Layout : React.FC = () => {
    return (
        <StyleLayout>
            <Header/>
            <div>hello</div>
        </StyleLayout>
    )
};

export default React.memo(Layout);
