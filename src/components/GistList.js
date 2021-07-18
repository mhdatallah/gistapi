import React from 'react';
import Gist from "./Gist";
const GistList = ({ gists }) => {

    const gistItems = gists.map((gist, i) => <Gist key={i} gist={gist} />);

    return (<>{gistItems}</>);
}

export default GistList
