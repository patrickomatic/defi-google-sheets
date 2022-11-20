import * as jsdoc2md from 'jsdoc-to-markdown';

console.warn('jsdoc', jsdoc2md);
if (process.argv.length != 3) {
  console.warn(`Usage: node ${process.argv[1]} source_directory`);
  process.exit(1);
}

jsdoc2md.render({ files: `../src/${process.argv[2]}/api/**.ts` }).then((output) => console.log(output));
