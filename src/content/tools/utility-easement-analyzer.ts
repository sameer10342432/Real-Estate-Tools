import { CalculatorContent } from '@/types';

export const UTILITY_EASEMENT_ANALYZER_CONTENT: CalculatorContent = {
  title: 'Utility Easement Analyzer - Calculate Utility Easement Impact & Value',
  description: 'Analyze utility easements on your property including property value impact, compensation calculations, and rights assessment for power lines, gas lines, water, and sewer easements',
  icon: 'Icon',
  category: 'Easements & Rights',
  slug: 'utility-easement-analyzer',
  article: {
    title: "Utility Easement Analyzer: Understanding Your Property Rights",
    content: `
    <h2>What is a Utility Easement?</h2>
    <p>A utility easement grants utility companies the legal right to install, maintain, and access utility infrastructure (power lines, gas lines, water, sewer, telecommunications) on your property. These easements can significantly impact property use and value.</p>
    
    <h3>Types of Utility Easements</h3>
    <p><strong>Above-Ground Easements:</strong></p>
    <ul>
      <li><strong>Power Lines:</strong> Electric transmission lines and poles</li>
      <li><strong>Telecommunications:</strong> Phone, cable, fiber optic lines</li>
      <li><strong>Greatest Impact:</strong> Visual obstruction, development restrictions</li>
    </ul>
    
    <p><strong>Underground Easements:</strong></p>
    <ul>
      <li><strong>Gas Lines:</strong> Natural gas distribution pipelines</li>
      <li><strong>Water/Sewer:</strong> Municipal water and sewer lines</li>
      <li><strong>Less Visual Impact:</strong> But still limits construction above</li>
    </ul>
    
    <h3>Property Value Impact</h3>
    <p>Utility easements typically reduce property value by:</p>
    <ul>
      <li><strong>Above-ground power lines:</strong> 10-30% reduction in affected area value</li>
      <li><strong>Underground utilities:</strong> 5-15% reduction in easement area value</li>
      <li><strong>High-voltage transmission lines:</strong> 20-40% reduction within 100 feet</li>
      <li><strong>View obstruction:</strong> Additional 5-10% reduction for scenic properties</li>
    </ul>
    
    <h3>Compensation for New Easements</h3>
    <p>When a utility company requests a new easement, compensation is typically:</p>
    <ul>
      <li><strong>One-time Payment:</strong> 25-50% of affected land's market value</li>
      <li><strong>Damage Compensation:</strong> Payment for crops, landscaping, structures damaged</li>
      <li><strong>Access Disruption:</strong> Compensation for temporary access loss during installation</li>
      <li><strong>Ongoing Impact:</strong> Some owners negotiate annual payments for maintenance access</li>
    </ul>
    
    <h3>Easement Restrictions</h3>
    <p>Property owners typically cannot:</p>
    <ul>
      <li>Build permanent structures within easement area</li>
      <li>Plant tall trees near overhead power lines</li>
      <li>Excavate or dig without utility company approval (Call 811 first!)</li>
      <li>Block utility company access for maintenance</li>
      <li>Store materials that obstruct access</li>
    </ul>
    
    <p>Property owners can usually:</p>
    <ul>
      <li>Landscape with low-growing plants and grass</li>
      <li>Use land for farming or grazing (underground easements)</li>
      <li>Install temporary structures (with approval)</li>
      <li>Request relocation of utilities (at owner's expense)</li>
    </ul>
    
    <h3>Negotiating New Easements</h3>
    <p>When approached for a new utility easement:</p>
    <ul>
      <li><strong>Get Multiple Appraisals:</strong> Independent valuation of impact</li>
      <li><strong>Hire Attorney:</strong> Real estate or eminent domain specialist</li>
      <li><strong>Document Everything:</strong> Photos, surveys, property condition</li>
      <li><strong>Negotiate Route:</strong> Request less-intrusive alternative paths</li>
      <li><strong>Future Access:</strong> Define limits on future expansion</li>
      <li><strong>Restoration Requirements:</strong> Require land restoration after installation</li>
    </ul>
    
    <h3>Eminent Domain Considerations</h3>
    <p>Utility companies can use eminent domain for essential infrastructure:</p>
    <ul>
      <li>Must provide "just compensation" for easement and damages</li>
      <li>You have right to challenge compensation amount in court</li>
      <li>Typically applies to power, gas, water, sewer (not private utilities)</li>
      <li>Property owner can contest necessity and route</li>
    </ul>
    
    <h3>Existing Easement Rights</h3>
    <p>If easement existed when you bought property:</p>
    <ul>
      <li>Easement was disclosed in title report</li>
      <li>You accepted property subject to easement</li>
      <li>Generally no additional compensation unless easement is expanded</li>
      <li>Utility company can maintain and access as specified in easement deed</li>
    </ul>
    
    <h3>Property Tax Considerations</h3>
    <ul>
      <li>Utility easements may reduce property tax assessment</li>
      <li>Request property tax reduction if easement significantly impacts use</li>
      <li>Provide documentation of value impact to assessor</li>
      <li>May require formal appraisal to support tax appeal</li>
    </ul>
    
    <h3>Important Steps</h3>
    <ol>
      <li>Review property title and survey for all existing easements</li>
      <li>Mark easement boundaries on property for reference</li>
      <li>Call 811 before any digging or excavation</li>
      <li>Document any utility damage to property</li>
      <li>Keep copies of all easement documents</li>
      <li>Consult attorney before agreeing to new easements</li>
    </ol>
  `,
  },
  calculator: {
    fields: [
      {
        name: "propertyValue",
        label: "Total Property Value ($)",
        type: "number",
        placeholder: "350000",
        defaultValue: "350000",
      },
      {
        name: "easementType",
        label: "Easement Type",
        type: "select",
        options: [
          { value: "overhead_power", label: "Overhead Power Lines" },
          { value: "underground_utility", label: "Underground Utility" },
          { value: "transmission", label: "High-Voltage Transmission" },
          { value: "gas_pipeline", label: "Gas Pipeline" },
        ],
        defaultValue: "overhead_power",
      },
      {
        name: "easementAcres",
        label: "Easement Area (Acres)",
        type: "number",
        placeholder: "0.5",
        defaultValue: "0.5",
      },
      {
        name: "totalPropertyAcres",
        label: "Total Property Size (Acres)",
        type: "number",
        placeholder: "5",
        defaultValue: "5",
      },
    ],
    results: [
      { label: "Affected Area Value", isCurrency: true },
      { label: "Estimated Value Reduction", isCurrency: true },
      { label: "Typical Easement Compensation Range", isCurrency: false },
      { label: "Property Value After Easement", isCurrency: true },
      { label: "Percentage of Property Affected", isCurrency: false },
    ],
    calculate: (data: any) => {
      const propertyValue = Number(data.propertyValue) || 0;
      const easementType = data.easementType || "overhead_power";
      const easementAcres = Number(data.easementAcres) || 0;
      const totalPropertyAcres = Number(data.totalPropertyAcres) || 0;
      
      // Calculate value per acre
      const valuePerAcre = totalPropertyAcres > 0 ? propertyValue / totalPropertyAcres : 0;
      const affectedAreaValue = easementAcres * valuePerAcre;
      
      // Determine impact percentage based on easement type
      let impactPercentage = 0.15; // Default 15%
      let compensationMin = 0.25; // Default 25%
      let compensationMax = 0.50; // Default 50%
      
      switch(easementType) {
        case "overhead_power":
          impactPercentage = 0.20; // 20% reduction
          compensationMin = 0.30;
          compensationMax = 0.50;
          break;
        case "underground_utility":
          impactPercentage = 0.10; // 10% reduction
          compensationMin = 0.25;
          compensationMax = 0.40;
          break;
        case "transmission":
          impactPercentage = 0.30; // 30% reduction
          compensationMin = 0.40;
          compensationMax = 0.60;
          break;
        case "gas_pipeline":
          impactPercentage = 0.12; // 12% reduction
          compensationMin = 0.25;
          compensationMax = 0.45;
          break;
      }
      
      const valueReduction = affectedAreaValue * impactPercentage;
      const compensationLow = affectedAreaValue * compensationMin;
      const compensationHigh = affectedAreaValue * compensationMax;
      const propertyValueAfter = propertyValue - valueReduction;
      const percentageAffected = totalPropertyAcres > 0 ? (easementAcres / totalPropertyAcres) * 100 : 0;

      return [
        { label: "Affected Area Value", value: `${affectedAreaValue.toFixed(2)}`, isCurrency: true },
        { label: "Estimated Value Reduction", value: `${valueReduction.toFixed(2)}`, isCurrency: true },
        { label: "Typical Easement Compensation Range", value: `$${compensationLow.toFixed(0)} - $${compensationHigh.toFixed(0)}`, isCurrency: false },
        { label: "Property Value After Easement", value: `${propertyValueAfter.toFixed(2)}`, isCurrency: true },
        { label: "Percentage of Property Affected", value: `${percentageAffected.toFixed(2)}%`, isCurrency: false },
      ];
    },
  },
};
