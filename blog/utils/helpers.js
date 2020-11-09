let ago = require('s-ago');
const months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

module.exports.dateFormat = (dateTime = null, type = 1) => {
    dateTime = dateTime ? new Date(dateTime) : new Date();
    currentTime = new Date();
    timeDifference = currentTime.getTime() - dateTime.getTime();
    timeDifference = new Date(currentTime.getTime() - timeDifference);;

    let timeMeridiem = `AM`;
    let date = dateTime.getDate();
    let month = dateTime.getMonth();
    let year = dateTime.getFullYear();
    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let dateString = null;
    date = date < 10 ? `0` + date : date;
    month = months[month].substr(0, 3);
    minute = minute < 10 ? `0` + minute : minute;
    if (hour > 12) {
        timeMeridiem = `PM`;
        hour -= 12;
    }
    hour = hour < 10 ? `0` + hour : hour;


    if (type === 1) { // type 1 for = 01 Jan 2020
        dateString = `${date} ${month} ${year}`;
    } else if (type === 2) { // type 1 for = 01 Jan 2020
        dateString = `${date} ${month} ${year}, ${hour}:${minute} ${timeMeridiem}`;
    } else if (type === 3) {
        dateString = ago(timeDifference);
    } else {
        dateString = new Date(dateTime);
    }

    return dateString;
}
