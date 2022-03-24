import { BrowserRouter, Route, Switch } from "react-router-dom"

// Import components
import { Navbar } from "./components/common/Navbar"
import { Home } from "./components/home/Home"
import { SearchPage } from "./components/search/SearchPage"
import { SingleResult } from "./components/item/ItemPage"
import { Favourites } from "./components/favourites/Favourites"

// Import styles
import "./styles/main.scss"
import "./styles/navbar.scss"
import "./styles/search-results.scss"
import "./styles/item-result.scss"
import "./styles/favourites.scss"
import "./styles/button.scss"
import "./styles/error.scss"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search/:entity/:query" component={SearchPage} />
        <Route path="/:entity/:id" component={SingleResult} />
        <Route path="/favourites" component={Favourites} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
