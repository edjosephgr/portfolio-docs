import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outputDir = path.join(root, 'wiki-dist');

const pages = [
  ['docs/intro.md', 'Home.md'],
  ['docs/architecture/system-overview.md', 'Architecture-System-Overview.md'],
  ['docs/architecture/repository-map.md', 'Architecture-Repository-Map.md'],
  ['docs/architecture/data-flow.md', 'Architecture-Data-Flow.md'],
  ['docs/architecture/integration-points.md', 'Architecture-Integration-Points.md'],
  ['docs/architecture/framework-workflow.md', 'Architecture-Framework-Workflow.md'],
  ['docs/security/security-overview.md', 'Security-Overview.md'],
  ['docs/security/data-handling.md', 'Security-Data-Handling.md'],
  ['docs/security/compliance.md', 'Security-Compliance-Posture.md'],
  ['docs/guides/getting-started.md', 'Guide-Getting-Started.md'],
  ['docs/guides/faq.md', 'Guide-FAQ.md'],
  ['docs/guides/glossary.md', 'Guide-Glossary.md'],
  ['docs/guides/roadmap.md', 'Guide-Roadmap.md'],
  ['i18n/es/docusaurus-plugin-content-docs/current/intro.md', 'ES-Home.md'],
  ['i18n/es/docusaurus-plugin-content-docs/current/architecture/system-overview.md', 'ES-Architecture-System-Overview.md'],
  ['i18n/es/docusaurus-plugin-content-docs/current/architecture/repository-map.md', 'ES-Architecture-Repository-Map.md'],
  ['i18n/es/docusaurus-plugin-content-docs/current/architecture/data-flow.md', 'ES-Architecture-Data-Flow.md'],
  ['i18n/es/docusaurus-plugin-content-docs/current/architecture/integration-points.md', 'ES-Architecture-Integration-Points.md'],
  ['i18n/es/docusaurus-plugin-content-docs/current/architecture/framework-workflow.md', 'ES-Architecture-Framework-Workflow.md'],
  ['i18n/es/docusaurus-plugin-content-docs/current/security/security-overview.md', 'ES-Security-Overview.md'],
  ['i18n/es/docusaurus-plugin-content-docs/current/security/data-handling.md', 'ES-Security-Data-Handling.md'],
  ['i18n/es/docusaurus-plugin-content-docs/current/security/compliance.md', 'ES-Security-Compliance-Posture.md'],
  ['i18n/es/docusaurus-plugin-content-docs/current/guides/getting-started.md', 'ES-Guide-Getting-Started.md'],
  ['i18n/es/docusaurus-plugin-content-docs/current/guides/faq.md', 'ES-Guide-FAQ.md'],
  ['i18n/es/docusaurus-plugin-content-docs/current/guides/glossary.md', 'ES-Guide-Glossary.md'],
  ['i18n/es/docusaurus-plugin-content-docs/current/guides/roadmap.md', 'ES-Guide-Roadmap.md'],
];

function stripFrontmatter(markdown) {
  if (!markdown.startsWith('---')) {
    return markdown;
  }

  const end = markdown.indexOf('\n---', 3);
  if (end === -1) {
    return markdown;
  }

  return markdown.slice(end + 4).trimStart();
}

function readMarkdown(relativePath) {
  const absolutePath = path.join(root, relativePath);
  const content = fs.readFileSync(absolutePath, 'utf8');
  return [
    '<!-- Generated from portfolio-docs. Edit the source docs, not the wiki mirror. -->',
    '',
    stripFrontmatter(content).trim(),
    '',
  ].join('\n');
}

function linkFor(page) {
  return page.replace(/\.md$/, '');
}

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

const englishLinks = pages.filter(([, page]) => !page.startsWith('ES-'));
const spanishLinks = pages.filter(([, page]) => page.startsWith('ES-'));

const home = [
  '# Portfolio Tracker Wiki',
  '',
  'This wiki is generated from the public documentation repo and mirrors public-safe Markdown content.',
  '',
  '## English',
  '',
  ...englishLinks.map(([, page]) => `- [${linkFor(page)}](${linkFor(page)})`),
  '',
  '## Español',
  '',
  ...spanishLinks.map(([, page]) => `- [${linkFor(page)}](${linkFor(page)})`),
  '',
].join('\n');

fs.writeFileSync(path.join(outputDir, 'Home.md'), `${home}\n`, 'utf8');

for (const [source, page] of pages) {
  if (page === 'Home.md') {
    fs.writeFileSync(path.join(outputDir, 'English-Home.md'), readMarkdown(source), 'utf8');
    continue;
  }

  fs.writeFileSync(path.join(outputDir, page), readMarkdown(source), 'utf8');
}

console.log(`Generated ${pages.length + 1} wiki pages in ${outputDir}`);
