import React from 'react';
import OurBlogSlide from '../OurBlogSlide/OurBlogSlide'
import '../OurBlog/OurBlog.css'

function OurBlog(){
	return(
		<div>
			<div className="tudo">
				<h1>Nosso blog</h1>
				<OurBlogSlide />
			</div>
		</div>
	)
}

export default OurBlog;