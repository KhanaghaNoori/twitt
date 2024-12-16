// src/components/Tweet.jsx
import TweetInteractions from './TweetInteractions';

const Tweet = ({ id, text, likes, retweets, replies, user }) => {
  return (
    <div className="tweet">
      <p><strong>{user || 'Anonymous'}</strong>: {text}</p>
      <div className="tweet-actions">
        <TweetInteractions tweetId={id} likes={likes} retweets={retweets} replies={replies} />
      </div>
      {replies && replies.length > 0 && (
        <div className="replies">
          <strong>Replies:</strong>
          {replies.map((reply, index) => (
            <p key={index}><strong>{reply.user}:</strong> {reply.text}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tweet;
