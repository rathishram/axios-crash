const axios = require('axios');

const appointment = {
  id: 1,
  date: "2024-01-10",
  time: "14:30",
  description: "Meeting with Client A",
  location: "123 Main Street",
};

const apiUrl = 'https://crudcrud.com/api/b566eff1176f4de38eb70e0f2fab2f93/appointments'; 

async function saveAppointmentToCloud() {
  try {
    const response = await axios.post(apiUrl, appointment);

    const createdAppointment = response.data;
    
    console.log("Appointment saved successfully to the cloud:");
    console.log(createdAppointment);
  } catch (error) {
    console.error("Error saving appointment to the cloud:", error.message);
  }
}

saveAppointmentToCloud();
