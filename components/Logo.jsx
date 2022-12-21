import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const LogoBox = styled.button`
  flex-direction: row;
  gap: 10.01px;
  width: 191.01px;
  height: 33px;
  left: 36px;
  top: 35px;
`

const LogoText = styled.div`
  font-size: 18px;
`

const Logo = () => {
  return (
    <Link href='/'>
      <LogoBox className={`absolute flex items-center p-0`}>
        <Image src='/img/dongan.png' alt='dongan' width={40} height={40} ></Image>
        <LogoText className='ml-2 text-black'>페이지 이름</LogoText>
      </LogoBox>
    </Link>
  )
}

export default Logo