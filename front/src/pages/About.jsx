//Internal dependancies
import Banner from "../components/Banner"
import bannerAbout from "../images/banner_about.png"

const About = () => {
    return (
        <div>
            <Banner
                src={bannerAbout}
                alt="Image de bannière de la page d'a-propos"
                description=""
            />
            <h1>Page d'a propos</h1>
        </div>
    )
}

export default About
