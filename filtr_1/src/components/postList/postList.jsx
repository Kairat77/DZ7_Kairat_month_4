import styles from './postList.module.css'
import React from "react";
import PostTitle from '../posts/postTitle';
import axios from "axios"
import API from '../../api'
import PostBody from '../posts/postBody';


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
        API.get(`posts`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }
    render() {
        return (
            <div className={styles.container}>
                <form className={styles.postForm}>
                    <input type="text" name="title" placeholder='Поиск по названию' onChange={this.handleSearch} value={this.state.searchToken} />
                    <button className={styles.btn}>Поиск</button>
                </form>

                <div className="posts">
                    <div>
                        {this.state.posts.filter(p => p.title.includes(this.state.searchToken) 
                        ).map(p =>
                            <PostTitle key={p.id} post={p} />
                            
                        )}
                    </div>
                    <div>
                        {this.state.posts.filter(p => p.body.includes(this.state.searchToken) 
                        ).map(p =>
                            <PostBody key={p.id} post={p} />
                        )}
                    </div>
                

                </div>
            </div>
        )
    }
}
export default PostList