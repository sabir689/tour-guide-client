import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = ({ tourName, tourPrice }) => {
  const [formData, setFormData] = useState({
    touristName: '',
    touristEmail: '',
    tourDate: new Date(),
    tourGuide: '',
    tourName: tourName || '', // Use the provided tourName or an empty string
    tourPrice: tourPrice || 0,
  });

  const [guideNames, seTGuideNames] = useState([]);

  useEffect(() => {
    const fetchGuideNames = async () => {
      try {
        const response = await fetch('https://tourist-guide-server-tau.vercel.app/guides');
        const data = await response.json();
        seTGuideNames(data);
      } catch (error) {
        console.error('Error fetching guide names:', error);
      }
    };

    fetchGuideNames();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    
    if (name === 'tourName') {
      const selectedTour = guideNames.find((guide) => guide.name === value);
      const newTourPrice = selectedTour ? selectedTour.price : 0;
      setFormData((prevData) => ({ ...prevData, [name]: value, tourPrice: newTourPrice }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, tourDate: date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await fetch('https://tourist-guide-server-tau.vercel.app/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{tourName} - Booking Form</h2>

        {['touristName', 'touristEmail', 'tourName', 'tourPrice'].map((fieldName) => (
          <div key={fieldName} className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              {fieldName === 'touristName'
                ? 'Tourist Name'
                : fieldName === 'touristEmail'
                ? 'Tourist Email'
                : fieldName === 'tourName'
                ? 'Tour Name'
                : 'Tour Price'}
            </label>
            <input
              type={fieldName === 'touristEmail' ? 'email' : 'text'}
              name={fieldName}
              value={formData[fieldName]}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
        ))}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Tour Date</label>
          <DatePicker
            selected={formData.tourDate}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Tour Guide Name</label>
          <select
            name="tourGuide"
            value={formData.tourGuide}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="">Select Tour Guide</option>
            {guideNames.map((guide) => (
              <option key={guide.name} value={guide.name}>
                {guide.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
