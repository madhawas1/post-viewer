import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import styles from './Layout.module.css';

//Main Application Layout
const layout = (props) => (

    <Container fluid>
        <Row className={[styles.TopBar]}>
            <Col className={styles.TopBarText}>Welcome</Col>
        </Row>
        <Row className={styles.Layout}>
            <Col xl={{span: 8, offset: 2}}>{props.children}</Col>
        </Row>
    </Container>
);

export default layout;

