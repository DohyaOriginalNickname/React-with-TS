import { Container } from "components/Container";
import { TheHeader } from 'components/TheHeader'
import { Search } from 'components/Search'
import { UserCard } from "components/UserCard";

import { userMock } from 'mock/index'
import { useState } from "react";
import { GitHubUser, LocalGitHubUser, NonFoundUser } from "types";
import { isGitHubUser } from "utils/typeguards";
import { extractLocalUser } from "utils/extract-local-user";

const BASE_URL = 'https://api.github.com/users/'

function App() {
  const [user, setUser] = useState<LocalGitHubUser | null>(userMock)
  const fetchUser = async (username: string) => {
    const url = BASE_URL + username

    const res = await fetch(url)
    const user = await res.json() as GitHubUser | NonFoundUser;

    if (isGitHubUser(user)) {
      setUser(extractLocalUser(user))
    } else {
      setUser(null)
    }
  }
  return (
    <Container>
      <TheHeader/>
      <Search hasError={!user} onSubmit={fetchUser}/>
      {user && (<UserCard {...user}/>)}
    </Container>
  );
}

export default App;
