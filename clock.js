// setInterval means keep repeating after each 1000miliseconds
setInterval(() => {
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    h_rotation = 30*h + m/2;
    m_rotation = 6*m;
    s_rotation = 6*s;
    hour.style.transform = `rotate(${h_rotation}deg)`;
    minutes.style.transform = `rotate(${m_rotation}deg)`;
    seconds.style.transform = `rotate(${s_rotation}deg)`;

}, 1000);