import styled from "styled-components";
import ProfileImageSrc from "../assets/profile_image.png";
import QuickLink from "../components/main/QuickLink.jsx";
import MyInfo from "../components/main/MyInfo.jsx";
import Menu from "../components/main/Menu.jsx";

const Container = styled.div`
    height: 100%;
    margin: 0 160px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const Title = styled.div`
    margin-top: 60px;
    padding: 12px 24px;
    border-radius: 2px;

    background-color: #f1f1f1;
    color: #1f1f1f;

    font-weight: 700;
    font-size: 64px;

    display: flex;
    align-items: center;

    gap: 16px;
`;

const ProfileImage = styled.img`
    width: 72px;
    height: 72px;

    border-radius: 20px;
`;

function MainPage() {
    return (
        <Container>
            <Title>
                PortalCube <ProfileImage src={ProfileImageSrc} />
            </Title>
            <QuickLink />
            <MyInfo />
            <Menu />
        </Container>
    );
}

export default MainPage;
