// Sample student data
const students = [
    { name: 'Pradeep', grade: 1, subject: 'Math', marks: 85 },
    { name: 'Sasikant', grade: 2, subject: 'Science', marks: 90 },
    { name: 'Haresh', grade: 3, subject: 'History', marks: 75 },
    { name: 'ram', grade: 1, subject: 'Math', marks: 95 },
    { name: 'shyam', grade: 2, subject: 'Science', marks: 80 },
    { name: 'barsa', grade: 3, subject: 'History', marks: 70 }
];

// Function to display student data
function displayStudents(data) {
    const studentList = document.getElementById('student-list');
    studentList.innerHTML = '';
    data.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');
        studentDiv.textContent = `Name: ${student.name}, Grade: ${student.grade}, Subject: ${student.subject}, Marks: ${student.marks}`;
        studentList.appendChild(studentDiv);
    });
}

// Function to apply filters
function applyFilters() {
    const gradeFilter = document.getElementById('grade').value;
    const subjectFilter = document.getElementById('subject').value;
    let filteredStudents = students;

    if (gradeFilter !== 'all') {
        filteredStudents = filteredStudents.filter(student => student.grade == gradeFilter);
    }
    if (subjectFilter !== 'all') {
        filteredStudents = filteredStudents.filter(student => student.subject === subjectFilter);
    }

    displayStudents(filteredStudents);
}

// Function to export data (dummy implementation)
function exportData() {
    alert('Exporting data...');
}

// Function to reset filters
function resetFilters() {
    document.getElementById('grade').value = 'all';
    document.getElementById('subject').value = 'all';
    displayStudents(students);
}

// Initial display
displayStudents(students);
