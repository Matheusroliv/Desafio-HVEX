import { LoginPage } from "../pages/LoginPage"
import { MainPage } from "../pages/MainPage"
import { BrowserRouter, Switch, Route } from "react-router-dom"

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <LoginPage />
        </Route>
        <Route exact path={"/main"}>
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
