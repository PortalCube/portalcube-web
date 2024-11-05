import { FaReact } from "react-icons/fa";
import {
    SiJavascript,
    SiReact,
    SiTypescript,
    SiUnity,
    SiVuedotjs,
} from "react-icons/si";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
`;

const ItemContainer = styled.div`
    padding: 4px 8px;
    border: 1px solid ${(props) => props.$color};
    border-radius: 2px;

    font-weight: 500;
    font-size: 12px;

    color: ${(props) => props.$color};

    display: flex;
    align-items: center;
    gap: 8px;
`;

function TagItem({ icon: Icon, text, color }) {
    return (
        <ItemContainer $color={color}>
            <Icon size={16} />
            {text}
        </ItemContainer>
    );
}

const TAGS = [
    {
        id: "REACT",
        icon: SiReact,
        text: "React",
        color: "#47edff",
    },
    {
        id: "TS",
        icon: SiTypescript,
        text: "Typescript",
        color: "#577EFF",
    },
    {
        id: "JS",
        icon: SiJavascript,
        text: "Javascript",
        color: "#d6e020",
    },
    {
        id: "UNITY",
        icon: SiUnity,
        text: "Unity",
        color: "#cbcbcb",
    },
    {
        id: "VUE",
        icon: SiVuedotjs,
        text: "Vue.js",
        color: "#228f4c",
    },
    {
        id: "C++",
        icon: SiVuedotjs,
        text: "Vue.js",
        color: "#228f4c",
    },
    {
        id: "MONGODB",
        icon: SiVuedotjs,
        text: "Vue.js",
        color: "#228f4c",
    },
    {
        id: "NODE",
        icon: SiVuedotjs,
        text: "Vue.js",
        color: "#228f4c",
    },
];

function Tag({ item }) {
    const items = item.tags.map((item, index) => {
        const tag = TAGS.filter((t) => t.id === item)[0];
        return <TagItem key={index} {...tag} />;
    });
    return <Container>{items}</Container>;
}

export default Tag;
