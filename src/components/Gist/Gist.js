import Octicon from 'react-octicon';
import styled from 'styled-components';

const Gist = ({ gist }) => {
    return (<>
        <Header>
            <Owner>
                <img data-testid="owner-avatar" src={gist.owner.avatar_url} alt="avatar"></img>
                <Link data-testid="owner-username" href={gist.owner.html_url}>{gist.owner.login}</Link>
            </Owner>
            <Info>
                <Link data-testid="files" href="#"><Octicon name="file" />{Object.keys(gist.files).length} Files</Link>
                <Link data-testid="forks" href={gist.forks_url}><Octicon name="repo-forked" />Forks</Link>
                <Link data-testid="comments" href={gist.comments_url}><Octicon name="comment" />Comments</Link>
                <Link data-testid="stars" href={gist.owner.starred_url}><Octicon name="star" />Stars</Link>
            </Info>
        </Header>
        <Dates>
            <p data-testid="createdAt">Created at: {new Date(gist.created_at).toLocaleDateString()}</p>
            <p data-testid="updatedAt">Last updated: {new Date(gist.updated_at).toLocaleDateString()}</p>
        </Dates>
        {gist.description &&
            <Description data-testid="description">{gist.description}</Description>
        }
        <Files data-testid="filesList">{
            Object.keys(gist.files).map((key, i) =>
                <Link key={i} href={gist.files[key].raw_url}><Octicon name="file" />{gist.files[key].filename}</Link>
            )
        }</Files>
    </>);
};

const Link = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #2b75db;
    
    span {
        margin-right: 0.25em;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em 0;
`;

const Owner = styled.div`
    display: flex;
    align-items: center;

    img {
        max-width: 3em;
        border-radius: 2em;
    }

    a {
        margin: 0 1em;
    }
`;

const Info = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Dates = styled.div`
    display: flex;

    p {
        margin-right: 1em;
    }
`;

const Description = styled.p`
    font-size: large;
`;

const Files = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
`;

export default Gist
