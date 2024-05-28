import Expenditure from "@/components/Expenditure";

function PostDetailPage({
  monthExpenditures,
  updateExpenditure,
  deleteExpenditure,
}) {
  return (
    <Expenditure
      monthExpenditures={monthExpenditures}
      updateExpenditure={updateExpenditure}
      deleteExpenditure={deleteExpenditure}
    />
  );
}

export default PostDetailPage;
