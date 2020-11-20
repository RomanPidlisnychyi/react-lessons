import React, { Component } from 'react';
import CommentForm from './CommentForm';
// import withToggle from './hoc/withToggle';

export default class Comments extends Component {
    state = {
        comments: [
            {
                name: 'Mango',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem enim doloribus officiis magnam cum saepe ipsum eligendi, aliquid nam excepturi natus quisquam totam ex possimus molestias consequatur porro expedita.',
            },
            {
                name: 'Poli',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem enim doloribus officiis magnam cum saepe ipsum eligendi, aliquid nam excepturi natus quisquam totam ex possimus molestias consequatur porro expedita.',
            },
            {
                name: 'Ajax',
                text:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorem enim doloribus officiis magnam cum saepe ipsum eligendi, aliquid nam excepturi natus quisquam totam ex possimus molestias consequatur porro expedita.',
            },
        ],
    };

    addComment = comment =>
        this.setState(prevState => ({
            comments: [...prevState.comments, comment],
        }));
    render() {
        const { comments } = this.state;
        return (
            <div>
                <h1>Comments:</h1>
                <ul>
                    {comments.map(comment => (
                        <li key={comment.name}>
                            <p>Name: {comment.name}</p>
                            <p>Comment: {comment.text}</p>
                        </li>
                    ))}
                </ul>
                <CommentForm onAddComment={this.addComment} />
            </div>
        );
    }
}

// export default withToggle(Comments);
