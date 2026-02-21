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
    <img src="${personal.photo}" alt="${personal.name}" class="profile-photo">
  `;
}

// Render Professional Summary
function renderSummary() {
  const section = document.getElementById('summary');
  section.innerHTML = `
    <h2><i class="fas fa-user"></i> Professional Summary</h2>
    <p>${cvData.summary}</p>
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
    
    pubContent += `.</div>`;
    
    if (pub.url) {
      const linkText = pub.doi ? `DOI: ${pub.doi}` : pub.type === 'patent' ? 'View Patent' : 'View Article';
      pubContent += `<a class="pub-link" href="${pub.url}" target="_blank"><i class="fas fa-external-link-alt"></i> ${linkText}</a>`;
    }
    
    return `<div class="publication">${pubContent}</div>`;
  }).join('');
  
  section.innerHTML = `
    <h2><i class="fas fa-book"></i> Selected Publications (2020–2026)</h2>
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
    <h2><i class="fas fa-certificate"></i> Granted U.S. Patents (2025)</h2>
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

// Render Skills & Languages
function renderSkills() {
  const section = document.getElementById('skills');
  
  const technicalHTML = cvData.skills.technical.map(skill => `<li>${skill}</li>`).join('');
  const languagesHTML = cvData.skills.languages.map(lang => 
    `<li>${lang.flag} <strong>${lang.language}</strong> – ${lang.level}</li>`
  ).join('');
  
  section.innerHTML = `
    <h2><i class="fas fa-tools"></i> Skills & Expertise</h2>
    <div class="skills-grid">
      <div class="skill-category">
        <h4><i class="fas fa-microchip"></i> Technical Expertise</h4>
        <ul>${technicalHTML}</ul>
      </div>
      <div class="skill-category">
        <h4><i class="fas fa-language"></i> Languages</h4>
        <ul>${languagesHTML}</ul>
      </div>
    </div>
  `;
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

// Initialize Interactive Features
function initializeInteractiveFeatures() {
  addSmoothScrolling();
  addPrintButton();
  addSearchFilter();
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
