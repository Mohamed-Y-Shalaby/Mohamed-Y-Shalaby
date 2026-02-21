// Main JavaScript file for CV Website
// Dynamically renders CV content and adds interactive features

document.addEventListener('DOMContentLoaded', function() {
  renderCV();
  initializeInteractiveFeatures();
});

// Render all CV sections
function renderCV() {
  renderHeader();
  renderSummary();
  renderResearchInterests();
  renderEducation();
  renderExperience();
  renderPublications();
  renderPatents();
  renderProjects();
  renderProfessionalService();
  renderSkills();
  renderFooter();
}

// Render Header Section
function renderHeader() {
  const hero = document.querySelector('.hero');
  const personal = cvData.personal;
  
  const contactLinksHTML = `
    ${personal.emails.map(email => 
      `<a href="mailto:${email.address}"><i class="${email.icon}"></i> ${email.address}</a>`
    ).join('')}
    <a href="tel:${personal.phone}"><i class="fas fa-phone"></i> ${personal.phone}</a>
    ${personal.links.map(link => 
      `<a href="${link.url}" target="_blank"><i class="${link.icon}"></i> ${link.text}</a>`
    ).join('')}
  `;
  
  // Create photo element with proper error handling
  let photoElement = '';
  if (personal.photo) {
    photoElement = `<div class="profile-photo-wrapper"><img src="${personal.photo}" alt="${personal.name}" class="profile-photo" id="profilePhoto"></div>`;
  } else {
    photoElement = `<div class="profile-photo">${personal.name.split(' ').map(n => n[0]).join('')}</div>`;
  }
  
  hero.innerHTML = `
    <div>
      <h1>${personal.name}</h1>
      <div class="title">${personal.title}</div>
      <div class="affiliation">
        <strong>${personal.institution}</strong><br>
        ${personal.department}, ${personal.location}
      </div>
      <div class="contact-links">
        ${contactLinksHTML}
      </div>
    </div>
    ${photoElement}
  `;
  
  // Handle photo loading error
  const profilePhoto = document.getElementById('profilePhoto');
  if (profilePhoto) {
    profilePhoto.onerror = function() {
      const initials = personal.name.split(' ').map(n => n[0]).join('');
      this.parentElement.innerHTML = `<div class="profile-photo">${initials}</div>`;
    };
  }
}

// Render Professional Summary
function renderSummary() {
  const section = document.getElementById('summary');
  const summary = cvData.summary;
  
  const metricsHTML = summary.metrics ? summary.metrics.map(metric => `
    <div class="metric-card">
      <div class="metric-icon"><i class="${metric.icon}"></i></div>
      <span class="metric-value">${metric.value}</span>
      <div class="metric-label">${metric.label}</div>
    </div>
  `).join('') : '';
  
  section.innerHTML = `
    <h2><i class="fas fa-user"></i> Professional Summary</h2>
    <p>${summary.text || summary}</p>
    ${metricsHTML ? `<div class="metrics-grid">${metricsHTML}</div>` : ''}
  `;
}

// Render Research Interests
function renderResearchInterests() {
  const section = document.getElementById('research');
  const tagsHTML = cvData.researchInterests.map(interest => 
    `<span class="tag">${interest}</span>`
  ).join('');
  
  section.innerHTML = `
    <h2><i class="fas fa-lightbulb"></i> Research Interests</h2>
    <div class="tags">${tagsHTML}</div>
  `;
}

// Render Education Section
function renderEducation() {
  const section = document.getElementById('education');
  const educationHTML = cvData.education.map(edu => `
    <h3>${edu.degree}</h3>
    <div class="meta">${edu.institution} | ${edu.period}</div>
    <p>
      ${edu.thesis ? `<strong>Thesis:</strong> "${edu.thesis}"<br>` : ''}
      ${edu.grade ? `<strong>Grade:</strong> ${edu.grade}<br>` : ''}
      ${edu.supervisors ? `<strong>Supervisors:</strong> ${edu.supervisors}` : ''}
      ${edu.project ? `<strong>Graduation Project:</strong> ${edu.project}` : ''}
    </p>
  `).join('');
  
  section.innerHTML = `
    <h2><i class="fas fa-award"></i> Education</h2>
    ${educationHTML}
  `;
}

// Render Professional Experience
function renderExperience() {
  const section = document.getElementById('experience');
  const experienceHTML = cvData.experience.map(exp => `
    <h3>${exp.position}</h3>
    <div class="meta">
      <span class="institution">${exp.institution}</span>${exp.department ? `, ${exp.department}` : ''}, ${exp.location} | ${exp.period}
    </div>
    <ul>
      ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
    </ul>
  `).join('');
  
  section.innerHTML = `
    <h2><i class="fas fa-briefcase"></i> Professional Experience</h2>
    ${experienceHTML}
  `;
}

// Render Publications Section
function renderPublications() {
  const section = document.getElementById('publications');
  const publicationsHTML = cvData.publications.map(pub => {
    let pubContent = `<div class="pub-title">${pub.authors} (${pub.year}). <em>${pub.title}</em>`;
    
    if (pub.journal) {
      pubContent += `. <span class="pub-journal">${pub.journal}</span>`;
    }
    
    if (pub.volume) {
      pubContent += `, ${pub.volume}`;
    }
    
    if (pub.pages) {
      pubContent += `, ${pub.pages}`;
    }
    
    // Add quality indicators
    const indicators = [];
    if (pub.quartile) indicators.push(`<strong>${pub.quartile}</strong>`);
    if (pub.impactFactor) indicators.push(`IF: ${pub.impactFactor}`);
    if (indicators.length > 0) {
      pubContent += ` [${indicators.join(', ')}]`;
    }
    
    pubContent += `.</div>`;
    
    if (pub.url) {
      const linkText = pub.doi ? `DOI: ${pub.doi}` : pub.type === 'patent' ? 'View Patent' : 'View Article';
      pubContent += `<a class="pub-link" href="${pub.url}" target="_blank"><i class="fas fa-external-link-alt"></i> ${linkText}</a>`;
    }
    
    return `<div class="publication">${pubContent}</div>`;
  }).join('');
  
  section.innerHTML = `
    <h2><i class="fas fa-book"></i> Selected Publications (2021–2026)</h2>
    ${publicationsHTML}
    <p style="margin-top:15px">
      <a href="https://scholar.google.com/citations?user=vuQSzBYAAAAJ&hl=en" target="_blank" class="pub-link">
        <strong>→ View all 60+ publications on Google Scholar</strong>
      </a>
    </p>
  `;
}

// Render Patents Section
function renderPatents() {
  const section = document.getElementById('patents');
  const patentsHTML = cvData.patents.map(patent => `
    <div class="patent">
      <a href="${patent.url}" target="_blank" class="patent-number-link">
        <span class="patent-number">${patent.number}</span>
      </a> 
      — ${patent.title}
    </div>
  `).join('');
  
  section.innerHTML = `
    <h2><i class="fas fa-certificate"></i> Granted U.S. Patents</h2>
    ${patentsHTML}
  `;
}

// Render Research Projects
function renderProjects() {
  const section = document.getElementById('projects');
  const projectsHTML = cvData.projects.map(proj => `
    <tr>
      <td>${proj.period}</td>
      <td>${proj.title}</td>
      <td>${proj.agency}</td>
      <td>${proj.role}</td>
    </tr>
  `).join('');
  
  section.innerHTML = `
    <h2><i class="fas fa-flask"></i> Research Projects & Funding</h2>
    <table>
      <thead>
        <tr>
          <th>Period</th>
          <th>Project Title</th>
          <th>Funding Agency</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        ${projectsHTML}
      </tbody>
    </table>
  `;
}

// Render Professional Service Section
function renderProfessionalService() {
  const section = document.getElementById('service');
  const service = cvData.professionalService;
  
  section.innerHTML = `
    <h2><i class="fas fa-hands-helping"></i> Professional Service & Contributions</h2>
    
    <div class="tabs-container">
      <div class="tabs-nav">
        <button class="tab-button active" data-tab="editorial"><i class="fas fa-book-reader"></i> Editorial & Peer Review</button>
        <button class="tab-button" data-tab="conferences"><i class="fas fa-users"></i> Conferences</button>
        <button class="tab-button" data-tab="institutional"><i class="fas fa-university"></i> Institutional Service</button>
      </div>
      
      <div id="editorial" class="tab-content active">
        <div class="service-category">
          <h4><i class="fas fa-edit"></i> Editorial Boards & Peer Review</h4>
          <ul>
            ${service.editorial.map(item => `<li>${item}</li>`).join('')}
          </ul>
          <div class="service-stats">
            <p><strong>Peer Review Statistics:</strong></p>
            <p>• Total Reviews: ${service.peerReview.totalReviews}</p>
            <p>• Journals Reviewed For: ${service.peerReview.journals}</p>
            <p>• Average: ${service.peerReview.avgPerYear}</p>
          </div>
        </div>
      </div>
      
      <div id="conferences" class="tab-content">
        <div class="service-category">
          <h4><i class="fas fa-chalkboard-teacher"></i> Conference Organization & Participation</h4>
          <ul>
            ${service.conferences.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
      
      <div id="institutional" class="tab-content">
        <div class="service-category">
          <h4><i class="fas fa-landmark"></i> Institutional & Departmental Service</h4>
          <ul>
            ${service.institutional.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
  
  // Initialize tab functionality
  initializeTabs();
}

// Initialize Tab Functionality
function initializeTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      button.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
}

// Render Skills & Languages
function renderSkills() {
  const section = document.getElementById('skills');
  const skills = cvData.skills;
  
  // Create tabs for skills categories
  const tabsHTML = skills.categories.map((category, index) => 
    `<button class="tab-button ${index === 0 ? 'active' : ''}" data-tab="skill-${index}">
      <i class="${category.icon}"></i> ${category.title}
    </button>`
  ).join('');
  
  const tabContentsHTML = skills.categories.map((category, index) => `
    <div id="skill-${index}" class="tab-content ${index === 0 ? 'active' : ''}">
      <ul>
        ${category.skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    </div>
  `).join('');
  
  const languagesHTML = skills.languages.map(lang => 
    `<li><span class="language-badge">${lang.code}</span> <strong>${lang.language}</strong> – ${lang.level}</li>`
  ).join('');
  
  section.innerHTML = `
    <h2><i class="fas fa-tools"></i> Skills & Expertise</h2>
    
    <h3>Technical Skills</h3>
    <div class="tabs-container">
      <div class="tabs-nav">
        ${tabsHTML}
      </div>
      ${tabContentsHTML}
    </div>
    
    <h3 style="margin-top: 30px;"><i class="fas fa-language"></i> Languages</h3>
    <ul>${languagesHTML}</ul>
  `;
  
  // Re-initialize tabs for skills section
  initializeTabs();
}

// Render Footer
function renderFooter() {
  const footer = document.querySelector('footer');
  const personal = cvData.personal;
  
  footer.innerHTML = `
    <p>
      <i class="fas fa-map-marker-alt"></i> ${personal.institution}, ${personal.location}<br>
      <i class="fas fa-envelope"></i> 
      ${personal.emails.map(email => `<a href="mailto:${email.address}">${email.address}</a>`).join(' | ')}<br>
      <small>© ${new Date().getFullYear()} ${personal.name}. All rights reserved. | 
      <a href="https://github.com/mshalaby88" target="_blank">GitHub</a></small>
    </p>
  `;
}

// Initialize Tab Functionality
function initializeTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');
      
      // Find the parent container
      const parentContainer = button.closest('.tabs-container');
      if (!parentContainer) return;
      
      // Remove active class from all buttons and contents in this container
      parentContainer.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
      parentContainer.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button and corresponding content
      button.classList.add('active');
      const targetContent = parentContainer.querySelector(`#${targetTab}`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// Initialize Interactive Features
function initializeInteractiveFeatures() {
  initializeMainNavigation();
  initializeTabs();
  addSmoothScrolling();
  addPrintButton();
  addSearchFilter();
}

// Initialize Main Navigation
function initializeMainNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab');
  const sections = document.querySelectorAll('section');
  
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetSection = tab.getAttribute('data-section');
      
      // Update active tab
      navTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      // Show/hide sections
      if (targetSection === 'all') {
        sections.forEach(section => section.classList.remove('hidden'));
      } else {
        sections.forEach(section => {
          if (section.id === targetSection) {
            section.classList.remove('hidden');
            // Smooth scroll to section
            setTimeout(() => {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
          } else {
            section.classList.add('hidden');
          }
        });
      }
    });
  });
}

// Smooth scrolling for anchor links
function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Add print button
function addPrintButton() {
  const header = document.querySelector('header');
  const printBtn = document.createElement('button');
  printBtn.innerHTML = '<i class="fas fa-print"></i> Print CV';
  printBtn.className = 'print-btn no-print';
  printBtn.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    background: var(--accent);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: inherit;
    font-size: 0.9rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: background 0.3s;
    z-index: 1000;
  `;
  
  printBtn.addEventListener('mouseover', () => {
    printBtn.style.background = 'var(--primary)';
  });
  
  printBtn.addEventListener('mouseout', () => {
    printBtn.style.background = 'var(--accent)';
  });
  
  printBtn.addEventListener('click', () => window.print());
  document.body.appendChild(printBtn);
}

// Add simple search/filter functionality
function addSearchFilter() {
  // Add search box to header
  const header = document.querySelector('header');
  const searchBox = document.createElement('div');
  searchBox.className = 'search-box no-print';
  searchBox.style.cssText = `
    margin-top: 20px;
    padding: 10px;
    background: var(--light);
    border-radius: 5px;
    border: 1px solid var(--border);
  `;
  
  searchBox.innerHTML = `
    <input type="text" id="cv-search" placeholder="Search CV content..." style="
      width: 100%;
      padding: 8px 12px;
      border: 1px solid var(--border);
      border-radius: 4px;
      font-family: inherit;
      font-size: 0.95rem;
    ">
  `;
  
  header.appendChild(searchBox);
  
  // Add search functionality
  const searchInput = document.getElementById('cv-search');
  searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const text = section.textContent.toLowerCase();
      if (searchTerm === '' || text.includes(searchTerm)) {
        section.style.display = '';
      } else {
        section.style.display = 'none';
      }
    });
  });
}

// Utility function to update CV data (for future use)
function updateCVData(newData) {
  Object.assign(cvData, newData);
  renderCV();
}

// Export functions for potential external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { renderCV, updateCVData };
}
