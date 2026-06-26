// Shared navbar — injected on every page
(function () {
  var pages = [
    { label: 'Home',          href: 'index.html' },
    { label: 'About',         href: 'about.html' },
    { label: 'Skills',        href: 'skills.html' },
    { label: 'Data Analysis', href: 'data-analysis.html' },
    { label: 'Projects',      href: 'projects.html' },
    { label: 'Certifications',href: 'certifications.html' },
    { label: 'Contact',       href: 'contact.html' },
  ];

  var current = window.location.pathname.split('/').pop() || 'index.html';

  var links = pages.map(function (p) {
    var active = current === p.href ? ' class="active"' : '';
    return '<li><a href="' + p.href + '"' + active + '>' + p.label + '</a></li>';
  }).join('');

  var html = '\
<nav class="navbar" id="navbar">\
  <a href="index.html" class="logo">Vishnu<span>.</span></a>\
  <ul id="nav-links">' + links + '</ul>\
  <a href="mailto:balapuvishnu@gmail.com" class="btn-resume">Hire Me</a>\
  <div class="hamburger" id="hamburger" onclick="toggleMenu()">\
    <span></span><span></span><span></span>\
  </div>\
</nav>';

  document.getElementById('nav-placeholder').innerHTML = html;
})();

function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('open');
}

// Close menu on link click
document.addEventListener('click', function (e) {
  if (e.target.closest('#nav-links a')) {
    document.getElementById('nav-links').classList.remove('open');
  }
});
