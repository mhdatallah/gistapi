import "./Gist.css"
const Gist = ({ gist }) => {
    return (<>
        <img src={gist.owner.avatar_url} alt="avatar"></img>
    </>);
};

export default Gist
