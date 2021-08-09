import React from "react"
import { URL_GITHUB } from "../constants/API_GitHub"
import styled from "styled-components"
import displayFlexCenter from "../themes/displayFlexCenter"
import styledAnchorTag from "../themes/styledAnchorTag"
import webkitScrollbar from "../themes/webkitScrollbar"

const RepoContainer = styled.div`
  ${displayFlexCenter}
  flex-direction: column;
  height: 300px;
  width: 400px;
  direction: rtl;
  overflow:auto;
  margin-left: 10vw;
  ${styledAnchorTag}
  ${webkitScrollbar}

  @media(max-width: 375px) {
    height: 200px;
    width: 300px;
    margin-top: 40px;
    margin-left: 0;
  }
`

export const MapRepos = (props) => {

  const mapUserRepos = props.userRepos.map((repos, index) => {
    return (
      <p key={index}>
        <a
          href={`${URL_GITHUB}${props.user}/${repos.name}`}
          target="_blank"
          rel="noopener noreferrer">
          {repos.name}
        </a>
      </p>
    )
  })

  return (
    <RepoContainer>
      {mapUserRepos}
    </RepoContainer>
  )
}