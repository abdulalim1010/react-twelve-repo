import React from 'react';

const Blogs = () => {
  fetch('blogs.json')
  .then(res => res.json())
  .then(data=>console.log(data))
  return (
    <div className="flex justify-around justify-center">
      <div className="left-container w-[70%">
        total:0
      </div>
      <div className="right-container w-[30%]">
        my result
      </div>
    </div>
  );
};

export default Blogs;