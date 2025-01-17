window.onload = function() {
    const temperature = 57; // static temperature in °F
    const windSpeed = 5; // static wind speed in mph

    function calculateWindChill(temp, speed) {
        return (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16))).toFixed(2);    }

    let windChill;
    if (temperature <= 50 && windSpeed > 3) {
        windChill = calculateWindChill(temperature, windSpeed);
    } else {
        windChill = "N/A";
    }

    document.getElementById("wind").textContent = `${windChill}`;
};