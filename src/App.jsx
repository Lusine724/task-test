import cls from "./App.module.scss"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ResponseMenu from "./Components/ResponseMenu/ResponseMenu"


function App() {
  return (
    <>
      <div className={cls.responseMenu}>
        <p>Главное меню
          <span>
            <ChevronRightIcon fontSize="small" />
          </span>
        </p>
        <p className={cls.integration}>Интеграции</p>
      </div>
      <div className={cls.main}>

        <Header />
        <Main />
        <ResponseMenu/>
      </div>
      <Footer />
    </>
  )
}

export default App
