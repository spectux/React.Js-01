const TeamCard = props => {
  const {teamLogoUrl, teamName, bgColor, textColor} = props
  return (
    <div
      className='team-card'
      style={{backgroundColor: bgColor, color: textColor}}
    >
      <img className='team-logo' src={teamLogoUrl} alt={teamName} />
      <p className='team-name'>{teamName}</p>
    </div>
  )
}

const App = () => {
  return (
    <div className='super-over-league-app'>
      <h1 className='app-heading'>Super Over League</h1>
      <div className='team-cards-container'>
        <TeamCard
          teamLogoUrl='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
          teamName='RCB'
          bgColor='#0f172a'
          textColor='#f8fafc'
        />
        <TeamCard
          teamLogoUrl='https://assets.ccbp.in/frontend/react-js/csk-img.png'
          teamName='CSK'
          bgColor='#f8fafc'
          textColor='#0f172a'
        />
      </div>
    </div>
  )
}

const element = <App />
ReactDOM.render(element, document.getElementById('root'))
