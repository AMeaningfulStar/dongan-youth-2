import Head from 'next/head'

const Container = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-center select-none'>
      <Head>
        <title>출석하는 동안</title>
        <link rel='icon' href='/img/dongan.png' />
      </Head>
      <main className='flex max-w-screen-xl min-h-screen w-full shadow-md bg-slate-900'>{children}</main>
    </div>
  )
}

export default Container