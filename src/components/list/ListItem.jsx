import styled from "styled-components";
import Thumbnail from "./Thumbnail.jsx";
import ItemHeader from "./ItemHeader.jsx";
import Tag from "./Tag.jsx";

const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 32px;
`;

const Group = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-basis: 0;
`;

const Description = styled.p`
    margin-top: 18px;

    color: #d6d6d6;

    font-weight: 400;
    font-size: 16px;
    flex-grow: 1;

    align-self: flex-start;
    line-height: 24px;
`;

function ListItem({ item }) {
    return (
        <Container>
            <Thumbnail item={item} />
            <Group>
                <ItemHeader item={item} />
                <Tag item={item} />
                <Description>{item.description}</Description>
            </Group>
        </Container>
    );
}

export default ListItem;
