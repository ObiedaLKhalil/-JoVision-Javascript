  function fetchAge() {
            const name = document.getElementById('name').value;
            fetch( `https://api.agify.io?name=${encodeURIComponent(name)}`)
                .then(response => response.json())
                .then(data => {
                    const age = data.age;
                      alert(`Your name is: ${name}\nYour age is: ${age}`);
                })
                .catch(error => {
                    console.error('Error fetching age:', error);
                });
        }

       
