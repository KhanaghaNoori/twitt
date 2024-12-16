// src/context/AppContext.jsx
import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Khanagha Noori', handle: '@Khanaghanoori', avatar: 'https://via.placeholder.com/50' });
  const [theme, setTheme] = useState('light');
  const [tweets, setTweets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const likeTweet = (id) => {
    setTweets((prev) =>
      prev.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: (tweet.likes || 0) + 1 } : tweet
      )
    );
  };

  const retweet = (id) => {
    setTweets((prev) => {
      const tweetToRetweet = prev.find((t) => t.id === id);
      if (!tweetToRetweet) return prev;
  
      // Update the retweets count for the original tweet
      const updatedTweets = prev.map((tweet) =>
        tweet.id === id 
          ? { ...tweet, retweets: (tweet.retweets || 0) + 1 } 
          : tweet
      );
  
      // Create a new tweet representing the retweet
      // You can customize the text or structure as desired
      const retweetedTweet = {
        id: Date.now(),
        text: `RT @${tweetToRetweet.user}: ${tweetToRetweet.text}`,
        likes: 0,
        retweets: 0,
        replies: [],
        user: 'yourHandle' // or from context: user.handle
      };
  
      // Return the newly created tweet at the top of the feed, plus updated tweets
      return [retweetedTweet, ...updatedTweets];
    });
  };

  const replyToTweet = (id, replyText) => {
    setTweets((prev) =>
      prev.map((tweet) =>
        tweet.id === id
          ? {
              ...tweet,
              replies: [...(tweet.replies || []), { text: replyText, user: user.handle }]
            }
          : tweet
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        user,
        theme,
        tweets,
        setTweets,
        searchQuery,
        setSearchQuery,
        likeTweet,
        retweet,
        replyToTweet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
