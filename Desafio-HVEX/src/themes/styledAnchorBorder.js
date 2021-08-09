const styledAnchorBorder = `

a:after {
  display:block;
  content: '';
  border-bottom: solid 2px #0060B6;  
  transform: scaleX(0);  
  transition: transform 250ms ease-in-out;
}

  a:hover:after { transform: scaleX(1); }
  a.fromLeft:after{  transform-origin: 0% 50% ; }
`

export default styledAnchorBorder
