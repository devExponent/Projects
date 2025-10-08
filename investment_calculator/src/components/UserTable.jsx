import { calculateInvestmentResults, formatter } from "../util/investment";

const UserTable = ({ inputs }) => {
  const result = calculateInvestmentResults(inputs);
  const format = formatter;
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

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
            resultData.valueEndOfYear -
            resultData.interest * resultData.year -
            initialInvestment;
          const totalAmountInvested = resultData.valueEndOfYear - totalInterest;
          return (
            <tr key={resultData.year}>
              <td>{resultData.year}</td>
              <td> {format.format(resultData.valueEndOfYear)} </td>
              <td> {format.format(resultData.interest)} </td>
              <td>{format.format(totalInterest)} </td>
              <td> {format.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
