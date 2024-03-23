import React from 'react';

const Pagination = ({ 
    postsPerPage = 0,
    totalPosts = 0,
    paginate = () => {},
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
        <button>{"<<"}</button>
        <button>{"<"}</button>
        Page <input type="text" value={1} />
        <button>{">"}</button>
        <button>{">>"}</button>
    </nav>
  );
}

export default Pagination;