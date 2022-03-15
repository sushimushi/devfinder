import Header from './Header';
import Main from './Main'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  //fetching data
  const [username, setUsername] = useState('octocat')
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => mapdata(data))
      .catch(error => { throw error })
  }, [username])

  //adding mode
  const [profile, setProfile] = useState({})
  function mapdata(data) {
    setProfile({
      avatar_url: data.avatar_url,
      bio: data.bio,
      blog: data.blog,
      company: data.company,
      created_at: data.created_at,
      followers: data.followers,
      following: data.following,
      location: data.location,
      login: data.login,
      name: data.name,
      public_repos: data.public_repos,
      twitter_username: data.twitter_username,
      mode: false,
      search: '',
      message: data.message
    })
  }

  function togglemode() {
    setProfile(data => ({
      ...data,
      mode: !data.mode
    }))
    console.log(profile)
  }
  function handleChange(event) {
    setProfile(data => ({
      ...data,
      [event.target.name]: event.target.value
    }))
  }
  function getProfile() {
    setUsername(profile.search)
  }



  return (
    <div className='body' style={{
      backgroundColor: profile.mode ? "white" : "#141D2F",
      color: profile.mode ? "" : 'white'
    }}>

      <div className='container' >
        <Header data={profile}
          togglemode={togglemode}
          handleChange={handleChange}
          getProfile={getProfile} />
        <Main data={profile} />
      </div>
    </div>
  );
}

export default App;
