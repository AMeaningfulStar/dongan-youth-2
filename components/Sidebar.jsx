import Logo from './Logo'

import Link from 'next/link'
import styled from 'styled-components'

const SidebarPanel = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 265.19px;
  height: 100%;
  left: -0.01px;
  background-color: #FBF7F4;
`

const MenuContents = styled.div`
  position: absolute;
  width: 245.17px;
  left: -0.01px;
  top: 113.07px;
`

const NormalButton = styled.button`
  width: 245.17px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  gap: 10.01px; 
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  color: #A7A7A7;

  &:hover{
    background-color: #EEE6E2;
  }
`

const CurrentButton = styled.button`
  width: 245.17px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  gap: 10.01px; 
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: #EEE6E2;
`

const Circle = styled.div`
  border-radius: 50%;
  margin-left: 71px;
`

const Sidebar = () => {
  return (
    <SidebarPanel>
      <div className='flex' style={{ height: '60px' }}>
        <Logo></Logo>
      </div>
      <MenuContents>
        <Link href='/'>
          <CurrentButton className='hover:text-black'>
            <span className="material-symbols-outlined text-4xl">person</span>
            <span className='align-middle'>1학년</span>
            <Circle className='w-12 h-12 bg-white'>
              <span className="material-symbols-outlined p-3">arrow_forward</span>
            </Circle>
          </CurrentButton>
        </Link>
        <Link href='/'>
        <NormalButton className='hover:text-black'>
            <span className="material-symbols-outlined text-4xl">person</span>
            <span className='align-middle'>2학년</span>
          </NormalButton>
        </Link>
      </MenuContents>
    </SidebarPanel>

  )
}

export default Sidebar
