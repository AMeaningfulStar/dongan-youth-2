import Logo from './Logo'

import Link from 'next/link'
import styled from 'styled-components'

const SidebarPanel = styled.div`
  width: 220px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  clip-path: inset(0px -10px 0px 0px);
`

const NormalButton = styled.button`
  width: 220px;
  height: 60px;
  padding-left: 1rem;
  text-align: start;
`

// const CurrentButton = styled.button`
//   width: 220px;
//   height: 60px;
//   padding-left: 1rem;
//   text-align: start;
//   color: #fff;
//   background-color: #8756bd;
// `

const Sidebar = () => {
  return (
    <SidebarPanel className='flex flex-col'>
      <div className='flex' style={{ height: '60px' }}>
        <Logo></Logo>
      </div>
      <Link href='/'>
        <NormalButton
          className='hover:bg-purple-100'
        >
          <img className='inline-block mr-2 w-8 h-8' src='https://img.icons8.com/pastel-glyph/512/000000/person-male--v1.png' />
          <span className='align-middle'>1</span>
        </NormalButton>
      </Link>
      <Link href='/'>
        <NormalButton
          className='hover:bg-purple-100'
        >
          <img className='inline-block mr-2 w-8 h-8' src='https://img.icons8.com/pastel-glyph/512/000000/person-male--v1.png' />
          <span className='align-middle'>2</span>
        </NormalButton>
      </Link>
      <Link href='/'>
        <NormalButton
          className='hover:bg-purple-100'
        >
          <img className='inline-block mr-2 w-8 h-8' src='https://img.icons8.com/pastel-glyph/512/000000/person-male--v1.png' />
          <span className='align-middle'>3</span>
        </NormalButton>
      </Link>
    </SidebarPanel>
  )
}

export default Sidebar
