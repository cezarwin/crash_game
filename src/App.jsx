import './App.css'
import Header from './components/Header/Header.jsx'
import MainContent from './components/MainContent/MainContent.jsx'
import LeftPanel from './components/LeftPanel/LeftPanel.jsx'
import TopBar from './components/TopBar/TopBar.jsx'
import { useEffect, useState } from 'react'

const App = () => {

  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleClickFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  }

  useEffect(() => {

  }, [isFullScreen])

  return (
    <div className='desktop'>
      {isFullScreen ? '' : <TopBar />}
      {/* <LeftPanel /> */}
      <main className='content-wrapper'>
        <article id="casino">
          {isFullScreen ? '' : <LeftPanel />}
          <main className={isFullScreen ? 'full_main' : 'main'}>
            <div style={isFullScreen ? {} : {paddingRight: "15px" }}>
              <div class="CasinoGame_button_zzqiZ CasinoGame_left_GuzYw" onClick={() => handleClickFullScreen()}>
                {
                  isFullScreen ?
                  <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon icon-fullscreen-close sm"><path d="M0 3h3V0h2v5H0zM0 11h3v3h2V9H0zM14 3h-3V0H9v5h5zM14 11h-3v3H9V9h5z"></path></svg>
                    : <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="icon icon-fullscreen-open sm">
                      <path d="M5 2H2v3H0V0h5zM5 12H2V9H0v5h5zM9 2h3v3h2V0H9zM9 12h3V9h2v5H9z"></path>
                    </svg>
                }
              </div>
              <MainContent isFullScreen={isFullScreen} />
            </div>
          </main>
        </article>
      </main>
    </div>
  )
}

export default App