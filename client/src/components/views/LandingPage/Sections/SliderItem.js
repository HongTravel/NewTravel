import React from "react";
import styled from "styled-components";

const SliderItem = ({title, src}) => {

const SliderItemContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: grab;
`;

const SliderItemContent = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.4s;
`;

const SliderImageWrapper = styled.div`
  height: 300px;
  width: 100%;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;

    /* cover : 대체 콘텐츠의 가로세로비 유지 & 요소 콘텐츠박스를 가득 채움 */
    object-fit: cover;
    transition: 0.2s;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 24px;
  /* 행간조절 */
  line-height: 32px;
  color: #26384e;
  transform: translateY(20px);
  transition: all 0.4s ease;
  transition-delay: 0.2s;
  overflow: hidden;
  max-width: 100%;
  /* ellipsis '...' */
  text-overflow: ellipsis;
  /* 공백처리 방법. nowrap은 줄바꿈은 1개의 공백으로 바꾸고, 자동 줄바꿈은 지원하지 않음 */
  white-space: nowrap;

  /* 가로 520px까지 작게 */
  @media screen and (max-width: 520px) {
    & {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #889db8;
  transform: translateY(20px);
  transition: all 0.4s ease;
  transition-delay: 0.3s;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 520px) {
    & {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

    return(
        <SliderItemContainer>
        <SliderImageWrapper>
        <img className="slider-image" src={src} alt="SliderImg" />
      </SliderImageWrapper>
      <SliderItemContent>
        <Title>{title}</Title>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </Content>
      </SliderItemContent>
        </SliderItemContainer>
    )
}

export default SliderItem;