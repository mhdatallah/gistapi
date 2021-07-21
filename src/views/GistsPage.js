
import React from 'react';
import styled from 'styled-components';
import GistList from "../components/GistList";

const GistsPage = ({ gists }) => {

    return (
        <div>
            {gists &&
                <div>
                    {gists.length > 0 && <GistList gists={gists} />}
                    {gists.length <= 0 && <NoResults>We can't find what you're looking for :(</NoResults>}
                </div>
            }
        </div>
    );
}

const NoResults = styled.p`
  display: flex;
  justify-content: center;
`;

export default GistsPage;
