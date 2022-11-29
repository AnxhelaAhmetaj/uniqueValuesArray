import fsp from 'fs/promises';

async function findUniqueValuesInFile(content) {
    const data = content.split('\n');
    const uniqueValues = data.filter((value, index, array) => array.indexOf(value) === index);
    console.log(uniqueValues);
}

try {
    const content = await fsp.readFile('./data_file.csv', 'utf-8');
    await findUniqueValuesInFile(content); 
}
catch (error) {
    console.log(error.message); 
}
