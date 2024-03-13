import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
  const { id, author, author_img, title, cover_img, publish_date, reading_time, hashtags } = blog;

  return (
    <div className='border border-white'>
      <img src={cover_img} alt="" className='' />
      <h3 className="text-2xl">id: {id}</h3>
      <img src={author_img} alt="" className='rounded-full size-20' />
      <h3 className="text-2xl">author: {author}</h3>
      <h3 className="text-2xl">title: {title}</h3>
    </div>
  )
};


Blog.PropTypes = {
  blog: PropTypes.object.isRequired
}
export default Blog;