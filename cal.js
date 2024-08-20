function calculateCGPA() {
    const gradesInput = document.getElementById('grades').value;
    const creditsInput = document.getElementById('credits').value;

    const grades = gradesInput.split(',').map(Number);
    const credits = creditsInput.split(',').map(Number);

    if (grades.length !== credits.length) {
        alert('The number of grades and credits must be the same.');
        return;
    }

    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        totalPoints += grades[i] * credits[i];
        totalCredits += credits[i];
    }

    const cgpa = totalPoints / totalCredits;

    document.getElementById('result').textContent = `Your CGPA is: ${cgpa.toFixed(2)}`;
}
