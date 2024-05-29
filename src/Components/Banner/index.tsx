import { Fade } from "react-awesome-reveal"
import profilePicture from './assets/profilePicture.png'
import { BannerContainerStyled, BannerStyled } from "./styles"

const Banner = () => {
    return (
        <BannerContainerStyled>
            <BannerStyled>
                <Fade direction='down' triggerOnce={true}>
                    <img src={profilePicture} alt="Profile Picture" />
                </Fade>
                <Fade direction='up' triggerOnce={true}>
                    <h1>Hi! I'm Lucas Pagani. I'm Front-End Developer.</h1>
                </Fade>
            </BannerStyled>
        </BannerContainerStyled>
    )
}

export default Banner