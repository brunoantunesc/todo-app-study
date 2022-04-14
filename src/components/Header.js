import React from "react"

const headerStyle = {
  padding: "20px 0",
  lineHeight: "1.5em",
}

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontsize: '6rem',
          fontWeight: '600',
          marginBottom: '2rem',
          lineHeight: '1rem',
          color: 'purple',
          textAlign: 'center',
        }}
      >To-do List App</h1>
    </header>
  )
}

