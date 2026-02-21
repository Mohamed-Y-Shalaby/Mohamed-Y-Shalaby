// CV Content Data for Prof. Mohamed Y. Shalaby
const cvData = {
  // Personal Information
  personal: {
    name: "Prof. Mohamed Y. Shalaby",
    title: "Associate Professor of Electronics & Communications Engineering",
    institution: "Imam Mohammad Ibn Saud Islamic University",
    department: "Faculty of Engineering",
    location: "Riyadh, Kingdom of Saudi Arabia",
    photo: "images/picture1.png",
    emails: [
      { address: "mshalaby88@gmail.com", icon: "fas fa-envelope" },
      { address: "myshalaby@imamu.edu.sa", icon: "fas fa-university" }
    ],
    phone: "+966 530030389",
    links: [
      { 
        url: "https://scholar.google.com/citations?user=vuQSzBYAAAAJ&hl=en", 
        text: "Google Scholar", 
        icon: "fas fa-graduation-cap" 
      },
      { 
        url: "https://www.researchgate.net/profile/Mohamed-Shalaby-7", 
        text: "ResearchGate", 
        icon: "fab fa-researchgate" 
      },
      { 
        url: "https://orcid.org/0000-0002-9126-9552", 
        text: "ORCID", 
        icon: "fab fa-orcid" 
      },
      { 
        url: "https://members.imamu.edu.sa/staff/myshalaby/Pages/default.aspx", 
        text: "IMAMU Profile", 
        icon: "fas fa-user-graduate" 
      }
    ]
  },

  // Professional Summary
  summary: {
    text: "Distinguished researcher and educator with over 35 years of expertise in <strong>nonlinear optics, optical communications, fiber optic sensors, and photonic signal processing</strong>. Ph.D. in Nonlinear Optics from University of Limoges, France (1993). Author of <strong>60+ peer-reviewed publications</strong> with <strong>800+ citations (h-index: 15)</strong>, <strong>10+ funded research projects</strong>, and <strong>9 granted U.S. patents (2024-2025)</strong>. Supervised <strong>15+ graduate students</strong> to completion. Current research focuses on Optical Coherence Tomography, AI-enhanced environmental monitoring, fiber laser systems, and smart energy optimization for Saudi Arabia.",
    metrics: [
      { icon: "fas fa-book", label: "Publications", value: "60+" },
      { icon: "fas fa-quote-right", label: "Citations", value: "800+" },
      { icon: "fas fa-chart-line", label: "h-index", value: "15" },
      { icon: "fas fa-certificate", label: "Patents", value: "9" },
      { icon: "fas fa-project-diagram", label: "Funded Projects", value: "10+" },
      { icon: "fas fa-user-graduate", label: "Students Supervised", value: "15+" }
    ]
  },

  // Research Interests
  researchInterests: [
    "Nonlinear Optics & Spatial Solitons",
    "Optical Coherence Tomography (OCT)",
    "Fiber Optic Gyroscopes & Inertial Sensors",
    "Environmental Pollution Detection",
    "AI/ML for Optical Systems",
    "High-Power Fiber Lasers",
    "Photonic Signal Processing",
    "Free-Space Optical Communications",
    "Smart Grid & EV Charging Systems"
  ],

  // Education
  education: [
    {
      degree: "Ph.D. in Electronics and Optics (Nonlinear Optics)",
      institution: "University of Limoges, France",
      period: "1990–1993",
      thesis: "Interaction experiments between auto-guided beams 'Solitons'; New picosecond photonic applications",
      grade: "Très honorable avec félicitations du jury",
      supervisors: "Prof. C. Froehly & Dr. A. Barthélemy (IRCOM, U.A. C.N.R.S. N° 356)"
    },
    {
      degree: "M.Sc. in Optical Communications",
      institution: "Ain Shams University, Egypt",
      period: "1984–1989",
      thesis: "Chromatic dispersion control in single mode optical fibers",
      grade: "Excellent"
    },
    {
      degree: "DEA in Opto-electronics",
      institution: "Institut National Polytechnique de Grenoble, France",
      period: "1989",
      thesis: "Microlenses fabrication on glass by ionic exchange",
      grade: "Very Good"
    },
    {
      degree: "B.Sc. in Electronics and Communications",
      institution: "Ain Shams University, Egypt",
      period: "1979–1984",
      grade: "Excellent with Honors",
      project: "Microprocessor controlled alarm security system"
    }
  ],

  // Professional Experience
  experience: [
    {
      position: "Associate Professor",
      institution: "Imam Mohammad Ibn Saud Islamic University",
      location: "Riyadh, KSA",
      period: "Nov 2013 – Present",
      responsibilities: [
        "Lead research projects funded by KACST, GADD, PSDSARC, and University Deanship",
        "Supervise graduate students in photonics, optical sensing, AI applications, and energy systems",
        "Teach advanced courses: Optical Communications, Nonlinear Optics, Signal Processing, Microwave Engineering",
        "Secure and manage competitive research grants totaling multiple funded projects"
      ]
    },
    {
      position: "Associate Professor → Assistant Professor",
      institution: "Ain Shams University",
      department: "Faculty of Engineering",
      location: "Cairo, Egypt",
      period: "Aug 2008 – Nov 2013",
      responsibilities: [
        "Conducted defense-related research on Fiber Optic Gyroscopes and Transceivers for Egyptian Army",
        "Published extensively on fiber Bragg gratings, soliton propagation, and OCT systems",
        "Supervised M.Sc. and Ph.D. students in optical communications and photonic devices"
      ]
    },
    {
      position: "Assistant Professor",
      institution: "Telecom & Information College",
      location: "Riyadh, KSA",
      period: "Jan 1997 – Aug 2008",
      responsibilities: [
        "Developed curriculum for optical communications and microwave engineering programs",
        "Initiated international collaborations with French research laboratories (IRCOM, LEMO)",
        "Published foundational work on soliton interactions and nonlinear optical switching"
      ]
    }
  ],

  // Selected Publications (Last 5 Years - 2021-2026)
  publications: [
    {
      authors: "Alfraidi, W., Shalaby, M., & Alaql, F.",
      year: 2025,
      title: "On-Road Wireless EV Charging Systems as a Complementary to Fast Charging Stations in Smart Grids",
      journal: "World Electric Vehicle Journal",
      volume: "16(2)",
      pages: "99",
      doi: "10.3390/wevj16020099",
      url: "https://doi.org/10.3390/wevj16020099",
      quartile: "Q2"
    },
    {
      authors: "Shalaby, M. Y., et al.",
      year: 2024,
      title: "Impact of Dust and Sandstorms on 6G UAV Base Station Performance in Arid Saudi Arabian Environments",
      journal: "IEEE Access",
      volume: "12",
      pages: "86194-86207",
      doi: "10.1109/ACCESS.2024.3412979",
      url: "https://doi.org/10.1109/ACCESS.2024.3412979",
      quartile: "Q1",
      impactFactor: "3.9"
    },
    {
      authors: "Shalaby, M.",
      year: 2024,
      title: "Adaptive beam divergence and intensity decay compensation in OCT for enhanced tissue imaging",
      journal: "Optica Pura y Aplicada",
      volume: "57",
      pages: "51177"
    },
    {
      authors: "Shalaby, M. Y., & Al-Qahtani, A.",
      year: 2023,
      title: "Machine Learning Enhanced Fiber Optic Gyroscope Performance Under Temperature Variations",
      journal: "Optical Engineering",
      volume: "62(8)",
      pages: "084101",
      doi: "10.1117/1.OE.62.8.084101",
      impactFactor: "1.3"
    },
    {
      authors: "Shalaby, M. Y., et al.",
      year: 2023,
      title: "AI-Driven Pattern Recognition for Real-Time Air Quality Monitoring in Urban Saudi Arabia",
      journal: "Environmental Monitoring and Assessment",
      volume: "195(4)",
      pages: "512",
      doi: "10.1007/s10661-023-11123-x",
      quartile: "Q2"
    },
    {
      authors: "Al-Harbi, M., & Shalaby, M. Y.",
      year: 2022,
      title: "Enhanced Swept-Source OCT for Deep Tissue Imaging Using Adaptive Compensation",
      journal: "Journal of Biomedical Optics",
      volume: "27(9)",
      pages: "096001",
      doi: "10.1117/1.JBO.27.9.096001",
      quartile: "Q1",
      impactFactor: "3.5"
    },
    {
      authors: "Shalaby, M. Y., & Ibrahim, S.",
      year: 2022,
      title: "Nonlinear phase noise compensation in coherent optical communication systems",
      journal: "Optics Communications",
      volume: "518",
      pages: "128347",
      doi: "10.1016/j.optcom.2022.128347",
      quartile: "Q2",
      impactFactor: "2.4"
    },
    {
      authors: "Shalaby, M. Y., et al.",
      year: 2021,
      title: "High-resolution fiber Bragg grating sensors for structural health monitoring",
      journal: "IEEE Sensors Journal",
      volume: "21(18)",
      pages: "20456-20465",
      doi: "10.1109/JSEN.2021.3097234",
      quartile: "Q1",
      impactFactor: "4.3"
    },
    {
      authors: "Shalaby, M. Y., & Al-Dosari, K.",
      year: 2021,
      title: "Soliton dynamics in photonic crystal fibers with varying dispersion profiles",
      journal: "Journal of Optics",
      volume: "23(6)",
      pages: "065502",
      doi: "10.1088/2040-8986/abf89c",
      quartile: "Q2"
    }
  ],

  // Patents
  patents: [
    {
      number: "US 12,512,877-B1",
      title: "System and Method for Mitigating Rain-Induced Crosstalk in Wireless Communications",
      url: "https://patents.google.com/patent/US12512877B1"
    },
    {
      number: "US 12,483,038-B1",
      title: "System and Method for Target Detection and Energy Delivery",
      url: "https://patents.google.com/patent/US12483038B1"
    },
    {
      number: "US 12,480,789-B1",
      title: "Hybrid Free Space Oscillators for Ultraprecision Sensor Applications",
      url: "https://patents.google.com/patent/US12480789B1"
    },
    {
      number: "US 12,449,536-B1",
      title: "Ultraprecision Frequency-Domain LiDAR System for Remote Micro-Movement Sensing",
      url: "https://patents.google.com/patent/US12449536B1"
    },
    {
      number: "US 12,448,302-B1",
      title: "Converter-Free PV-Powered Water Desalination System for Remote Communities",
      url: "https://patents.google.com/patent/US12448302B1"
    },
    {
      number: "US 12,372,450-B1",
      title: "Hybrid Free Space Acoustic Oscillators for Ultraprecision Sensor Applications",
      url: "https://patents.google.com/patent/US12372450B1"
    },
    {
      number: "US 12,368,474-B1",
      title: "Adaptive Innovative Dual-Polarized MIMO Equalizer Antenna System for Crosstalk Mitigation",
      url: "https://patents.google.com/patent/US12368474B1"
    },
    {
      number: "US 12,332,058-B1",
      title: "Compact Fiber Optic Gyroscope with Feedback-Enhanced Frequency Interferometry",
      url: "https://patents.google.com/patent/US12332058B1"
    },
    {
      number: "US 9,476,713-B2",
      title: "Ring mirror optical rotation sensor",
      url: "https://patents.google.com/patent/US9476713B2"
    }
  ],

  // Research Projects & Funding
  projects: [
    {
      period: "2024–2026",
      title: "Design and Implementation of a High-Power Fiber Laser",
      agency: "GADD",
      role: "Principal Investigator"
    },
    {
      period: "2023–2025",
      title: "Design and Implementation of an Optical Gyroscope",
      agency: "PSDSARC",
      role: "Principal Investigator"
    },
    {
      period: "2022–2023",
      title: "AI for Optimization of Solar Systems in Saudi Arabia",
      agency: "IMAMU Deanship",
      role: "Co-Author"
    },
    {
      period: "2020–2022",
      title: "Improved Pattern Recognition for Air Pollutants Detection",
      agency: "IMAMU Deanship",
      role: "Author"
    },
    {
      period: "2016–2018",
      title: "ECT Tomography for Real-Time Imaging of Fluid Flow in Oil Pipes",
      agency: "KACST",
      role: "Co-Author"
    },
    {
      period: "2014–2016",
      title: "Optical Coherence Tomography System Design",
      agency: "IMAMU Deanship",
      role: "Author"
    }
  ],

  // Professional Service & Contributions
  professionalService: {
    editorial: [
      "Reviewer, IEEE Access (2020-Present)",
      "Reviewer, Optics Express (2019-Present)",
      "Reviewer, Journal of Lightwave Technology (2018-Present)",
      "Reviewer, Applied Optics (2017-Present)",
      "Editorial Board Member, International Journal of Optics and Photonics (2021-Present)"
    ],
    conferences: [
      "Technical Program Committee, Saudi International Conference on Photonics (2023-2025)",
      "Session Chair, SPIE Photonics West - Fiber Optic Sensors (2024)",
      "Organizing Committee, GCC Optical Communications Workshop (2022-2023)"
    ],
    institutional: [
      "Chair, Department Graduate Studies Committee (2020-2023)",
      "Member, Faculty Research & Ethics Committee (2015-Present)",
      "Coordinator, Optics & Photonics Research Group (2014-Present)",
      "Faculty Senate Representative (2018-2021)"
    ],
    peerReview: {
      totalReviews: "150+",
      journals: "20+ International Journals",
      avgPerYear: "15-20 manuscripts/year"
    }
  },

  // Skills
  skills: {
    categories: [
      {
        title: "Optical Systems Design",
        icon: "fas fa-lightbulb",
        skills: [
          "Optical Coherence Tomography (OCT)",
          "Fiber Optic Gyroscopes (FOG)",
          "High-Power Fiber Lasers",
          "Soliton Propagation & Nonlinear Optics",
          "WDM/DWDM Systems",
          "Free-Space Optical Communications"
        ]
      },
      {
        title: "Computational Tools",
        icon: "fas fa-laptop-code",
        skills: [
          "MATLAB (Advanced - Signal Processing, BPM)",
          "COMSOL Multiphysics",
          "Python (NumPy, SciPy, TensorFlow)",
          "OptiSystem & OptiBPM",
          "FDTD Simulations",
          "LabVIEW for Instrumentation"
        ]
      },
      {
        title: "Signal Processing & AI",
        icon: "fas fa-brain",
        skills: [
          "Phase Retrieval Algorithms",
          "Pattern Recognition (ML/DL)",
          "Adaptive Filtering & Compensation",
          "Feature Extraction & Classification",
          "Neural Networks for Optical Systems",
          "Time-Series Analysis"
        ]
      },
      {
        title: "Hardware & Instrumentation",
        icon: "fas fa-microchip",
        skills: [
          "FPGA Programming (Xilinx, Altera)",
          "Embedded Systems Design",
          "Optical Spectrum Analyzers",
          "Lock-in Amplifiers & Phase Detectors",
          "RF/Microwave Test Equipment",
          "Custom Sensor Integration"
        ]
      },
      {
        title: "Environmental Sensing",
        icon: "fas fa-leaf",
        skills: [
          "Gas Detection (FT-IR, TDLAS)",
          "Water Quality Monitoring",
          "Distributed Fiber Optic Sensors",
          "Multi-parameter Environmental Analysis",
          "Real-time Pollution Tracking"
        ]
      }
    ],
    languages: [
      { language: "Arabic", flag: "🇸🇦", level: "Native" },
      { language: "English", flag: "🇬🇧", level: "Fluent (Academic & Technical)" },
      { language: "French", flag: "🇫🇷", level: "Professional (Research & Thesis)" }
    ]
  }
};

// Make data available globally
if (typeof module !== 'undefined' && module.exports) {
  module.exports = cvData;
}

