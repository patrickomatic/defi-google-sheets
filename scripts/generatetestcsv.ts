import * as jsdoc2md from 'jsdoc-to-markdown';
import * as jsdocParse from 'jsdoc-parse';

const [, scriptName, file, functionNamespace] = process.argv;

if (process.argv.length != 4) {
  console.warn(`Usage: node ${scriptName} file namespace`);
  process.exit(1);
}

jsdoc2md.getJsdocData({ files: [file] }).then((allJsdocData) => {
  allJsdocData.forEach((entry) => {
    if (entry.name != null 
        && entry.name.startsWith(`${functionNamespace}$`)
        && entry.examples != null) {
      entry.examples.forEach((example) => {
        if (entry.returns != null && entry.returns[0].description != null) {
          const returns = entry.returns[0].description.split(/\s*,\s*/);
          returns.sort();
          process.stdout.write(`"",${returns.join(',')}\n`);
        }
        process.stdout.write(`"${example.replace('=', '').replaceAll('"', '""')}","${example.replaceAll('"', '""')}"\n`);
        process.stdout.write(`,\n`.repeat(3));
      });
    }
  });
});
