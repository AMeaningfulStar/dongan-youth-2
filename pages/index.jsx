import Container from '../components/layout/Container'
// import Sidebar from '../components/Sidebar'
// import Header from '../components/Header'
// import Login from "../components/atut/Login"
import Join from '../components/atut/Join'

export default function IndexPage() {
  return (
    // <Container>
    //   <Sidebar></Sidebar>
    //   <Header></Header>
    // </Container>
    <Container>
      {/* <Login />   */}
      <Join />
    </Container>
  )
}
