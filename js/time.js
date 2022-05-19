const data = async () => {
    const got = await fetch("../config.json");
    const config = await got.json();
    const parseDateWithDefaultFormat = (dateTimeStr) => {
        const regexFormat = /(\d{2})\.(\d{2})\.(\d{4}) +(\d{2}):(\d{2})/;
    
        const [day, month, year, hour, minute] = regexFormat.exec(dateTimeStr)
            .splice(1)
            .map(x => Number(x));
    
        return new Date(year, month - 1, day, hour, minute);
    };
    let date = parseDateWithDefaultFormat(config.timerEndDate)
  
    function Counts() {
        let now = new Date();
        gat = date - now;
        let days = Math.floor(gat / 1000 / 60 / 60 / 24);
        let hours = Math.floor(gat / 1000 / 60 / 60 ) %24;
        let minut = Math.floor(gat / 1000 / 60 ) % 60;
        let second = Math.floor(gat / 1000) %60;
        document.getElementById('time-count__day').innerHTML = days;
        document.getElementById('time-count__hours').innerHTML = hours;
        document.getElementById('time-count__minutes').innerHTML = minut;
        document.getElementById('time-count__seconds').innerHTML = second
  
        if(days === 0 ){
            if( hours === 0 ){
                if( second === -1){
                    document.getElementById("timet-data").style.display = "none"
                }
            }
        }else{
            document.getElementById("timet-data").style.display = "none"
      }
    }
    Counts();
    setInterval(Counts,1000)
  };
  data();