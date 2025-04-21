fetch('entries.txt')
  .then(response => response.text())
  .then(text => {
    const container = document.getElementById('diary-entries');

    // Keep the entries in original order
    const rawEntries = text.trim().split(/\n\s*\n/).filter(e => e.trim() !== '');

    const total = rawEntries.length;

    rawEntries.forEach((entryText, index) => {
      const lines = entryText.trim().split('\n');
      const title = lines[0];
      const body = lines.slice(1).join('<br>'); // preserve newlines

      const number = total - index; // count down from the total

      const titleEl = document.createElement('p');
      titleEl.innerHTML = `<strong>${number}. ${title}</strong>`;

      const bodyEl = document.createElement('p');
      bodyEl.innerHTML = body;

      container.appendChild(titleEl);
      container.appendChild(bodyEl);
    });
  });
