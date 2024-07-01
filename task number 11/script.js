
   function getIp() {
try {
                        fetch('https://api.ipify.orgx/')
                 .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })


                .then(data => {
                    const ipAddress =data;
                    document.getElementById('ipButton').textContent = `Your IP: ${ipAddress}`;
                })
              ;}
               
  

catch(error) {
  document.getElementById('demo').textContent = `error in fetching  `;

        }}