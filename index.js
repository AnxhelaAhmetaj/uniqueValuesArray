import fsp from 'fs/promises';

async function createArray(content) {
    const data = content.split('\n');
    const uniqueValues = data.filter((value, index, array) => array.indexOf(value) === index);
    
    await fsp.writeFile('result.txt', uniqueValues);
   // console.log(uniqueValues);
}

 try {
        const content = await fsp.readFile('./file.csv', 'utf-8');
       // console.log(content);
        await createArray(content); 
    }
catch  (error) {
    console.log(error.message); 
}
