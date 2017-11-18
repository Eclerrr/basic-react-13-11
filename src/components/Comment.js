import React, {Component} from 'react'

class Comment extends Component {
    constructor(props) {
        super(props)
    }
    


    render(){
        const comment = this.props.comment;

        return (
            <li className="comment">
                <div className="comment__content">
                    <div className="comment__top">
                        <i><b className="comment__name">{comment.user}</b></i>
                    </div>
                    <div className="comment__content">
                            <p>{comment.text}</p>
                    </div>
                </div>
            </li>
        )
    }

}


export default Comment