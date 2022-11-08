import Home from './Pages/Home'
import LatestNews from './Pages/Latest'
import BreakingNews from './Pages/Breaking'
import TransferNews from './Pages/Transfer'
import { Page404 } from './Pages/E404'
import Article from './Pages/Article'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='latest-news'>
            <Route index element={<LatestNews />}/>
            <Route path=':date/:title' element={<Article />} />
          </Route>
          <Route path='breaking-news'>
            <Route index element={<BreakingNews />}/>
            <Route path=':date/:title' element={<Article />} />
          </Route>
          <Route path='transfer-news'>
            <Route index element={<TransferNews />}/>
            <Route path=':date/:title' element={<Article />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
