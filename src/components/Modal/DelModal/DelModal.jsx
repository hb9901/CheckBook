import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function DelModal({ setIsOpen, content, deleteExpenditure, id}) {
  const navigate = useNavigate();
  const handleBackGroundClick = (e) => {
    if (e.currentTarget === e.target) setIsOpen(false);
  };

  const handleCancleClick = () => {
    setIsOpen(false);
  };
  const handleOkClick = () => {
    setIsOpen(false);
    deleteExpenditure(id);
    navigate("/");
  };

  return (
    <BackGround onClick={handleBackGroundClick}>
      <Modal_Wrapper>
        <ImgWrapper>
          <img src="public/warningSign.png" />
        </ImgWrapper>
        <Content>{content}</Content>
        <BtnWrapper>
          <OkBtn onClick={handleOkClick}>OK</OkBtn>
          <CancleBtn onClick={handleCancleClick}>Cancle</CancleBtn>
        </BtnWrapper>
      </Modal_Wrapper>
    </BackGround>
  );
}

export default DelModal;

const BackGround = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);
`;

const Modal_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 300px;

  gap: 50px;
  background-color: white;
`;

const ImgWrapper = styled.div`
  width: 60px;
  height: 50px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  font-weight: bold;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const CancleBtn = styled.button`
  padding: 10px 20px;

  border: none;
  border-radius: 4px;

  background-color: rgb(108, 117, 125);
  color: white;

  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;

  &:hover {
    background-color: rgb(55, 61, 66);
  }
`;
const OkBtn = styled.button`
  padding: 10px 20px;

  border: none;
  border-radius: 4px;

  background-color: rgb(255, 77, 77);
  color: white;

  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;

  &:hover {
    background-color: rgb(175, 36, 36);
  }
`;
