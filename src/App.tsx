import { useState, useEffect } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import Sidebar from './components/Sidebar'
import usersData from './data/users.json'
import { Sun, Moon } from 'lucide-react';

type User = {
  name: string
  photo: string
  email?: string
  phone?: string
  bio?: string
}

function App() {
  const [users, ] = useState<User[]>(usersData);

  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
  document.body.classList.toggle('dark', isDarkMode);
}, [isDarkMode]);

  


  return (
    <div className="layout">
      <Sidebar user={selectedUser} onClose={() => setSelectedUser(null)} />
      <div className="app">
        <div className='header'>
          <h1>Trobiflex</h1>
          <div className='subtitle'>Votre trombinoscope a portée</div>
          <button
            className="toggle-mode"
            onClick={() => setIsDarkMode(prev => !prev)}
          >
            {isDarkMode ? (
              <>
                <Sun size={18} style={{ marginRight: 8 }} />
                Mode clair
              </>
            ) : (
              <>
                <Moon size={18} style={{ marginRight: 8 }} />
                Mode sombre
              </>
            )}
          </button>


        </div>
        
        <div className="grid">
          {users.map((user, i) => (
            <UserCard key={i} user={user} onClick={setSelectedUser} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
