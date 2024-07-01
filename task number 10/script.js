   function getIp() {
                        fetch('https://api.ipify.org/')
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
                .catch(error => {
                    console.error('Error fetching IP address:', error);
                });
        }
