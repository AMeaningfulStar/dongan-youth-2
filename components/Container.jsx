import Head from 'next/head'
import styled from 'styled-components'

const MainTemplate = styled.main`
  position: absolute;
  left: 5%;
  right: 5%;
  top: 7.08%;
  bottom: 7.58%;
  background-color: #FBF7F4;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

const Container = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-center select-none'>
      <Head>
        <title>출석하는 동안</title>
        <link rel='icon' href='/img/dongan.png' />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <MainTemplate>
        {children}
      </MainTemplate>
    </div>
  )
}

export default Container