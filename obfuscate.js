const fs = require('fs');
const JavaScriptObfuscator = require('javascript-obfuscator');
const Terser = require("terser");

fs.readdirSync('build/static/js').forEach(file => {
  if (file.endsWith('.js')) {
    const filePath = `build/static/js/${file}`;
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const terserResult = Terser.minify(fileContent);
    const obfuscationResult = JavaScriptObfuscator.obfuscate(terserResult.code);

    fs.writeFileSync(filePath, obfuscationResult.getObfuscatedCode());
  }
});