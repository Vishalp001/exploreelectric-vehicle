import './App.css'
import { Route, Switch } from 'react-router-dom'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Justinpage from './components/Justin/Justinpage'
import Exploreevpage from './components/Exploreev/Exploreevpage'
import Exploreevblog from './components/Exploreev/Exploreevblog'
import Trendingblog from './components/Trending/Trendingblog'
import Trendingpage from './components/Trending/Trendingpage'
import Videospage from './components/Videos/Videospage'
import ScrollToTop from './components/Scrolltotop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/carousel' component={Carousel} />
        <Route path='/justinpage' component={Justinpage} />
        <Route path='/exploreevpage' component={Exploreevpage} />
        <Route path='/trendingpage' component={Trendingpage} />
        <Route path='/videospage' component={Videospage} />
        <Route path='/trendingblog/:id' component={Trendingblog} />
        <Route path='/exploreevblog/:id' component={Exploreevblog} />
      </Switch>
      <Footer />
    </>
  )
}

export default App
