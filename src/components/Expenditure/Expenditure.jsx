import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div``;

const InputWrapper = styled.div``;

const Label = styled.div``;

const Input = styled.input``;

const ButtonWrapper = styled.div``;

const ModifyButton = styled.button``;

const DeleletButton = styled.button``;

const GoBackButton = styled.button``;

function Expenditure({
  monthExpenditures,
  updateExpenditure,
  deleteExpenditure,
}) {
  const params = useParams();
  const navigate = useNavigate();
  const dateRef = useRef("");
  const itemRef = useRef("");
  const amountRef = useRef("");
  const descriptionRef = useRef("");

  const expenditure = monthExpenditures.find(
    (expenditure) => expenditure.id === params.id
  );

  const handleClickModify = () => {
    const modifiedExpenditure = {
      ...expenditure,
      date: dateRef.current.value,
      item: itemRef.current.value,
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
    };
    updateExpenditure(params.id, modifiedExpenditure);
    navigate("/");
  };

  const handleClickDelete = () => {
    deleteExpenditure(params.id);
    navigate("/");
  };

  const handleClickGoBack = () => {
    navigate("/");
  };
  
  return (
    <Wrapper>
      <InputWrapper>
        <Label>날짜</Label>
        <Input
          ref={dateRef}
          type="text"
          dateRef
          defaultValue={expenditure.date}
          data-type="date"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>항목</Label>
        <Input
          ref={itemRef}
          type="text"
          defaultValue={expenditure.item}
          data-type="item"
          placeholder="지출 항목"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>금액</Label>
        <Input
          ref={amountRef}
          type="text"
          defaultValue={expenditure.amount}
          data-type="amount"
          placeholder="지출 금액"
        />
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Input
          ref={descriptionRef}
          type="text"
          defaultValue={expenditure.description}
          data-type="description"
          placeholder="지출 내용"
        />
      </InputWrapper>
      <br />
      <ButtonWrapper>
        <ModifyButton onClick={handleClickModify}>수정</ModifyButton>
        <DeleletButton onClick={handleClickDelete}>삭제</DeleletButton>
        <GoBackButton onClick={handleClickGoBack}>뒤로 가기</GoBackButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default Expenditure;
