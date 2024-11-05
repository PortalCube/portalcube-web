import styled from "styled-components";
import ITEM_DATA from "../items.json";
import ListItem from "../components/list/ListItem.jsx";
import Menu from "../components/list/Menu.jsx";

import { useParams } from "react-router-dom";
import Footer from "../components/Footer.jsx";

const Container = styled.div`
    height: 100%;
    width: 100%;
    max-width: 960px;
    margin: auto;

    display: flex;
    flex-direction: column;

    overflow: hidden;
`;

const ListContainer = styled.div`
    margin-top: 36px;
    padding: 0 32px;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;

    overflow: auto;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #ffffff3f;
    }
`;

function ListPage() {
    let { category } = useParams();

    const items = ITEM_DATA.filter(
        (item) => item.category === category.toUpperCase(),
    ).map((item) => <ListItem key={item.id} item={item} />);

    return (
        <Container>
            <ListContainer>{items}</ListContainer>
            <Menu />
            <Footer />
        </Container>
    );
}

export default ListPage;
