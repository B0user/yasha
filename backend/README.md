# UZHNUR-PROJECT Backend API

A Node.js + Express + MongoDB backend service for capturing and managing leads from the landing page forms.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
cd backend
npm install
```

2. **Configure environment:**
```bash
cp .env.example .env
# Edit .env with your MongoDB URI and other settings
```

3. **Start MongoDB** (if using local installation):
```bash
mongod
```

4. **Run the server:**
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

The API will be available at `http://localhost:5000`

## 📋 API Endpoints

### Create Lead (Public)
```http
POST /api/leads
Content-Type: application/json

{
  "name": "Ivan Petrov",
  "phone": "+79998887766",
  "email": "ivan@example.com",
  "description": "Need renovation 120m²",
  "form_type": "extended",
  "utm": {
    "source": "yandex",
    "medium": "cpc",
    "campaign": "remont_moscow",
    "content": "ad_variant_3",
    "term": "ремонт квартиры"
  }
}
```

### Get All Leads
```http
GET /api/leads?form_type=extended&utm_source=yandex&page=1&limit=20
```

### Get Single Lead
```http
GET /api/leads/:id
```

### Update Lead Status
```http
PATCH /api/leads/:id/status
Content-Type: application/json

{
  "status": "contacted"
}
```

### Delete Lead
```http
DELETE /api/leads/:id
```

### Analytics
```http
GET /api/analytics/summary?date_from=2025-09-01&date_to=2025-09-21
```

## 🔧 Configuration

### Environment Variables (.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/yasha_leads
FRONTEND_URL=http://localhost:3000
```

### Form Types
- `quick` - Simple name + phone form
- `extended` - Full form with description
- `callback` - Callback request form

### Lead Statuses
- `new` - Just submitted (default)
- `contacted` - Initial contact made
- `qualified` - Lead is qualified
- `converted` - Successfully converted to client
- `rejected` - Lead rejected/not interested

## 🛡️ Security Features

- **Rate Limiting**: 5 lead submissions per 15 minutes per IP
- **Input Validation**: Phone format, email validation, length limits
- **CORS Protection**: Configured for your frontend domain
- **Helmet.js**: Security headers
- **IP Tracking**: For analytics and spam prevention

## 📊 Analytics Data

The analytics endpoint provides:
- Total leads count
- Breakdown by form type, UTM source, and status
- Daily statistics (last 30 days)
- Conversion rate calculation

## 🔌 Frontend Integration

### JavaScript Example
```javascript
// Submit form data
const submitLead = async (formData) => {
  try {
    const response = await fetch('http://localhost:5000/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        form_type: 'quick',
        utm: {
          source: new URLSearchParams(window.location.search).get('utm_source'),
          medium: new URLSearchParams(window.location.search).get('utm_medium'),
          campaign: new URLSearchParams(window.location.search).get('utm_campaign')
        }
      })
    });
    
    const result = await response.json();
    
    if (result.status === 'success') {
      console.log('Lead submitted:', result.lead_id);
      // Show success message
    } else {
      console.error('Error:', result.message);
      // Show error message
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};
```

## 🚀 Deployment

### Production Setup
1. Set `NODE_ENV=production` in .env
2. Use MongoDB Atlas for database
3. Configure proper CORS origins
4. Set up process manager (PM2)
5. Use reverse proxy (nginx)

### PM2 Example
```bash
npm install -g pm2
pm2 start src/server.js --name "yasha-api"
pm2 startup
pm2 save
```

## 📈 Monitoring

- Health check: `GET /health`
- Logs: Check console output or configure Winston
- Database: Monitor MongoDB performance
- Rate limits: Check for blocked requests

## 🔄 Future Enhancements

- [ ] JWT authentication for admin endpoints
- [ ] Telegram/Slack notifications for new leads
- [ ] Email notifications
- [ ] Lead scoring system
- [ ] CRM integration (Bitrix24, AmoCRM)
- [ ] Webhook support
- [ ] Data export (CSV, Excel)
