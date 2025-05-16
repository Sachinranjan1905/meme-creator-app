const imageInput = document.getElementById('imageInput');
const memeImage = document.getElementById('memeImage');
const topTextInput = document.getElementById('topText');
const bottomTextInput = document.getElementById('bottomText');
const memeTop = document.getElementById('memeTop');
const memeBottom = document.getElementById('memeBottom');
const autoBtn = document.getElementById('autoBtn');
const downloadBtn = document.getElementById('downloadBtn');
const languageSelector = document.getElementById('languageSelector');
const memeTypeList = document.getElementById('memeTypeList');

let selectedType = 'funny';

// Handle image upload and display
imageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    memeImage.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

// Update meme text inputs live
topTextInput.addEventListener('input', () => {
  memeTop.textContent = topTextInput.value;
});
bottomTextInput.addEventListener('input', () => {
  memeBottom.textContent = bottomTextInput.value;
});

// Meme type selection in side menu
memeTypeList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    // Remove active from all
    [...memeTypeList.children].forEach(li => li.classList.remove('active'));
    // Set active on clicked
    e.target.classList.add('active');
    selectedType = e.target.dataset.type;
  }
});

// Predefined meme text templates by type and language
const memeTemplates = {
  funny: {
    English: [
      ["When life gives you lemons,", "make lemonade!"],
      ["I don't always make memes,", "but when I do, they're funny."],
      ["That moment when", "you realize it's Monday again."],
    ],
    Hindi: [
      ["जब ज़िंदगी देगी नींबू,", "तो नींबू पानी बना!"],
      ["मैं हमेशा मेमे नहीं बनाता,", "पर जब बनाता हूँ तो मज़ेदार होते हैं।"],
      ["वो पल जब", "फिर से सोमवार हो गया।"],
    ],
    Bhojpuri: [
      ["जब जिंदगी देले नींबू,", "त नींबू पानी बना!"],
      ["हमेशा मेमे ना बनाइले,", "बाकिर जब बनावेनी त मज़ेदार होला।"],
      ["उ समय जब", "फेर से सोमवार आ गइल।"],
    ],
  },
  romantic: {
    English: [
      ["You stole my heart,", "but I'll let you keep it."],
      ["Love is not just a word,", "it's an emotion."],
      ["Every moment with you", "feels like a dream."],
    ],
    Hindi: [
      ["तुमने मेरा दिल चुरा लिया,", "पर मैं तुम्हें रखने दूंगा।"],
      ["प्यार सिर्फ एक शब्द नहीं,", "ये एक एहसास है।"],
      ["तुम्हारे साथ हर पल", "एक सपना लगता है।"],
    ],
    Bhojpuri: [
      ["तू हमार दिल चुरा लेले बाड़ू,", "बाकिर राखे देब।"],
      ["प्यार खाली एगो शब्द नइखे,", "ई एगो भावना बा।"],
      ["तोहरे साथ हर पल", "सपना जइसन लागेला।"],
    ],
  },
  serious: {
    English: [
      ["Life is tough,", "but so are you."],
      ["Stay strong,", "keep moving forward."],
      ["Every challenge is", "an opportunity in disguise."],
    ],
    Hindi: [
      ["ज़िंदगी कठिन है,", "पर तुम भी मजबूत हो।"],
      ["मजबूत रहो,", "आगे बढ़ते रहो।"],
      ["हर चुनौती", "एक अवसर है।"],
    ],
    Bhojpuri: [
      ["जिंदगी कठिन बा,", "बाकिर तू भी मजबूत बाड़ू।"],
      ["मजबूत रहऽ,", "आगे बढ़त रहऽ।"],
      ["हर चुनौती", "एक मौका बा।"],
    ],
  },
  sarcastic: {
    English: [
      ["I'm not lazy,", "I'm on energy-saving mode."],
      ["Sure, I'll help you,", "right after my nap."],
      ["I'm not arguing,", "I'm just explaining why I'm right."],
    ],
    Hindi: [
      ["मैं आलसी नहीं हूँ,", "मैं ऊर्जा बचा रहा हूँ।"],
      ["ज़रूर, मैं मदद करूंगा,", "मेरी नींद के बाद।"],
      ["मैं बहस नहीं कर रहा,", "मैं बस सही होने की बात समझा रहा हूँ।"],
    ],
    Bhojpuri: [
      ["हम आलसी ना बानी,", "हम एनर्जी सेविंग मोड पर बानी।"],
      ["जरूर, हम मदद करब,", "हमार नीन के बाद।"],
      ["हम बहस ना कर रहल बानी,", "बस सही बानी बतावत बानी।"],
    ],
  },
  motivational: {
    English: [
      ["Don't stop until", "you're proud."],
      ["Dream it.", "Do it."],
      ["Success is", "a journey, not a destination."],
    ],
    Hindi: [
      ["रुकना मत जब तक", "तुम गर्व महसूस न करो।"],
      ["सपना देखो।", "कर दिखाओ।"],
      ["सफलता", "एक यात्रा है, मंजिल नहीं।"],
    ],
    Bhojpuri: [
      ["रुक मत जब तक", "तोहरा गर्व ना होखे।"],
      ["सपना देख।", "कर के दिखा।"],
      ["सफलता", "एगो यात्रा बा, मंजिल ना।"],
    ],
  },
};

// Auto generate meme text based on selected meme type and language
autoBtn.addEventListener('click', () => {
  const lang = languageSelector.value;
  const templates = memeTemplates[selectedType];
  if (!templates) return alert("No templates found for this meme type.");
  const texts = templates[lang];
  if (!texts) return alert("No templates found for this language.");

  const randomPair = texts[Math.floor(Math.random() * texts.length)];
  topTextInput.value = randomPair[0];
  bottomTextInput.value = randomPair[1];
  memeTop.textContent = randomPair[0];
  memeBottom.textContent = randomPair[1];
});

// Download meme image as PNG
downloadBtn.addEventListener('click', () => {
  if (!memeImage.src) {
    alert("Please upload an image first.");
    return;
  }
  html2canvas(document.getElementById('memeContainer')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'meme.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
});

// Initialize meme texts on page load
topTextInput.value = '';
bottomTextInput.value = '';
memeTop.textContent = '';
memeBottom.textContent = '';
