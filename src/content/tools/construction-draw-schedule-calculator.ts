import { CalculatorContent } from '@/types';

export const CONSTRUCTION_DRAW_SCHEDULE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Construction Draw Schedule Calculator',
  description: 'Calculate construction loan draw schedules, phase disbursements, and interest costs for new home builds.',
  slug: 'construction-draw-schedule-calculator',
  icon: '🏗️',
  category: 'Construction & Development',
  article: {
    title: 'Understanding Construction Loan Draw Schedules: A Complete Guide',
    content: `
      <h2>What is a Construction Draw Schedule?</h2>
      <p>A construction draw schedule is a timeline that outlines when and how much money will be released (drawn) from a construction loan during the building process. Unlike traditional mortgages where you receive the full loan amount at closing, construction loans disburse funds in stages as work is completed and verified.</p>

      <h3>How Construction Loans Work</h3>
      <p>Construction loans are short-term financing used to cover the costs of building a new home or major renovation. Key characteristics include:</p>
      <ul>
        <li><strong>Interest-Only Payments:</strong> During construction, you typically only pay interest on the amount drawn</li>
        <li><strong>Phased Disbursements:</strong> Funds are released in "draws" as construction milestones are met</li>
        <li><strong>Inspection Requirements:</strong> Lenders require inspections before each draw</li>
        <li><strong>Construction-to-Permanent:</strong> Many loans convert to a traditional mortgage upon completion</li>
      </ul>

      <h3>Typical Construction Phases and Draw Percentages</h3>
      <p>While draw schedules vary by lender and project, here's a common breakdown:</p>

      <h4>1. Foundation Phase (15-20% of loan)</h4>
      <ul>
        <li>Site preparation and clearing</li>
        <li>Excavation and grading</li>
        <li>Foundation footings and walls</li>
        <li>Concrete slab or basement floor</li>
        <li>Underground plumbing rough-in</li>
      </ul>

      <h4>2. Framing Phase (20-25% of loan)</h4>
      <ul>
        <li>Floor systems and subfloor</li>
        <li>Wall framing (exterior and interior)</li>
        <li>Roof trusses and sheathing</li>
        <li>Windows and exterior doors</li>
        <li>Exterior sheathing and housewrap</li>
      </ul>

      <h4>3. Mechanical Phase (20-25% of loan)</h4>
      <ul>
        <li>Electrical rough-in</li>
        <li>Plumbing rough-in</li>
        <li>HVAC ductwork and equipment</li>
        <li>Insulation installation</li>
        <li>Roofing completion</li>
        <li>Exterior siding and trim</li>
      </ul>

      <h4>4. Finishing Phase (25-30% of loan)</h4>
      <ul>
        <li>Drywall installation and finishing</li>
        <li>Interior trim and millwork</li>
        <li>Cabinet installation</li>
        <li>Countertops and fixtures</li>
        <li>Flooring installation</li>
        <li>Painting (interior and exterior)</li>
      </ul>

      <h4>5. Completion Phase (5-10% of loan)</h4>
      <ul>
        <li>Final electrical and plumbing fixtures</li>
        <li>Appliance installation</li>
        <li>Final inspections</li>
        <li>Certificate of occupancy</li>
        <li>Landscaping and driveway</li>
        <li>Final punch list items</li>
      </ul>

      <h3>How Lenders Release Funds</h3>
      <p>The draw process typically follows these steps:</p>
      <ol>
        <li><strong>Draw Request:</strong> Builder submits a request documenting completed work</li>
        <li><strong>Inspection:</strong> Lender sends an inspector to verify work completion</li>
        <li><strong>Approval:</strong> Lender reviews and approves the draw request</li>
        <li><strong>Disbursement:</strong> Funds are released (usually within 3-5 business days)</li>
        <li><strong>Payment:</strong> Builder pays subcontractors and suppliers</li>
      </ol>

      <h3>Interest Costs During Construction</h3>
      <p>Understanding how interest accumulates is crucial for budgeting:</p>
      <ul>
        <li><strong>Interest-Only Period:</strong> You pay interest only on the disbursed amount</li>
        <li><strong>Cumulative Interest:</strong> As more draws are made, your interest payments increase</li>
        <li><strong>Construction Timeline:</strong> Longer builds mean higher total interest costs</li>
        <li><strong>Rate Considerations:</strong> Construction loan rates are typically 1-2% higher than permanent mortgages</li>
      </ul>

      <h4>Sample Interest Calculation</h4>
      <p>For a $400,000 construction loan at 8% interest with a 6-month build:</p>
      <ul>
        <li>Month 1 (20% drawn = $80,000): Interest = $533/month</li>
        <li>Month 2 (40% drawn = $160,000): Interest = $1,067/month</li>
        <li>Month 3 (60% drawn = $240,000): Interest = $1,600/month</li>
        <li>Month 4 (80% drawn = $320,000): Interest = $2,133/month</li>
        <li>Month 5-6 (100% drawn = $400,000): Interest = $2,667/month</li>
        <li><strong>Total Construction Interest:</strong> Approximately $12,000-15,000</li>
      </ul>

      <h3>Managing the Draw Process</h3>
      <p>Tips for a smooth construction draw experience:</p>

      <h4>For Homeowners/Borrowers:</h4>
      <ul>
        <li>Understand your draw schedule before construction begins</li>
        <li>Budget for interest payments during construction</li>
        <li>Keep copies of all invoices and receipts</li>
        <li>Communicate regularly with your builder and lender</li>
        <li>Attend inspections when possible</li>
      </ul>

      <h4>For Builders:</h4>
      <ul>
        <li>Submit accurate and complete draw requests</li>
        <li>Maintain detailed records of work completed</li>
        <li>Coordinate with subcontractors on payment timing</li>
        <li>Address inspection issues promptly</li>
        <li>Plan for potential delays in draw processing</li>
      </ul>

      <h3>Common Draw Schedule Issues</h3>
      <p>Be prepared for these potential challenges:</p>
      <ul>
        <li><strong>Inspection Delays:</strong> Weather or inspector availability can slow the process</li>
        <li><strong>Work Quality Issues:</strong> Failed inspections require rework before draw approval</li>
        <li><strong>Change Orders:</strong> Modifications may require schedule adjustments</li>
        <li><strong>Material Delays:</strong> Supply chain issues can impact construction timeline</li>
        <li><strong>Holdback Requirements:</strong> Lenders may retain 5-10% until final completion</li>
      </ul>

      <h3>How to Use This Calculator</h3>
      <p>This calculator helps you plan and understand your construction loan draw schedule by calculating:</p>
      <ul>
        <li><strong>Draw Amounts:</strong> How much will be released at each construction phase</li>
        <li><strong>Cumulative Disbursement:</strong> Running total of funds drawn throughout construction</li>
        <li><strong>Interest Costs:</strong> Estimated interest payments based on draw timing</li>
        <li><strong>Total Construction Interest:</strong> Complete interest expense during the build</li>
      </ul>
      <p>Enter your loan amount, interest rate, number of draws, and phase percentages to see a detailed breakdown of your construction financing.</p>

      <h3>Tips for Reducing Construction Interest Costs</h3>
      <ul>
        <li>Choose a builder with a track record of on-time completion</li>
        <li>Lock in your construction loan rate if possible</li>
        <li>Plan construction during favorable weather seasons</li>
        <li>Order materials early to avoid supply delays</li>
        <li>Consider a construction-to-permanent loan to avoid two closings</li>
        <li>Make additional principal payments if your loan allows</li>
      </ul>
    `,
  },
  calculator: {
    fields: [
      {
        name: 'totalLoanAmount',
        label: 'Total Construction Loan Amount ($)',
        type: 'number',
        defaultValue: 400000,
      },
      {
        name: 'interestRate',
        label: 'Annual Interest Rate (%)',
        type: 'number',
        defaultValue: 8.0,
      },
      {
        name: 'constructionMonths',
        label: 'Construction Timeline (Months)',
        type: 'number',
        defaultValue: 6,
      },
      {
        name: 'foundationPercent',
        label: 'Foundation Phase (%)',
        type: 'number',
        defaultValue: 15,
      },
      {
        name: 'framingPercent',
        label: 'Framing Phase (%)',
        type: 'number',
        defaultValue: 25,
      },
      {
        name: 'mechanicalPercent',
        label: 'Mechanical Phase (%)',
        type: 'number',
        defaultValue: 20,
      },
      {
        name: 'finishingPercent',
        label: 'Finishing Phase (%)',
        type: 'number',
        defaultValue: 30,
      },
      {
        name: 'completionPercent',
        label: 'Completion Phase (%)',
        type: 'number',
        defaultValue: 10,
      },
    ],
    results: [
      { label: 'Draw 1 - Foundation', isCurrency: true },
      { label: 'Draw 2 - Framing', isCurrency: true },
      { label: 'Draw 3 - Mechanical', isCurrency: true },
      { label: 'Draw 4 - Finishing', isCurrency: true },
      { label: 'Draw 5 - Completion', isCurrency: true },
      { label: 'Total Percentage Allocated', isCurrency: false },
      { label: 'Average Monthly Interest', isCurrency: true },
      { label: 'Estimated Total Construction Interest', isCurrency: true },
      { label: 'Final Monthly Payment (Interest Only)', isCurrency: true },
    ],
    calculate: (values) => {
      const {
        totalLoanAmount,
        interestRate,
        constructionMonths,
        foundationPercent,
        framingPercent,
        mechanicalPercent,
        finishingPercent,
        completionPercent,
      } = values;

      const totalPercent = foundationPercent + framingPercent + mechanicalPercent + finishingPercent + completionPercent;
      
      const foundationDraw = totalLoanAmount * (foundationPercent / 100);
      const framingDraw = totalLoanAmount * (framingPercent / 100);
      const mechanicalDraw = totalLoanAmount * (mechanicalPercent / 100);
      const finishingDraw = totalLoanAmount * (finishingPercent / 100);
      const completionDraw = totalLoanAmount * (completionPercent / 100);

      const monthlyRate = interestRate / 100 / 12;
      const drawsPerMonth = 5 / constructionMonths;
      
      let totalInterest = 0;
      let cumulativeBalance = 0;
      const draws = [foundationDraw, framingDraw, mechanicalDraw, finishingDraw, completionDraw];
      
      for (let month = 1; month <= constructionMonths; month++) {
        const drawsThisMonth = Math.floor(drawsPerMonth * month) - Math.floor(drawsPerMonth * (month - 1));
        for (let d = 0; d < drawsThisMonth && draws.length > 0; d++) {
          cumulativeBalance += draws.shift() || 0;
        }
        totalInterest += cumulativeBalance * monthlyRate;
      }
      
      if (draws.length > 0) {
        draws.forEach(draw => {
          cumulativeBalance += draw;
        });
      }
      
      const avgBalance = totalLoanAmount * 0.6;
      const avgMonthlyInterest = avgBalance * monthlyRate;
      const finalMonthlyInterest = totalLoanAmount * monthlyRate;
      const estimatedTotalInterest = avgMonthlyInterest * constructionMonths;

      return [
        { label: 'Draw 1 - Foundation', value: foundationDraw.toFixed(2), isCurrency: true },
        { label: 'Draw 2 - Framing', value: framingDraw.toFixed(2), isCurrency: true },
        { label: 'Draw 3 - Mechanical', value: mechanicalDraw.toFixed(2), isCurrency: true },
        { label: 'Draw 4 - Finishing', value: finishingDraw.toFixed(2), isCurrency: true },
        { label: 'Draw 5 - Completion', value: completionDraw.toFixed(2), isCurrency: true },
        { label: 'Total Percentage Allocated', value: `${totalPercent}%`, isCurrency: false },
        { label: 'Average Monthly Interest', value: avgMonthlyInterest.toFixed(2), isCurrency: true },
        { label: 'Estimated Total Construction Interest', value: estimatedTotalInterest.toFixed(2), isCurrency: true },
        { label: 'Final Monthly Payment (Interest Only)', value: finalMonthlyInterest.toFixed(2), isCurrency: true },
      ];
    },
  },
};
