import React, {Component} from 'react'
import Comment from './Comment'


class CommentList extends Component {

    constructor(props){
        super(props)

        this.state = {
            isOpenComments : false
        }
    }

    render(){

        const comments = this.props.comments
        let commentsElements = ''

        if(comments){
            commentsElements = comments.map(item => {
                return <Comment comment = {item} key={item.id}/>
            })
        }
        
        const commentList = this.state.isOpen && <ul className="comments__list">{commentsElements}</ul>;
        
        return(
            <div className="comments">
                <h2>Comments - {comments ? comments.length : '0'}</h2>
                <button onClick={this.handleClick}>
                    {this.state.isOpen ? 'hide comments' : 'show comments'}
                </button>
                {commentList}
            </div>
        )
    }


    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


}




export default CommentList