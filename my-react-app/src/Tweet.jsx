// import React from 'react';

// const Tweet = ({ content }) => {
//   return (
//     <li>
//       <p>{content}</p>
//     </li>
//   );
// };

// export default Tweet;

import React, { useState } from 'react';
import TweetInteractions from './TweetInteractions';

const Tweet = ({ tweet }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <li>
      <p>{tweet.content}</p>
      <small>By {tweet.author} on {tweet.date.toString()}</small>
      <TweetInteractions likes={likes} onLike={handleLike} />
    </li>
  );
};

export default Tweet;
