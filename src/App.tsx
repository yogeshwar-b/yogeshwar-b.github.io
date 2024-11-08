import webpage from './assets/browser.svg'
import dev from '/dev.svg'
import styles from './App.module.css'

function App() {
  return (
    <>
      <div className={styles['flex-row']}>
        <a href='https://vite.dev' target='_blank'>
          <img src={dev} className={styles['img-logo']} alt='Dev Icon' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img
            src={webpage}
            className={styles['img-logo']}
            alt='Webpage Icon'
          />
        </a>
      </div>
      <h1>Yogeshwar.dev</h1>
    </>
  )
}

export default App
