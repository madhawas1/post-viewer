import React from 'react';
import {Col, Row} from 'react-bootstrap';
import PostList from '../../containers/PostList/PostList';
import styles from './PostViewer.module.css'

const PostViewer = () => (
    <div>
        <Row className={styles.TitleWrapper}>
            <Col className={styles.Title}>Posts Viewer</Col>
        </Row>
        <Row>
            <Col>
                <PostList/>
            </Col>
        </Row>
    </div>
);

export default PostViewer;