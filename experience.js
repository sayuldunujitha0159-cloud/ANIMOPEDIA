(() => {
  const gate = document.querySelector('#ageGate');
  const owl = document.querySelector('#owlGuide');
  const owlMessage = document.querySelector('#owlMessage');
  const modes = {kids:'Young Explorer', explorer:'Explorer', student:'Student', general:'General Explorer'};
  let mode = localStorage.getItem('animopedia-mode');
  function setMode(value, firstRun = false) {
    mode = value;
    localStorage.setItem('animopedia-mode', value);
    document.body.classList.remove('kids-mode','mode-explorer','mode-student','mode-general');
    document.body.classList.add(`mode-${value}`);
    if (value === 'kids') {
      owl.hidden = false;
      owlMessage.textContent = 'Whooo wants to explore an animal today? I will help explain tricky words.';
    } else owl.hidden = true;
    gate.classList.add('hidden');
    setTimeout(() => { gate.hidden = true; }, 350);
    if (!firstRun) announce(`Learning style changed to ${modes[value]}.`);
  }
  document.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => setMode(button.dataset.mode)));
  document.querySelector('#settingsButton').addEventListener('click', () => { gate.hidden = false; requestAnimationFrame(() => gate.classList.remove('hidden')); });
  if (mode && modes[mode]) setMode(mode, true); else gate.hidden = false;

  let currentButton = null;
  function speak(text, button) {
    if (!('speechSynthesis' in window)) { announce('Read Aloud is not supported by this browser.'); return; }
    if (speechSynthesis.speaking && currentButton === button) { speechSynthesis.pause(); button.classList.toggle('speaking'); button.textContent = button.classList.contains('speaking') ? '⏸ Pause' : '▶ Resume'; return; }
    speechSynthesis.cancel();
    document.querySelectorAll('.speaking').forEach(x => { x.classList.remove('speaking'); x.textContent = '🔊 Read aloud'; });
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = mode === 'kids' ? .88 : .98;
    currentButton = button;
    button.classList.add('speaking'); button.textContent = '⏹ Stop reading';
    utterance.onend = () => { button.classList.remove('speaking'); button.textContent = '🔊 Read aloud'; currentButton = null; };
    speechSynthesis.speak(utterance);
    button.onclick = () => { speechSynthesis.cancel(); button.classList.remove('speaking'); button.textContent = '🔊 Read aloud'; currentButton = null; };
  }
  function announce(text) { const live = document.querySelector('#speechStatus') || Object.assign(document.body.appendChild(document.createElement('div')), {id:'speechStatus'}); live.textContent = text; live.className = 'sr-only'; }
  document.querySelectorAll('[data-read-target]').forEach(button => button.addEventListener('click', () => { const target = document.getElementById(button.dataset.readTarget); speak(target ? target.textContent : '', button); }));
  document.querySelector('#owlRead').addEventListener('click', () => speak(owlMessage.textContent, document.querySelector('#owlRead')));

  const dialogContent = document.querySelector('#dialogContent');
  const observer = new MutationObserver(() => {
    if (!dialogContent || !dialogContent.textContent.trim() || dialogContent.querySelector('.read-aloud')) return;
    const button = document.createElement('button'); button.className = 'read-aloud'; button.type = 'button'; button.textContent = '🔊 Read aloud';
    button.addEventListener('click', () => speak(dialogContent.innerText, button));
    dialogContent.querySelector('.dialog-body')?.prepend(button);
  });
  observer.observe(dialogContent, {childList:true, subtree:true});
})();
