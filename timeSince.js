//timeSince open source function
//Slightly modified to account for singular minutes/seconds and "Just now" return val
function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval === 1) {
        return "about a minute";
    }
    if (interval > 1) {
        return interval + " minutes";
    }
    if (seconds <= 5) {
        return "Just now";
    }    
    return "about " + seconds + " seconds";
}