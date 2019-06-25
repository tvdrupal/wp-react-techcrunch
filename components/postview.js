import React,{ Component } from "react";
import axios from "axios"
import { Link } from "react-router-dom"

class PostView extends Component {
	constructor(props){
		super(props);
		this.state = {
			 post: {}
		};
		this.createMarkup = this.createMarkup.bind();
	}

	componentDidMount(){
		const slug =  this.props.match.params.slug;
		//console.log(`https://techcrunch.com/wp-json/wp/v2/posts?slug=${slug}`);
		axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?slug=${slug}`).then(posts=>{
			this.setState({
				post:posts.data[0]
			})
		})

		// console.log(this.state.post);

	}

	createMarkup(html) {
		return { __html:html };
	}

	render(){
		let build;
		if(this.state.post.title){
			build = (
				<div>
				<h1>{ this.state.post.title.rendered }</h1>
				<div
					dangerouslySetInnerHTML={ this.createMarkup(this.state.post.content.rendered
						)}
				/>
				</div>		
				)	

		}else{
			build = <div />
		}
		return build;
	}



}

export default PostView;