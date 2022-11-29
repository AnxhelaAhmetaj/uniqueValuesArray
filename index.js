import fsp from 'fs/promises';
import findUniqueValuesInFile  from './function.js';

try {
    const content = await fsp.readFile('./data_file.csv', 'utf-8');
    await findUniqueValuesInFile(content); 
}
catch (error) {
    console.log(error.message); 
}