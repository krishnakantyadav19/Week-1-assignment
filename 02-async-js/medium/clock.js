setInterval(()=>{
    console.clear();
    const now = new Date()

    const formattedTime = `${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}`;
    console.log(formattedTime);
    const formattedTimeAmPm = `${padZero(now.getHours() % 12 || 12)}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
    console.log(formattedTimeAmPm);

})
function padZero(num) {
    return num.toString().padStart(2, '0');
  }