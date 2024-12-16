import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1280px;
  
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const SidebarWrapper = styled.aside`
  width: 200px;
  border-right: 1px solid #333;
  padding: 20px;
  position: sticky;
  top: 0;

  @media (max-width: 768px) {
    display: ${props => (props.isMobileMenuOpen ? 'block' : 'none')};
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    background: #000;
    z-index: 999;
  }
`;

export const MainFeed = styled.div`
  flex: 1;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  min-height: 100vh;

  @media (max-width: 768px) {
    border-left: none;
    border-right: none;
  }
`;

export const RightSidebar = styled.div`
  width: 350px;
  padding: 10px;
  border-left: 1px solid #333;
  min-height: 100vh;

  @media (max-width: 1024px) {
    display: none;
  }
`;
