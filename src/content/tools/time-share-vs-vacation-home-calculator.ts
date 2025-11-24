import { CalculatorContent } from '@/types';

export const TIME_SHARE_VS_VACATION_HOME_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Time-Share vs. Vacation Home Calculator',
  description: 'Compare the total costs and benefits of owning a time-share versus purchasing a vacation home',
  icon: 'Icon',
  category: 'Real Estate Investment',
  slug: 'time-share-vs-vacation-home-calculator',
  article: {
    title: "Time-Share vs. Vacation Home: Making the Right Investment Decision",
    content: `
    <h2>Time-Share vs. Vacation Home Investment Comparison</h2>
    <p>Deciding between a time-share and a vacation home is a significant financial decision that requires careful analysis of upfront costs, ongoing expenses, and long-term value. This calculator helps you compare both options side-by-side.</p>
    
    <h3>Time-Share Ownership</h3>
    <p>A time-share gives you the right to use a property for a specific period each year. Key considerations include:</p>
    <ul>
      <li><strong>Initial Purchase Price:</strong> Typically lower than a full vacation home</li>
      <li><strong>Annual Maintenance Fees:</strong> Required fees that often increase over time</li>
      <li><strong>Limited Flexibility:</strong> Fixed time periods and locations</li>
      <li><strong>Resale Challenges:</strong> Time-shares typically depreciate and are difficult to sell</li>
      <li><strong>Exchange Programs:</strong> Ability to swap for different locations</li>
    </ul>
    
    <h3>Vacation Home Ownership</h3>
    <p>Owning a vacation property outright provides different advantages and costs:</p>
    <ul>
      <li><strong>Full Ownership:</strong> Use the property anytime you want</li>
      <li><strong>Rental Income Potential:</strong> Generate revenue when not in use</li>
      <li><strong>Appreciation:</strong> Property may increase in value over time</li>
      <li><strong>Higher Upfront Cost:</strong> Requires down payment and mortgage</li>
      <li><strong>Maintenance Responsibility:</strong> All repairs and upkeep are your responsibility</li>
      <li><strong>Property Taxes & Insurance:</strong> Annual carrying costs</li>
    </ul>
    
    <h3>Key Comparison Factors</h3>
    <p><strong>Usage Frequency:</strong> If you only vacation 1-2 weeks per year, a time-share might seem cost-effective. For frequent use or rental income, a vacation home could be better.</p>
    <p><strong>Investment Perspective:</strong> Vacation homes can appreciate; time-shares almost always depreciate.</p>
    <p><strong>Liquidity:</strong> Vacation homes are easier to sell than time-shares, which have limited resale markets.</p>
    <p><strong>Flexibility:</strong> Vacation homes offer unlimited access; time-shares restrict you to specific periods.</p>
    
    <h3>Financial Considerations</h3>
    <p>When comparing costs, factor in:</p>
    <ul>
      <li>Total cost of ownership over 10, 20, or 30 years</li>
      <li>Opportunity cost of capital invested</li>
      <li>Tax deductions (mortgage interest, property taxes for vacation homes)</li>
      <li>Rental income potential (vacation homes only)</li>
      <li>Exit costs (selling fees, transfer fees)</li>
    </ul>
    
    <h3>Making Your Decision</h3>
    <p>Use this calculator to compare the true costs of each option based on your specific situation. Consider your vacation habits, financial goals, and long-term plans before making a commitment.</p>
  `,
  },
  calculator: {
    fields: [
      {
        name: "timesharePrice",
        label: "Time-Share Purchase Price",
        type: "number",
        placeholder: "25000",
        defaultValue: "25000",
      },
      {
        name: "timeshareAnnualFees",
        label: "Annual Maintenance Fees (Time-Share)",
        type: "number",
        placeholder: "1200",
        defaultValue: "1200",
      },
      {
        name: "vacationHomePrice",
        label: "Vacation Home Purchase Price",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "vacationHomeDownPayment",
        label: "Down Payment % (Vacation Home)",
        type: "number",
        placeholder: "20",
        defaultValue: "20",
      },
      {
        name: "mortgageRate",
        label: "Mortgage Interest Rate (%)",
        type: "number",
        placeholder: "6.5",
        defaultValue: "6.5",
      },
      {
        name: "vacationHomeAnnualExpenses",
        label: "Annual Expenses (Taxes, Insurance, Maintenance)",
        type: "number",
        placeholder: "8500",
        defaultValue: "8500",
      },
      {
        name: "annualRentalIncome",
        label: "Estimated Annual Rental Income (Vacation Home)",
        type: "number",
        placeholder: "15000",
        defaultValue: "15000",
      },
      {
        name: "yearsToCompare",
        label: "Years to Compare",
        type: "number",
        placeholder: "10",
        defaultValue: "10",
      },
    ],
    results: [
      { label: "Total Time-Share Cost (All Years)", isCurrency: true },
      { label: "Total Vacation Home Cost (All Years)", isCurrency: true },
      { label: "Net Vacation Home Cost (After Rental Income)", isCurrency: true },
      { label: "Cost Difference", isCurrency: true },
      { label: "Recommendation", isCurrency: false },
    ],
    calculate: (data: any) => {
      const timesharePrice = Number(data.timesharePrice) || 0;
      const timeshareAnnualFees = Number(data.timeshareAnnualFees) || 0;
      const vacationHomePrice = Number(data.vacationHomePrice) || 0;
      const downPaymentPercent = Number(data.vacationHomeDownPayment) || 20;
      const mortgageRate = Number(data.mortgageRate) || 6.5;
      const vacationHomeAnnualExpenses = Number(data.vacationHomeAnnualExpenses) || 0;
      const annualRentalIncome = Number(data.annualRentalIncome) || 0;
      const years = Number(data.yearsToCompare) || 10;
      
      // Time-share calculation
      const totalTimeshareCost = timesharePrice + (timeshareAnnualFees * years);
      
      // Vacation home calculation
      const downPayment = vacationHomePrice * (downPaymentPercent / 100);
      const loanAmount = vacationHomePrice - downPayment;
      const monthlyRate = (mortgageRate / 100) / 12;
      const numberOfPayments = years * 12;
      const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      const totalMortgagePayments = monthlyPayment * numberOfPayments;
      const totalVacationHomeExpenses = vacationHomeAnnualExpenses * years;
      const totalVacationHomeCost = downPayment + totalMortgagePayments + totalVacationHomeExpenses;
      
      // Net cost after rental income
      const totalRentalIncome = annualRentalIncome * years;
      const netVacationHomeCost = totalVacationHomeCost - totalRentalIncome;
      
      // Comparison
      const costDifference = netVacationHomeCost - totalTimeshareCost;
      let recommendation = "";
      
      if (costDifference < -50000) {
        recommendation = "✅ Vacation Home is significantly more cost-effective (especially with rental income)";
      } else if (costDifference < 0) {
        recommendation = "✅ Vacation Home is slightly more cost-effective";
      } else if (costDifference < 50000) {
        recommendation = "⚖️ Costs are similar - consider flexibility and investment value";
      } else {
        recommendation = "💡 Time-Share has lower total cost, but consider resale value and flexibility";
      }

      return [
        { label: "Total Time-Share Cost (All Years)", value: `${totalTimeshareCost.toFixed(2)}`, isCurrency: true },
        { label: "Total Vacation Home Cost (All Years)", value: `${totalVacationHomeCost.toFixed(2)}`, isCurrency: true },
        { label: "Net Vacation Home Cost (After Rental Income)", value: `${netVacationHomeCost.toFixed(2)}`, isCurrency: true },
        { label: "Cost Difference", value: `${Math.abs(costDifference).toFixed(2)} ${costDifference > 0 ? '(Vacation Home costs more)' : '(Time-Share costs more)'}`, isCurrency: true },
        { label: "Recommendation", value: recommendation, isCurrency: false },
      ];
    },
  },
};