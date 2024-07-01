   document.getElementById('ipButton').addEventListener('click', function() {

                        fetch('https://api.ipify.org/')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })


                .then(data => {
                     console.log('Your IP address is:', data);
                })
                .catch(error => {
                    console.error('Error fetching IP address:', error);
                });
        });




