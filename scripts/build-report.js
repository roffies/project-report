#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Consolidando informe...');
const reportDir = './report';
const outputFile = './informe.md';
const chapters = [
    'chapter1/chapter-1.md',
    'chapter2/chapter-2.md', 
    'chapter3/chapter-3.md',
    'chapter4/chapter-4.md',
    'chapter5/chapter-5.md'
];

let consolidatedContent = '';

chapters.forEach((chapterPath, index) => {
    const fullPath = path.join(reportDir, chapterPath);
    
    if (fs.existsSync(fullPath)) {
        let chapterContent = fs.readFileSync(fullPath, 'utf8');
        chapterContent = chapterContent.replace(/\.\.\/.\.\/assets\//g, './assets/');
        consolidatedContent += chapterContent;
        
        if (index < chapters.length - 1) {
            consolidatedContent += '\n\n---\n\n';
        }
    } else {
        console.log(`⚠️  No encontrado: ${chapterPath}`);
    }
});

fs.writeFileSync(outputFile, consolidatedContent, 'utf8');
console.log('Informe creado');