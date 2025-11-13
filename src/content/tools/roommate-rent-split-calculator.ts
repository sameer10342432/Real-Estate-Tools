import { CalculatorContent } from '@/types';

export const ROOMMATE_RENT_SPLIT_CALCULATOR_CONTENT: CalculatorContent = {
  title: 'Roommate Rent Split Calculator',
  description: 'Calculate fair rent splits for roommates based on room size, bathrooms, and other factors.',
  icon: 'Icon',
  category: 'Rental & Income',
  slug: 'roommate-rent-split-calculator',
  article: {
    title: 'How to Split Rent Fairly with Roommates: A Complete Guide',
    content: `
# How to Split Rent Fairly with Roommates: A Complete Guide

Splitting rent fairly among roommates is one of the most common sources of tension in shared living situations. This comprehensive guide will help you navigate rent division with practical methods, calculators, and conflict resolution strategies.

## Why Fair Rent Splits Matter

Living with roommates offers many benefits: lower housing costs, shared expenses, social connection, and more. However, money disagreements can quickly sour these advantages. A fair rent split system:

- **Prevents resentment**: Everyone feels they're paying appropriately for what they get
- **Reduces conflicts**: Clear, agreed-upon methodology eliminates arguments
- **Improves retention**: Roommates are more likely to renew when arrangements feel fair
- **Builds trust**: Transparent processes create positive living dynamics
- **Saves friendships**: Many friendships have been ruined by unfair rent situations

Studies show that over 60% of roommate conflicts stem from financial disagreements, with rent being the #1 issue. Taking time to establish a fair system upfront prevents these problems.

## Common Rent Split Methods

### 1. Equal Split (Flat Division)

**How it works**: Every roommate pays the same amount

**Formula**:
\`\`\`
Each person's share = Total Rent / Number of Roommates
\`\`\`

**Example**:
- Total rent: $2,400
- 3 roommates
- Each pays: $800/month

**Pros**:
- Simplest method
- Easy to calculate and understand
- No arguments about fairness
- Works well when all rooms are similar

**Cons**:
- Ignores room size differences
- Doesn't account for bathroom/parking assignments
- Can feel unfair when spaces vary significantly
- May cause resentment if one room is clearly better

**Best for**: Apartments where all bedrooms are nearly identical in size and quality

### 2. Room Size Proportional Split

**How it works**: Pay based on bedroom square footage

**Formula**:
\`\`\`
Person's share = (Their Room Sq Ft / Total Bedroom Sq Ft) × Total Rent
\`\`\`

**Example**:
- Total rent: $2,400
- Room A: 150 sq ft
- Room B: 120 sq ft
- Room C: 130 sq ft
- Total bedrooms: 400 sq ft

Calculations:
- Room A: (150/400) × $2,400 = $900
- Room B: (120/400) × $2,400 = $720
- Room C: (130/400) × $2,400 = $780

**Pros**:
- Accounts for primary living space differences
- Objective and measurable
- Generally accepted as fair
- Easy to verify

**Cons**:
- Requires accurate measurements
- Doesn't consider room quality (views, windows, closets)
- Ignores bathroom sharing arrangements
- Doesn't account for common areas

**Best for**: Apartments with significantly different bedroom sizes but similar amenities

### 3. Total Square Footage Split

**How it works**: Allocate all space (bedrooms + private bathrooms + parking, etc.)

**Formula**:
\`\`\`
Person's share = (Their Private Sq Ft / Total Private Sq Ft) × Total Rent
\`\`\`

**Example**:
- Total rent: $3,000
- Roommate A: 200 sq ft bedroom + 40 sq ft bathroom = 240 sq ft
- Roommate B: 180 sq ft bedroom + shared bath = 180 sq ft
- Roommate C: 150 sq ft bedroom + shared bath = 150 sq ft
- Total private space: 570 sq ft

Calculations:
- Roommate A: (240/570) × $3,000 = $1,263
- Roommate B: (180/570) × $3,000 = $947
- Roommate C: (150/570) × $3,000 = $790

**Pros**:
- Most comprehensive space accounting
- Fair for en-suite bathrooms
- Accounts for all private amenities
- Highly accurate

**Cons**:
- Complex calculations
- Harder to measure everything
- Doesn't account for quality differences
- May over-emphasize en-suite value

**Best for**: Larger apartments with varying private amenities

### 4. Weighted Factor Method

**How it works**: Assign points for multiple factors (room size, bathroom, parking, etc.)

**Factors typically considered**:
- Room square footage (40-50% weight)
- Bathroom access (20-30% weight)
- Natural light/windows (10-15% weight)
- Closet space (10-15% weight)
- Parking spot (10-15% weight)
- View quality (5-10% weight)

**Example**:
- Total rent: $2,400
- 3 roommates, 100 points total possible

Scoring:
- Room A: 45 points (large, en-suite, parking)
- Room B: 30 points (medium, shared bath)
- Room C: 25 points (small, shared bath, no parking)

Calculations:
- Room A: (45/100) × $2,400 = $1,080
- Room B: (30/100) × $2,400 = $720
- Room C: (25/100) × $2,400 = $600

**Pros**:
- Most comprehensive fairness
- Accounts for quality and quantity
- Customizable to specific apartment
- Creates consensus through discussion

**Cons**:
- Subjective scoring can cause disagreement
- Complex to set up initially
- May over-complicate simple situations
- Requires group buy-in

**Best for**: Apartments with varied rooms and amenities where simple methods feel unfair

### 5. Market-Based Method

**How it works**: Each roommate bids on rooms they want

**Process**:
1. Everyone submits sealed bids for each room
2. Each person assigned to room where their bid is highest
3. Everyone pays their bid amount
4. Difference between bids and total rent is redistributed equally

**Example**:
- Total rent: $2,400
- Room A bids: Alice $1,000, Bob $900, Carol $800
- Room B bids: Alice $800, Bob $850, Carol $700
- Room C bids: Alice $600, Bob $650, Carol $900

Assignments:
- Alice gets Room A ($1,000)
- Bob gets Room B ($850)
- Carol gets Room C ($900)
- Total bids: $2,750
- Surplus: $350
- Redistribution: $350 / 3 = $117 each

Final rents:
- Alice: $1,000 - $117 = $883
- Bob: $850 - $117 = $733
- Carol: $900 - $117 = $783

**Pros**:
- Everyone reveals their true preferences
- Economically efficient allocation
- Minimizes regret
- Self-correcting for fairness

**Cons**:
- Complex process
- Requires understanding economics
- Can create winner's curse
- May disadvantage less strategic participants

**Best for**: Groups comfortable with game theory; rooms with complex trade-offs

### 6. Income-Based Split

**How it works**: Pay proportional to income

**Formula**:
\`\`\`
Person's share = (Their Income / Total Group Income) × Total Rent
\`\`\`

**Example**:
- Total rent: $2,400
- Alice income: $50,000
- Bob income: $60,000
- Carol income: $70,000
- Total income: $180,000

Calculations:
- Alice: ($50k/$180k) × $2,400 = $667
- Bob: ($60k/$180k) × $2,400 = $800
- Carol: ($70k/$180k) × $2,400 = $933

**Pros**:
- Accounts for ability to pay
- Fair when incomes vary widely
- Maintains housing quality for all
- Compassionate approach

**Cons**:
- Requires income disclosure (privacy concern)
- Doesn't correlate with space usage
- May create resentment
- Can disincentivize higher earners

**Best for**: Close friends/couples with significant income disparities who prioritize collective welfare

## Special Situations and Adjustments

### Couples in Shared Housing

When a couple shares a room:

**Option 1: Per Person Basis**
- Couple pays 2× their proportional share
- Fair if rent is truly per person
- Example: 4 people total, couple pays 50% of rent

**Option 2: Per Room Basis**
- Couple's room treated as single unit
- Adjust for increased bathroom/kitchen usage
- Example: 3 rooms total, couple pays 33% + usage premium (e.g., 40% total)

**Option 3: Hybrid**
- Split common areas per person
- Split bedroom space per room
- Example: Couple pays 50% of common + 33% of bedroom allocation

**Recommendation**: Discuss upfront and document agreement in writing. Most fair: per-person for utilities and shared areas, per-room for private space.

### Master Bedrooms and En-Suite Bathrooms

Master suites command premium rent:

**Bathroom Premium**: 15-30% above basic bedroom split
- **Shared bathroom**: No premium
- **Shared with one other**: 10-15% premium
- **Private bathroom**: 25-35% premium

**Calculation Method**:
1. Calculate base bedroom rent by square footage
2. Add bathroom value (typically 20% of base)
3. Adjust other rooms down proportionally

**Example**:
- Total rent: $2,400
- Master (200 sq ft + en-suite): Base $1,000 + 25% = $1,250
- Bedroom 2 (150 sq ft): $750
- Bedroom 3 (100 sq ft): $400
- Total: $2,400

### Parking Spaces

Parking value varies by location:

**Urban areas**: $50-$200/month premium
**Suburban areas**: $25-$75/month premium
**Rural areas**: $0-$25/month premium

**Allocation options**:
1. **Add to rent**: Person with parking pays premium
2. **Separate charge**: Parking paid separately, not included in rent split
3. **Rotate**: Share parking and split cost equally
4. **Utility-based**: Charge based on who has a car (non-drivers pay $0)

**Recommendation**: Treat parking as separate line item for clarity

### Differences in Occupancy Time

What if someone is gone frequently?

**General rule**: Rent covers the right to the space, not actual usage
- Business traveler still pays full share
- Part-time resident who keeps the room still pays full share
- Only exception: Temporary subletting with landlord permission

**Utility adjustment**: Consider separate utility splits based on actual usage
- Lower utility share for someone away often
- Keep rent split unchanged
- Document in roommate agreement

### Renovations and Improvements

If one roommate improves a room:

**Temporary improvements**:
- Paid by occupant
- No rent adjustment
- Removed upon move-out

**Permanent improvements** (with landlord permission):
- May justify rent reduction
- Negotiate value with roommates
- Document in writing
- Consider reimbursement if improves property value

## Step-by-Step: Implementing Your Rent Split

### Step 1: Measure Everything (Week 1)

Create a spreadsheet documenting:

**For each bedroom**:
- Length and width (measure to nearest inch)
- Square footage
- Closet dimensions
- Window count and size
- Natural light assessment
- Outlet count
- Any unique features

**For bathrooms**:
- Private, shared with one, or shared with all
- Size (if assigning square footage)
- Bathroom features (tub, shower, double sinks)

**For common amenities**:
- Parking spaces and assignments
- Storage units
- Balconies/patios
- Views

**Tools needed**:
- Tape measure
- Camera for documentation
- Floor plan or sketch
- Spreadsheet for tracking

### Step 2: Choose Your Method (Week 1)

Have a house meeting to discuss:

**Present options**:
- Explain 2-3 methods that could work
- Show sample calculations for each
- Discuss pros and cons

**Consider preferences**:
- How much complexity is acceptable?
- What feels fair to everyone?
- Any special circumstances?

**Reach consensus**:
- Vote if needed
- Document chosen method
- Agree on weights if using factor method

### Step 3: Calculate Initial Split (Week 1)

**Run the numbers**:
- Use chosen method to calculate each share
- Round to nearest dollar
- Verify total equals actual rent
- Adjust for rounding errors if needed

**Sanity check**:
- Does anyone's share feel unfair?
- Are adjustments needed?
- Run alternative scenarios

**Get agreement**:
- Everyone must approve their share
- Address concerns before finalizing
- No one should feel resentful

### Step 4: Document Everything (Week 2)

Create a roommate agreement including:

**Rent split terms**:
- Method used and rationale
- Each person's monthly amount
- Due date and payment method
- Utilities split (same method or different)

**Room assignments**:
- Who has which bedroom
- Bathroom assignments
- Parking assignments
- Any rotation schedules

**Adjustment clauses**:
- How to handle new roommates
- Process for switching rooms
- Annual review and adjustment
- Conflict resolution procedure

**Signatures**:
- All roommates sign
- Date the agreement
- Keep copies for everyone
- Store original safely

### Step 5: Set Up Payment System (Week 2)

Choose payment method:

**Option 1: One person pays landlord**
- Roommates pay designated person
- That person pays total rent
- Requires trust and organization
- Use Venmo/Zelle with rent payment notes

**Option 2: Everyone pays proportionally**
- Each person pays landlord directly
- Landlord must accept multiple payments
- More transparent
- Requires landlord cooperation

**Recommendation**: Use payment apps with:
- Automatic recurring payments
- Clear payment notes
- Request reminders
- Splitting features

Popular apps:
- Venmo (free for bank accounts)
- Zelle (bank-integrated, free)
- PayPal (small fees for credit cards)
- Splitwise (tracks shared expenses)

### Step 6: Review Periodically (Ongoing)

**Monthly**:
- Verify everyone paid on time
- Address any payment issues
- Track utility costs

**Quarterly**:
- Check if arrangement still feels fair
- Discuss any concerns
- Adjust if needed

**Annually** (or at lease renewal):
- Formal review of rent split
- Adjust for rent increases
- Consider room swaps
- Update roommate agreement

## Handling Common Conflicts

### "My room is smaller but I'm paying the same"

**Resolution steps**:
1. Acknowledge the concern
2. Measure rooms accurately
3. Show calculation using appropriate method
4. Implement proportional split
5. Document new arrangement

**Prevention**: Use size-based method from start

### "You have an en-suite bathroom, I have to share"

**Resolution steps**:
1. Quantify bathroom value (typically 20-30% premium)
2. Calculate adjusted rent split
3. Retroactive adjustment may be negotiated
4. Update agreement

**Prevention**: Always account for private bathrooms in initial split

### "You're never home, why do I pay the same?"

**Response**:
- Rent pays for right to space, not usage
- Usage-based split would be impossible to track fairly
- Utilities can be adjusted for actual usage
- Offer to help with utilities if gone >50% of time

**Exception**: If someone literally subletting while away, different rules apply

### "I want to switch rooms"

**Process**:
1. Both parties must agree
2. Recalculate rent split for new arrangement
3. Set effective date for switch
4. Update roommate agreement
5. Notify landlord if required by lease

**Auction option**: Let roommates "bid" for room switches
- Current occupant has right to match highest bid
- Winning bidder pays difference in rents

### "A new roommate is moving in"

**Process**:
1. Calculate rent split for 4 instead of 3 (or new number)
2. Assign new roommate to room
3. Recalculate everyone's shares
4. Existing roommates benefit from lower individual costs
5. Update roommate agreement
6. Landlord must approve new tenant

## Financial Best Practices

### 1. Keep Rent Separate from Friendship

**Do**:
- Treat it as a business arrangement
- Document everything in writing
- Be professional about payments
- Address issues promptly

**Don't**:
- Assume "it'll be fine" without discussion
- Mix personal feelings with financial obligations
- Let payments slide because you're friends
- Avoid difficult conversations

### 2. Build in Buffers

**Security cushion**:
- Each roommate has emergency fund
- Equivalent to 2-3 months' rent share
- Covers unexpected job loss
- Prevents leaving others hanging

**Joint slush fund** (optional):
- Small monthly contribution ($10-25 each)
- Covers household purchases
- Emergency taxi fund
- Reduces nickel-and-diming

### 3. Track Shared Expenses

Beyond rent, track:
- Utilities (electric, gas, water, internet)
- Cleaning supplies
- Paper products
- Shared groceries
- Furniture for common areas

**Use apps**:
- Splitwise (best for ongoing shared expenses)
- Venmo (built-in splitting)
- Google Sheets (free, customizable)

### 4. Plan for Rent Increases

**When landlord raises rent**:

**Option 1**: Split increase equally
- Everyone pays proportional increase
- Maintains existing fairness
- Example: 5% increase means everyone's share goes up 5%

**Option 2**: Re-evaluate split
- Use rent increase as opportunity to adjust
- Consider if market has changed
- Account for wear/improvements

**Option 3**: Negotiate room swaps
- Person most affected by increase might want cheaper room
- Auction system can reveal true preferences

## Technology Tools for Rent Splitting

### Rent Split Calculators

**Splitwise** (https://www.splitwise.com)
- Tracks all shared expenses
- Settles balances automatically
- Mobile app available
- Free for basic features

**Splitwise Rent-Splitting Calculator** (https://www.splitwise.com/calculators/rent)
- Specialized rent calculator
- Multiple methods supported
- Free to use

**The New York Times Rent Division Calculator**
- Interactive tool
- Fair division algorithm
- Based on game theory

**Spliddit** (http://spliddit.org)
- Academic algorithm for fairness
- Based on auction method
- Provably envy-free allocation

### Payment Platforms

**Venmo**
- Most popular among young adults
- Social feed (can be private)
- Free for bank accounts
- Instant transfer with debit (small fee)

**Zelle**
- Bank-integrated
- No fees
- Fast transfers
- Growing adoption

**PayPal**
- Widely accepted
- Buyer protection
- Fees for credit cards
- Splitting features

### Organization Tools

**Google Sheets**
- Free collaborative spreadsheets
- Track rent history
- Monitor utilities
- Calculate splits

**Asana / Trello**
- Task management for household chores
- Transparent responsibility tracking
- Mobile apps

**OurHome**
- Chore tracking app
- Point-based reward system
- Calendar for responsibilities

## Legal Considerations

### Lease vs. Roommate Agreement

**Master Lease**:
- Legal contract with landlord
- May list all tenants
- Or may list one "master tenant"
- Determines legal liability

**Roommate Agreement**:
- Contract between roommates
- Not binding on landlord
- Governs internal arrangements
- Important for dispute resolution

### Joint and Several Liability

Most leases include "joint and several liability":
- All tenants responsible for full rent
- Landlord can pursue any/all tenants
- One roommate's non-payment affects everyone
- Eviction of one can mean eviction of all

**Implication**: Choose roommates carefully based on financial responsibility, not just friendship

### Security Deposit Allocation

**At move-in**:
- Agree how to split deposit payment
- Usually matches rent split
- Document contributions

**At move-out**:
- Damages charged to responsible party when possible
- General wear deducted proportionally
- Return reflects contributions

**Best practice**: Walkthrough together, agree on damages, document everything

### Subletting and Assignment

**With landlord permission**:
- Calculate new rent split
- Original tenant may keep some "equity" in room
- Subtenant pays agreed amount
- Document in writing

**Without permission**:
- Violates most leases
- Risk of eviction
- Original tenant still liable
- Don't do it

## Conclusion

Fair rent splitting is essential for harmonious roommate relationships. By choosing an appropriate method, documenting agreements, and communicating openly, you can avoid one of the most common sources of roommate conflict.

**Key principles**:
1. **Measure objectively**: Use actual square footage and verifiable factors
2. **Choose appropriate method**: Match complexity to situation
3. **Get consensus**: Everyone must agree the split is fair
4. **Document everything**: Written agreements prevent future disputes
5. **Communicate regularly**: Address issues before they become problems
6. **Be flexible**: Adjust as situations change
7. **Use technology**: Apps and tools make tracking easier

Remember: A fair rent split isn't just about math—it's about everyone feeling respected and valued. Take the time to implement a system that works for your specific household, and you'll build a foundation for a positive living experience.

Use this calculator to explore different splitting methods and find what works best for your situation. A little effort upfront prevents major conflicts down the road.
`,
  },
  calculator: {
    fields: [
      {
        name: 'totalRent',
        label: 'Total Monthly Rent ($)',
        type: 'number',
        defaultValue: 2400,
      },
      {
        name: 'room1Size',
        label: 'Room 1 Square Feet',
        type: 'number',
        defaultValue: 150,
      },
      {
        name: 'room2Size',
        label: 'Room 2 Square Feet',
        type: 'number',
        defaultValue: 120,
      },
      {
        name: 'room3Size',
        label: 'Room 3 Square Feet',
        type: 'number',
        defaultValue: 130,
      },
      {
        name: 'room1Bathroom',
        label: 'Room 1 Private Bathroom?',
        type: 'select',
        defaultValue: 'no',
      },
      {
        name: 'room2Bathroom',
        label: 'Room 2 Private Bathroom?',
        type: 'select',
        defaultValue: 'no',
      },
      {
        name: 'room3Bathroom',
        label: 'Room 3 Private Bathroom?',
        type: 'select',
        defaultValue: 'no',
      },
      {
        name: 'bathroomPremium',
        label: 'Private Bathroom Premium (%)',
        type: 'number',
        defaultValue: 25,
      },
    ],
    results: [
      { label: 'Room 1 Rent', isCurrency: true },
      { label: 'Room 2 Rent', isCurrency: true },
      { label: 'Room 3 Rent', isCurrency: true },
      { label: 'Total Allocated', isCurrency: true },
    ],
    calculate: (data) => {
      const {
        totalRent,
        room1Size,
        room2Size,
        room3Size,
        room1Bathroom,
        room2Bathroom,
        room3Bathroom,
        bathroomPremium,
      } = data;
      
      const totalSize = room1Size + room2Size + room3Size;
      
      let room1BaseRent = (room1Size / totalSize) * totalRent;
      let room2BaseRent = (room2Size / totalSize) * totalRent;
      let room3BaseRent = (room3Size / totalSize) * totalRent;
      
      if (room1Bathroom === 'yes') {
        room1BaseRent *= (1 + bathroomPremium / 100);
      }
      if (room2Bathroom === 'yes') {
        room2BaseRent *= (1 + bathroomPremium / 100);
      }
      if (room3Bathroom === 'yes') {
        room3BaseRent *= (1 + bathroomPremium / 100);
      }
      
      const totalAllocated = room1BaseRent + room2BaseRent + room3BaseRent;
      const adjustmentFactor = totalRent / totalAllocated;
      
      const room1FinalRent = room1BaseRent * adjustmentFactor;
      const room2FinalRent = room2BaseRent * adjustmentFactor;
      const room3FinalRent = room3BaseRent * adjustmentFactor;
      
      return [
        { label: 'Room 1 Rent', value: `$${Math.round(room1FinalRent).toLocaleString()}` },
        { label: 'Room 2 Rent', value: `$${Math.round(room2FinalRent).toLocaleString()}` },
        { label: 'Room 3 Rent', value: `$${Math.round(room3FinalRent).toLocaleString()}` },
        { label: 'Total Allocated', value: `$${totalRent.toLocaleString()}` },
      ];
    },
  },
};
