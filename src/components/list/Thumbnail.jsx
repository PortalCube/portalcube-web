import { useState } from "react";
import { PhotoProvider, PhotoSlider, PhotoView } from "react-photo-view";
import styled from "styled-components";

const Container = styled.div`
    width: 320px;
    height: 180px;

    border-radius: 4px;

    display: grid;
    overflow: hidden;
`;

const Image = styled.img`
    width: 320px;
    height: 180px;
    object-fit: cover;
    grid-column-start: 1;
    grid-column-end: 1;

    grid-row-start: 1;
    grid-row-end: 1;
`;

const Background = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.75);
    color: #f1f1f1;
    font-size: 20px;
    cursor: pointer;

    grid-column-start: 1;
    grid-column-end: 1;

    grid-row-start: 1;
    grid-row-end: 1;

    opacity: 0;
    transition: opacity 0.2s;

    &:hover {
        opacity: 1;
    }
`;

function Thumbnail({ item }) {
    const hasImages = item.images !== null && item.images.length > 0;

    if (hasImages) {
        const [visible, setVisible] = useState(false);

        const imgs = item.images.map((item) => ({ src: item, key: item }));

        return (
            <Container onClick={() => setVisible(true)}>
                <Image src={item.thumbnailImage} />
                <Background>클릭해서 이미지 더보기</Background>

                <PhotoSlider
                    images={imgs}
                    visible={visible}
                    onClose={() => setVisible(false)}
                />
            </Container>
        );
    } else {
        return (
            <Container>
                <Image src={item.thumbnailImage} />
            </Container>
        );
    }
}

export default Thumbnail;
