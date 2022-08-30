import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

const StylesHeader = styled(Container)`
    border-bottom: 1px solid #3a3a3c;
`
const StylesHeading = styled(Col)`
     text-align:center;
     font-size: 36px;
     font-weight: 700;
     letter-spacing: 0.01em;
     color: #fff;
`;

const Header: React.FC = () =>{
    return (
        <StylesHeader >
            <Row md={3}>
                <Col> </Col>
                <StylesHeading> Wordle Game </StylesHeading>
                <Col> </Col>
            </Row>
        </StylesHeader>
    )
};

export default React.memo(Header);