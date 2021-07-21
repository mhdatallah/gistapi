
import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import { getPublicGists, getGistForUser } from "./services/gistService";
import GistsPage from './views/GistsPage';

const App = () => {
  const [publicGists, setPublicGists] = useState([]); // the public gists
  const [gists, setGists] = useState(null); // the gists to be displayed

  // Get the public gists from the gist service
  const fetchPublicGists = () => {
    getPublicGists()
      .then(res => {
        setPublicGists(res.data);
        setGists(res.data);
      })
      .catch(() => {
        alert('Oops, something went wront. Please try again later');
      });
  }

  // Search for gists by username
  const fetchGistsForUser = username => {
    getGistForUser(username)
      .then(res => setGists(res.data))
      .catch(() => setGists(publicGists));
  }

  useEffect(() => {
    fetchPublicGists();
  }, []);

  // The search input handler
  const serachHandler = ($event) => {
    if ($event.target.value.length > 0) { // If there is an input --> make a search query
      fetchGistsForUser($event.target.value);
    } else {
      // If no input, display the public gists
      setGists(publicGists);
    }
  }

  // This for a better user experience. Delay the callback by 300 milliseconds
  const debouncedSerachHandler = useCallback(
    debounce(serachHandler, 300));

  return (
    <Wrapper className="App" data-testid="app">
      <Header onSearchChange={debouncedSerachHandler} />
      <GlobalStyles />
      <GistsPage gists={gists} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

const NoResults = styled.p`
  display: flex;
  justify-content: center;
`;

export default App;
