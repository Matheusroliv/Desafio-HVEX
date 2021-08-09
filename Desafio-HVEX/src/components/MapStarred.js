import React from "react"
import styled from "styled-components"
import { URL_GITHUB } from "../constants/API_GitHub"
import displayFlexCenter from "../themes/displayFlexCenter"
import styledAnchorTag from "../themes/styledAnchorTag"
import webkitScrollbar from "../themes/webkitScrollbar"

const StarContainer = styled.div`
  ${displayFlexCenter}
  flex-direction: column;
  height: 250px;
  width: 400px;
  overflow:auto;
  grid-column-start: 3;
  margin-right: 10vw;
  ${styledAnchorTag}
  ${webkitScrollbar}

  @media(max-width: 375px) {
    height: 200px;
    width: 300px;
    margin-top: 50px;
    margin-right: 0;
    direction: rtl;
    overflow:auto;
  }
`

export const MapStarred = (props) => {

  const mapUserStarred = props.userStarred.map((starred, index) => {
    return (
      <p key={index}>
        <a
          href={`${URL_GITHUB}${starred.full_name}`}
          target="_blank"
          rel="noopener noreferrer">
          {starred.name}
        </a>
      </p>
    )
  })
  return (
    <StarContainer>
      {mapUserStarred}
    </StarContainer>
  )
}