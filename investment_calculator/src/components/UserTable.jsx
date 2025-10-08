import { calculateInvestmentResults, formatter } from "../util/investment";

const UserTable = ({ inputs }) => {
  const result = calculateInvestmentResults(inputs);
  console.log(result);
  const format = formatter;

  return (
    <table id="result">
      <thead>
        <tr>
          <th> Year </th>
          <th> Investment value</th>
          <th> Interest (Year)</th>
          <th> Total interest</th>
          <th> Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((resultData) => {
          const totalInterest =
            resultData.valueEndOfYear - resultData.interest * resultData.year;
          return (
            <tr key={resultData.year}>
              <td>{resultData.year}</td>
              <td> {format.format(resultData.valueEndOfYear)} </td>
              <td> {format.format(resultData.interest)} </td>
              <td> </td>
              <td> </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
