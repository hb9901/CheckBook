import styled from "styled-components";

function ExpenditureGraph({ monthExpenditures, curMonth }) {
  let total = 0;
  let itemsExpenditureList = [];
  let graphItems = [];
  const itemsExpenditureObj = {};

  monthExpenditures.forEach((expenditure) => {
    const { item, amount } = expenditure;

    if (itemsExpenditureObj[item]) itemsExpenditureObj[item] += amount;
    else itemsExpenditureObj[item] = amount;
    total += amount;
  });

  itemsExpenditureList = Object.entries(itemsExpenditureObj).sort(
    (a, b) => b[1] - a[1]
  );
  graphItems = itemsExpenditureList.map(
    (itemExpenditure) => (itemExpenditure[1] /= total / 100)
  );

  console.log(graphItems);

  return (
    <>
      <Title>{`${curMonth + 1}월 총 지출: ${total} 원`}</Title>
      <Graph>
        {graphItems.map((graphItem, index) => {
          return <GraphItem key={index} width={graphItem} index={index} />;
        })}
      </Graph>
      <Items></Items>
    </>
  );
}

export default ExpenditureGraph;

const Title = styled.div`
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
const Graph = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  height: 40px;
  background-color: rgb(233, 236, 239);
  border-radius: 8px;
  overflow: hidden;
`;

const GraphItem = styled.div`
  height: 100%;
  ${({ width }) => `width: ${width}%;`}
  ${({ index }) => {
    switch (index) {
      case 0:
        return `background-color: rgb(0, 123, 255);`;
      case 1:
        return `background-color: rgb(40, 167, 69);`;
      case 2:
        return `background-color: rgb(220, 53, 69);`;
      case 3:
        return `background-color: rgb(255, 193, 7);`;
      default:
        return `background-color: rgb(23, 162, 184);`;
    }
  }}
`;

const Items = styled.div``;
