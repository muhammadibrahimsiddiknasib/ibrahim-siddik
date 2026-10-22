// Scans photos/ and projects/ and writes data/*.json. Runs automatically on every push.
const fs=require('fs'),p=require('path'),img=/\.(jpe?g|png|webp|avif|gif)$/i,photos=[],projects=[];
if(fs.existsSync('photos'))for(const c of fs.readdirSync('photos')){const d=p.join('photos',c);if(fs.statSync(d).isDirectory())for(const f of fs.readdirSync(d))if(img.test(f))photos.push({src:`photos/${c}/${f.replace(img,'.webp')}`,cat:c})}
if(fs.existsSync('projects'))for(const s of fs.readdirSync('projects')){const f=p.join('projects',s,'project.json');if(!fs.existsSync(f))continue;const o=JSON.parse(fs.readFileSync(f,'utf8'));const cv=['webp','jpg','png'].map(e=>`projects/${s}/cover.${e}`).find(fs.existsSync);if(cv)o.cover=cv.replace(/\.\w+$/,'.webp');projects.push(o)}
fs.mkdirSync('data',{recursive:true});
fs.writeFileSync('data/photos.json',JSON.stringify(photos));fs.writeFileSync('data/projects.json',JSON.stringify(projects));
console.log(photos.length+' photos, '+projects.length+' projects');
