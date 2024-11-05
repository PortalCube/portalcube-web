import styled from "styled-components";

const Container = styled.a`
    position: absolute;
    left: 8px;
    bottom: 12px;

    padding: 8px 12px;
    border-radius: 4px;

    color: #7f7f7f;
    text-decoration: none;

    transition: background-color 0.2s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

function Footer() {
    return (
        <Container href="https://github.com/PortalCube/portalcube-web">
            created by portalcube
        </Container>
    );
}

export default Footer;
