import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const LogoBox = styled.button`
  height: 60px;
`

const LogoText = styled.div`
  font-weight: 900;
  font-size: 20px;
`

const Logo = () => {
  return (
    <Link href='/'>
      <LogoBox className={`flex items-center`}>
        <div className='w-14 h-14 rounded-full bg-slate-400'>
          <Image src='/img/dongan.png' alt='dongan' width={40} height={40} className='m-2'></Image>
        </div>
        <LogoText className='ml-2 text-slate-300'>출석하는 동안</LogoText>
      </LogoBox>
    </Link>
  )
}

export default Logo