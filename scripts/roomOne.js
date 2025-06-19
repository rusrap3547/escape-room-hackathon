function createCalendar(divId, year, month) {
  const calendarDiv = document.getElementById(divId);
  calendarDiv.innerHTML = '';

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const header = document.createElement('div');
  header.className = 'calendar-header';
  header.innerText = `${year} - ${month + 1}`;
  calendarDiv.appendChild(header);

  const grid = document.createElement('div');
  grid.className = 'calendar-grid';

  // Add day names
  daysOfWeek.forEach(day => {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'calendar-day';
    dayDiv.innerText = day;
    grid.appendChild(dayDiv);
  });

  // Get first day of the month
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Add blank cells before the first day
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement('div');
    grid.appendChild(empty);
  }

  // Fill in days
  const today = new Date();
  for (let i = 1; i <= daysInMonth; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'calendar-day';
    dayDiv.innerText = i;

    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayDiv.classList.add('today');
    }

    grid.appendChild(dayDiv);
  }

  calendarDiv.appendChild(grid);
}

// Usage
const now = new Date();
createCalendar('calendar', now.getFullYear(), now.getMonth());
