// src/components/TweetInput.jsx
import { useState, useContext, useRef, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const TweetInput = () => {
  const { setTweets, user } = useContext(AppContext);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTweets((prev) => [
        { id: Date.now(), 
          text: input, 
          likes: 0, 
          retweets: 0, 
          replies: [], 
          user: user.handle },
        ...prev,
      ]);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What's happening?!"
        rows="3"
        cols="50"
      ></textarea>
      <button type="submit">Post</button>
    </form>
  );
};

export default TweetInput;
