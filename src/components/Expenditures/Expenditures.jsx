import { Link } from "react-router-dom";
import styled from "styled-components";

function Expenditures({ monthExpenditures }) {
  return (
    <ExpendituresList>
      {monthExpenditures.map((expenditure) => {
        return (
          <Expenditure key={expenditure.id}>
            <Link
              to={`/${expenditure.id}`}
              style={{
                textDecorationLine: "none",
              }}
            >
              <ListLeft>
                <Date>{expenditure.date}</Date>
                <Item>
                  {expenditure.item} - {expenditure.description}
                </Item>
              </ListLeft>
              <ListRight>
                <Amount>{expenditure.amount} 원</Amount>
              </ListRight>
            </Link>
          </Expenditure>
        );
      })}
    </ExpendituresList>
  );
}

export default Expenditures;

const ExpendituresList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 10px;

  list-style: none;

  padding: 0;
  margin: 0;
`;

const Expenditure = styled.li`
  cursor: pointer;

  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 15px 20px;
    border-radius: 8px;

    background-color: rgb(249, 249, 249);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  }
`;

const ListLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  flex: 1 1 auto;

  white-space: nowrap;
  overflow: hidden;
`;
const ListRight = styled.div`
  flex: 0 0 auto;
`;

const Date = styled.div`
  margin-bottom: 5px;

  font-size: 14px;

  color: rgb(102, 102, 102);
`;
const Item = styled.div`
  max-width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-weight: bold;

  color: rgb(0, 123, 255);
`;
const Amount = styled.div`
  font-weight: bold;
  color: rgb(0, 123, 255);
`;
