import React from "react"
import styled from "styled-components"
import displayFlexCenter from "../../themes/displayFlexCenter"
import styledAnchorTag from "../../themes/styledAnchorTag"
import { RequestButtons } from "./requestRepoButtons/RequestButtons"

const UserInfosContainer = styled.div`
  ${displayFlexCenter}
  flex-direction: column;
  width: 500px;
  margin-top: 55px;
  color: white;

  @media(max-width: 375px) {
    width: 250px;
  }
  
  p {
    font-size: 18px;
  }
  
  span {
    padding-left: 10px;
  }
  
  ${styledAnchorTag}
`
const UserAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`

export const UserInfos = (props) => {
  return (
    <UserInfosContainer>
      <UserAvatar
        src={props.userValues.avatar_url}
        alt="User Avatar">
      </UserAvatar>
      <p>
        Nome:
        <span>
          <a
            href={`https://github.com/${props.user}`}
            target="_blank"
            rel="noopener noreferrer">
            {props.userValues.name}
          </a>
        </span>
      </p>
      <p>
        Empresa:
        <span>
          {props.userValues.company}
        </span>
      </p>
      <p>
        Localização:
        <span>
          {props.userValues.location}
        </span>
      </p>
      <p>
        Seguidores:
        <span>
          <a
            href={`https://github.com/${props.user}?tab=followers`} target="_blank"
            rel="noopener noreferrer">
            {props.userValues.followers}
          </a>
        </span>
      </p>
      <p>
        Seguindo:
        <span>
          <a
            href={`https://github.com/${props.user}?tab=following`} target="_blank"
            rel="noopener noreferrer">
            {props.userValues.following}
          </a>
        </span>
      </p>
      <RequestButtons
        requestRepos={props.requestRepos}
        requestStarred={props.requestStarred}
      />
    </UserInfosContainer>
  )
}