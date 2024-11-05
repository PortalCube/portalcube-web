import { FaGithub } from "react-icons/fa";
import { MdLink } from "react-icons/md";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

const Title = styled.p`
    font-weight: 700;
    font-size: 24px;
`;

const Subtitle = styled.p`
    font-weight: 400;
    font-size: 12px;

    flex-grow: 1;

    color: ${(props) => props.$color || "#c7c7c7"};
`;

const Link = styled.a`
    text-decoration: none;
    color: #f1f1f1;
`;

function IconLink({ icon: Icon, href }) {
    return (
        <Link href={href}>
            <Icon size={24} />
        </Link>
    );
}

function ItemHeader({ item }) {
    return (
        <Container>
            <Title>{item.title}</Title>
            <Subtitle $color={item.subtitle_color}>{item.subtitle}</Subtitle>
            {item.github && <IconLink icon={FaGithub} href={item.github} />}
            {item.url && <IconLink icon={MdLink} href={item.url} />}
        </Container>
    );
}

export default ItemHeader;
