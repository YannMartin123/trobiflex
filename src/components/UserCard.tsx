// src/components/UserCard.tsx
import React from 'react'

type User = {
  name: string
  photo: string
  email?: string
  phone?: string
  bio?: string
}

type Props = {
  user: User
  onClick: (user: User) => void
}

const UserCard: React.FC<Props> = ({ user, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(user)}>
      <img src={user.photo} alt={user.name} onError={(e) => (e.currentTarget.src = 'default.jpg')} />
      <p>{user.name}</p>
    </div>
  )
}

export default UserCard
