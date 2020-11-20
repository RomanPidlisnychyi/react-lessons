import React from 'react';
import withFetch from './hoc/withFetch';

const Posts = props => {
    console.log(props);
    return (
        <>
            {props.data.length > 0 && (
                <h1>
                    В моих пропсах будут data, loading и error
                    {props.data[0].title}
                </h1>
            )}
        </>
    );
};

export default withFetch('https://jsonplaceholder.typicode.com/todos')(Posts);
