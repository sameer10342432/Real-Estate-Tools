import { CalculatorContent } from '@/types';

export const HURRICANE_DEDUCTIBLE_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Hurricane Deductible Calculator',
  description: 'Calculate hurricane deductible amounts and understand percentage-based deductibles in coastal states',
  slug: 'hurricane-deductible-calculator',
  icon: '🌀',
  category: 'Insurance Tools',
  article: {
    title: 'Complete Guide to Hurricane Deductibles',
    content: `
    <h2>Understanding Hurricane Deductibles</h2>
    <p>A hurricane deductible is a separate, higher deductible that applies specifically to hurricane-related damage. Unlike standard homeowners insurance deductibles (typically $500-$2,500 flat amounts), hurricane deductibles are percentage-based - usually 1% to 10% of your home's insured value. This means hurricane deductibles can range from $2,500 to $50,000+ depending on your coverage amount.</p>
    
    <h3>How Hurricane Deductibles Work</h3>
    <p>Key characteristics of hurricane deductibles:</p>
    <ul>
      <li><strong>Percentage-Based:</strong> Calculated as percentage of dwelling coverage (not home value)</li>
      <li><strong>Separate from Regular Deductible:</strong> Only applies to named storm/hurricane damage</li>
      <li><strong>Per Event:</strong> Applied separately for each named hurricane</li>
      <li><strong>Trigger Requirements:</strong> Deductible activates based on specific criteria (wind speed, storm naming, emergency declaration)</li>
      <li><strong>State Variations:</strong> Each coastal state has different laws governing hurricane deductibles</li>
    </ul>
    
    <h3>Hurricane Deductible Ranges by State (2025)</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">State</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Typical Range</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Notes</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Florida</td>
        <td style="border: 1px solid #ddd; padding: 8px;">2%, 5%, 10%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Most policies 2-5%; higher in Keys</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Texas (Coastal)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1%, 2%, 3%, 5%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Varies by county; mandatory in Tier 1</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Louisiana</td>
        <td style="border: 1px solid #ddd; padding: 8px;">2%, 3%, 5%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Higher in coastal parishes</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">South Carolina</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$500 - 5%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Percentage or flat dollar amount</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">North Carolina</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1%, 2%, 5%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Coastal counties only</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Alabama</td>
        <td style="border: 1px solid #ddd; padding: 8px;">2%, 5%</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Coastal counties</td>
      </tr>
    </table>
    
    <h3>Hurricane Deductible vs. Regular Deductible</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Aspect</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Regular Deductible</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Hurricane Deductible</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Amount</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$500 - $2,500 flat</td>
        <td style="border: 1px solid #ddd; padding: 8px;">1-10% of dwelling coverage</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Applies To</td>
        <td style="border: 1px solid #ddd; padding: 8px;">All covered perils (fire, theft, etc.)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Named hurricanes/tropical storms only</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Example ($300K home)</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$1,000 out-of-pocket</td>
        <td style="border: 1px solid #ddd; padding: 8px;">$6,000 (2%) to $30,000 (10%)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Optional?</td>
        <td style="border: 1px solid #ddd; padding: 8px;">You choose amount</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Often mandatory in coastal areas</td>
      </tr>
    </table>
    
    <h3>Hurricane Deductible Triggers</h3>
    <p>Hurricane deductibles activate under different criteria by state:</p>
    <ul>
      <li><strong>Named Storm Trigger:</strong> Deductible applies when National Hurricane Center names the storm</li>
      <li><strong>Wind Speed Trigger:</strong> Activates when sustained winds reach certain threshold (39 mph, 74 mph)</li>
      <li><strong>Category Trigger:</strong> Only for Category 1+ hurricanes (some policies)</li>
      <li><strong>Emergency Declaration:</strong> Governor's state of emergency triggers deductible (some states)</li>
      <li><strong>Time Window:</strong> Typically 12-72 hours before and after storm passage</li>
    </ul>
    
    <h3>Hurricane Deductible Example Calculations</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Dwelling Coverage</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">2% Deductible</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">5% Deductible</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: right;">10% Deductible</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$200,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$4,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$300,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$6,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$15,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$30,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$400,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$8,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$20,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$40,000</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">$500,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$10,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$25,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$50,000</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">$750,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$15,000</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$37,500</td>
        <td style="border: 1px solid #ddd; padding: 8px; text-align: right;">$75,000</td>
      </tr>
    </table>
    
    <h3>Premium Savings by Choosing Higher Deductible</h3>
    <p>Higher hurricane deductibles reduce your insurance premium:</p>
    <ul>
      <li><strong>2% vs. 5% Deductible:</strong> Save 15-25% on wind/hurricane portion of premium</li>
      <li><strong>2% vs. 10% Deductible:</strong> Save 30-45% on wind/hurricane portion of premium</li>
      <li><strong>Example:</strong> $4,000 annual premium with 2% deductible could drop to $3,000 with 10% deductible (save $1,000/year)</li>
      <li><strong>Risk vs. Reward:</strong> Weigh annual savings against larger out-of-pocket expense during hurricane</li>
    </ul>
    
    <h3>Florida Hurricane Deductible Specifics</h3>
    <p>Florida has unique hurricane deductible regulations:</p>
    <ul>
      <li><strong>Mandatory Disclosure:</strong> Insurers must clearly disclose hurricane deductible on declaration page</li>
      <li><strong>Trigger Definition:</strong> Activates when National Hurricane Center declares hurricane warning for any part of Florida</li>
      <li><strong>Time Window:</strong> Deductible applies from warning issuance until 72 hours after storm leaves Florida</li>
      <li><strong>Citizens Property Insurance:</strong> State insurer typically requires 2% minimum hurricane deductible</li>
      <li><strong>Multiple Storms:</strong> Separate deductible for each named hurricane (2004 saw four hurricanes hit Florida)</li>
    </ul>
    
    <h3>Texas Windstorm Deductible (TWIA)</h3>
    <p>Texas Windstorm Insurance Association (TWIA) requirements:</p>
    <ul>
      <li><strong>Tier 1 Counties:</strong> Seacoast counties (mandatory percentage deductible)</li>
      <li><strong>Available Options:</strong> 1%, 2%, 3%, 5% of dwelling coverage</li>
      <li><strong>Premium Impact:</strong> 1% deductible costs 40-60% more than 5% deductible</li>
      <li><strong>Trigger:</strong> Named tropical storm or hurricane</li>
      <li><strong>Separate from AOP:</strong> All other perils use standard flat dollar deductible</li>
    </ul>
    
    <h3>Should You Buy Down Your Hurricane Deductible?</h3>
    <p>Factors to consider when choosing deductible percentage:</p>
    <ul>
      <li><strong>Emergency Savings:</strong> Do you have $10,000-$30,000 liquid savings for hurricane repairs?</li>
      <li><strong>Hurricane Frequency:</strong> How often do hurricanes directly hit your area? (Once every 10 years? 20 years?)</li>
      <li><strong>Premium Savings:</strong> Calculate years of savings to equal one deductible payment</li>
      <li><strong>Risk Tolerance:</strong> Can you afford $15,000-$50,000 out-of-pocket if major hurricane hits?</li>
      <li><strong>Home Value:</strong> Higher-value homes = larger deductible amounts</li>
    </ul>
    
    <h3>Hurricane Deductible Buy-Back Options</h3>
    <p>Some insurers offer deductible buy-back endorsements:</p>
    <ul>
      <li><strong>How It Works:</strong> Pay additional premium to reduce hurricane deductible</li>
      <li><strong>Cost:</strong> Typically 20-40% increase in premium to buy down from 5% to 2%</li>
      <li><strong>Availability:</strong> Not all insurers offer this option</li>
      <li><strong>Example:</strong> Pay extra $800/year to reduce deductible from $15,000 (5%) to $6,000 (2%)</li>
    </ul>
    
    <h3>What Counts as Hurricane Damage?</h3>
    <p>Hurricane deductible applies to:</p>
    <ul>
      <li><strong>Wind Damage:</strong> Roof damage, siding, windows, fences</li>
      <li><strong>Wind-Driven Rain:</strong> Water entering through wind-damaged openings</li>
      <li><strong>Falling Trees/Debris:</strong> Damage from hurricane-force wind-blown objects</li>
      <li><strong>Storm Surge:</strong> Only if you have separate flood insurance (not covered by homeowners)</li>
      <li><strong>Tornado Damage:</strong> Tornadoes spawned by hurricanes may trigger hurricane deductible</li>
    </ul>
    
    <h3>Flood vs. Hurricane Deductible</h3>
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="background-color: #f3f4f6;">
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Damage Type</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Deductible That Applies</th>
        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Policy</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Hurricane wind damage to roof</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Hurricane deductible</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Homeowners</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Storm surge flooding</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Flood insurance deductible</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Flood policy (separate)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Tropical storm rain flooding</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Flood insurance deductible</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Flood policy (separate)</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="border: 1px solid #ddd; padding: 8px;">Wind-driven rain through damaged roof</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Hurricane deductible</td>
        <td style="border: 1px solid #ddd; padding: 8px;">Homeowners</td>
      </tr>
    </table>
    
    <h3>Multiple Hurricanes in One Season</h3>
    <p>Important to understand regarding back-to-back storms:</p>
    <ul>
      <li><strong>Separate Deductibles:</strong> Each named hurricane triggers a new deductible</li>
      <li><strong>2004 Florida Example:</strong> Homeowners faced 4 separate hurricane deductibles (Charley, Frances, Ivan, Jeanne)</li>
      <li><strong>Total Exposure:</strong> With $10,000 deductible, 3 hurricanes = $30,000 out-of-pocket</li>
      <li><strong>Financial Planning:</strong> Coastal residents should plan for multiple events per season</li>
    </ul>
    
    <h3>State Regulatory Protections</h3>
    <p>Consumer protections vary by state:</p>
    <ul>
      <li><strong>Caps on Percentage:</strong> Some states limit maximum hurricane deductible (e.g., 5% or 10%)</li>
      <li><strong>Disclosure Requirements:</strong> Mandatory clear notification of hurricane deductible amount</li>
      <li><strong>Trigger Transparency:</strong> Clear definition of when hurricane deductible applies</li>
      <li><strong>Annual Caps:</strong> A few states limit total deductibles per year (rare)</li>
    </ul>
    
    <h3>Preparing Financially for Hurricane Deductible</h3>
    <p>Best practices to prepare for large deductibles:</p>
    <ul>
      <li><strong>Emergency Fund:</strong> Save 1-2x your hurricane deductible in liquid savings</li>
      <li><strong>Home Equity Line:</strong> HELOC provides backup funding for major repairs</li>
      <li><strong>Payment Plans:</strong> Some contractors offer financing for hurricane repairs</li>
      <li><strong>Government Assistance:</strong> FEMA grants (up to $30,000) available for disaster victims</li>
      <li><strong>Low-Interest Loans:</strong> SBA disaster loans available at 3-4% interest</li>
    </ul>
    `
  },
  calculator: {
    fields: [
      {
        name: 'dwellingCoverage',
        label: 'Dwelling Coverage Amount',
        type: 'currency',
        required: true,
        placeholder: '300000',
        helpText: 'Your home insurance coverage amount (Coverage A)'
      },
      {
        name: 'hurricaneDeductible',
        label: 'Hurricane Deductible Percentage',
        type: 'select',
        required: true,
        options: [
          { value: '1', label: '1%' },
          { value: '2', label: '2%' },
          { value: '3', label: '3%' },
          { value: '5', label: '5%' },
          { value: '10', label: '10%' },
        ],
        helpText: 'Your hurricane deductible as percentage of dwelling coverage'
      },
      {
        name: 'regularDeductible',
        label: 'Regular All-Other-Peril Deductible',
        type: 'currency',
        required: true,
        placeholder: '1000',
        helpText: 'Your standard deductible for non-hurricane claims'
      },
      {
        name: 'state',
        label: 'State',
        type: 'select',
        required: true,
        options: [
          { value: 'florida', label: 'Florida' },
          { value: 'texas', label: 'Texas' },
          { value: 'louisiana', label: 'Louisiana' },
          { value: 'southCarolina', label: 'South Carolina' },
          { value: 'northCarolina', label: 'North Carolina' },
          { value: 'other', label: 'Other Coastal State' },
        ],
        helpText: 'Your state affects deductible rules and triggers'
      }
    ],
    results: [
      {
        name: 'hurricaneDeductibleAmount',
        label: 'Hurricane Deductible Amount',
        type: 'currency',
        helpText: 'Your out-of-pocket cost before hurricane coverage begins'
      },
      {
        name: 'regularDeductibleAmount',
        label: 'Regular Deductible Amount',
        type: 'currency',
        helpText: 'Your deductible for all non-hurricane claims'
      },
      {
        name: 'difference',
        label: 'Difference (Hurricane vs. Regular)',
        type: 'currency',
        helpText: 'Additional out-of-pocket for hurricane vs. other perils'
      },
      {
        name: 'threeHurricaneCost',
        label: 'Cost if 3 Hurricanes in One Year',
        type: 'currency',
        helpText: 'Total out-of-pocket if multiple hurricanes hit (rare but possible)'
      },
      {
        name: 'recommendation',
        label: 'Recommendation',
        type: 'text',
        helpText: 'Financial planning guidance based on your deductible'
      }
    ],
    calculate: (inputs: Record<string, any>) => {
      const dwellingCoverage = parseFloat(inputs.dwellingCoverage) || 0;
      const hurricaneDeductiblePercent = parseFloat(inputs.hurricaneDeductible) || 2;
      const regularDeductible = parseFloat(inputs.regularDeductible) || 1000;
      const state = inputs.state || 'florida';

      // Calculate hurricane deductible amount
      const hurricaneDeductibleAmount = Math.round((dwellingCoverage * hurricaneDeductiblePercent) / 100);
      const regularDeductibleAmount = regularDeductible;
      const difference = hurricaneDeductibleAmount - regularDeductibleAmount;
      const threeHurricaneCost = hurricaneDeductibleAmount * 3;

      // Generate recommendation
      let recommendation = '';
      if (hurricaneDeductibleAmount < 5000) {
        recommendation = `Your hurricane deductible is manageable at $${hurricaneDeductibleAmount.toLocaleString()}. Maintain emergency fund of at least this amount.`;
      } else if (hurricaneDeductibleAmount < 15000) {
        recommendation = `Your $${hurricaneDeductibleAmount.toLocaleString()} hurricane deductible requires significant savings. Consider $${(hurricaneDeductibleAmount * 1.5).toLocaleString()} emergency fund.`;
      } else if (hurricaneDeductibleAmount < 30000) {
        recommendation = `Your $${hurricaneDeductibleAmount.toLocaleString()} hurricane deductible is substantial. Establish HELOC and save $${(hurricaneDeductibleAmount * 2).toLocaleString()} for emergencies.`;
      } else {
        recommendation = `Your $${hurricaneDeductibleAmount.toLocaleString()} hurricane deductible is very high. Consider buying down to lower percentage if financially feasible. Explore SBA disaster loan pre-qualification.`;
      }

      return {
        hurricaneDeductibleAmount,
        regularDeductibleAmount,
        difference,
        threeHurricaneCost,
        recommendation
      };
    }
  }
};
