import React from 'react';
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <div >
      <h1>{blog.id}</h1>
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={blog.cover}
      alt="Shoes" />
  </figure>
        <div className="card-body">
          <div className="author flex items-center justify-between">
            <h3>{blog.author}</h3>
            <img className='w-16' src={blog.author_img
            } alt="" />
            <FaBookmark />
          </div>
          <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
          <div className='flex gap-3.5'>  {
              blog.hashtags.map((has) => <p>{has }</p>)

            }</div>
      <button className="btn btn-primary">Mrke as read</button>
    </div>
  </div>
</div>
     
    </div>
  );
};

export default Blog;