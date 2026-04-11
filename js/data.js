// ── PORTFOLIO DATA ─────────────────────────────────────────
// All 43 stocks with full details, ratings, sector, allocation % and rationale

const STOCKS = [
  // ═══════════ LARGE CAP (18 stocks) ═══════════
  {
    sym: "BEL", name: "Bharat Electronics Ltd", cap: "Large Cap", index: "Nifty 50",
    sector: "Aerospace & Defense", alloc: 5.1,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's premier defence electronics manufacturer and a direct beneficiary of India's defence indigenisation policy. BEL makes radar systems, electronic warfare equipment, and communication systems for all three armed forces. With India's defence budget at ₹6.2L crore and a mandate that 75% of procurement must be domestic, BEL's order book is structurally growing. Its monopoly in several defence electronics segments gives it pricing power no private competitor can challenge.",
    reasons: [
      "Government monopoly in defence electronics — radar, communication systems, electronic warfare equipment",
      "Defence indigenisation policy mandates 75% domestic procurement — direct, irreversible tailwind",
      "Multi-year order book provides 4+ years of revenue visibility with government-guaranteed contracts",
      "Expanding into civilian sectors (solar, EV charging, medical) creates growth beyond core defence"
    ]
  },
  {
    sym: "BHARTIARTL", name: "Bharti Airtel Ltd", cap: "Large Cap", index: "Nifty 50",
    sector: "Telecommunications", alloc: 2.2,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's largest telecom operator filling the portfolio's zero telecom exposure. Airtel commands 550M+ subscribers with India's fastest 5G network covering 5,000+ cities. The telecom sector has consolidated from 10+ operators to 3, restoring oligopolistic pricing power — Airtel's ARPU has risen 35% over two years with significant further upside. 5G enterprise use cases (Industry 4.0, smart cities) and Airtel Africa's 17-country presence create multiple independent growth vectors.",
    reasons: [
      "Portfolio had zero telecom exposure — fills a critical sector gap in essential infrastructure",
      "Oligopolistic market structure (3 players) means pricing power and ARPU growth for years ahead",
      "5G leadership with fastest rollout in India — premium network commands premium tariffs",
      "Airtel Africa (17 countries) adds geographic diversification into fast-growing emerging markets",
      "Defensive characteristics — mobile plans are last thing consumers cut, stabilising portfolio during downturns"
    ]
  },
  {
    sym: "DRREDDY", name: "Dr. Reddy's Laboratories", cap: "Large Cap", index: "Nifty 50",
    sector: "Pharmaceuticals", alloc: 1.4,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "Chosen to diversify the pharma theme beyond SUNPHARMA's domestic-heavy mix. Dr Reddy's derives 40% of revenue from US generics, 25% from India, and 35% from Europe and other markets — a far more geographically balanced model. The company has 15+ biosimilars in development pipeline, which represents a trillion-dollar global opportunity as biologic drugs go off-patent through 2030.",
    reasons: [
      "Diversifies pharma exposure — different geography and product mix from SUNPHARMA",
      "Top 10 US generic drug filer — prime beneficiary of blockbuster drug patent cliff (2024–2030)",
      "15+ biosimilars in pipeline — significant optionality for premium drug revenues",
      "Revenue split US 40% / India 25% / Europe & other 35% — most balanced in Indian pharma"
    ]
  },
  {
    sym: "EICHERMOT", name: "Eicher Motors Ltd", cap: "Large Cap", index: "Nifty 50",
    sector: "Automobiles & Auto Parts", alloc: 4.4,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "Royal Enfield's parent company and the undisputed leader in India's premium motorcycle segment (150cc+). Eicher has created an entirely new premium lifestyle category in a market where motorcycles are traditionally seen as commodity transport. With Royal Enfield expanding internationally and VE Commercial Vehicles growing steadily, Eicher offers both brand moat and cyclical auto exposure.",
    reasons: [
      "Royal Enfield commands 90%+ market share in the 250–750cc premium motorcycle segment — unassailable brand moat",
      "International expansion (Europe, Americas, Southeast Asia) adds diversification beyond Indian market",
      "Premium segment significantly outperforms mass market in margins and demand resilience",
      "VE Commercial Vehicles provides counter-cyclical industrial exposure within same holding"
    ]
  },
  {
    sym: "HCLTECH", name: "HCL Technologies Ltd", cap: "Large Cap", index: "Nifty 50",
    sector: "Software & IT Services", alloc: 2.7,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "The highest-quality large-cap IT stock in the portfolio, rated Outperform vs TCS's Neutral. HCL's product business (software products and platforms) gives it recurring revenue that pure services companies like Infosys lack. Its engineering services division is growing faster than traditional IT outsourcing. HCL offers large-cap stability with mid-cap style growth rates.",
    reasons: [
      "Only Outperform-rated large-cap IT in the portfolio — superior current execution vs peers",
      "Software products business (HCL Software) provides high-margin recurring revenue streams",
      "Engineering services (ER&D) is the fastest-growing IT segment — autonomous vehicles, IoT, aerospace",
      "Strong margins (20%+ EBITDA) with disciplined capital allocation and consistent dividend track record"
    ]
  },
  {
    sym: "HDFCBANK", name: "HDFC Bank Ltd", cap: "Large Cap", index: "Nifty 50",
    sector: "Banking Services", alloc: 4.8,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's largest private bank and the single largest allocation in Step 3 — chosen because it fills the critical private banking gap while offering a rare opportunity: large-cap quality at 5-year P/B low valuations. HDFC-HDFC Bank merger creates a universal bank with unmatched distribution, cross-selling capability, and access to the home loan market. Private banks structurally deliver 2x the RoE of PSU banks over long periods.",
    reasons: [
      "Portfolio had SBIN (PSU bank) but zero private banking — fills the most important sector gap",
      "Largest private bank by all metrics — loans, deposits, branches, market cap",
      "Post-merger universal bank model enables cross-selling across home loans, insurance, and mutual funds",
      "5-year P/B valuation low at time of purchase — quality at a discount, rare for HDFCBANK",
      "8,700+ branch network gives distribution advantage no digital-only bank can match"
    ]
  },
  {
    sym: "HDFCLIFE", name: "HDFC Life Insurance", cap: "Large Cap", index: "Nifty 50",
    sector: "Insurance", alloc: 2.4,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "Life insurance fills a critical portfolio void. India's life insurance penetration at 3.2% of GDP vs 8% globally represents decades of structural growth ahead. HDFCLIFE is the second-largest private life insurer with an unassailable distribution moat through HDFC Bank's 7,000+ branches. Post-COVID protection awareness has structurally increased demand for term insurance — HDFCLIFE's fastest-growing segment.",
    reasons: [
      "Portfolio had zero insurance exposure across 20 original stocks — most glaring structural gap filled",
      "India insurance penetration at 3.2% of GDP vs 8% global average — multi-decade growth runway",
      "HDFC Bank distribution (7,000+ branches) creates unmatched bancassurance moat",
      "All three ratings at maximum: Strong past, Outperform current, Strong Buy future",
      "Protection products (term insurance) growing 25%+ as post-COVID awareness drives demand"
    ]
  },
  {
    sym: "HINDUNILVR", name: "Hindustan Unilever Ltd", cap: "Large Cap", index: "Nifty 50",
    sector: "Personal & Household Products", alloc: 2.9,
    past: "Moderate", current: "Neutral", outlook: "Hold",
    rationale: "HUL is a portfolio stabiliser — its 50+ brands across soaps, shampoos, detergents, and foods are in 90%+ of Indian homes. As a Hold-rated stock, it is retained for its defensive income characteristics and rural consumption exposure rather than aggressive growth. HUL's distribution network of 8M+ retail outlets is a distribution infrastructure that took 80 years to build and provides an impregnable competitive moat.",
    reasons: [
      "50+ brands in 90%+ of Indian homes — truly defensive, recession-proof consumer staples",
      "8M+ retail distribution outlets — a 80-year moat impossible to replicate at any cost",
      "Rural India recovery beneficiary — largest organised FMCG company with deepest rural presence",
      "Held for portfolio ballast and dividend yield — provides stability during market downturns"
    ]
  },
  {
    sym: "ICICIBANK", name: "ICICI Bank Ltd", cap: "Large Cap", index: "Nifty 50",
    sector: "Banking Services", alloc: 2.6,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's second-largest private bank and the best-managed large bank of the past 5 years. ICICIBANK complements HDFCBANK — its stronger corporate banking relationships, superior iMobile digital platform (10M+ users), and aggressive Tier 2/3 city expansion fill the gaps in HDFCBANK's retail-heavy model. Loan book growing at 16%+ CAGR with NPA ratios at multi-year lows.",
    reasons: [
      "Pairs with HDFCBANK for complete private banking duopoly coverage — 30%+ of private sector assets",
      "Best operational turnaround of any large Indian bank — NPA halved, RoE doubled since 2018",
      "Corporate banking strength complements HDFCBANK's retail focus — complementary, not redundant",
      "iMobile Pay (10M+ users) best digital banking platform in India — future-proofed distribution model"
    ]
  },
  {
    sym: "M&M", name: "Mahindra & Mahindra Ltd", cap: "Large Cap", index: "Nifty 50",
    sector: "Automobiles & Auto Parts", alloc: 3.5,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "M&M is the auto sector's best EV story — its SUV electric vehicles have waiting lists extending 12–18 months, validating both product quality and brand strength. M&M's diversified conglomerate structure (Mahindra Finance, Tech Mahindra, Club Mahindra) provides multiple growth options beyond core automotive. Its rural tractor business gives exposure to agricultural India.",
    reasons: [
      "EV leadership in SUV segment — BE 6, XEV 9e have industry-leading waiting periods",
      "Farm equipment (tractors) division provides rural India and agricultural cycle exposure",
      "Conglomerate structure — Mahindra Finance, Tech Mahindra create diversified value",
      "Strong exports growth in South Africa and Australia validates global competitiveness"
    ]
  },
  {
    sym: "NTPC", name: "NTPC Ltd", cap: "Large Cap", index: "Nifty 50",
    sector: "Electrical Utilities & IPPs", alloc: 1.0,
    past: "Moderate", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's largest power generator completes the power sector coverage — POWERGRID transmits, TATAPOWER distributes, and NTPC generates. Its regulatory model guarantees 15.5% RoE regardless of fuel prices, providing earnings certainty rare in the energy sector. NTPC's 25 GW renewable capacity target and NTPC Green Energy IPO represent the green energy pivot that drives the Strong Buy future outlook despite moderate past performance.",
    reasons: [
      "Largest power generator — 25% of India's electricity supply with government-guaranteed returns",
      "Regulatory model ensures 15.5% RoE — de-risked earnings unlike merchant power companies",
      "25 GW renewable energy target by 2032 — transforming from thermal to clean energy play",
      "Completes power value chain: POWERGRID (transmission) + TATAPOWER (distribution) + NTPC (generation)"
    ]
  },
  {
    sym: "ONGC", name: "ONGC Ltd", cap: "Large Cap", index: "Nifty 50",
    sector: "Oil & Gas", alloc: 0.7,
    past: "Moderate", current: "Neutral", outlook: "Caution",
    rationale: "Retained as a minimal position (26 of original 126 shares) purely for dividend income of ~5% yield. The vast majority was exited due to Caution outlook from energy transition headwinds and government subsidy burden. This residual holding is a conscious decision to retain passive income without meaningful capital-at-risk. No further additions planned.",
    reasons: [
      "Retained 26 shares ONLY for ~5% dividend yield — income holding, not growth position",
      "79% of original position exited — Caution outlook due to energy transition headwinds",
      "Government subsidy burden makes earnings unpredictable and policy-dependent",
      "No further additions — position to be fully exited when dividend alternatives are found"
    ]
  },
  {
    sym: "POWERGRID", name: "Power Grid Corp of India", cap: "Large Cap", index: "Nifty 50",
    sector: "Electrical Utilities & IPPs", alloc: 3.2,
    past: "Moderate", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's transmission backbone — POWERGRID owns and operates 170,000+ km of high-voltage transmission lines carrying electricity from generators to distribution companies. It earns regulated tariff income with 15.5% RoE guaranteed by CERC — making its revenue almost as predictable as a government bond, but with equity-like capital appreciation. India's renewable energy transition requires massive new transmission infrastructure — POWERGRID is the sole builder.",
    reasons: [
      "Regulated monopoly — 170,000+ km of transmission infrastructure with guaranteed 15.5% RoE",
      "Renewable energy transition requires ₹2.5L crore in new T&D investment — POWERGRID builds all of it",
      "Predictable dividend yield (5%+) from regulated earnings — defensive income in growth portfolio",
      "Outperform current rating despite utility business model shows exceptional operational execution"
    ]
  },
  {
    sym: "SBIN", name: "State Bank of India", cap: "Large Cap", index: "Nifty 50",
    sector: "Banking Services", alloc: 4.5,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's largest bank by assets and the anchor of the banking thesis. SBIN serves 500M+ customers — more than the population of most countries. Its complete turnaround from NPA-stressed to clean books (GNPA below 3%) while maintaining 35%+ of India's banking infrastructure makes it the safest large-cap banking bet. The sole PSU bank retained after CANBK trim because of its superior Strong/Outperform/Strong Buy triple rating.",
    reasons: [
      "500M+ customers — India's largest financial institution and economic barometer",
      "Complete NPA turnaround from 10%+ GNPA to below 3% — decade's best banking transformation",
      "35% of India's banking infrastructure — ATMs, branches, rural banking reach no private bank has",
      "Only PSU bank with Strong/Outperform/Strong Buy triple rating — the best in its class"
    ]
  },
  {
    sym: "SUNPHARMA", name: "Sun Pharmaceutical Industries", cap: "Large Cap", index: "Nifty 50",
    sector: "Pharmaceuticals", alloc: 2.9,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's largest pharma company and the core pharma holding. SUNPHARMA's dominance in domestic branded generics (specialty pharma, dermatology, ophthalmology) gives it premium pricing power in India while its US specialty pharma business (Ilumya, Cequa) delivers high-margin branded drug revenues. All three performance ratings at maximum quality — the strongest possible fundamental profile.",
    reasons: [
      "India's largest pharma company — unassailable brand portfolio in specialty and chronic therapies",
      "US specialty branded drugs (Ilumya for psoriasis, Cequa for dry eyes) — high-margin premium revenues",
      "Domestic India market dominance with 8%+ prescription market share across key therapeutic areas",
      "All three ratings at maximum: Strong past CAGR, Outperform current, Strong Buy future"
    ]
  },
  {
    sym: "TCS", name: "Tata Consultancy Services", cap: "Large Cap", index: "Nifty 50",
    sector: "Software & IT Services", alloc: 0.7,
    past: "Strong", current: "Neutral", outlook: "Hold",
    rationale: "Retained as a minimal anchor position (3 of original 8 shares) as a blue-chip IT brand in the portfolio. TCS's Hold outlook reflects slowing revenue growth (4–6% vs 15%+ peak), but its 20+ year track record of quality and dividend consistency justify keeping a token holding. Capital was rotated into PERSISTENT (higher growth IT) and HCLTECH (Outperform rated). Not a growth position — held as a quality anchor.",
    reasons: [
      "Token anchor position — 3 shares retained for quality and dividend, not for growth",
      "Hold outlook reflects slowing revenue growth — BFSI client spending caution globally",
      "Capital rotated to PERSISTENT (25%+ CAGR) and HCLTECH (Outperform) for IT growth",
      "World-class execution quality and 20-year track record justify minimal anchor position"
    ]
  },
  {
    sym: "ULTRACEMCO", name: "UltraTech Cement Ltd", cap: "Large Cap", index: "Nifty 50",
    sector: "Construction Materials", alloc: 3.4,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's largest cement company with 150+ MTPA capacity — a direct play on India's infrastructure and housing boom. ULTRACEMCO's pan-India manufacturing footprint (28 integrated plants) gives it significant cost advantages through freight optimization. India's government infrastructure programme (Gati Shakti, PMAY housing for all) ensures secular demand growth for cement for the next decade.",
    reasons: [
      "India's largest cement manufacturer — 150+ MTPA capacity, impossible to replicate scale",
      "28 integrated pan-India plants provide freight cost advantages over regional players",
      "Direct beneficiary of government infrastructure programme (₹10L crore Gati Shakti)",
      "Housing for All (PMAY) scheme adds 40M+ urban housing units — multi-year demand visibility"
    ]
  },

  // ═══════════ MID CAP (16 stocks) ═══════════
  {
    sym: "ASHOKLEY", name: "Ashok Leyland Ltd", cap: "Mid Cap", index: "Nifty Midcap 50",
    sector: "Machinery, Equipment & Components", alloc: 5.5,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's second-largest commercial vehicle manufacturer and the original core mid-cap holding. Ashok Leyland's trucks, buses, and LCVs are the arteries of Indian logistics. Its EV bus business (Switch Mobility) is winning government contracts for urban public transport electrification. The commercial vehicle cycle is in a sustained upcycle driven by infrastructure construction activity.",
    reasons: [
      "India's second-largest CV manufacturer — trucks and buses are India's logistics backbone",
      "Strong commercial vehicle upcycle driven by infrastructure spending and fleet replacement",
      "Switch Mobility (EV bus subsidiary) winning government electric bus tenders across cities",
      "Defence vehicle division benefits from the same indigenisation theme as BEL and HAL"
    ]
  },
  {
    sym: "CANBK", name: "Canara Bank", cap: "Mid Cap", index: "Nifty Next 50",
    sector: "Banking Services", alloc: 1.9,
    past: "Moderate", current: "Neutral", outlook: "Hold",
    rationale: "Retained as a reduced position (142 of original 342 shares) purely for ~5% dividend yield. Like ONGC, the vast majority was trimmed due to PSU bank structural disadvantages — lower RoE vs private banks, higher NPA risk, policy-dependent management decisions. The 142 shares provide dividend income while new capital is better deployed in HDFCBANK and ICICIBANK.",
    reasons: [
      "Reduced to 142 shares (from 342) — trimmed to reduce PSU bank concentration",
      "Retained for ~5% dividend yield — income position, not growth position",
      "PSU banks structurally deliver 12% RoE vs 18% for private banks — structural gap",
      "New private banking exposure (HDFCBANK, ICICIBANK) is superior quality replacement"
    ]
  },
  {
    sym: "CGPOWER", name: "CG Power & Industrial Solutions", cap: "Mid Cap", index: "Nifty Next 50",
    sector: "Machinery & Electricals", alloc: 1.3,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "Power transformer and industrial motor manufacturer at the intersection of India's electrification drive and manufacturing renaissance. After the Murugappa Group takeover in 2020, CG Power underwent a complete turnaround — EBITDA margins went from negative to 16%+ and the order book grew 40%+ YoY. Additionally expanding into semiconductor packaging and railway components — two more PLI-backed growth sectors.",
    reasons: [
      "India's power sector capex at multi-decade high — direct equipment supplier for all new capacity",
      "Murugappa Group turnaround story: EBITDA margins from negative to 16%+, order book up 40%",
      "Semiconductor packaging expansion — diversifying into PLI-backed electronics manufacturing",
      "Connects power chain: POWERGRID orders infrastructure, CGPOWER builds the equipment"
    ]
  },
  {
    sym: "DLF", name: "DLF Ltd", cap: "Mid Cap", index: "Nifty Next 50",
    sector: "Real Estate Operations", alloc: 1.2,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's largest real estate developer chosen to fill the portfolio's zero real estate exposure. DLF's 75-year track record, 10,000+ acres of land bank, and dual model (residential launches + DLF Cyber City commercial rental income) provide both growth and annuity income. Recent launches in Gurugram have been oversubscribed within days — evidence of deep demand at DLF's premium price points.",
    reasons: [
      "Portfolio had zero real estate exposure — fills critical gap in a major Indian economic sector",
      "Dual model: high-margin residential launches + ₹4,000+ Cr annual rental income from DLF Cyber City",
      "Recent launches oversubscribed within days — validates pricing power and brand strength",
      "10,000+ acres of land bank across NCR, Chennai, Mumbai — decades of development pipeline"
    ]
  },
  {
    sym: "FINCABLES", name: "Finolex Cables Ltd", cap: "Mid Cap", index: "Nifty Next 50",
    sector: "Construction Materials", alloc: 2.7,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "Wires and cables manufacturer benefiting from India's massive electrification and housing construction boom. Every new building, solar installation, and EV charging station requires cables — Finolex is the market leader in this essential component. Most recently added position at ₹847.75 per share. Strong fundamentals across all three rating parameters.",
    reasons: [
      "Cables are essential to every construction, electrification, and EV infrastructure project",
      "Direct beneficiary of housing, solar, and EV charging infrastructure build-out",
      "Market leadership in retail wiring segment with strong brand recognition",
      "All three ratings at maximum — Strong past, Outperform current, Strong Buy future"
    ]
  },
  {
    sym: "GAIL", name: "GAIL (India) Ltd", cap: "Mid Cap", index: "Nifty Next 50",
    sector: "Natural Gas Utilities", alloc: 2.9,
    past: "Moderate", current: "Neutral", outlook: "Hold",
    rationale: "India's largest natural gas distributor and pipeline company. Held with a Hold outlook as a transitional energy position — natural gas is a bridge fuel between fossil fuels and full renewable energy, making GAIL's long-term outlook uncertain but near-term stable. Pipeline business has regulated returns, and the growing City Gas Distribution network adds consumer-facing growth. Monitored quarterly for further action.",
    reasons: [
      "Natural gas is bridge fuel in India's energy transition — meaningful medium-term role",
      "Pipeline infrastructure monopoly provides regulated, predictable tariff income",
      "City Gas Distribution expansion creating new consumer-facing growth avenue",
      "Held as Hold — monitored for signs of regulatory changes that could affect tariffs"
    ]
  },
  {
    sym: "HAL", name: "Hindustan Aeronautics Ltd", cap: "Mid Cap", index: "Nifty Next 50",
    sector: "Aerospace & Defense", alloc: 2.0,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's only aircraft and helicopter manufacturer — a strategic monopoly that cannot be replicated by private players. HAL's ₹94,000 Cr order book provides over 6 years of revenue visibility with government-guaranteed contracts. Tejas Mk1A (83 aircraft ordered), ALH Dhruv helicopters, and upcoming Tejas Mk2 create a multi-decade production pipeline. HAL + BEL form a complete air defence manufacturing duo.",
    reasons: [
      "India's sole aircraft maker — strategic monopoly with 6+ years of pre-booked revenue (₹94,000 Cr)",
      "Tejas fighter jet programme is 20-year commitment — 200+ aircraft to be delivered to IAF",
      "Pairs with BEL: BEL makes avionics/electronics, HAL makes the airframes and engines",
      "Naval helicopter and engine programmes add additional long-term revenue streams"
    ]
  },
  {
    sym: "HDFCAMC", name: "HDFC Asset Management Company", cap: "Mid Cap", index: "Nifty Next 50",
    sector: "Investment Banking & Asset Management", alloc: 1.8,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's largest AMC by AUM with ₹7L+ crore managed assets and growing at 18% CAGR. The mutual fund industry AUM is on a multi-decade growth trajectory as India's savings shift from bank FDs to market-linked products. HDFCAMC earns fee income that scales proportionally with AUM — a capital-light, 35%+ margin business that benefits from bull and bear markets alike through SIP inflows.",
    reasons: [
      "Largest Indian AMC managing ₹7L+ Cr AUM growing at 18% CAGR — scale moat",
      "Capital-light 35%+ EBITDA margin model — revenue grows with markets, costs stay flat",
      "India's SIP culture adding ₹20,000+ Cr monthly — predictable recurring fee income",
      "Portfolio had zero wealth management / financial services exposure — directly fills that gap"
    ]
  },
  {
    sym: "ICICIGI", name: "ICICI Lombard General Insurance", cap: "Mid Cap", index: "Nifty Midcap 50",
    sector: "Insurance", alloc: 1.7,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "General insurance to complement HDFCLIFE's life insurance — two completely different businesses, zero product overlap. ICICIGI is India's largest private general insurer covering motor, health, property, and crop. Motor insurance is mandatory by law for all vehicles, providing base revenue that grows with India's vehicle fleet. Health insurance is growing at 25%+ as post-COVID awareness drives demand.",
    reasons: [
      "Completes insurance coverage: HDFCLIFE (life) + ICICIGI (general) = complete insurance theme",
      "Motor insurance mandatory by law — revenue grows automatically with India's vehicle fleet",
      "Health insurance premiums growing 25%+ as COVID-driven awareness permanently shifted behaviour",
      "India general insurance penetration at 1% of GDP vs 3–4% in developed markets — massive gap to close"
    ]
  },
  {
    sym: "IOC", name: "Indian Oil Corporation", cap: "Mid Cap", index: "Nifty Next 50",
    sector: "Oil & Gas", alloc: 0.9,
    past: "Moderate", current: "Neutral", outlook: "Caution",
    rationale: "Held as a minimal residual position (64 of original 264 shares) for dividend income only. 76% of the position was exited due to Caution outlook from refining margin compression and energy transition headwinds. Like ONGC, the retained shares provide ~5% dividend yield. No further additions — this position will be fully exited when the dividend case deteriorates.",
    reasons: [
      "Reduced to 64 shares (from 264) — retaining minimal position for ~5% dividend only",
      "76% exited: Caution outlook due to refining margin compression and energy transition risk",
      "Government price controls make earnings policy-dependent and unpredictable",
      "Future capital freed from this position will be redeployed into cleaner energy themes"
    ]
  },
  {
    sym: "LTM", name: "LTIMindtree Ltd", cap: "Mid Cap", index: "Nifty Next 50",
    sector: "Software & IT Services", alloc: 2.6,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "The merged entity of L&T Infotech and Mindtree creates a specialised IT services company with a strong financial services (BFSI) and manufacturing client base. LTIMindtree's focus on digital transformation and cloud migration for large enterprises differentiates it from commodity IT outsourcing. Outperform current rating and Strong Buy future outlook make it the best mid-cap IT holding.",
    reasons: [
      "Merged entity combining L&T Infotech's BFSI strength with Mindtree's digital engineering capability",
      "Strong Buy + Outperform — best forward-looking IT stock in portfolio after HCLTECH",
      "BFSI vertical (30%+ revenue) benefits from global financial services digitalisation wave",
      "L&T parentage provides corporate governance quality and access to Tier 1 enterprise clients"
    ]
  },
  {
    sym: "PERSISTENT", name: "Persistent Systems Ltd", cap: "Mid Cap", index: "Nifty Midcap 50",
    sector: "Software & IT Services", alloc: 2.1,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "The highest-growth IT stock in the portfolio at 25%+ revenue CAGR — 3x faster than large-cap IT peers. Persistent specialises in digital engineering and AI platform development for ISVs (Independent Software Vendors) — the fastest-spending segment of global IT. As enterprises embed AI into their products, Persistent's specialisation in product engineering becomes increasingly valuable.",
    reasons: [
      "25%+ revenue CAGR — 3x faster growth than TCS, Infosys at a mid-cap size advantage",
      "Digital engineering and AI integration for ISVs — highest-growth segment of global IT",
      "Crossed $1B quarterly revenue milestone — validates scale and client quality",
      "Adds high-growth mid-cap IT dimension alongside large-cap IT anchors (HCLTECH, LTM, TCS)"
    ]
  },
  {
    sym: "PIDILITIND", name: "Pidilite Industries Ltd", cap: "Mid Cap", index: "Nifty Next 50",
    sector: "Chemicals", alloc: 1.3,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "Maker of Fevicol, M-Seal, Dr. Fixit, and Fevikwik — brands so dominant that Fevicol has become synonymous with adhesive in India. This 60-year brand moat is essentially impossible to replicate. Every building constructed in India uses Pidilite products — making it an indirect beneficiary of the same construction boom that drives ULTRACEMCO and POWERGRID. Delivered 20%+ CAGR over 15 years with exceptional consistency.",
    reasons: [
      "Portfolio had zero chemicals exposure — Pidilite fills this with the highest-moat chemicals pick",
      "Fevicol has 70%+ adhesives market share — 60-year brand impossible to dislodge",
      "Benefits from India's construction boom without construction's cyclicality — adhesives are non-negotiable",
      "20%+ CAGR over 15 years with minimal earnings volatility — true long-term compounder"
    ]
  },
  {
    sym: "TATAPOWER", name: "Tata Power Co. Ltd", cap: "Mid Cap", index: "Nifty Next 50",
    sector: "Electrical Utilities & IPPs", alloc: 3.4,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "The most diversified power company in India — generation (coal + renewable), distribution (Mumbai and Delhi), solar EPC, and EV charging infrastructure. Tata Power's renewable energy business is growing at 40%+ CAGR. Its EV charging network (10,000+ charging points) is the largest in India, positioning it uniquely at the intersection of energy and mobility.",
    reasons: [
      "Only power company covering generation + distribution + renewables + EV charging — full ecosystem",
      "Renewable energy (solar, wind) business growing at 40%+ CAGR — green energy pure play within",
      "Largest EV charging network in India (10,000+ charging points) — energy-mobility convergence play",
      "Tata Group parentage ensures governance quality and access to capital for growth projects"
    ]
  },
  {
    sym: "WAAREEENER", name: "Waaree Energies Ltd", cap: "Mid Cap", index: "Nifty Midcap 50",
    sector: "Renewable Energy", alloc: 1.3,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's largest solar panel manufacturer filling the portfolio's zero renewable manufacturing exposure. TATAPOWER generates solar energy, but WAAREEENER makes the panels — the missing link in the energy value chain. India must install 300 GW more solar capacity by 2030 (currently at 200 GW of 500 GW target), requiring enormous domestic panel supply. PLI scheme provides ₹24,000 Cr of government incentives to domestic manufacturers like Waaree.",
    reasons: [
      "India's largest solar panel manufacturer — every solar plant needs Waaree's modules",
      "PLI scheme recipient — 6+ GW approved manufacturing capacity with government backing",
      "US exports started — American IRA creates massive solar demand that needs Indian supply",
      "Completes energy chain: NTPC + TATAPOWER (generate) + WAAREEENER (manufactures the panels)"
    ]
  },

  // ═══════════ SMALL CAP (9 stocks) ═══════════
  {
    sym: "ANGELONE", name: "Angel One Ltd", cap: "Small Cap", index: "Nifty Smallcap 50",
    sector: "Investment Banking & Services", alloc: 1.4,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's leading discount broker with 25M+ active clients — chosen to pair with CDSL in capturing the capital markets democratisation theme. CDSL is the infrastructure (depository), Angel One is the distribution (broker) — same theme, different value chain point. As India's demat accounts grow from 17 crore to a projected 30 crore, both companies benefit proportionally.",
    reasons: [
      "Pairs with CDSL: CDSL holds securities, Angel One helps investors buy them — complete capital markets pair",
      "25M+ active clients — top 3 discount broker in India's fastest-growing financial category",
      "Successfully diversified into mutual fund distribution, loans, and wealth management",
      "India demat account growth from 4 crore (2019) to 17 crore (2025) — runway to 30 crore"
    ]
  },
  {
    sym: "BRIGADE", name: "Brigade Enterprises Ltd", cap: "Small Cap", index: "Nifty Next Smallcap 50",
    sector: "Real Estate Operations", alloc: 1.4,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "South India's dominant real estate developer chosen to pair with DLF (North India). Brigade + DLF means the portfolio captures India's urbanisation regardless of which region leads — geographic diversification within the real estate theme. Brigade's Bengaluru market (Asia's fastest-growing office market) is driven by IT/ITES expansion. Revenue from commercial office and mall rentals provides annuity income alongside residential launches.",
    reasons: [
      "Pairs with DLF: DLF owns North India real estate, BRIGADE owns South India — geographic coverage",
      "Bengaluru — Asia's fastest-growing office market — is Brigade's primary market",
      "Residential + commercial (offices, malls) diversification provides stable rental income alongside cyclical launches",
      "South India's tech corridor IT employee housing demand provides structural demand base"
    ]
  },
  {
    sym: "CDSL", name: "Central Depository Services Ltd", cap: "Small Cap", index: "Nifty Smallcap 50",
    sector: "Investment Banking & Services", alloc: 2.5,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's depository for securities — a government-regulated duopoly with NSDL where every stock, bond and mutual fund must be custodied. CDSL earns transaction fees on every debit, annual issuer charges, and KYC verification fees — a diversified revenue waterfall that grows with both the number of accounts and market trading volumes. The most defensive 'growth infrastructure' pick in the small-cap basket.",
    reasons: [
      "Regulated duopoly — every security held in India must go through CDSL or NSDL, no alternatives",
      "Revenue grows automatically with demat accounts (17 crore+) and market volumes",
      "Earns in bull markets (more transactions) AND bear markets (more account openings by bargain hunters)",
      "Picks-and-shovels play on India's capital markets — agnostic to individual stock performance"
    ]
  },
  {
    sym: "GRSE", name: "Garden Reach Shipbuilders", cap: "Small Cap", index: "Nifty Next Smallcap 50",
    sector: "Aerospace & Defense", alloc: 1.5,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's premier naval warship builder completing the defence manufacturing trio: BEL (air electronics) + HAL (aircraft) + GRSE (naval vessels). India's navy is on its most ambitious expansion in decades — 50+ warships to be built domestically over the next 10 years under the naval indigenisation programme. GRSE's ₹22,000 Cr order book provides 4+ years of revenue visibility with cost-escalation clauses protecting margins.",
    reasons: [
      "Completes defence trio: BEL (air electronics) + HAL (aircraft) + GRSE (naval warships)",
      "Only listed defence shipyard of scale — naval modernisation orders have no alternative recipient",
      "₹22,000 Cr+ order book with cost-escalation clauses — government-secured revenue visibility",
      "Naval expansion (50+ warships planned) creates 10-year order pipeline — PSU stability with small-cap growth"
    ]
  },
  {
    sym: "KAYNES", name: "Kaynes Technology India", cap: "Small Cap", index: "Nifty Smallcap 50",
    sector: "Electronic Equipment & Parts", alloc: 2.3,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "Electronics Manufacturing Services company making high-precision PCBs and electronic assemblies for aerospace, defence, medical, and automotive clients. Portfolio had zero electronics manufacturing exposure despite India's PLI-backed ambition to become the world's second-largest electronics producer. Revenue grew at 45%+ CAGR over FY22–24 — among the fastest growth rates of any listed Indian mid-small cap.",
    reasons: [
      "Portfolio had zero electronics manufacturing — fills India's PLI-backed Make-in-India theme",
      "45%+ revenue CAGR — among fastest-growing listed companies in India over FY22–24",
      "Defence electronics, EV components, IoT hardware — three simultaneously growing segments",
      "PLI scheme direct beneficiary — government subsidies and procurement preference for domestic EMS"
    ]
  },
  {
    sym: "KEC", name: "KEC International Ltd", cap: "Small Cap", index: "Nifty Smallcap 50",
    sector: "Construction & Engineering", alloc: 1.7,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's largest power transmission tower manufacturer and top-3 global T&D EPC contractor. KEC builds the physical transmission lines that carry electricity from generators to homes and industries. With India investing ₹2.5L crore in grid upgrades, KEC's order book has reached ₹35,000+ Cr providing 2+ years of visibility. Diversified into railways, solar EPC, and civil construction to reduce single-sector dependence.",
    reasons: [
      "Portfolio had zero construction engineering — fills the 'who builds the infrastructure' gap",
      "₹35,000+ Cr order book with 60+ country international presence — 2+ years revenue visibility",
      "Completes infrastructure chain: POWERGRID orders, CGPOWER makes equipment, KEC builds it",
      "Diversified into railways, solar EPC, civil — reduces T&D cyclicality with multiple growth engines"
    ]
  },
  {
    sym: "KFINTECH", name: "KFin Technologies Ltd", cap: "Small Cap", index: "Nifty Smallcap 50",
    sector: "Fintech & Infrastructure", alloc: 1.3,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "Mutual fund Registrar and Transfer Agent (RTA) — the back-office processing engine for every mutual fund transaction in India. KFin services AUM of ₹40L+ crore with 45%+ market share among MF RTAs. Pairs naturally with HDFCAMC — HDFCAMC collects investor money, KFINTECH processes and records every transaction. As India's MF AUM doubles in the next 5 years, KFINTECH's revenues scale proportionally with near-zero incremental cost.",
    reasons: [
      "Pairs with HDFCAMC: HDFCAMC is the fund house, KFINTECH is its processing infrastructure",
      "45%+ MF RTA market share — essential back-end for ₹40L+ Cr of mutual fund transactions",
      "High operating leverage: AUM doubles, revenue doubles, costs grow minimally",
      "Expanding into AIFs, REITs, corporate registrar — broadening beyond mutual fund servicing"
    ]
  },
  {
    sym: "LALPATHLAB", name: "Dr. Lal PathLabs Ltd", cap: "Small Cap", index: "Nifty Smallcap 50",
    sector: "Healthcare Providers", alloc: 1.4,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "India's second-largest diagnostics chain with 220+ labs and 7,000+ collection centres — chosen to diversify healthcare beyond SUNPHARMA's drug manufacturing. Diagnostics is services-based with recurring demand (patients need tests throughout their lives), high margins, and asset-light expansion. Dr. Lal's specialisation in esoteric and genomic testing commands premium pricing unavailable to smaller labs.",
    reasons: [
      "Healthcare diversification: SUNPHARMA (drugs) + LALPATHLAB (diagnostics) = different value chains",
      "220+ labs, 7,000+ collection points — national scale with asset-light expansion model",
      "Esoteric and genomic test specialisation creates B2B reference lab moat with hospitals",
      "India diagnostic expenditure per capita among Asia's lowest — structural underpenetration to close"
    ]
  },
  {
    sym: "SYNGENE", name: "Syngene International Ltd", cap: "Small Cap", index: "Nifty Smallcap 50",
    sector: "Biotech & Medical Research", alloc: 1.8,
    past: "Strong", current: "Outperform", outlook: "Strong Buy",
    rationale: "Contract Research and Manufacturing Services (CRAMS) company providing R&D, clinical research, and drug manufacturing services to global pharma giants including Bristol Myers Squibb, Baxter, and Amgen. Unlike SUNPHARMA (sells to end consumers), Syngene earns fee-for-service from multi-year sticky contracts — more predictable, margin-protected revenue with no commodity-like pricing pressure on finished drugs.",
    reasons: [
      "Portfolio had zero biotech/CRAMS exposure — fills the pharma research services gap",
      "Multi-year sticky contracts with top 10 global pharma companies — predictable, non-cyclical revenue",
      "Global pharma outsourcing to India accelerating post-COVID — structural 10-year trend",
      "Fee-for-service model has higher margin protection than generic drug pricing — different risk profile from SUNPHARMA"
    ]
  }
];

// ── SECTOR AGGREGATION ──────────────────────────────────────
const SECTORS = {};
STOCKS.forEach(s => {
  if (!SECTORS[s.sector]) SECTORS[s.sector] = { alloc: 0, stocks: [], cap: new Set() };
  SECTORS[s.sector].alloc += s.alloc;
  SECTORS[s.sector].stocks.push(s.sym);
  SECTORS[s.sector].cap.add(s.cap);
});

// ── ALLOCATION CONSTANTS ────────────────────────────────────
const TOTAL_ALLOC = STOCKS.reduce((a, s) => a + s.alloc, 0);
