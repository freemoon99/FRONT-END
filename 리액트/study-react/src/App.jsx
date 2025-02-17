import { MediaDiv, Main } from './styledComponent';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './styles';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';
import ShowPost from './ShowPost';
import WritePost from './WritePost';

function App() {
  const APIurl = 'https://reactapitest.pythonanywhere.com/api/';
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
          <Main>
            <Slogun></Slogun>
            <Routes>
              <Route
                exact
                path="/"
                element={<ShowPostList APIurl={APIurl}></ShowPostList>}
              />
              <Route path="/write" element={<WritePost></WritePost>} />
              <Route path="/post/:postID" element={<ShowPost></ShowPost>} />
            </Routes>
          </Main>
          <Footer></Footer>
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;