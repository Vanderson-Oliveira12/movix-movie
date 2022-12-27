import { Link } from 'react-router-dom';

import { CardStyle } from './style';
import { AiOutlineStar } from 'react-icons/ai';

export default function Card({ type, id, vote, image, alt, title }) {

    return (

        type == "movie" ? (
            <CardStyle>
                <Link to={`/movie/${id}`}>
                    <div className="star-points">
                        <AiOutlineStar
                            size={16}
                            color="#FFAD49"
                        />
                        <p>
                            {vote}
                        </p>
                    </div>
                    <img src={image} alt={alt} />
                    <h3>
                        {title}
                    </h3>
                </Link>
            </CardStyle>
        ) : (
            <CardStyle>
                <Link to={`/tv/${id}`}>
                    <div className="star-points">
                        <AiOutlineStar
                            size={16}
                            color="#FFAD49"
                        />
                        <p>
                            {vote}
                        </p>
                    </div>
                    <img src={image} alt={alt} />
                    <h3>
                        {title}
                    </h3>
                </Link>
            </CardStyle>
        )


    )
}