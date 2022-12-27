import {
    MoreStyle,
    Card,
    Content
} from "./style"

import { AiOutlineStar } from 'react-icons/ai';

export default function More({ type, title, imagePoster, description, vote, date, time, genres, episodes }) {
    return (
        <MoreStyle>
            <Card>
                <img src={imagePoster} />
            </Card>
            <Content>
                <h3 className="title">
                    {title}
                </h3>
                <p className="desc">
                    {description}
                </p>
                <div className="star">
                    <AiOutlineStar
                        size={16}
                        color="#FFAD49"
                    />
                    <span>
                        {vote}
                    </span>
                </div>
                <div className="infor">
                    <p>
                        <strong>
                            Tipo
                        </strong>
                    </p>
                    <p>
                        {type}
                    </p>
                </div>
                <div className="infor">
                    <p>
                        <strong>
                            Data de lançamento:
                        </strong>
                    </p>
                    <p>
                        {date}
                    </p>
                </div>
                {
                    type == "Serie" ? (
                        <div className="infor">
                            <p>
                                <strong>
                                    Números de episódios
                                </strong>
                            </p>
                            <p>
                                {episodes}
                            </p>
                        </div>
                    )
                        :
                        (
                            <div className="infor">
                                <p>
                                    <strong>
                                        Tempo de execução
                                    </strong>
                                </p>
                                <p>
                                    {time} min
                                </p>
                            </div>
                        )
                }

                <div className="infor">
                    <p>
                        <strong>
                            Gêneros
                        </strong>
                    </p>
                    <p>
                        {genres}
                    </p>
                </div>
            </Content>
        </MoreStyle>
    )
}