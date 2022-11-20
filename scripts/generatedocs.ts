import * as jsdoc2md from 'jsdoc-to-markdown';
import * as jsdocParse from 'jsdoc-parse';

const [, scriptName, file, functionNamespace] = process.argv;

if (process.argv.length != 4) {
  console.warn(`Usage: node ${scriptName} file namespace`);
  process.exit(1);
}


jsdoc2md.getJsdocData({ files: [file] }).then((allJsdocData) => {
  const someData = allJsdocData.filter((entry) => {
    return entry.name == null || (
      // return either non-namespaced things, or only things that match our namespace
      !entry.name.includes('$') || entry.name.startsWith(`${functionNamespace}$`)
    );
  });

  jsdoc2md.render({ 
    data: jsdocParse(someData),
  }).then((output) => process.stdout.write(output));
});
