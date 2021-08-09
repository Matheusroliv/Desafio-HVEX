import React from "react"
import styled from "styled-components"
import styledAnchorTag from "../themes/styledAnchorTag"
import displayFlexCenter from "../themes/displayFlexCenter"

const SearchContainer = styled.div`
  display: flex;
  margin-top: 25px;
  ${styledAnchorTag}

  @media(max-width: 375px) {
    margin-top: 100px;
  }

  input {
    border: none;
    border-bottom: 1px solid #00A0C6;
    outline: none;
    background-color: transparent;
    color: #FFF;
    font-weight: bold;
    font-size: 22px;
    width: 200px;
  }
`
const AnchorContainer = styled.div`
  ${displayFlexCenter}
  margin-left: 25px;
`

export const SearchUser = (props) => {

  return (
    <SearchContainer>
      <div>
        <input
          type="text"
          value={props.input}
          onChange={props.onChangeInput}
          placeholder="Usuário Github...">
        </input>
      </div>
      <AnchorContainer>
        <a
          onClick={props.searchUser}>
          Procurar
        </a>
      </AnchorContainer>
    </SearchContainer>
  )
}