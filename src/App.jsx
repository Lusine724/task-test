import cls from "./App.module.scss"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ResponseMenu from "./Components/ResponseMenu/ResponseMenu"
import { fetchSystems } from "./store/slices/systemSlice/systemApi"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSystems())
  }, [])

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
        <ResponseMenu />
      </div>
      <Footer />
    </>
  )
}

export default App
