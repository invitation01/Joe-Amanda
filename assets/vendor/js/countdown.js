// countdown timer starts
var indexPage = document.getElementById("countdown");
if (indexPage) {
    (function() {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "09/06/",
            birthday = dayMonth + yyyy + " 01:00:00 GMT+0200";

        today = mm + "/" + dd + "/" + yyyy;
        // if (today > birthday) {
        //     birthday = dayMonth + nextYear;
        // }
        //end

        const countDown = new Date(birthday).getTime(),
            x = setInterval(function() {

                const now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById("days").innerText = Math.floor(distance / (day)),
                    document.getElementById("hours").innerText = (Math.floor((distance % (day)) / (hour))).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    }),
                    document.getElementById("minutes").innerText = (Math.floor((distance % (hour)) / (minute))).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    }),
                    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    });

                //do something later when date is reached
                if (distance < 0) {
                    document.getElementById("headline").innerText = "It's Wedding Day!";
                    document.getElementById("days").innerText = Math.floor(0);
                    document.getElementById("hours").innerText = (Math.floor(0).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    }));
                    document.getElementById("minutes").innerText = (Math.floor(0).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    }));
                    document.getElementById("seconds").innerText = (Math.floor(0).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    }));
                    clearInterval(x);
                }
                //seconds
            }, 0)
    }());
}
// countdown timer ends


// countdown timer starts
var countdown1 = document.getElementById("countdown1");
if (countdown1) {
    $(document).ready(function() {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 01).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "10/30/",
            birthday = dayMonth + yyyy;
        // console.log(String(today.getDate()));

        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }
        //end

        const countDown = new Date(birthday).getTime(),
            x = setInterval(function() {

                const now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById("days1").innerText = Math.floor(distance / (day)),
                    document.getElementById("hours1").innerText = (Math.floor((distance % (day)) / (hour))).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    }),
                    document.getElementById("minutes1").innerText = (Math.floor((distance % (hour)) / (minute))).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    }),
                    document.getElementById("seconds1").innerText = Math.floor((distance % (minute)) / second).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    });

                //do something later when date is reached
                if (distance < 0) {
                    document.getElementById("headline").innerText = "It's Wedding Day!";
                    document.getElementById("countdown1").style.display = "none";
                    document.getElementById("content").style.display = "block";
                    clearInterval(x);
                }
                //seconds
            }, 0)
    }());
}
// countdown timer ends

// countdown timer starts
var countdown2 = document.getElementById("countdown2");
if (countdown2) {
    $(document).ready(function() {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "10/30/",
            birthday = dayMonth + yyyy;

        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
            birthday = dayMonth + nextYear;
        }
        //end

        const countDown = new Date(birthday).getTime(),
            x = setInterval(function() {

                const now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById("days2").innerText = Math.floor(distance / (day)),
                    document.getElementById("hours2").innerText = (Math.floor((distance % (day)) / (hour))).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    }),
                    document.getElementById("minutes2").innerText = (Math.floor((distance % (hour)) / (minute))).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    }),
                    document.getElementById("seconds2").innerText = Math.floor((distance % (minute)) / second).toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false
                    });
                //do something later when date is reached
                if (distance < 0) {
                    document.getElementById("headline").innerText = "It's Wedding Day!";
                    document.getElementById("countdown2").style.display = "none";
                    document.getElementById("content").style.display = "block";
                    clearInterval(x);
                }
                //seconds
            }, 0)
    }());
}
// countdown timer ends
