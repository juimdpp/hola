import React, {Component} from 'react';

class WriteArticle extends Component{
    onChangeHandler = this.onChangeHandler.bind(this);

    onChangeHandler(event){
        this.props.event(event.target);
    }
    render(){
        return(
            <div className="WriteArticle">
                <p>Title</p>
                <textarea id="article-title-input" 
                type='text' 
                placeholder='Title' 
                name='title' 
                value={this.props.title} 
                onChange={this.onChangeHandler}>
                </textarea>
                <p>Content</p>
                <textarea id="article-content-input" 
                type='text' 
                placeholder='Content' 
                name='content' 
                value={this.props.content} 
                onChange={this.onChangeHandler}>
                </textarea>
            </div>
        )
    }
}
export default WriteArticle;