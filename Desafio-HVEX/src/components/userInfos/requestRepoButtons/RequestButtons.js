import React from "react"
import styled from "styled-components"

const ButtonsContainer = styled.div`
  display: flex;
  
  a {
    padding: 0 30px;
  }
`

export const RequestButtons = (props) => {
  return (
    <ButtonsContainer>
      <a
        onClick={props.requestRepos}>
        Repositórios
      </a>
      <a
        onClick={props.requestStarred}>
        Estrelas
      </a>
    </ButtonsContainer>
  )
}