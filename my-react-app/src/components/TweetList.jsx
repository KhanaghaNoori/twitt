// src/components/TweetList.jsx
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Tweet from './Tweet';

const TweetList = () => {
  const { tweets, searchQuery } = useContext(AppContext);

  const filteredTweets = tweets.filter((tweet) =>
    tweet.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredTweets.length > 0 ? (
        filteredTweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            id={tweet.id}
            text={tweet.text}
            likes={tweet.likes}
            retweets={tweet.retweets}
            replies={tweet.replies}
            user={tweet.user}
          />
        ))
      ) : (
        <p style={{ textAlign: 'center', marginTop: '20px' }}>No tweets found.</p>
      )}
    </div>
  );
};

export default TweetList;
