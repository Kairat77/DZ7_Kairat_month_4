import React from "react";


class PostBody extends React.Component {
    constructor(props) {
        super(props)

    } 
    render() {
        return (
            <div>
                {this.props.post.body}
            </div>
        )
    }
}

export default PostBody;