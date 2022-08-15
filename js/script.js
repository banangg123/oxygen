function showNumber(m) {
    let s = 0   
    if (m >= 0) {
        console.log(`${m} - 7 = ${s = m - 7}`);
        setTimeout(showNumber, 300, s);
    } else{
        console.log("читай коран, еби баран...")
    }
}
setTimeout(showNumber, 300, 1000);