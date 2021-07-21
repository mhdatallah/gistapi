import React from 'react';
import styled from 'styled-components';
import Gist from "./Gist/Gist";
const GistList = ({ gists }) => {

    const gistItems = gists.map((gist, i) => <li key={i}><Gist gist={gist} /></li>);

    return (<>
        <List>{gistItems}</List>
    </>);
}

const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
        width: 50%;
        border-bottom: 1px solid lightgray;
        padding-bottom: 3em;
    }
    li:last-child {
        border-bottom: none;
    }
`;

export default GistList
