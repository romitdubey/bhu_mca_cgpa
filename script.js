function calculateGradePoints(marks) {
    if (marks >= 90) return 10;
    if (marks >= 80) return 9;
    if (marks >= 70) return 8;
    if (marks >= 60) return 7;
    if (marks >= 50) return 6;
    if (marks >= 40) return 5;
    if (marks >= 30) return 4;
    return 0;
}

function calculateCGPA() {
    const credits = [6,5,3,4,2];
    const avgMarks1 = (parseFloat(document.getElementById('marks1').value) + parseFloat(document.getElementById('marks2').value)) / 2;
    const avgMarks2 = (parseFloat(document.getElementById('marks3').value) + parseFloat(document.getElementById('marks4').value)) / 2;

    const marks = [
        avgMarks1,
        avgMarks2,
        parseFloat(document.getElementById('marks5').value),
        parseFloat(document.getElementById('marks6').value),
        parseFloat(document.getElementById('marks7').value)
    ];

    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < 5; i++) {
        const gradePoints = calculateGradePoints(marks[i]);
        document.getElementById(`gradePoints${i + 1}`).innerText = gradePoints;
        totalGradePoints += gradePoints * credits[i];
        totalCredits += credits[i];
    }


    const sgpa = totalGradePoints / totalCredits;
    document.getElementById('sgpa').innerText = sgpa.toFixed(2);
    document.getElementById('cgpa').innerText = sgpa.toFixed(2);

const messageElement = document.getElementById('funnyMessage');
    if (sgpa >= 9) {
        messageElement.innerText = "Bhai itna jyada CGPA ka krega kya? 😏";
    } else if (sgpa >= 8) {
        messageElement.innerText = "Sahi h bhai itna jyada 😊";
    } else if (sgpa >= 7) {
        messageElement.innerText = "Koi ni bhai agle sem me bdha liyo! 🥲";
    } else if (sgpa >= 6) {
        messageElement.innerText = "Thoda aur mehnat kar aur sab theek ho jayega! 😐";
    } else {
        messageElement.innerText = "Oye, padhai pe dhyan do, nahi toh phir se fail ho jayega! 📚";
    }
}