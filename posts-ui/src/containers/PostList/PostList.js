import React, {Component} from 'react';
import Axios from "axios";
import Post from '../../components/Post/Post';
import {Alert} from "react-bootstrap";

class PostList extends Component {

    state = {
        posts: [],
        errorOccurred: false
    };

    componentDidMount() {

        Axios.get('http://localhost:8081/api/posts')
            .then(response => {

                const updatedPosts = response.data.map(post => {

                    return {
                        ...post,
                        showComments: false,
                        comments: []
                    }
                });

                this.setState({posts: updatedPosts})
            })
            .catch(error => {
               this.setState({errorOccurred: true})
            });
    };

    viewCommentsButtonClickHandler = (id) => {

        const updatedPosts = this.state.posts.map(post => {

            if (id === post.id) {

                return {
                    ...post,
                    showComments: !post.showComments
                }
            }

            return post;
        });

        this.setState({posts: updatedPosts});
    };

    getPosts() {

        return this.state.posts.map(post => {

            return <Post key={post.id} id={post.id} title={post.title} content={post.body} showComments={post.showComments}
                         onViewCommentsButtonClick={() => this.viewCommentsButtonClickHandler(post.id)}/>
        });
    }

    render() {
        return (
            <div>
                {this.state.errorOccurred ? <Alert variant="danger">An Error Occurred while Fetching Data!</Alert> : null}
                {this.getPosts()}
            </div>
        )
    };
}

export default PostList;