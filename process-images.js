// Converts every image to WebP (1600px + 600px thumbnail), strips EXIF/GPS, and watermarks certificates.
// Originals are never copied to the website. Needs: npm install sharp
const fs=require('fs'),p=require('path'),sharp=require('sharp'),IMG=/\.(jpe?g|png|webp|avif|gif)$/i;
const walk=d=>fs.existsSync(d)?fs.readdirSync(d,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(p.join(d,x.name)):IMG.test(x.name)?[p.join(d,x.name)]:[]):[];
const mark=(w,h)=>Buffer.from(`<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="p" width="420" height="200" patternUnits="userSpaceOnUse" patternTransform="rotate(-28)"><text x="10" y="80" font-size="26" font-family="sans-serif" fill="rgba(0,0,0,.26)" stroke="rgba(255,255,255,.35)" stroke-width="1">ibrahim-siddik.web.app</text><text x="130" y="160" font-size="20" font-family="sans-serif" fill="rgba(0,0,0,.22)" stroke="rgba(255,255,255,.3)" stroke-width="1">Portfolio view only</text></pattern></defs><rect width="100%" height="100%" fill="url(#p)"/></svg>`);
(async()=>{let n=0;for(const d of ['photos','content','projects','certificates'])for(const f of walk(d)){
 if(f.split(p.sep).some(s=>s[0]=='_'))continue;
 const base=f.replace(IMG,''),cert=d=='certificates';
 const r=await sharp(f,{failOn:'none'}).rotate().resize({width:1600,withoutEnlargement:true}).toBuffer({resolveWithObject:true});
 let im=sharp(r.data);if(cert)im=im.composite([{input:mark(r.info.width,r.info.height)}]);
 const full=await im.webp({quality:cert?72:78}).toBuffer();
 fs.mkdirSync(p.dirname('dist/'+base),{recursive:true});
 fs.writeFileSync('dist/'+base+'.webp',full);
 await sharp(full).resize({width:600,withoutEnlargement:true}).webp({quality:70}).toFile('dist/'+base+'-t.webp');n++}
console.log('processed',n,'images')})().catch(e=>{console.error(e);process.exit(1)});
