import styled from "styled-components"
import DarkModeToggleButton from "./dark-mode-toggle-button"

const HeaderPanel = styled.div`
  box-shadow: 0 4px 4px -4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 175px;
  right: 0px;
  top: 0px;
  background-color: #FFFFFF;
`

const HeaderUP = styled.div`
  box-shadow: 0 6px 1px -4px #DFDBD8;
  width: 100%;
  height: 87.5px;
  background-color: #FFFFFF;;
`

const Header = () => {
  return(
    <HeaderPanel>
      <HeaderUP className="flex justify-end">
        <DarkModeToggleButton />
      </HeaderUP>
    </HeaderPanel>
  )
}

export default Header