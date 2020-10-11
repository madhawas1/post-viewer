import React from 'react';
import {Card} from 'react-bootstrap';
import styles from './Comment.module.css'

const comment = (props) => {

    return (
        <Card className={styles.PostWrapper}>
            <Card.Body>
                <Card.Title>{props.name} <br/> <span className={styles.AuthorName}>by {props.email}</span></Card.Title>
                <Card.Text>{props.content}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default comment;