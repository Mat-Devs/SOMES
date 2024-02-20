//  const calendarDiv = document.getElementById('calendar');

/*
function createCalendar() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  let calendarHTML = `<h2>${months[currentMonth]} ${currentYear}</h2>`;
  calendarHTML += '<table>';

  // Create header row with days of the week
  calendarHTML += '<tr>';
  for (let day = 0; day < 7; day++) {
    calendarHTML += `<th>${daysOfWeek[day]}</th>`;
  }
  calendarHTML += '</tr>';

  // Create calendar cells
  let dayCount = 1;
  for (let row = 0; row < 6; row++) {
    calendarHTML += '<tr>';
    for (let col = 0; col < 7; col++) {
      if (row === 0 && col < new Date(currentYear, currentMonth).getDay()) {
        calendarHTML += '<td></td>';
      } else if (dayCount > daysInMonth) {
        break;
      } else {
        calendarHTML += `<td>${dayCount}</td>`;
        dayCount++;
      }
    }
    calendarHTML += '</tr>';
  }

  calendarHTML += '</table>';

  calendarDiv.innerHTML = calendarHTML;
}

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const daysOfWeek = [
  "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];

createCalendar();
 */