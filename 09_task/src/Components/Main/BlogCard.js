import React from "react";

const BlogCard = ({ title, author, desc, img }) => {
  return (
    <div className="BlogCard">
      <h2>{title}</h2>
      <h2>{author}</h2>
      <p>{desc}</p>
      <img src={img} alt={title} />
    </div>
  );
};

export default BlogCard;
