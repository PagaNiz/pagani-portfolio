import { Fade } from "react-awesome-reveal"
import profilePicture from './assets/profilePicture.png'
import { BannerContainerStyled, BannerStyled, ProfilePicStyled } from "./styles"

const Banner = () => {
    return (
        <BannerContainerStyled id="teste">
            <BannerStyled>
                <Fade direction='down' triggerOnce={true}>
                    <ProfilePicStyled src={profilePicture} alt="Profile Picture" />
                </Fade>
                <Fade direction='up' triggerOnce={true} style={{padding: '0 2rem'}}>
                    <h1>Hi! I'm Lucas Pagani. I'm Front-End Developer.</h1>
                </Fade>
            </BannerStyled>
        </BannerContainerStyled>
    )
}

export default Banner