# HealthCare Plus - Healthcare Management Web Application

A modern, responsive healthcare management web application built with HTML, CSS, and JavaScript. This application allows patients to book appointments with doctors, view available services, and contact the healthcare facility.

## Features

### 🏥 Core Functionality
- **Doctor Profiles**: Browse through available doctors with their specializations and experience
- **Appointment Booking**: Schedule appointments with preferred doctors
- **Services Overview**: View all healthcare services offered
- **Contact Form**: Get in touch with the healthcare facility
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### 📋 Appointment Management
- Book appointments with specific doctors
- Select preferred date and time
- Add reason for visit
- View all scheduled appointments
- Cancel appointments
- Appointments stored in browser's local storage

### 👨‍⚕️ Available Specializations
- Cardiology
- Orthopedics
- Pediatrics
- General Medicine
- Dermatology
- Neurology

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Local Storage**: Client-side data persistence

## Project Structure

```
Javascript-Project/
│
├── frontend/
│   ├── index.html          # Main HTML file
│   ├── css/
│   │   └── style.css       # CSS styling
│   └── js/
│       └── script.js       # JavaScript functionality
│
├── backend/                # Backend (ready for implementation)
│   ├── src/                # Backend source code
│   ├── config/             # Configuration files
│   ├── package.json        # Backend dependencies
│   └── README.md           # Backend documentation
│
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/benjohn94/Javascript-Project.git
```

2. Navigate to the project directory:
```bash
cd Javascript-Project
```

3. Open `frontend/index.html` in your web browser:
   - Double-click the file, or
   - Right-click and select "Open with" your preferred browser, or
   - Use a local development server (optional)

### Using a Local Server (Optional)

If you prefer using a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Usage

### Booking an Appointment

1. Navigate to the **Appointments** section
2. Fill in your details:
   - Full Name
   - Email Address
   - Phone Number
   - Select a Doctor
   - Choose Preferred Date (must be at least tomorrow)
   - Choose Preferred Time
   - Optionally add a reason for visit
3. Click "Book Appointment"
4. Your appointment will be saved and displayed in the "Your Appointments" section

### Viewing Appointments

- Scroll to the "Your Appointments" section to see all scheduled appointments
- Each appointment card shows:
  - Patient name
  - Doctor details
  - Date and time
  - Status
  - Reason (if provided)

### Cancelling an Appointment

- Click the "Cancel Appointment" button on any appointment card
- Confirm the cancellation when prompted

### Contacting Us

1. Scroll to the **Contact** section
2. Fill in the contact form with your name, email, and message
3. Click "Send Message"

## Features in Detail

### Responsive Navigation
- Sticky navigation bar that stays at the top while scrolling
- Smooth scrolling to different sections
- Active link highlighting

### Doctor Profiles
- 6 specialized doctors with different expertise
- Experience and rating information
- Visual icons for each specialization

### Services
- 6 main healthcare services:
  - General Checkup
  - 24/7 Pharmacy
  - Laboratory Services
  - Emergency Care
  - Cardiology
  - Orthopedics

### Data Persistence
- Appointments are saved in browser's local storage
- Data persists across browser sessions
- Appointments remain even after closing the browser

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Customization

### Adding New Doctors

Edit the `doctors` array in `frontend/js/script.js`:

```javascript
const doctors = [
    {
        id: 7,
        name: "Dr. New Doctor",
        specialization: "Specialty",
        experience: "X years of experience",
        rating: 4.9,
        icon: "🩺"
    },
    // ... existing doctors
];
```

### Changing Colors

Edit CSS variables in `frontend/css/style.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #10b981;
    /* ... other variables */
}
```

### Adding Services

Add new service cards in the `services-grid` section of `frontend/index.html`.

## Future Enhancements

Potential features for future development:
- [ ] Backend integration for real appointment management
- [ ] User authentication and login system
- [ ] Email notifications for appointments
- [ ] Payment integration
- [ ] Medical records management
- [ ] Prescription management
- [ ] Video consultation feature
- [ ] Multi-language support

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or feedback, please contact:
- Email: info@healthcareplus.com
- Phone: +1 (555) 123-4567

## Acknowledgments

- Icons: Emoji characters (native browser support)
- Design inspiration: Modern healthcare web applications
- No external libraries or frameworks used (vanilla JavaScript)

---

**Note**: This is a demo application for educational purposes. For production use, implement proper backend, security, and data validation.