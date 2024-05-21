import { useParams } from "react-router-dom";
import styled from "styled-components";
import useInput from "../../hooks/useInput";

const PageWrapper = styled.div``;

const InputWrapper = styled.div``;

const Label = styled.div``;

const Input = styled.input``;

const ButtonWrapper = styled.div``;

const ModifyButton = styled.button``;

const DeleletButton = styled.button``;

const GoBackButton = styled.button``;

function PostDetailPage({ monthExpenditures }) {
  const params = useParams();
  const expenditure = monthExpenditures.find(
    (expenditure) => expenditure.id === params.id
  );
  const [modifiedExpenditure, handleModifiedExpenditure] = useInput(expenditure);

  return (
    <PageWrapper>
      <InputWrapper>
        <Label>날짜</Label>
        <Input
          type="text"
          value={modifiedExpenditure.date}
          data-type="date"
          onChange={handleModifiedExpenditure}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>항목</Label>
        <Input
          type="text"
          value={modifiedExpenditure.item}
          data-type="date"
          onChange={handleModifiedExpenditure}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>금액</Label>
        <Input
          type="text"
          value={modifiedExpenditure.amount}
          data-type="amount"
          onChange={handleModifiedExpenditure}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Input
          type="text"
          value={modifiedExpenditure.description}
          data-type="description"
          onChange={handleModifiedExpenditure}
        />
      </InputWrapper>
      <ButtonWrapper>
        <ModifyButton>수정</ModifyButton>
        <DeleletButton >삭제</DeleletButton>
        <GoBackButton>뒤로 가기</GoBackButton>
      </ButtonWrapper>
    </PageWrapper>
  );
}

export default PostDetailPage;
