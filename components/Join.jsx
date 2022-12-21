import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useState } from "react";
import { useRouter } from "next/router";

const Join = () => {
  const router = useRouter();
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  })
  
  const verification = () => {
    const emailVerification = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const passwordVerification = /^[A-Za-z0-9]{6,12}$/;
    
    if (signupData.email.match(emailVerification) === null) {
      alert('올바른 이메일을 작성해주세요');
      return false;
    }

    if (signupData.password.match(passwordVerification) === null) {
      alert(`하나 이상의 문자와 하나의 숫자를 포함한\n최소 8자 이상의 비밀번호를 작성해주세요`);
      return false;
    }

    return true;
  }

  const handleChange = (userData) => {
    setSignupData({
      ...signupData,
      [userData.target.name]: userData.target.value,
    })
  }

  const handleSubmit = (userData) => {
    if(verification()){
      createUserWithEmailAndPassword(auth, signupData.email, signupData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          alert('회원 가입을 축하드립니다')
          router.push('/')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
        });
    }
    else{
      alert('회원 가입을 실패했습니다')
    }
  }

  return(
    <div className="flex flex-col text-left justify-center items-center" style={{ height: '100%' }}>
        <div className="w-1/4 lg:w-1/4">
          <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
            <div className="flex justify-center gap-4 h-10">
              <h2 className="text-2xl font-bold text-gray-800 text-left leading-10">
                회원 가입
              </h2>
            </div>
            
            <form action="" className="w-full" onSubmit={handleSubmit}>
              <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="username" className="text-gray-500 mb-2">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  defaultValue={signupData.email}
                  onChange={handleChange}
                  id="username"
                  placeholder="Please insert your email"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                />
              </div>
              <div id="input" className="flex flex-col w-full my-5">
                <label htmlFor="password" className="text-gray-500 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  defaultValue={signupData.password}
                  onChange={handleChange}
                  id="password"
                  placeholder="Please insert your email"
                  className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                />
              </div>
              <div id="button" className="flex flex-col w-full my-5">
                <button
                  type="submit"
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
                    <div className="font-bold">Sign up</div>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    
  )
}

export default Join