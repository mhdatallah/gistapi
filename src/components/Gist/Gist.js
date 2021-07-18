import "./Gist.css"
const Gist = ({ gist }) => {
    return (<>
        <div className="header">
            <div className="owner">
                <img src={gist.owner.avatar_url} alt="avatar"></img>
                <a href={gist.owner.html_url}>{gist.owner.login}</a>
            </div>
            <div className="info">
                <a href="javascript:void(0)">{Object.keys(gist.files).length} Files</a>
                <a href={gist.forks_url}>Forks</a>
                <a href={gist.comments_url}>Comments</a>
                <a href={gist.owner.starred_url}>Stars</a>
            </div>
        </div>
    </>);
};

export default Gist
