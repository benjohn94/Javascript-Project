// Doctors Data
const doctors = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialization: "Cardiologist",
        experience: "15 years of experience",
        rating: 4.9,
        icon: "❤️"
    },
    {
        id: 2,
        name: "Dr. Michael Chen",
        specialization: "Orthopedic Surgeon",
        experience: "12 years of experience",
        rating: 4.8,
        icon: "🦴"
    },
    {
        id: 3,
        name: "Dr. Emily Rodriguez",
        specialization: "Pediatrician",
        experience: "10 years of experience",
        rating: 4.9,
        icon: "👶"
    },
    {
        id: 4,
        name: "Dr. James Wilson",
        specialization: "General Physician",
        experience: "20 years of experience",
        rating: 4.7,
        icon: "🩺"
    },
    {
        id: 5,
        name: "Dr. Lisa Anderson",
        specialization: "Dermatologist",
        experience: "8 years of experience",
        rating: 4.8,
        icon: "💆"
    },
    {
        id: 6,
        name: "Dr. David Brown",
        specialization: "Neurologist",
        experience: "18 years of experience",
        rating: 4.9,
        icon: "🧠"
    }
];

// Appointments Storage
let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    loadDoctors();
    populateDoctorSelect();
    loadAppointments();
    setupEventListeners();
    setMinDate();
    
    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// Load Doctors
function loadDoctors() {
    const doctorsGrid = document.getElementById('doctorsList');
    
    doctors.forEach(doctor => {
        const doctorCard = createDoctorCard(doctor);
        doctorsGrid.appendChild(doctorCard);
    });
}

// Create Doctor Card
function createDoctorCard(doctor) {
    const card = document.createElement('div');
    card.className = 'doctor-card';
    
    card.innerHTML = `
        <div class="doctor-image">${doctor.icon}</div>
        <div class="doctor-info">
            <h3>${doctor.name}</h3>
            <p class="doctor-specialization">${doctor.specialization}</p>
            <p class="doctor-experience">${doctor.experience}</p>
            <div class="doctor-rating">
                <span>⭐ ${doctor.rating}</span>
            </div>
        </div>
    `;
    
    return card;
}

// Populate Doctor Select Dropdown
function populateDoctorSelect() {
    const select = document.getElementById('doctorSelect');
    
    doctors.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor.id;
        option.textContent = `${doctor.name} - ${doctor.specialization}`;
        select.appendChild(option);
    });
}

// Set Minimum Date for Appointment
function setMinDate() {
    const dateInput = document.getElementById('appointmentDate');
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const minDate = tomorrow.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
}

// Setup Event Listeners
function setupEventListeners() {
    // Appointment Form Submission
    const appointmentForm = document.getElementById('appointmentForm');
    appointmentForm.addEventListener('submit', handleAppointmentSubmit);
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', handleContactSubmit);
    
    // Modal Close
    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click', closeSuccessModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('successModal');
        if (event.target === modal) {
            closeSuccessModal();
        }
    });
    
    // Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Handle Appointment Form Submission
function handleAppointmentSubmit(e) {
    e.preventDefault();
    
    const formData = {
        id: Date.now(),
        patientName: document.getElementById('patientName').value,
        patientEmail: document.getElementById('patientEmail').value,
        patientPhone: document.getElementById('patientPhone').value,
        doctorId: document.getElementById('doctorSelect').value,
        date: document.getElementById('appointmentDate').value,
        time: document.getElementById('appointmentTime').value,
        reason: document.getElementById('reason').value,
        status: 'Scheduled'
    };
    
    // Get doctor name
    const doctor = doctors.find(d => d.id == formData.doctorId);
    formData.doctorName = doctor ? doctor.name : 'Unknown';
    formData.doctorSpecialization = doctor ? doctor.specialization : '';
    
    // Save appointment
    appointments.push(formData);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    
    // Reset form
    e.target.reset();
    
    // Reload appointments
    loadAppointments();
    
    // Show success modal
    showSuccessModal(
        'Appointment Booked!',
        `Your appointment with ${formData.doctorName} has been scheduled for ${formatDate(formData.date)} at ${formatTime(formData.time)}.`
    );
}

// Handle Contact Form Submission
function handleContactSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    
    // In a real application, this would send the message to a server
    console.log('Contact Form Submission:', { name, email, message });
    
    // Reset form
    e.target.reset();
    
    // Show success modal
    showSuccessModal(
        'Message Sent!',
        `Thank you ${name}! We have received your message and will get back to you soon at ${email}.`
    );
}

// Load Appointments
function loadAppointments() {
    const appointmentsList = document.getElementById('appointmentsList');
    appointmentsList.innerHTML = '';
    
    if (appointments.length === 0) {
        appointmentsList.innerHTML = '<p class="no-appointments">No appointments booked yet.</p>';
        return;
    }
    
    appointments.forEach(appointment => {
        const card = createAppointmentCard(appointment);
        appointmentsList.appendChild(card);
    });
}

// Create Appointment Card
function createAppointmentCard(appointment) {
    const card = document.createElement('div');
    card.className = 'appointment-card';
    
    card.innerHTML = `
        <h3>${appointment.patientName}</h3>
        <div class="appointment-detail">
            <strong>Doctor:</strong> ${appointment.doctorName}
        </div>
        <div class="appointment-detail">
            <strong>Specialization:</strong> ${appointment.doctorSpecialization}
        </div>
        <div class="appointment-detail">
            <strong>Date:</strong> ${formatDate(appointment.date)}
        </div>
        <div class="appointment-detail">
            <strong>Time:</strong> ${formatTime(appointment.time)}
        </div>
        <div class="appointment-detail">
            <strong>Status:</strong> <span style="color: var(--secondary-color);">${appointment.status}</span>
        </div>
        ${appointment.reason ? `<div class="appointment-detail"><strong>Reason:</strong> ${appointment.reason}</div>` : ''}
        <div class="appointment-actions">
            <button class="btn btn-small btn-danger" onclick="cancelAppointment(${appointment.id})">Cancel Appointment</button>
        </div>
    `;
    
    return card;
}

// Cancel Appointment
function cancelAppointment(appointmentId) {
    if (confirm('Are you sure you want to cancel this appointment?')) {
        appointments = appointments.filter(app => app.id !== appointmentId);
        localStorage.setItem('appointments', JSON.stringify(appointments));
        loadAppointments();
        
        showSuccessModal(
            'Appointment Cancelled',
            'Your appointment has been cancelled successfully.'
        );
    }
}

// Show Success Modal
function showSuccessModal(title, message) {
    const modal = document.getElementById('successModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    
    modal.style.display = 'block';
}

// Close Success Modal
function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none';
}

// Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Format Date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Format Time
function formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
}
