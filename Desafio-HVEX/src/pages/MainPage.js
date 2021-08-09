import React, { useState, useEffect, useCallback } from "react"
import { SearchUser } from "../components/SearchUser"
import { UserInfos } from "../components/userInfos/UserInfos"
import { MapRepos } from "../components/MapRepos"
import { MapStarred } from "../components/MapStarred"
import { API_BASE } from "../constants/API_GitHub"
import { LogoutButton } from "../components/LogoutButton"
import displayFlexCenter from "../themes/displayFlexCenter"
import axios from "axios"
import styled from "styled-components"

const MainContainer = styled.div`
  ${displayFlexCenter}
  flex-direction: column;
`
const ListRepoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media(max-width: 375px) {
    ${displayFlexCenter}
    flex-direction: column;
  }
`
const LogoutContainer = styled.div`
  position: absolute;
  left: 10vw;
  top: 4vh;

  @media(max-width: 375px) {
    left: 6vw;
    top: 4vh;
  }
`

export const MainPage = () => {
  const [user, setUser] = useState("")
  const [input, setInput] = useState("")
  const [userValues, setUserValues] = useState([])
  const [userRepos, setUserRepos] = useState([])
  const [userStarred, setUserStarred] = useState([])
  const [userNotFound, setUserNotFound] = useState(false)

  const requestUser = useCallback(() => {
    axios
      .get(`${API_BASE}${user}`)
      .then(res => {
        setUserValues(res.data)
        setInput("")
      })
      .catch(() => {
        setUserNotFound(true)
        alert("Usuário não encontrado")
      })
  }, [user])

  useEffect(() => {
    if (user) {
      requestUser()
      setUserRepos([""])
      setUserStarred([""])
      setUserNotFound(false)
    }
  }, [user, requestUser])

  const searchUser = () => {
    setUser(input)
  }

  const onChangeInput = (event) => {
    setInput(event.target.value)
  }

  const requestRepos = () => {
    axios
      .get(`${API_BASE}${user}/repos`)
      .then(res => {
        setUserRepos(res.data)
      })
      .catch(() => { })
  }

  const requestStarred = () => {
    axios
      .get(`${API_BASE}${user}/starred`)
      .then(res => {
        setUserStarred(res.data)
      })
      .catch(() => { })
  }

  return (
    <>
      <MainContainer>
        <SearchUser
          input={input}
          onChangeInput={onChangeInput}
          searchUser={searchUser}
        />
        {user === "" || userNotFound ? <></> : (
          <UserInfos
            userValues={userValues}
            user={user}
            requestRepos={requestRepos}
            requestStarred={requestStarred}
          />
        )}
      </MainContainer>
      <ListRepoContainer>
        <MapRepos
          user={user}
          userRepos={userRepos}
        />
        <MapStarred
          user={user}
          userStarred={userStarred}
        />
      </ListRepoContainer>
      <LogoutContainer>
        <LogoutButton />
      </LogoutContainer>
    </>
  )
}
