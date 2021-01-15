import React from 'react'
import axios from 'axios'

class DemoAPI extends React.Component {
    constructor(props) {
        super(props);

        this.state = { posts : []}

    }
    
    demoData() {
        const url = `http://www.reddit.com/r/calpoly.json`
        axios.get(url)
            .then( res => {
                console.log(`Promise resolved. Here is res: ${res}`)
                const posts = res.data.data.children.map(obj => obj.data)
                this.setState({ posts })
            })
    }

    componentDidMount() {
        this.demoData();
    }

    render() {
        return (
            <div>
        <h1>{this.props.subreddit}</h1>
        <ul>
            {this.state.posts.map(post => 
                <li key={post.id}>
                    <a href={post.url}>
                    {post.title}
                    </a>
                </li>
            )
            }
        </ul>
        </div>
        )
    }
}

export default DemoAPI
