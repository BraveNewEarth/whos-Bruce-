// Mind map data structure for React Flow
export const mindMapData = {
  nodes: [
    // Central node
    {
      id: 'bruce-weaver',
      type: 'central',
      position: { x: 0, y: 0 },
      data: {
        label: 'Bruce Weaver',
        subtitle: 'Estate & Ranch Management Professional',
        description: 'Regenerative Land Steward with 20+ years of experience in property management for Ultra High Net Worth principals.',
        type: 'central',
        color: '#2C5F2D', // Deep Forest Green
        size: 120,
        contact: {
          email: 'FarmFoodFriends@gmail.com',
          phone: '541-630-0049',
          location: 'Available for relocation'
        }
      }
    },
    
    // Main category nodes with shortened labels
    {
      id: 'core-identity',
      type: 'category',
      position: { x: -200, y: -150 },
      data: {
        label: 'Core Identity & Approach',
        description: 'Professional foundation and personal philosophy',
        type: 'category',
        color: '#4A90A4', // Steel Blue
        size: 80,
        skills: ['Estate - Ranch Management Professional', 'Regenerative Land Steward & Earth Steward', 'Work Ethic & Personal Qualities'],
        expandable: true,
        expanded: false
      }
    },
    
    {
      id: 'maintenance',
      type: 'category',
      position: { x: 200, y: -150 },
      data: {
        label: 'Hands-On Maintenance',
        description: 'Technical expertise across all property systems',
        type: 'category',
        color: '#C4A484', // Warm Tan
        size: 80,
        skills: ['Electrical Systems', 'Plumbing & Water Systems', 'HVAC & Climate Control', 'Carpentry & Construction'],
        expandable: true,
        expanded: false
      }
    },
    
    {
      id: 'vehicles',
      type: 'category',
      position: { x: 250, y: 100 },
      data: {
        label: 'Vehicle & Equipment Management',
        description: 'Maintenance and operation of all property vehicles and equipment',
        type: 'category',
        color: '#8B5A3C', // Rustic Brown
        size: 80,
        skills: ['Vehicle Maintenance', 'Landscape Equipment'],
        expandable: true,
        expanded: false
      }
    },
    
    {
      id: 'vendor-oversight',
      type: 'category',
      position: { x: 0, y: 200 },
      data: {
        label: 'Vendor & Project Oversight',
        description: 'Managing contractors and overseeing property projects',
        type: 'category',
        color: '#6B8E23', // Olive Green
        size: 80,
        skills: ['Vendor Management', 'Project Coordination', 'Financial Oversight'],
        expandable: true,
        expanded: false
      }
    },
    
    {
      id: 'guest-services',
      type: 'category',
      position: { x: -250, y: 100 },
      data: {
        label: 'Property Readiness & Guest Services',
        description: 'Ensuring properties are prepared and maintained for occupancy',
        type: 'category',
        color: '#D2B48C', // Light Tan
        size: 80,
        skills: ['Property Preparation', 'Guest Experience', 'Hospitality Management'],
        expandable: true,
        expanded: false
      }
    },
    
    {
      id: 'security',
      type: 'category',
      position: { x: -200, y: 250 },
      data: {
        label: 'Seasonal & Security Management',
        description: 'Year-round property protection and seasonal preparations',
        type: 'category',
        color: '#556B2F', // Dark Olive Green
        size: 80,
        skills: ['Security Systems', 'Seasonal Preparations', 'Emergency Response'],
        expandable: true,
        expanded: false
      }
    },
    
    {
      id: 'regenerative',
      type: 'category',
      position: { x: 200, y: 250 },
      data: {
        label: 'Regenerative Land Stewardship',
        description: 'Specialized environmental and agricultural expertise',
        type: 'category',
        color: '#4A90A4', // Steel Blue
        size: 80,
        skills: ['Organic Gardening & Landscape Care', 'Permaculture & Agroforestry', 'Vineyard Management'],
        expandable: true,
        expanded: false
      }
    }
  ],
  
  edges: [
    // Connections from central node to categories
    { id: 'e1', source: 'bruce-weaver', target: 'core-identity', type: 'smoothstep' },
    { id: 'e2', source: 'bruce-weaver', target: 'maintenance', type: 'smoothstep' },
    { id: 'e3', source: 'bruce-weaver', target: 'vehicles', type: 'smoothstep' },
    { id: 'e4', source: 'bruce-weaver', target: 'vendor-oversight', type: 'smoothstep' },
    { id: 'e5', source: 'bruce-weaver', target: 'guest-services', type: 'smoothstep' },
    { id: 'e6', source: 'bruce-weaver', target: 'security', type: 'smoothstep' },
    { id: 'e7', source: 'bruce-weaver', target: 'regenerative', type: 'smoothstep' }
  ]
};

// Detailed information for each category
export const categoryDetails = {
  'bruce-weaver': {
    title: 'Bruce Weaver',
    subtitle: 'Estate & Ranch Management Professional',
    overview: 'Regenerative Land Steward with 20+ years of experience in property management for Ultra High Net Worth principals.',
    achievements: [
      'Successfully managed multiple high-value estates and ranches',
      'Implemented sustainable land management practices',
      'Maintained discretion and professionalism with UHNW clients',
      'Developed comprehensive property maintenance systems'
    ],
    contact: {
      email: 'FarmFoodFriends@gmail.com',
      phone: '541-630-0049',
      location: 'Available for relocation'
    },
    links: [
      { label: 'View Portfolio Examples', url: '#portfolio' },
      { label: 'Client Testimonials', url: '#testimonials' },
      { label: 'Download Resume', url: '#resume' }
    ]
  },
  
  'core-identity': {
    title: 'Core Identity & Approach',
    overview: 'Professional foundation built on integrity, discretion, and a deep commitment to regenerative land stewardship.',
    skills: [
      'Estate - Ranch Management Professional',
      'Regenerative Land Steward & Earth Steward',
      'Work Ethic & Personal Qualities',
      'Self-directed and detail-oriented',
      'Discretion and integrity with UHNW clients'
    ],
    achievements: [
      'Developed holistic approach to property management',
      'Established reputation for reliability and discretion',
      'Integrated regenerative practices into traditional management'
    ]
  },
  
  'maintenance': {
    title: 'Hands-On Maintenance',
    overview: 'Extensive technical expertise across all property systems and infrastructure.',
    skills: [
      'Electrical Systems - Wiring, troubleshooting, installations',
      'Plumbing & Water Systems - Repairs, installations, irrigation',
      'HVAC & Climate Control - Maintenance, repairs, optimization',
      'Carpentry & Construction - Repairs, renovations, improvements',
      'Appliance Repair & Maintenance',
      'Pool & Spa Maintenance'
    ],
    achievements: [
      'Maintained complex estate infrastructure systems',
      'Reduced maintenance costs through preventive care',
      'Implemented energy-efficient system upgrades'
    ]
  },
  
  'vehicles': {
    title: 'Vehicle & Equipment Management',
    overview: 'Complete maintenance and operation of all property vehicles and specialized equipment.',
    skills: [
      'Vehicle Maintenance - Cars, trucks, ATVs, tractors',
      'Landscape Equipment - Mowers, trimmers, specialized tools',
      'Heavy Equipment Operation',
      'Fleet Management & Scheduling'
    ],
    achievements: [
      'Maintained fleet of 15+ vehicles and equipment pieces',
      'Extended equipment lifespan through proper maintenance',
      'Managed equipment replacement and upgrade schedules'
    ]
  },
  
  'vendor-oversight': {
    title: 'Vendor & Project Oversight',
    overview: 'Expert management of contractors, vendors, and property improvement projects.',
    skills: [
      'Vendor Management - Selection, oversight, quality control',
      'Project Coordination - Planning, scheduling, execution',
      'Financial Oversight - Budget management, cost control',
      'Quality Assurance & Inspection'
    ],
    achievements: [
      'Managed projects worth $500K+ annually',
      'Maintained network of trusted, vetted contractors',
      'Delivered projects on time and under budget'
    ]
  },
  
  'guest-services': {
    title: 'Property Readiness & Guest Services',
    overview: 'Ensuring properties are perfectly prepared and maintained for principal and guest occupancy.',
    skills: [
      'Property Preparation - Deep cleaning, staging, setup',
      'Guest Experience - Hospitality, concierge services',
      'Hospitality Management - Staff coordination, service standards',
      'Event Support & Coordination'
    ],
    achievements: [
      'Maintained 5-star hospitality standards',
      'Coordinated events for 100+ guests',
      'Received consistent positive feedback from principals'
    ]
  },
  
  'security': {
    title: 'Seasonal & Security Management',
    overview: 'Comprehensive property protection and seasonal preparation protocols.',
    skills: [
      'Security Systems - Monitoring, maintenance, upgrades',
      'Seasonal Preparations - Winterization, storm prep',
      'Emergency Response - Crisis management, coordination',
      'Access Control & Monitoring'
    ],
    achievements: [
      'Implemented comprehensive security protocols',
      'Zero security incidents over 10+ years',
      'Developed emergency response procedures'
    ]
  },
  
  'regenerative': {
    title: 'Regenerative Land Stewardship',
    overview: 'Specialized expertise in sustainable agriculture and environmental stewardship.',
    skills: [
      'Organic Gardening & Landscape Care',
      'Permaculture & Agroforestry',
      'Vineyard Management - Organic practices, quality improvement',
      'Soil Health & Regeneration',
      'Water Conservation & Management'
    ],
    achievements: [
      'Managed 25-acre organic vineyard operation',
      'Increased grape quality scores by 15% using regenerative practices',
      'Implemented biodynamic farming techniques',
      'Reduced water usage by 30% through conservation methods'
    ]
  }
};

// Search functionality
export const searchNodes = (query, nodes) => {
  if (!query) return nodes;
  
  const searchTerm = query.toLowerCase();
  return nodes.filter(node => {
    const data = node.data;
    const details = categoryDetails[node.id];
    
    // Search in node label and description
    if (data.label?.toLowerCase().includes(searchTerm) ||
        data.description?.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    // Search in skills
    if (data.skills?.some(skill => skill.toLowerCase().includes(searchTerm))) {
      return true;
    }
    
    // Search in detailed information
    if (details?.skills?.some(skill => skill.toLowerCase().includes(searchTerm))) {
      return true;
    }
    
    return false;
  });
};

