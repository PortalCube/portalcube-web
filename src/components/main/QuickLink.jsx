import styled from "styled-components";

import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Container = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    gap: 16px;
`;

const ItemContainer = styled.a`
    padding: 4px 8px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 16px;
    text-decoration: none;
    color: #f1f1f1;

    transition: background-color 0.2s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

const Text = styled.span`
    font-weight: 500;
    font-size: 16px;
`;

function LinkItem({ icon: Icon, text, href }) {
    return (
        <ItemContainer href={href}>
            <Icon size={32} />
            <Text>{text}</Text>
        </ItemContainer>
    );
}

function QuickLink() {
    return (
        <Container>
            <LinkItem
                icon={FaGithub}
                text="PortalCube"
                href="https://github.com/PortalCube"
            />
            <LinkItem
                icon={MdEmail}
                text="skyneon77@gmail.com"
                href="mailto:skyneon77@gmail.com"
            />
        </Container>
    );
}

export default QuickLink;
