import Image from "next/image"

const Login = () => {
  return(
    <div className="flex flex-col text-left justify-center items-center" style={{ height: '100%' }}>
        <div className="w-1/4 lg:w-1/4">
          <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
            <div className="flex gap-4 h-10">
              <Image src='/img/dongan.png' alt='dongan' width={40} height={40} />
              <h2 className="text-2xl font-bold text-gray-800 text-left leading-10">
                동안 청소년 2부 출석부
              </h2>
            </div>
            
            <form action="" className="w-full">
              <div id="input" className="flex flex-col w-full my-5">
                <label for="username" className="text-gray-500 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Please insert your username"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                />
              </div>
              <div id="input" className="flex flex-col w-full my-5">
                <label for="password" className="text-gray-500 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Please insert your password"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                />
              </div>
              <div id="button" className="flex flex-col w-full my-5">
                <button
                  type="button"
                  className="w-full py-4 bg-green-600 rounded-lg text-green-100"
                >
                  <div className="flex flex-row items-center justify-center">
                    <div className="mr-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </div>
                    <div className="font-bold">Sigin</div>
                  </div>
                </button>
                <div className="flex justify-evenly mt-5">
                  <a
                    href="#"
                    className="w-full text-center font-medium text-gray-500"
                    >Recover password!</a
                  >
                  <a
                    href="/sigin/join"
                    className="w-full text-center font-medium text-gray-500"
                    >Singup!</a
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    
  )
}

export default Login