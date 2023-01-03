import styles from '../postList/postList.module.css'
import React from "react";
import axios from "axios"
import API from '../api'


class PostList extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            searchToken: ''
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
    handleSearch(e) {
        console.log(typeof e.target.value, e.target.value);
        this.setState({ searchToken: e.target.value })
    }


    componentDidMount() {
        API.get(`posts`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }

    showDetails(e) {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }
    render() {
        return (
            <div className={styles.container}>
                <select className={styles.input} value={this.state.searchToken} onChange={this.handleChange}>
                    {this.state.posts.map(p =>
                        <option>
                            {p.userId}
                        </option>

                    )}
                </select>
                
            </div>
        )
    }
}
export default PostList