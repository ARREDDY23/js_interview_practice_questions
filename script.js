document.addEventListener('DOMContentLoaded', () => {
let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);
    const apiURL = 'https://fedskillstest.coalitiontechnologies.workers.dev';
    const patientName = 'Jessica Taylor';
    
    fetch(apiURL,	{
        headers: {
		'Authorization': `Basic ${auth}`
	}
}).then(response => response.json())
        .then(data => {
            const patient = data.find(p => p.name === patientName);
            if (patient) {
                displayPatientDetails(patient);
                renderBloodPressureChart(patient.bloodPressure);
            } else {
                console.error('Patient not found');
            }
        })
        .catch(error => console.error('Error fetching patient data:', error));
});

function displayPatientDetails(patient) {
    const patientDetails = document.querySelector('.patient-details');
    patientDetails.innerHTML = `
        <p>Date Of Birth : ${patient.date_of_birth}</p>
    `;
}

function renderBloodPressureChart(bloodPressureData) {
    const ctx = document.getElementById('bloodPressureChart').getContext('2d');
    const labels = bloodPressureData.map(bp => bp.year);
    const data = bloodPressureData.map(bp => bp.value);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Blood Pressure',
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}