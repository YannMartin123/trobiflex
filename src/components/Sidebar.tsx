// Sidebar.tsx
import React from 'react'

type User = {
  name: string
  photo: string
  email?: string
  phone?: string
  bio?: string
}

type Props = {
  user: User | null
  onClose: () => void
}

const Sidebar: React.FC<Props> = ({ user, onClose }) => {
  return (
    <div className={`sidebar ${user ? 'sidebar--visible' : ''}`}>
      {user && (
        <>
          <button className="close-btn" onClick={onClose}>✕</button>
          <img src={user.photo} alt={user.name} />
          <h2>{user.name}</h2>
          <p><strong>Email :</strong> {user.email || 'inconnu'}</p>
          <p><strong>Téléphone :</strong> {user.phone || 'inconnu'}</p>
          <p><strong>Description :</strong> {user.bio || 'Aucune description'}</p>
        </>
      )}
    </div>
  )
}

export default Sidebar
