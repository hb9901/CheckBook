import styled from "styled-components";
import Expenditure from "../../components/Expenditure";

const PageWrapper = styled.div``;


function PostDetailPage({ monthExpenditures , updateExpenditure, deleteExpenditure}) {
  
  return (
    <PageWrapper>
      <Expenditure
        monthExpenditures={monthExpenditures}
        updateExpenditure={updateExpenditure}
        deleteExpenditure={deleteExpenditure}
      />
    </PageWrapper>
  );
}

export default PostDetailPage;
