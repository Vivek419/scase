export const fetchData = async (e) => {
    
    console.log(e.payload)
    const response = await fetch(`http://universities.hipolabs.com/search?name=${e.payload}`);
    const json = await response.json()
    const data=(json.map(item => ({ label: item.name, value: item.country })))
    return data
};
export default fetchData
