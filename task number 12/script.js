  function submitForm() {
            const nameIN = document.getElementById('name').value;
            const ageIN = document.getElementById('age').value;

            const person = {
                name: nameIN,
                age: ageIN,
                timestamp: new Date().toLocaleString()
            };

                            alert(     `Your name is: ${person.name}\nYour age is: ${person.age}\nTimestamp: ${person.timestamp}`);

        }