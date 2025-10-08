import { calculateInvestmentResults, euroFormatter } from "../util/investment";

const UserTable = ({ inputs }) => {
  const result = calculateInvestmentResults(inputs);
  const format = euroFormatter;
  console.log(format);
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
          return (
            <tr key={resultData.year}>
              <td>{resultData.year}</td>
              <td> {euroFormatter.format(resultData.valueEndOfYear)} </td>
              <td> {euroFormatter.format(resultData.interest)} </td>
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
