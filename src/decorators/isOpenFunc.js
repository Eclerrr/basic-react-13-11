import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
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
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle={this.toggleOpenArticle} />
    }
}