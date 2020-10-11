import React from 'react';
import {Button, Card, Col, Row} from 'react-bootstrap';
import CommentList from "../../containers/CommentList/CommentList";
import styles from './Post.module.css'

const post = (props) => {

    return (
        <Card className={styles.PostWrapper} border="secondary">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.content}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col className={styles.ViewCommentsText}>
                        <Button variant="light" onClick={props.onViewCommentsButtonClick}>View Comments</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {props.showComments ?
                            <Card border="light">
                                <Card.Body className={styles.CommentWrapper}>
                                    <CommentList postId={props.id}/>
                                </Card.Body>
                            </Card>
                            : null}
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
}

export default post;