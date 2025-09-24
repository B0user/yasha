import axios from 'axios';

// API Configuration
const API_BASE_URL = 'http://localhost:5000/api';


// Convert input into E.164 (+XXXXXXXX...)
export const formatPhoneNumber = (phone) => {
    if (!phone) {
        return '';
    }

    // Remove everything except digits
    const digits = phone.replace(/\D/g, '');

    // If user typed with leading + already
    if (phone.startsWith('+')) {
        const result = '+' + digits;
        return result;
    }

    // Example: if they type "87012345678" → assume KZ default (+7)
    if (digits.length === 11 && digits.startsWith('8')) {
        const result = '+7' + digits.slice(1);
        return result;
    }

    // Otherwise, just prepend "+"
    const result = '+' + digits;
    return result;
};

// Simple display formatter: group digits for readability
export const formatPhoneForDisplay = (phone) => {

    if (!phone) {
        return '';
    }

const digits = phone.replace(/\D/g, '');

if (phone.startsWith('+')) {
    const result = '+' + digits;
    return result;
}

const result = '+' + digits;
return result;
};

// Validate phone number (E.164 format, worldwide)
export const validatePhone = (phone) => {

    const formatted = formatPhoneNumber(phone);

    const phoneRegex = /^\+[1-9]\d{1,14}$/; // E.164: + followed by 1–15 digits
    const isValid = phoneRegex.test(formatted);
    return isValid;
};
  
// Get UTM parameters from URL
export const getUtmParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    source: urlParams.get('utm_source') || '',
    medium: urlParams.get('utm_medium') || '',
    campaign: urlParams.get('utm_campaign') || '',
    content: urlParams.get('utm_content') || '',
    term: urlParams.get('utm_term') || ''
  };
};

// Submit lead to API
export const submitLead = async (leadData, formType = 'callback', showNotification, setLoading) => {
  if (setLoading) setLoading(true);
  
  // Client-side validation
  const formattedPhone = formatPhoneNumber(leadData.phone);
  
  if (!validatePhone(leadData.phone)) {
    if (showNotification) {
      showNotification('Пожалуйста, введите корректный номер телефона в формате +7XXXXXXXXXX', 'error');
    }
    if (setLoading) setLoading(false);
    return false;
  }

  try {
    const response = await axios.post(`${API_BASE_URL}/leads`, {
      name: leadData.name || '',
      email: leadData.email || '',
      phone: formattedPhone,
      description: leadData.message || leadData.description || '',
      form_type: formType,
      utm: getUtmParams()
    });

    if (response.data.status === 'success') {
      if (showNotification) {
        showNotification('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
      }
      return true;
    }
  } catch (error) {
    console.error('Error submitting lead:', error);
    
    // Handle different error types
    if (showNotification) {
      if (error.response?.data?.errors) {
        // Display validation errors from backend
        const errorMessages = error.response.data.errors.map(err => err.msg).join(', ');
        showNotification(`Ошибка валидации: ${errorMessages}`, 'error');
      } else if (error.response?.data?.message) {
        showNotification(`Ошибка: ${error.response.data.message}`, 'error');
      } else if (error.response?.status === 400) {
        showNotification('Ошибка валидации данных. Проверьте правильность заполнения формы.', 'error');
      } else if (error.code === 'ERR_NETWORK' || error.code === 'ECONNREFUSED') {
        showNotification('Сервер недоступен. Попробуйте позже или обратитесь по телефону.', 'error');
      } else {
        showNotification('Произошла ошибка при отправке заявки. Попробуйте еще раз.', 'error');
      }
    }
    return false;
  } finally {
    if (setLoading) setLoading(false);
  }
};

// Create form field update handler
export const createFieldUpdateHandler = (setForm) => {
  return (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      if (name === 'phone') {
        const formatted = formatPhoneForDisplay(value);
        return { ...prev, [name]: formatted };
      }
      return { ...prev, [name]: value };
    });
  };
};


// Create form submit handler - sends to backend API
export const createSubmitHandler = (form, formType = 'callback') => {
  return async (e) => {
    e.preventDefault();
    
    // Submit to backend API without notifications or loading states
    try {
      const success = await submitLead(form, formType);
      return success;
    } catch (error) {
      console.error('Form submission error:', error);
      return false;
    }
  };
};

// Create advanced form submit handler with notifications and loading
export const createAdvancedSubmitHandler = (form, setForm, formType, showNotification, setLoading) => {
  return async (e) => {
    e.preventDefault();
    const success = await submitLead(form, formType, showNotification, setLoading);
    if (success && setForm) {
      // Reset form
      setForm({ name: '', phone: '', email: '', message: '' });
    }
  };
};
