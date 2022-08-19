Array.from(document.querySelectorAll('[data-shuffle-p]')).forEach(shuffledP => {
  shuffledP.textContent = Array.from(shuffledP.childNodes)
    .filter(span => span.tagName === 'SPAN')
    .filter(span => span.dataset.shuffle !== undefined)
    .map(span => ({
      text: span.textContent,
      left: parseFloat(span.style.left),
      top: parseFloat(span.style.top),
    }))
    .sort(({ left: left0, top: top0 }, { left: left1, top: top1 }) => (top0 !== top1)
      ? (top0 - top1)
      : (left0 - left1))
    .map(({ text }) => text)
    .join('');
  });
