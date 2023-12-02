const fs = require('fs');
const marked = require('marked');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const changelogJSON = []

// Read the Markdown file
const markdownContent = fs.readFileSync('./CHANGELOG.md', 'utf8');

// Convert Markdown to HTML
const htmlString = marked.parse(markdownContent);

// Parse the HTML string into a DOM object
const html = new JSDOM(htmlString).window.document;

// get description
const pattern = /<h3>(.*?)<\/h3>([\s\S]*?)(?=<h2>|$)/g;
const descList = [];
let match;

while ((match = pattern.exec(htmlString)) !== null) {
  const content = match[2];
  if (content) {
    descList.push(content);
  }
}


html.querySelectorAll('h2').forEach((item, i) => {
  changelogJSON.push({
    isShowDesc: false,
    title: html.querySelectorAll('h3')[i].textContent,
    description: descList[i],
    date: item.textContent,
    id: i,
  })
})

// Write the JSON to a file
fs.writeFileSync('./static/changelog.json', JSON.stringify(changelogJSON));

