import { useState, useEffect, useContext } from 'react';
import { AppContext } from './context/AppContext';
import { Container, SidebarWrapper, MainFeed, RightSidebar } from './AppLayout';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TweetInput from './components/TweetInput';
import TweetList from './components/TweetList';
import Profile from './components/Profile';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setTweets } = useContext(AppContext);

  useEffect(() => {
    // Simulate fetching data
    const fetchedTweets = [
    ];
    setTweets(fetchedTweets);
  }, [setTweets]);

  return (
    <Container>
      <SidebarWrapper isMobileMenuOpen={isMobileMenuOpen}>
        <button 
          onClick={() => setIsMobileMenuOpen(false)} 
          style={{ 
            display: 'block', 
            marginBottom: '20px', 
            background: 'none', 
            border: 'none', 
            color: '#1d9bf0', 
            fontSize: '1.2em'
          }}
        >
          Close
        </button>
        <Sidebar />
      </SidebarWrapper>
      
      <MainFeed>
        <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
        <div className="tweet-input">
          <TweetInput />
        </div>
        <TweetList />
      </MainFeed>
      
      <RightSidebar>
        <Profile />
      </RightSidebar>
    </Container>
  );
};

export default App;
