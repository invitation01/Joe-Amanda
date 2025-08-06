  const urlParams = new URLSearchParams(window.location.search);
  const dataParam = urlParams.get('data');

  if (dataParam) {
    try {
      const [encodedName, encodedGuests] = dataParam.split(".");
      const guestName = atob(encodedName);
      const guestCount = atob(encodedGuests);

      // تعبئة العناصر
      const nameElement = document.getElementById('welcome-name');
      const countElement = document.getElementById('guest-count');
      const modalNameElement = document.getElementById('modal-name');

      if (nameElement) nameElement.textContent = guestName;
      if (modalNameElement) modalNameElement.textContent = `to ${guestName}`;
      if (countElement) countElement.textContent = ` : ${guestCount}`;
    } catch (e) {
      console.error("Invalid data parameter", e);
    }
  }
