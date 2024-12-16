// src/components/TweetInteractions.jsx
import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const TweetInteractions = ({ tweetId, likes, retweets, replies }) => {
  const { likeTweet, retweet, replyToTweet, user } = useContext(AppContext);
  const [replyInput, setReplyInput] = useState('');
  const [showReply, setShowReply] = useState(false);

  const handleReply = () => {
    if (replyInput.trim()) {
      replyToTweet(tweetId, replyInput);
      setReplyInput('');
      setShowReply(false);
    }
  };

  return (
    <>
      <button onClick={() => likeTweet(tweetId)}>❤️ {likes || 0}</button>
      <button onClick={() => retweet(tweetId)}>🔄 {retweets || 0}</button>
      <button onClick={() => setShowReply(!showReply)}>💬 {(replies && replies.length) || 0}</button>

      {showReply && (
        <div style={{ marginTop: '5px' }}>
          <input
            type="text"
            value={replyInput}
            onChange={(e) => setReplyInput(e.target.value)}
            placeholder="Write a reply..."
            style={{
              background: '#202327',
              color: '#e7e9ea',
              border: '1px solid #333',
              padding: '5px',
              width: '80%'
            }}
          />
          <button 
            onClick={handleReply} 
            style={{
              marginLeft: '5px',
              background: '#1d9bf0',
              border: 'none',
              borderRadius: '9999px',
              padding: '5px 10px',
              color: '#fff'
            }}
          >
            Reply
          </button>
        </div>
      )}
    </>
  );
};

export default TweetInteractions;
