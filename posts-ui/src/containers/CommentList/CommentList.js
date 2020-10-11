import React, {Component} from 'react';
import Comment from '../../components/Comment/Comment';
import {Alert} from 'react-bootstrap';
import Axios from "axios";

class CommentList extends Component {

    state = {
        comments: [],
        errorOccurred: false
    };

    componentDidMount() {

        Axios.get('http://localhost:8081/api/posts/' + this.props.postId + '/comments')
            .then(response => {
                this.setState({comments: response.data})
            })
            .catch(error => {
                this.setState({errorOccurred: true})
            })
    };

    getComments() {

        return this.state.comments.map(comment => {
            return <Comment key={comment.id} name={comment.name} content={comment.body} email={comment.email}/>
        });
    };

    render() {
        return (
            <div>
                {this.state.errorOccurred ? <Alert variant="danger">An Error Occurred while Fetching Data!</Alert> : null}
                {this.getComments()}
            </div>)
    };
}

export default CommentList;