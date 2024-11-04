import styled from "styled-components";

const Container = styled.div`
    margin-top: 36px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    gap: 16px;
`;

const ItemContainer = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    gap: 16px;
`;

const Title = styled.p`
    width: 110px;

    font-weight: 900;
    font-size: 24px;
`;

const Subtitle = styled.p`
    font-weight: 500;
    font-size: 20px;
`;

function InfoItem({ title, subtitle }) {
    return (
        <ItemContainer>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </ItemContainer>
    );
}

const MY_INFO = [
    {
        title: "NAME",
        subtitle: "김경재",
    },
    {
        title: "UNIV",
        subtitle: "한림대학교",
    },
    {
        title: "DEPT",
        subtitle: "빅데이터전공",
    },
    {
        title: "ROLE",
        subtitle: "대학 학부생",
    },
    {
        title: "GOAL",
        subtitle: "Game Client Developer (Unity, Unreal)",
    },
];

function MyInfo() {
    const items = MY_INFO.map((item) => (
        <InfoItem
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
        />
    ));
    return <Container>{items}</Container>;
}

export default MyInfo;
