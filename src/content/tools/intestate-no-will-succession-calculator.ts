import { CalculatorContent } from '@/types';

export const INTESTATE_NO_WILL_SUCCESSION_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Intestate (No Will) Succession Calculator',
  description: 'Calculate how assets are distributed when someone dies without a will',
  icon: 'Icon',
  category: 'Real Estate',
  slug: 'intestate-no-will-succession-calculator',
  metaTitle: 'Intestate Succession Calculator - No Will Asset Distribution',
  metaDescription: 'Calculate intestate succession and property distribution when someone dies without a will. State-specific inheritance rules and heir percentages for real estate and assets.',
  metaKeywords: 'intestate succession, no will, heir calculator, inheritance laws, estate distribution, state succession laws',
  article: {
    title: "Understanding Intestate Succession",
    content: `
    <h2>Understanding Intestate Succession</h2>
    <p>When someone dies without a valid will (intestate), state laws determine how their assets, including real estate, are distributed among heirs. These laws vary by state but generally follow a similar hierarchy.</p>
    
    <h3>Who Inherits Under Intestacy Laws?</h3>
    <p><strong>Priority Order (Typical):</strong></p>
    <ol>
      <li>Surviving spouse and children</li>
      <li>Surviving spouse alone (if no children)</li>
      <li>Children alone (if no spouse)</li>
      <li>Parents (if no spouse or children)</li>
      <li>Siblings (if no spouse, children, or parents)</li>
      <li>Extended family (nieces, nephews, cousins)</li>
      <li>State (if no relatives found)</li>
    </ol>
    
    <h3>Spousal Share Variations by State</h3>
    <p><strong>Community Property States (9 states):</strong></p>
    <p>AZ, CA, ID, LA, NV, NM, TX, WA, WI - Spouse typically receives all community property and 1/2 to all of separate property.</p>
    
    <p><strong>Common Law States:</strong></p>
    <ul>
      <li><strong>100% to Spouse:</strong> If no children or all children are from current marriage (many states)</li>
      <li><strong>1/2 to Spouse:</strong> If children from prior relationship exist (typical)</li>
      <li><strong>1/3 to Spouse:</strong> Some states with children present</li>
      <li><strong>Elective Share:</strong> Surviving spouse can choose statutory share (1/3 to 1/2) instead</li>
    </ul>
    
    <h3>Children's Share</h3>
    <p><strong>Per Stirpes Distribution:</strong></p>
    <p>If a child predeceased the parent, their share passes to their children (grandchildren of deceased) equally.</p>
    
    <p><strong>All Biological and Adopted Children:</strong></p>
    <ul>
      <li>Biological children inherit equally</li>
      <li>Legally adopted children have same rights as biological</li>
      <li>Stepchildren typically do NOT inherit unless legally adopted</li>
      <li>Foster children typically do NOT inherit</li>
    </ul>
    
    <h3>Real Estate Specific Issues</h3>
    <p><strong>Homestead Rights:</strong></p>
    <p>Many states protect the family home for surviving spouse and minor children, even from creditors.</p>
    
    <p><strong>Joint Tenancy:</strong></p>
    <p>Property held in joint tenancy with right of survivorship passes automatically to surviving owner, bypassing intestacy.</p>
    
    <p><strong>Tenancy by Entirety:</strong></p>
    <p>Available only to married couples in some states. Property passes automatically to surviving spouse.</p>
    
    <p><strong>Tenancy in Common:</strong></p>
    <p>Deceased's share passes according to intestacy laws, not automatically to co-owner.</p>
    
    <h3>State-Specific Examples</h3>
    <p><strong>California:</strong></p>
    <ul>
      <li>Community property: 100% to spouse</li>
      <li>Separate property: 100% to spouse if no children/parents, otherwise splits</li>
    </ul>
    
    <p><strong>New York:</strong></p>
    <ul>
      <li>$50,000 + 1/2 of estate to spouse if children exist</li>
      <li>100% to spouse if no children</li>
    </ul>
    
    <p><strong>Florida:</strong></p>
    <ul>
      <li>100% to spouse if no children</li>
      <li>1/2 to spouse if all children are from marriage</li>
      <li>1/2 to spouse if children from prior relationship exist</li>
    </ul>
    
    <p><strong>Texas:</strong></p>
    <ul>
      <li>Community property: 100% to spouse</li>
      <li>Separate real property: Life estate to spouse, remainder to children</li>
      <li>Separate personal property: 1/3 to spouse, 2/3 to children</li>
    </ul>
    
    <h3>Problems with Intestate Succession</h3>
    <ul>
      <li><strong>Court Involvement:</strong> Probate court must supervise entire process</li>
      <li><strong>Time and Cost:</strong> Lengthier and more expensive than will-based probate</li>
      <li><strong>Unintended Results:</strong> Distribution may not match deceased's wishes</li>
      <li><strong>Unmarried Partners:</strong> No inheritance rights in most states</li>
      <li><strong>Stepchildren:</strong> Typically excluded unless adopted</li>
      <li><strong>Charities:</strong> Cannot inherit under intestacy</li>
      <li><strong>Special Needs:</strong> No protection for beneficiaries with disabilities</li>
    </ul>
    
    <h3>Avoiding Intestacy</h3>
    <p>Create estate planning documents:</p>
    <ul>
      <li><strong>Last Will and Testament:</strong> Directs asset distribution</li>
      <li><strong>Revocable Living Trust:</strong> Avoids probate entirely</li>
      <li><strong>Beneficiary Designations:</strong> For bank accounts, retirement accounts</li>
      <li><strong>Transfer on Death Deeds:</strong> For real estate (where available)</li>
      <li><strong>Joint Ownership:</strong> With right of survivorship</li>
    </ul>
    
    <h3>Heir Locating and Unknown Relatives</h3>
    <p>If heirs cannot be located:</p>
    <ul>
      <li>Court may appoint heir locator service</li>
      <li>Publication in newspapers required</li>
      <li>Assets may eventually escheat to state if no heirs found</li>
      <li>Waiting period varies by state (typically 3-7 years)</li>
    </ul>
  `,
  },
  calculator: {
    fields: [
      {
        name: "estateValue",
        label: "Total Estate Value",
        type: "number",
        placeholder: "500000",
        defaultValue: "500000",
      },
      {
        name: "maritalStatus",
        label: "Marital Status at Death",
        type: "select",
        defaultValue: "married",
        options: [
          { value: "married", label: "Married" },
          { value: "single", label: "Single/Never Married" },
          { value: "divorced", label: "Divorced" },
          { value: "widowed", label: "Widowed" },
        ],
      },
      {
        name: "numberOfChildren",
        label: "Number of Children",
        type: "number",
        placeholder: "2",
        defaultValue: "2",
      },
      {
        name: "childrenFromPriorMarriage",
        label: "Children from Prior Relationship?",
        type: "select",
        defaultValue: "no",
        options: [
          { value: "no", label: "No - All from current marriage" },
          { value: "yes", label: "Yes - Some from prior relationship" },
        ],
      },
      {
        name: "livingParents",
        label: "Living Parents?",
        type: "select",
        defaultValue: "no",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
        ],
      },
    ],
    results: [
      { label: "Surviving Spouse Share", isCurrency: true },
      { label: "Children's Total Share", isCurrency: true },
      { label: "Per Child Share", isCurrency: true },
      { label: "Parents' Share", isCurrency: true },
      { label: "Distribution Summary", isCurrency: false },
    ],
    calculate: (data: any) => {
      const estateValue = Number(data.estateValue) || 0;
      const maritalStatus = data.maritalStatus || "single";
      const numberOfChildren = Number(data.numberOfChildren) || 0;
      const childrenFromPriorMarriage = data.childrenFromPriorMarriage || "no";
      const livingParents = data.livingParents || "no";
      
      let spouseShare = 0;
      let childrenTotalShare = 0;
      let parentsShare = 0;
      let distributionSummary = "";
      
      // Calculate shares based on typical state intestacy laws
      if (maritalStatus === "married") {
        if (numberOfChildren === 0) {
          if (livingParents === "yes") {
            spouseShare = estateValue * 0.75; // Spouse gets 75%
            parentsShare = estateValue * 0.25; // Parents get 25%
            distributionSummary = "Spouse: 75% | Parents: 25%";
          } else {
            spouseShare = estateValue; // Spouse gets 100%
            distributionSummary = "Spouse: 100%";
          }
        } else {
          if (childrenFromPriorMarriage === "yes") {
            spouseShare = estateValue * 0.5; // Spouse gets 50%
            childrenTotalShare = estateValue * 0.5; // Children get 50%
            distributionSummary = "Spouse: 50% | Children: 50%";
          } else {
            spouseShare = estateValue; // Spouse gets 100% if all children from current marriage
            distributionSummary = "Spouse: 100% (children from current marriage)";
          }
        }
      } else {
        // Single, divorced, or widowed
        if (numberOfChildren > 0) {
          childrenTotalShare = estateValue; // Children get 100%
          distributionSummary = "Children: 100%";
        } else if (livingParents === "yes") {
          parentsShare = estateValue; // Parents get 100%
          distributionSummary = "Parents: 100%";
        } else {
          distributionSummary = "Siblings or extended family (state-specific)";
        }
      }
      
      const perChildShare = numberOfChildren > 0 ? childrenTotalShare / numberOfChildren : 0;

      return [
        { 
          label: "Surviving Spouse Share", 
          value: spouseShare.toFixed(2), 
          isCurrency: true 
        },
        { 
          label: "Children's Total Share", 
          value: childrenTotalShare.toFixed(2), 
          isCurrency: true 
        },
        { 
          label: "Per Child Share", 
          value: perChildShare.toFixed(2), 
          isCurrency: true 
        },
        { 
          label: "Parents' Share", 
          value: parentsShare.toFixed(2), 
          isCurrency: true 
        },
        { 
          label: "Distribution Summary", 
          value: distributionSummary, 
          isCurrency: false 
        },
      ];
    },
  },
};
