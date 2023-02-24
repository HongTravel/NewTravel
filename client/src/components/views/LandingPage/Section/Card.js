import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`

border-radius: 0.4rem;
overflow: hidden;
-webkit-box-shadow: 0 3px 5px rgba(0,0,0,0.2);
box-shadow: 0 3px 5px rgba(0,0,0,0.2);

cursor: pointer;
transition: 0.2s;

width: 300px;
height: 300px;

.card-image-wrapper{
    height: 150px;
    overflow: hidden;
}

&:hover{
    transform: translateY(-0.7%);
    box-shaodw: 0 0.5rem 1rem rgba(0,0,0,0.3);

    .card-img{
        transition: transform 0,5s ease;
        height: 150px;
        transform: scale(1.25);
    }
}

.card-img{
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;

}

.card-content{
    padding: 1rem;
    overflow: hidden;

    .card-header{
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

    }

    .card-middle{
        margin-bottom: 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

    }

    .card-text{
        font-size: 1rem;
        line-height: 1.3;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
`;

function Card({img = "", title = "", text = ""})
{
    return(
        <StyledCard className = "card-item">
            <div calssName = "card-image-wrapper">
                <img className = "card-img" alt = "샘플" />
            </div>
            <div className = "card-content">
                <h1 clssName="card-header">{title}</h1>
                <p className="card-text">{text}</p>
            </div>
        </StyledCard>
    );
}

export default Card;

