import { Component } from 'react'

export default class DecoratedComponent extends Component {
    state = {
        id: null,
        open: false, 
    }

    toggleOpenArticle = (openArticleId,isOpen) => {
        this.setState({
            id: openArticleId,
            open: isOpen,
        })
    }

    render() {
        return '';
    }
}
