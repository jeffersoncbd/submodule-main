import React from 'react'

const containerStyles: React.CSSProperties = {
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#eee'
}

const App: React.FC = () => {
  return (
    <div style={containerStyles}>
      <h1>Aplicação principal</h1>
    </div>
  )
}

export default App
