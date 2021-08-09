import React from "react"
import { useHistory } from "react-router"
import styled from "styled-components"

const StyledLogoutButton = styled.a`
  color: #FFF;
  font-size: 18px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #B90504;
    transition: 0.5s;
  }
`

export const LogoutButton = () => {
  const history = useHistory()

  const handleOnClick = () => {
    history.push("/")
  }

  return (
    <>
      <StyledLogoutButton onClick={handleOnClick}>
        Sair
      </StyledLogoutButton>
    </>
  )
}