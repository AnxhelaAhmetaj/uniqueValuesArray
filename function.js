 async function findUniqueValuesInFile(content) {
    const data = content.split('\n');
    const uniqueValues = data.filter((value, index, array) => array.indexOf(value) === index);
    console.log(uniqueValues);
}
export default findUniqueValuesInFile; 