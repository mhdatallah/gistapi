import { render, cleanup } from '@testing-library/react';
import Gist from './Gist';


let getByTestId;

beforeEach(() => {
    const mockGist = {
        "url": "https://api.github.com/gists/3f7401af5f03b9fa81cd6014b5c6099a",
        "forks_url": "https://api.github.com/gists/3f7401af5f03b9fa81cd6014b5c6099a/forks",
        "commits_url": "https://api.github.com/gists/3f7401af5f03b9fa81cd6014b5c6099a/commits",
        "id": "3f7401af5f03b9fa81cd6014b5c6099a",
        "node_id": "MDQ6R2lzdDNmNzQwMWFmNWYwM2I5ZmE4MWNkNjAxNGI1YzYwOTlh",
        "git_pull_url": "https://gist.github.com/3f7401af5f03b9fa81cd6014b5c6099a.git",
        "git_push_url": "https://gist.github.com/3f7401af5f03b9fa81cd6014b5c6099a.git",
        "html_url": "https://gist.github.com/3f7401af5f03b9fa81cd6014b5c6099a",
        "files": {
            "gistfile1.txt": {
                "filename": "gistfile1.txt",
                "type": "text/plain",
                "language": "Text",
                "raw_url": "https://gist.githubusercontent.com/r-ryantm/3f7401af5f03b9fa81cd6014b5c6099a/raw/8b69a946ea61d2c0e87ad151b3a779689e0ae19e/gistfile1.txt",
                "size": 5570
            },
            "gistfile2.txt": {
                "filename": "gistfile1.txt",
                "type": "text/plain",
                "language": "Text",
                "raw_url": "https://gist.githubusercontent.com/r-ryantm/3f7401af5f03b9fa81cd6014b5c6099a/raw/8b69a946ea61d2c0e87ad151b3a779689e0ae19e/gistfile1.txt",
                "size": 5570
            }
        },
        "public": true,
        "created_at": "2021-07-21T09:24:46Z",
        "updated_at": "2021-07-21T09:24:46Z",
        "description": "Mock Description 123.",
        "comments": 0,
        "user": null,
        "comments_url": "https://api.github.com/gists/3f7401af5f03b9fa81cd6014b5c6099a/comments",
        "owner": {
            "login": "r-ryantm",
            "id": 37933096,
            "node_id": "MDQ6VXNlcjM3OTMzMDk2",
            "avatar_url": "https://avatars.githubusercontent.com/u/37933096?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/r-ryantm",
            "html_url": "https://github.com/r-ryantm",
            "followers_url": "https://api.github.com/users/r-ryantm/followers",
            "following_url": "https://api.github.com/users/r-ryantm/following{/other_user}",
            "gists_url": "https://api.github.com/users/r-ryantm/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/r-ryantm/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/r-ryantm/subscriptions",
            "organizations_url": "https://api.github.com/users/r-ryantm/orgs",
            "repos_url": "https://api.github.com/users/r-ryantm/repos",
            "events_url": "https://api.github.com/users/r-ryantm/events{/privacy}",
            "received_events_url": "https://api.github.com/users/r-ryantm/received_events",
            "type": "User",
            "site_admin": false
        },
        "truncated": false
    };
    const component = render(<Gist gist={mockGist} />);
    getByTestId = component.getByTestId;
});

afterEach(cleanup);

test('renders Gist component correctly', () => {
    expect(getByTestId("owner-avatar")).toBeInTheDocument();
    expect(getByTestId("owner-username")).toBeInTheDocument();
    expect(getByTestId("files").textContent).toEqual("2 Files");
    expect(getByTestId("forks")).toBeInTheDocument();
    expect(getByTestId("comments")).toBeInTheDocument();
    expect(getByTestId("stars")).toBeInTheDocument();
    expect(getByTestId("createdAt").textContent).toEqual("Created at: 7/21/2021");
    expect(getByTestId("updatedAt").textContent).toEqual("Last updated: 7/21/2021");
    expect(getByTestId("description").textContent).toEqual("Mock Description 123.");
    expect(getByTestId("filesList")).toBeInTheDocument();
});
