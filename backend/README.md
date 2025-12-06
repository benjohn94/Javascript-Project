# Backend - HealthCare Plus

This directory is prepared for backend implementation.

## Proposed Structure

```
backend/
├── src/
│   ├── controllers/    # Business logic handlers
│   ├── models/         # Data models
│   ├── routes/         # API endpoints
│   ├── middleware/     # Custom middleware
│   └── utils/          # Helper functions
├── config/             # Configuration files
└── README.md
```

## Future Implementation

The backend can be implemented using:
- **Node.js + Express** - For REST API
- **MongoDB/PostgreSQL** - For database
- **JWT** - For authentication
- **Nodemailer** - For email notifications

## API Endpoints (Proposed)

### Appointments
- `POST /api/appointments` - Create new appointment
- `GET /api/appointments` - Get all appointments
- `GET /api/appointments/:id` - Get appointment by ID
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Delete appointment

### Doctors
- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get doctor by ID

### Contact
- `POST /api/contact` - Submit contact form
