import styled from "styled-components";

const ExpendituresList = styled.ul`
  list-style: none;
`;

const Expenditure = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ListLeft = styled.div``;
const ListRight = styled.div``;

const Date = styled.div``;
const Item = styled.div``;
const Amount = styled.div``;

function Expenditures({ monthExpenditures }) {
  return (
    <ExpendituresList>
      {monthExpenditures.map((expenditure) => {
        return (
          <Expenditure key={expenditure.id}>
            <ListLeft>
              <Date>{expenditure.date}</Date>
              <Item>{expenditure.item}</Item>
            </ListLeft>
            <ListRight>
              <Amount>{expenditure.amount} 원</Amount>
            </ListRight>
          </Expenditure>
        );
      })}
    </ExpendituresList>
  );
}

export default Expenditures;
