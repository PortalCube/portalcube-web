import styled from "styled-components";

import { FaGamepad, FaTrophy } from "react-icons/fa";
import { MdOutlineFolder, MdOutlineLanguage } from "react-icons/md";

const Container = styled.div`
    margin: 32px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`;

const ItemContainer = styled.a`
    padding: 4px 8px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: ${(props) => props.$color};

    transition: background-color 0.2s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const Text = styled.span`
    font-weight: 500;
    font-size: 16px;
`;

function MenuItem({ icon: Icon, text, color, path }) {
    return (
        <ItemContainer href={path} $color={color}>
            <Icon size={36} />
            <Text>{text}</Text>
        </ItemContainer>
    );
}

const MY_MENUS = [
    {
        icon: FaGamepad,
        text: "Game",
        color: "#ff9d42",
        path: "/game",
    },
    {
        icon: MdOutlineLanguage,
        text: "Web",
        color: "#90a3ff",
        path: "/web",
    },
    {
        icon: FaTrophy,
        text: "Contest",
        color: "#ff3e68",
        path: "/contest",
    },
    {
        icon: MdOutlineFolder,
        text: "ETC",
        color: "#9c9c9c",
        path: "/etc",
    },
];

function Menu() {
    const items = MY_MENUS.map((item) => (
        <MenuItem key={item.text} {...item} />
    ));
    return <Container>{items}</Container>;
}

export default Menu;
