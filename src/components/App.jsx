import Header from './Header';
import Main from './Main'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  //fetching data
  const [allData, setAllData] = useState({})
  useEffect(() => {
    fetch('https://api.github.com/users/octocat')
      .then(res => res.json())
      .then(data => setAllData(data))
      .catch(error => { throw error })
    mapdata()
    console.log(profile)
  }, [])

  //adding mode
  const [profile, setProfile] = useState({})
  function mapdata() {
    setProfile({
      avatar_url: allData.avatar_url,
      bio: allData.bio,
      blog: allData.blog,
      company: allData.company,
      created_at: allData.created_at,
      followers: allData.followers,
      following: allData.following,
      location: allData.location,
      login: allData.login,
      name: allData.name,
      public_repos: allData.public_repos,
      twitter_username: allData.twitter_username,
      mode: false,
      search: ''
    })
  }

  function togglemode() {
    console.log('clicked')
    setProfile(data => ({
      ...data,
      mode: !data.mode
    }))
  }



  return (
    <div className='body' style={{
      backgroundColor: profile.mode ? "white" : "#141D2F",
      color: profile.mode ? "" : 'white'
    }}>

      <div className='container' >
        <Header data={profile} togglemode={togglemode} />
        <Main data={profile} />
      </div>
    </div>
  );
}

export default App;
