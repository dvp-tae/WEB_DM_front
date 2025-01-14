import styled from "styled-components";
import SelectProject from "../components/SelectProject";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard-Regular";
  margin: 70px 0;
`;

const UserInfoContainer = styled.div`
  display: flex;
  margin-bottom: 70px;
`;

const UserImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-right: 50px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
    margin: 0;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 200px;
  height: 70px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 15px;
`;

const Content = styled.div`
  display: flex;
  h1 {
    width: 70px;
    margin: 0;
    font-size: 15px;
    font-weight: 700;
  }
  span {
    font-size: 14px;
  }
`;

const Introduction = styled.div`
  width: 500px;
  h1 {
    margin: 0;
    font-size: 18px;
    margin-bottom: 10px;
  }
  span {
    font-size: 14px;
  }
  margin-bottom: 30px;
`;

const Border = styled.hr`
  width: 500px;
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  width: 500px;
  h1 {
    margin: 0;
    font-size: 18px;
    margin-bottom: 10px;
  }
  span {
    font-size: 14px;
  }
  margin-bottom: 30px;
`;

const Tech = styled.span`
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 14px;
  padding: 2px 15px;
  border-radius: 20px;
`;

const Career = styled.div`
  width: 500px;
  h1 {
    margin: 0;
    font-size: 18px;
    margin-bottom: 10px;
  }
  margin-bottom: 30px;
`;

const CareerInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
`;
const CareerInfo = styled.div`
  display: flex;
`;
const Date = styled.div`
  width: 160px;
  margin-right: 30px;
`;

const Projects = styled.div`
  width: 500px;
  h1 {
    margin: 0;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const Project = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 15px;
  border-radius: 10px;
  h1 {
    margin: 0px;
    margin-bottom: 10px;
    font-size: 14px;
  }
  span {
    font-size: 14px;
    font-weight: 300;
  }
  margin-bottom: 100px;
`;

const Button = styled.button`
  width: 160px;
  height: 30px;
  border: none;
  border-radius: 20px;
  color: black;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  font-family: "Pretendard-Regular";
`;

const ModalContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(true);
  };
  return (
    <Container>
      {isOpen ? (
        <ModalContainer>
          <SelectProject setIsOpen={setIsOpen} />
        </ModalContainer>
      ) : null}
      <UserInfoContainer>
        <UserImg />
        <UserInfo>
          <h1>유미라</h1>
          <Contents>
            <Content>
              <h1>파트</h1>
              <span>프론트엔드</span>
            </Content>
            <Content>
              <h1>숙련도</h1>
              <span>초급</span>
            </Content>
            <Content>
              <h1>별점</h1>
              <span>5.0점</span>
            </Content>
          </Contents>
        </UserInfo>
      </UserInfoContainer>
      <Introduction>
        <h1>자기소개</h1>
        <span>안녕하세요.</span>
      </Introduction>
      <Border />
      <TechStack>
        <h1>기술 스택</h1>
        <Tech>
          <span>react.js</span>
        </Tech>
      </TechStack>
      <Border />
      <Career>
        <h1>경력</h1>
        <CareerInfos>
          <CareerInfo>
            <Date>2000.00.00 - 2000.00.00</Date>
            <span>숭실대학교 졸업</span>
          </CareerInfo>
        </CareerInfos>
      </Career>
      <Border />
      <Projects>
        <h1>프로젝트</h1>
        <Project>
          <h1>캡스톤 디자인 1</h1>
          <span>숭실대 프로젝트 과목</span>
        </Project>
      </Projects>
      <Button onClick={onClick}>협업 요청하기</Button>
    </Container>
  );
};
export default Profile;
