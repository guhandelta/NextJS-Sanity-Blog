
const BlogHeader = ({title, subtitle, date, coverImage, author}) => {
    return (
            <div className="blog-detail-header">
                <p className="lead mb-0">
                    <img
                        src={author?.avatar}
                        alt="avatar"
                        className="rounded-circle mr-3"
                        height="50px"
                        width="50px"
                    />
                    {author?.name}
                    {', '} {date}
                </p>
                <h1 className="font-weight-bold blog-detail-header-title">{title}</h1>
                <h2 className="blog-detail-header-subtitle mb-3">{subtitle}</h2>
                {coverImage &&
                    <img 
                        src={coverImage} 
                        alt="cover image" 
                        className="image-fluid rounded"
                    />
                }
            </div>
    )
}


export default BlogHeader
