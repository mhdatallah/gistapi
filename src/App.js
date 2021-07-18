
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Header from "./components/Header";
import GistList from "./components/GistList/GistList";
import GlobalStyles from "./GlobalStyle";
import { getPublicGists } from "./services/gistService";

const App = () => {
  const [gists, setGists] = useState([]);

  const fetchPublicGists = () => {
    getPublicGists().then(res => {
      setGists(res.data);
    });
  }

  useEffect(() => {
    fetchPublicGists();
  }, []);

  return (
    <Wrapper className="App" data-testid="app">
      <Header />
      <GlobalStyles />
      <GistList gists={gists} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
