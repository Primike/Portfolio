import './Home.css'
import Intro from './components/Intro'
import SocialMedia from './components/SocialMedia'
import Biography from './components/Biography'
import Separator from './components/Separator'

function Home() {
    return (
        <>
            <Intro/>
            <Separator/>
            <Biography/>
            <SocialMedia/>
        </>
    )
}

export default Home