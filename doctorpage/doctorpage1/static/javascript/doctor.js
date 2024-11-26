
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('autocomplete');

    if (!input) {
        console.error('Input element not found.');
        return;
    }

    input.addEventListener('input', function() {
        const query = input.value;
        if (query.length < 2) return; // Minimum length to start querying

        const apiKey = '985c2d7103c54b7b8de56f40b5766eb1'; // Replace this with your actual API key
        fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&type=city&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log('API response:', data); // Log the full response

                if (data.features && Array.isArray(data.features)) {
                    // Filter cities in Sri Lanka
                    const sriLankaCities = data.features.filter(result => {
                        return result.properties.country === 'Sri Lanka'; // Adjust if the actual key is different
                    });
                    displayResults(sriLankaCities);
                } else {
                    console.error('Unexpected API response:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    function displayResults(results) {
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = ''; // Clear previous results

        if (!Array.isArray(results)) {
            console.error('Results are not in the expected format:', results);
            return;
        }

        results.forEach(result => {
            const div = document.createElement('div');
            div.textContent = result.properties.formatted || 'No format available'; // Adjust if different key is used
            div.classList.add('result-item');
            div.addEventListener('click', () => {
                input.value = result.properties.formatted || 'No format available'; // Adjust if different key is used
                resultsContainer.innerHTML = ''; // Clear results after selection
            });
            resultsContainer.appendChild(div);
        });
    }
});



window.onload = function() {
    // Redirect to home page if no search query
    if (!window.location.search) {
        window.location.href = '/';  // Redirect to home page
    }
};
















































