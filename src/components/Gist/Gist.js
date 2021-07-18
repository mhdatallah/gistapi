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
        <div className="dates">
            <p>Created at: {new Date(gist.created_at).toLocaleDateString()}</p>
            <p>Last updated: {new Date(gist.updated_at).toLocaleDateString()}</p>
        </div>
    </>);
};

export default Gist
