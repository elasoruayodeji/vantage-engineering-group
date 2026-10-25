// All content data separated from presentation components

export const SITE_URL = 'https://vantageengineering.example';
export const COMPANY_NAME = 'VANTAGE Engineering Group Limited';
export const SHORT_NAME = 'VANTAGE Engineering';
export const TAGLINE = 'Engineering Progress. Building Possibility.';

export const CONTACT = {
  address: '24 Meridian Business Avenue, Victoria Island, Lagos',
  city: 'Victoria Island, Lagos State, Nigeria',
  phone: '+234 807 569 0088',
  email: 'elasoruayodeji@gmail.com',
  projects: 'projects@vantageengineering.example',
  careers: 'careers@vantageengineering.example',
  hours: 'Monday–Friday, 9:00 AM–5:00 PM WAT',
  website: 'vantageengineering.example',
};

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  slug: string;
  description: string;
  capabilities: string[];
  image: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    id: 'civil-structural',
    title: 'Civil and Structural Engineering',
    shortTitle: 'Civil & Structural',
    slug: 'civil-structural-engineering',
    description: 'Structural analysis, reinforced concrete and steel systems, foundation engineering, drainage networks, and construction supervision for buildings and infrastructure.',
    capabilities: [
      'Structural analysis and design coordination',
      'Reinforced concrete and structural steel systems',
      'Foundation engineering and preliminary geotechnical coordination',
      'Drainage networks, access roads, and site infrastructure',
      'Structural condition assessments',
      'Construction supervision and technical inspections',
      'Retrofitting and rehabilitation planning',
    ],
    image: 'https://images.unsplash.com/photo-1763798709709-ef54e8bad856?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Bridge infrastructure under construction illustrating civil engineering capabilities',
  },
  {
    id: 'mep',
    title: 'Mechanical, Electrical and Plumbing (MEP)',
    shortTitle: 'MEP Engineering',
    slug: 'mep-engineering',
    description: 'HVAC design, electrical distribution, standby power integration, plumbing systems, fire detection coordination, and building management systems.',
    capabilities: [
      'HVAC system design and coordination',
      'Electrical distribution and load assessments',
      'Standby generator and backup-power integration',
      'Lighting and emergency-lighting systems',
      'Plumbing, water distribution, and wastewater systems',
      'Fire detection and alarm-system coordination',
      'Building management and monitoring systems',
    ],
    image: 'https://images.pexels.com/photos/12157172/pexels-photo-12157172.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Electrical substation and power infrastructure',
  },
  {
    id: 'industrial',
    title: 'Industrial Engineering',
    shortTitle: 'Industrial',
    slug: 'industrial-engineering',
    description: 'Factory layout optimization, production-line installation coordination, equipment specification, fluid-handling systems, and preventive-maintenance planning.',
    capabilities: [
      'Factory layout and workflow optimization',
      'Production-line installation coordination',
      'Industrial equipment specification and procurement support',
      'Pumps, piping, and fluid-handling systems',
      'Preventive-maintenance planning',
      'Equipment commissioning and operational-readiness planning',
      'Reliability improvement and downtime-reduction studies',
    ],
    image: 'https://images.pexels.com/photos/31352672/pexels-photo-31352672/free-photo-of-industrial-factory-floor-with-machinery.jpeg?auto=compress&cs=tinysrgb&w=1800',
    imageAlt: 'Industrial factory floor with machinery illustrating industrial engineering',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure and Water Systems',
    shortTitle: 'Infrastructure & Water',
    slug: 'infrastructure-water-systems',
    description: 'Site development, stormwater management, water treatment and distribution, road infrastructure coordination, and flood-risk assessments.',
    capabilities: [
      'Site development and utility coordination',
      'Stormwater management and drainage design',
      'Water storage, treatment, and distribution planning',
      'Road and access infrastructure coordination',
      'Flood-risk assessments and mitigation planning',
      'Infrastructure condition surveys',
    ],
    image: 'https://images.unsplash.com/photo-1774789599304-cca1e1ffbb95?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Water treatment facility illustrating infrastructure engineering',
  },
  {
    id: 'energy',
    title: 'Energy and Sustainability',
    shortTitle: 'Energy & Sustainability',
    slug: 'energy-sustainability',
    description: 'Solar PV feasibility, battery-storage assessments, energy audits, efficiency improvements, hybrid system planning, and lifecycle-cost analysis.',
    capabilities: [
      'Solar photovoltaic feasibility studies',
      'Battery-storage and backup-power assessments',
      'Energy-consumption audits',
      'Building-energy-efficiency improvements',
      'Generator and solar-hybrid system planning',
      'Lifecycle-cost comparisons and operational-efficiency reviews',
    ],
    image: 'https://images.pexels.com/photos/9229392/pexels-photo-9229392.jpeg?auto=compress&cs=tinysrgb&w=1800',
    imageAlt: 'Solar farm illustrating renewable energy engineering',
  },
  {
    id: 'project-management',
    title: 'Project Management and Technical Consultancy',
    shortTitle: 'Project Management',
    slug: 'project-management',
    description: 'Feasibility studies, scope definition, contractor coordination, tender documentation, quality assurance, and commissioning support.',
    capabilities: [
      'Feasibility studies and preliminary cost planning',
      'Scope definition and project scheduling',
      'Contractor and supplier coordination',
      'Tender documentation and procurement support',
      'Quality assurance and progress reporting',
      'Commissioning, handover, and maintenance documentation',
    ],
    image: 'https://images.pexels.com/photos/8961070/pexels-photo-8961070.jpeg?auto=compress&cs=tinysrgb&w=1800',
    imageAlt: 'Engineers discussing a construction project wearing PPE',
  },
];

export interface Project {
  id: string;
  title: string;
  slug: string;
  location: string;
  category: 'Commercial' | 'Industrial' | 'Energy' | 'Infrastructure' | 'Residential';
  contractValue: string;
  scope: string;
  challenge: string;
  outcome: string;
  image: string;
  imageAlt: string;
  serviceIds: string[];
}

export const projects: Project[] = [
  {
    id: 'meridian-tower',
    title: 'Meridian Commercial Tower',
    slug: 'meridian-commercial-tower',
    location: 'Victoria Island, Lagos',
    category: 'Commercial',
    contractValue: '₦1.8 billion',
    scope: 'MEP coordination, electrical distribution planning, HVAC integration, water services, construction-stage technical reviews, and commissioning coordination.',
    challenge: 'Integrating multiple building systems on a constrained urban site with limited staging areas and complex service routes.',
    outcome: 'Coordinated building-services package with documented testing, handover, and maintenance requirements.',
    image: 'https://images.pexels.com/photos/20430714/pexels-photo-20430714/free-photo-of-exterior-of-a-modern-office-building.jpeg?auto=compress&cs=tinysrgb&w=1800',
    imageAlt: 'Modern commercial office building exterior — illustrative image for Meridian Commercial Tower',
    serviceIds: ['mep', 'project-management'],
  },
  {
    id: 'northgate-hub',
    title: 'Northgate Logistics Hub',
    slug: 'northgate-logistics-hub',
    location: 'Ogun State',
    category: 'Industrial',
    contractValue: '₦940 million',
    scope: 'Site utilities, drainage coordination, warehouse services, loading-zone planning, and backup-power infrastructure.',
    challenge: 'Providing dependable utilities alongside practical access for high-volume logistics operations.',
    outcome: 'Integrated site-services design package and phased commissioning plan.',
    image: 'https://images.unsplash.com/photo-1764449321624-913ca52646c6?auto=format&fit=crop&w=1800&q=80',
    imageAlt: 'Construction site with cranes and infrastructure — illustrative image for Northgate Logistics Hub',
    serviceIds: ['civil-structural', 'infrastructure'],
  },
  {
    id: 'crestline-food',
    title: 'Crestline Food Processing Facility',
    slug: 'crestline-food-processing',
    location: 'Ibadan, Oyo State',
    category: 'Industrial',
    contractValue: '₦620 million',
    scope: 'Production-area layout coordination, process utility interfaces, water systems, equipment-installation planning, and preventive-maintenance procedures.',
    challenge: 'Coordinating installation with hygiene requirements, operational workflow, and maintenance access.',
    outcome: 'Coordinated installation and operational-readiness plan.',
    image: 'https://images.pexels.com/photos/31352672/pexels-photo-31352672/free-photo-of-industrial-factory-floor-with-machinery.jpeg?auto=compress&cs=tinysrgb&w=1800',
    imageAlt: 'Industrial factory floor — illustrative image for Crestline Food Processing',
    serviceIds: ['industrial', 'infrastructure'],
  },
  {
    id: 'solstice-energy',
    title: 'Solstice Industrial Energy Upgrade',
    slug: 'solstice-energy-upgrade',
    location: 'Lagos State',
    category: 'Energy',
    contractValue: '₦285 million',
    scope: 'Energy audit, solar feasibility assessment, battery-storage sizing, electrical integration planning, and performance-monitoring design.',
    challenge: 'Reducing dependence on conventional power while protecting critical loads.',
    outcome: 'Technically assessed hybrid-energy implementation plan.',
    image: 'https://images.pexels.com/photos/35454187/pexels-photo-35454187/free-photo-of-industrial-facility-with-solar-panel-rooftop.jpeg?auto=compress&cs=tinysrgb&w=1800',
    imageAlt: 'Industrial facility with solar panels — illustrative image for Solstice Energy Upgrade',
    serviceIds: ['energy', 'mep'],
  },
  {
    id: 'eastbank-drainage',
    title: 'Eastbank Drainage Improvement Scheme',
    slug: 'eastbank-drainage-scheme',
    location: 'Abuja',
    category: 'Infrastructure',
    contractValue: '₦1.15 billion',
    scope: 'Drainage condition surveys, hydraulic-assessment coordination, civil-works documentation, and construction-supervision planning.',
    challenge: 'Improving stormwater movement while managing existing utilities and road access.',
    outcome: 'Coordinated drainage-improvement scheme with inspection and maintenance procedures.',
    image: 'https://images.pexels.com/photos/9843588/pexels-photo-9843588.jpeg?auto=compress&cs=tinysrgb&w=1800',
    imageAlt: 'Road construction and civil engineering — illustrative image for Eastbank Drainage Scheme',
    serviceIds: ['civil-structural', 'infrastructure'],
  },
  {
    id: 'haven-residential',
    title: 'The Haven Residential Development',
    slug: 'haven-residential-development',
    location: 'Lekki, Lagos',
    category: 'Residential',
    contractValue: '₦760 million',
    scope: 'Structural coordination, water supply and drainage, electrical systems, fire-safety coordination, and building-services commissioning.',
    challenge: 'Coordinating comfort, serviceability, maintainability, and efficient use of space across multiple residential units.',
    outcome: 'Coordinated engineering documentation and handover package.',
    image: 'https://images.pexels.com/photos/20430714/pexels-photo-20430714/free-photo-of-exterior-of-a-modern-office-building.jpeg?auto=compress&cs=tinysrgb&w=1800',
    imageAlt: 'Modern building exterior — illustrative image for The Haven Residential Development',
    serviceIds: ['civil-structural', 'mep'],
  },
];

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: 'Engr. Daniel Adebayo',
    title: 'Managing Director and Co-Founder',
    bio: 'Leads corporate strategy, client relationships, engineering governance, and business development. Background in civil engineering and multidisciplinary project delivery across commercial and industrial sectors.',
  },
  {
    name: 'Engr. Amara Okonkwo',
    title: 'Director of Engineering',
    bio: 'Responsible for technical coordination, design reviews, engineering documentation standards, and quality assurance across all project disciplines.',
  },
  {
    name: 'Tunde Bakare',
    title: 'Director of Projects and Operations',
    bio: 'Oversees project schedules, procurement planning, contractor interfaces, site operations, and delivery reporting for active project portfolios.',
  },
  {
    name: 'Nneka Eze',
    title: 'Finance and Administration Director',
    bio: 'Manages financial controls, administration, commercial documentation, and resource planning to support project delivery and organizational growth.',
  },
];

export interface Article {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
  imageAlt: string;
  relatedServiceId: string;
}

export const articles: Article[] = [
  {
    id: 'commercial-power',
    title: 'Designing Commercial Buildings for Reliable Power in Nigeria',
    slug: 'designing-commercial-buildings-reliable-power',
    date: '2026-09-15',
    author: 'VANTAGE Engineering',
    readTime: '8 min read',
    excerpt: 'Load assessment, power quality, backup systems, electrical protection, maintenance access, and engineering coordination for dependable commercial building power.',
    content: [
      'Commercial buildings in Nigeria face a distinctive power environment: grid supply can be intermittent, voltage fluctuations are common, and backup systems must be designed for extended operation. Designing for reliable power requires careful load assessment, appropriate protection, and coordinated maintenance planning.',
      'The first step is a comprehensive load assessment. This includes identifying critical loads (fire systems, emergency lighting, IT infrastructure, medical equipment if applicable), semi-critical loads (HVAC in occupied areas, lifts), and non-critical loads that can be shed during constrained supply. Each category has different backup and protection requirements.',
      'Power quality matters as much as availability. Voltage sags, harmonics from variable-speed drives, and phase imbalance can damage sensitive equipment. Engineering responses include power-factor correction, harmonic filtering, voltage regulation, and appropriate UPS sizing for critical circuits.',
      'Backup-power design typically involves standby generators with automatic transfer switches, but the specification must consider fuel storage capacity, ventilation requirements, noise constraints, exhaust routing, and maintenance access. For larger facilities, multiple generator sets with load-sharing controls provide redundancy.',
      'Electrical protection coordination ensures that faults are isolated at the lowest practical level without cascading disconnections. This requires selective coordination studies, appropriate breaker sizing, and documented discrimination between upstream and downstream protective devices.',
      'Maintenance access is often overlooked in design. Generator rooms need adequate clearance for servicing, fuel delivery access, and ventilation for testing under load. Switch rooms require safe working clearances, adequate lighting, and documented isolation procedures.',
      'The engineering coordination challenge is integrating power design with architectural constraints, structural requirements for heavy equipment, mechanical ventilation needs, and the client\'s operational procedures. This is why integrated engineering delivery—where electrical, mechanical, and structural disciplines coordinate from the outset—produces more reliable outcomes than disconnected specialist inputs.',
    ],
    image: 'https://images.pexels.com/photos/12157172/pexels-photo-12157172.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Electrical infrastructure and power systems',
    relatedServiceId: 'mep',
  },
  {
    id: 'preventive-maintenance',
    title: 'Why Industrial Facilities Need Preventive Maintenance Planning',
    slug: 'preventive-maintenance-planning-industrial-facilities',
    date: '2026-08-22',
    author: 'VANTAGE Engineering',
    readTime: '6 min read',
    excerpt: 'Asset registers, equipment criticality, inspection schedules, maintenance records, and the true cost of unplanned downtime in industrial operations.',
    content: [
      'Industrial facilities operate complex systems of mechanical equipment, electrical distribution, process piping, and control systems. When equipment fails unexpectedly, the consequences extend beyond repair costs: production stops, quality is compromised, safety may be affected, and delivery commitments are at risk.',
      'Preventive maintenance planning begins with a comprehensive asset register. Every piece of equipment—pumps, motors, compressors, conveyors, transformers, control panels—should be documented with its specification, installation date, manufacturer recommendations, and criticality rating.',
      'Equipment criticality assessment categorizes assets by their impact on operations. Critical equipment whose failure stops production or creates safety risks requires the most rigorous maintenance schedules. Important equipment whose failure degrades performance needs regular attention. Non-critical equipment can be maintained on a more flexible schedule.',
      'Inspection schedules should be based on manufacturer recommendations, operating conditions, historical failure data, and engineering judgement. They include daily operator checks, weekly inspections, monthly preventive tasks, and annual overhauls. Each task should have defined acceptance criteria and documentation requirements.',
      'Maintenance records provide the data needed to improve reliability over time. Tracking failure modes, repair times, parts consumption, and maintenance costs allows engineering teams to identify patterns, adjust intervals, and justify capital replacements before catastrophic failures occur.',
      'The cost of unplanned downtime in industrial facilities typically exceeds the cost of planned maintenance by a significant margin. Lost production, expedited parts procurement, overtime labour, and potential quality losses from restart procedures all contribute to the true cost. Preventive maintenance is not an expense—it is a reliability investment.',
      'Effective maintenance planning also requires consideration of spare-parts inventory, maintenance staffing and skills, tooling requirements, and safe work procedures. These elements must be planned alongside the maintenance schedule, not added as afterthoughts.',
    ],
    image: 'https://images.pexels.com/photos/31352672/pexels-photo-31352672/free-photo-of-industrial-factory-floor-with-machinery.jpeg?auto=compress&cs=tinysrgb&w=1800',
    imageAlt: 'Industrial machinery requiring maintenance planning',
    relatedServiceId: 'industrial',
  },
  {
    id: 'stormwater-management',
    title: 'Stormwater Management in Urban Developments',
    slug: 'stormwater-management-urban-developments',
    date: '2026-07-10',
    author: 'VANTAGE Engineering',
    readTime: '7 min read',
    excerpt: 'Site surveys, rainfall assumptions, drainage capacity, discharge constraints, maintenance access, and the importance of qualified engineering review.',
    content: [
      'Urban development increases impervious surfaces—roofs, roads, parking areas—which dramatically change how rainfall moves across a site. Without proper stormwater management, developments contribute to localized flooding, erosion, water-quality degradation, and stress on downstream drainage infrastructure.',
      'The starting point is a thorough site survey. Existing topography, soil conditions, water-table levels, adjacent watercourses, and existing drainage infrastructure must be understood before design begins. In urban environments, existing utilities and access constraints further complicate drainage routing.',
      'Rainfall assumptions must be appropriate for the location and return period. Design storms of different frequencies (e.g., 2-year, 10-year, 50-year events) are used for different elements: minor drainage systems typically use more frequent events, while major systems and flood-protection measures address rarer, more intense storms.',
      'Drainage capacity design involves calculating runoff volumes using rational method or more sophisticated hydrological models, sizing pipes and channels to convey design flows, and providing adequate inlet capacity. In tropical climates with intense rainfall events, peak-flow management is particularly important.',
      'Discharge constraints are often the limiting factor. Where developments discharge to municipal systems, the receiving infrastructure may have limited capacity. Where discharge is to natural watercourses, environmental regulations may restrict flow rates, sediment loads, and water quality parameters.',
      'Sustainable drainage approaches—including permeable paving, bioswales, retention basins, and green roofs—can reduce peak flows, improve water quality, and provide amenity value. However, these systems require appropriate design for local conditions and committed maintenance to function as intended.',
      'Maintenance access is critical. Drainage systems that cannot be inspected and cleaned will progressively lose capacity. Manhole spacing, rodding points, access chambers, and sediment traps must be planned as integral design elements, not afterthoughts. Qualified engineering review ensures that drainage design is appropriate for site conditions, regulatory requirements, and long-term performance.',
    ],
    image: 'https://images.pexels.com/photos/9843588/pexels-photo-9843588.jpeg?auto=compress&cs=tinysrgb&w=1800',
    imageAlt: 'Civil engineering and drainage infrastructure',
    relatedServiceId: 'infrastructure',
  },
];

export const methodology = [
  {
    stage: 1,
    title: 'Discovery & Requirements',
    description: 'Understand client needs, site constraints, budget assumptions, and project objectives.',
  },
  {
    stage: 2,
    title: 'Feasibility & Assessment',
    description: 'Review options, site information, risks, regulatory requirements, and lifecycle costs.',
  },
  {
    stage: 3,
    title: 'Design & Coordination',
    description: 'Develop coordinated concepts, calculations, drawings, and specifications under qualified professional review.',
  },
  {
    stage: 4,
    title: 'Planning & Procurement',
    description: 'Establish work packages, procurement schedules, contractor responsibilities, and project controls.',
  },
  {
    stage: 5,
    title: 'Implementation & Supervision',
    description: 'Coordinate site activities, review quality, manage interfaces, and document changes.',
  },
  {
    stage: 6,
    title: 'Testing & Commissioning',
    description: 'Verify installed systems against defined requirements, record deficiencies, and coordinate corrective action.',
  },
  {
    stage: 7,
    title: 'Handover & Support',
    description: 'Deliver approved documentation, operating instructions, maintenance schedules, and agreed post-completion support.',
  },
];

export const principles = [
  {
    title: 'Engineering Before Aesthetics',
    description: 'Begin with technical feasibility, safety, site conditions, and performance requirements.',
  },
  {
    title: 'Integrated Delivery',
    description: 'Coordinate architectural, structural, mechanical, and electrical disciplines.',
  },
  {
    title: 'Transparent Execution',
    description: 'Provide clear scopes, progress reports, documented variations, and defined approvals.',
  },
  {
    title: 'Built for Local Conditions',
    description: 'Consider Nigerian weather, infrastructure constraints, power reliability, logistics, and maintenance realities.',
  },
  {
    title: 'Long-term Performance',
    description: 'Consider the operational life of a facility, not only the construction completion date.',
  },
];
