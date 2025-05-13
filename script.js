    function isValidUrl(url) {
      try {
        new URL(url);
        return true;
      } catch (_) {
        return false;
      }
    }

    function addTextSection() {
      const container = document.getElementById('textsContainer');
      const count = container.querySelectorAll('.textSection').length + 1;
      const newField = document.createElement('div');
      newField.innerHTML = `
        <label>Text Section ${count}:</label>
        <textarea class="textSection" rows="2" placeholder="Enter message"></textarea>
      `;
      container.appendChild(newField);
    }

    function generateCard() {
      const theme = document.getElementById('theme').value;
      const imageUrl = document.getElementById('image').value.trim();
      const imageWidth = document.getElementById('imageWidth').value || 400;
      const imageHeight = document.getElementById('imageHeight').value || 300;
      const textSections = document.querySelectorAll('.textSection');

      const imageError = document.getElementById('imageError');
      imageError.textContent = '';

      if (!isValidUrl(imageUrl)) {
        imageError.textContent = 'Please enter a valid image URL.';
        return;
      }

      let textHtml = '';
      textSections.forEach(textarea => {
        const content = textarea.value.trim();
        if (content) {
          textHtml += `<p style="margin-top: 10px; font-size: 18px;">${content}</p>`;
        }
      });

      const cardHtml = `
        <div class="preview ${theme}">
          <img src="${imageUrl}" alt="Greeting Image" style="width: ${imageWidth}px; height: ${imageHeight}px; border-radius: 8px; object-fit: cover;" />
          ${textHtml}
        </div>
      `;

      document.getElementById('previewContainer').innerHTML = cardHtml;
    }
