import React from 'react';
import "./GistList.css";
import Gist from "../Gist/Gist";
const GistList = ({ gists }) => {

    const gistItems = gists.map((gist, i) => <li key={i}><Gist gist={gist} /></li>);

    return (<><ul>{gistItems}</ul></>);
}

export default GistList
