// import React, { useState } from 'react';

// const TweetInput = ({ addTweet }) => {
//   const [tweet, setTweet] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addTweet(tweet);
//     setTweet('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={tweet}
//         onChange={(e) => setTweet(e.target.value)}
//         placeholder="What's happening?"
//       />
//       <button type="submit">Tweet</button>
//     </form>
//   );
// };

// export default TweetInput;


import React, { useState, useContext } from 'react';
import { AppContext } from './App';

const TweetInput = ({ addTweet }) => {
  const [tweet, setTweet] = useState('');
  const { user } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTweet({ content: tweet, author: user.name, date: new Date() });
    setTweet('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        placeholder="What's happening?"
      />
      <button type="submit">Tweet</button>
    </form>
  );
};

export default TweetInput;