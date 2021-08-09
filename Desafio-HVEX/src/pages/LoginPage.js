import { githubProvider } from "../config/authMethods"
import socialMediaAuth from "../service/auth"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import displayFlexCenter from "../themes/displayFlexCenter"
import styledAnchorBorder from "../themes/styledAnchorBorder"

const LoginContainer = styled.div`
  ${displayFlexCenter}
  ${styledAnchorBorder}
  height: 100vh;

  a {
    cursor: pointer;
    color: #FFF;
    font-size: 22px;
  }
`

export const LoginPage = () => {
  const history = useHistory()

  const handleOnClick = async (provider) => {
    await socialMediaAuth(provider)
    history.push("/main")
  }

  return (
    <LoginContainer>
      <a
        onClick={() => handleOnClick(githubProvider)}>
        Entrar com Github
      </a>
    </LoginContainer>
  )
}