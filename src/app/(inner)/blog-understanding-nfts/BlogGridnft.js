"use client"

const BlogGridnft = (props) => {
    const { Slug, blogImage, blogTitle } = props;
    return (
        <div>
            <a href={`/blog-understanding-nfts/${Slug}`} className="thumbnail">
                <img src={`/assets/images/blog/${blogImage}`} alt="blog_iamge" />
            </a>
            <div className="inner-content-area">
                <div className="top-area">
                    <a href={`/blog-understanding-nfts/${Slug}`}>
                        <h3 className="title animated fadeIn">
                            {blogTitle ? blogTitle : 'How to growing your business'}
                        </h3>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BlogGridnft