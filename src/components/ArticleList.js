import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import isOpenClass from '../decorators/isOpenClass.js'

export default class ArticleList extends isOpenClass {
    static propTypes = {
        articles: PropTypes.array.isRequired,
    }
    

    render() {
        const articleElements = this.props.articles.map((article, index) => 
        (<li key = {article.id}>
            <Article article = {article}
                     isOpen = {article.id === this.state.id && !this.state.open}
                     toggleOpen = {this.toggleOpenArticle}
            />
        </li>))
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
 
}