import {
    BannerStyle,
    ContentTitle
} from "./style"

export function Banner({ title, imageBanner }) {
    return (
        <BannerStyle>
            <img src={imageBanner} />
            <ContentTitle>
                <p>Movix / Filmes</p>
                <h1>
                    {title}
                </h1>
            </ContentTitle>
        </BannerStyle>
    )
}