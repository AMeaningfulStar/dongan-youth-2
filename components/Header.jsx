import styled from "styled-components"

const HeaderPanel = styled.div`
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100px;
  right: 0px;
  top: 0px;
  background-color: #FFFFFF;
`

const HeaderUP = styled.div`
  box-shadow: 0 6px 1px -4px #DFDBD8;
  width: 100%;
  height: 50px;
  background-color: #FFFFFF;;
`

const Header = () => {
  return(
    <HeaderPanel>
      <HeaderUP>
      </HeaderUP>
    </HeaderPanel>
  )
}

export default Header