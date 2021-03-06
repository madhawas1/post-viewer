import React, {Component} from 'react';
import Comment from '../../components/Comment/Comment';
import {Alert} from 'react-bootstrap';
import Axios from "axios";
import config from '../../config';

class CommentList extends Component {

    state = {
        comments: [],
        errorOccurred: false
    };

    //Get Comments from REST API
    componentDidMount() {

        Axios.get(config.api.URL + '/posts/' + this.props.postId + '/comments')
            .then(response => {
                this.setState({comments: response.data})
            })
            .catch(error => {
                this.setState({errorOccurred: true})
            })
    };

    //Generate comments list
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