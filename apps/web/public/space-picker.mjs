export function createSpacePicker(trigger, label, list, onSelect) {
  let choices = [];
  let selected = '';
  let active = 0;
  let search = '';
  let lastKey = 0;

  function highlight(index) {
    if (!choices.length) return;
    active = Math.max(0, Math.min(choices.length - 1, index));
    const option = list.children[active];
    trigger.setAttribute('aria-activedescendant', option.id);
    list.querySelector('[data-active]')?.removeAttribute('data-active');
    option.setAttribute('data-active', '');
    if (option.offsetTop < list.scrollTop) list.scrollTop = option.offsetTop;
    else if (option.offsetTop + option.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTop = option.offsetTop + option.offsetHeight - list.clientHeight;
    }
  }

  function close() {
    list.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    trigger.removeAttribute('aria-activedescendant');
    search = '';
  }

  function open(index = choices.findIndex(choice => choice.id === selected)) {
    list.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    highlight(index);
  }

  function choose(index) {
    const choice = choices[index];
    close();
    if (choice) onSelect(choice.id);
  }

  trigger.addEventListener('click', () => { if (list.hidden) open(); else close(); });
  trigger.addEventListener('blur', event => {
    if (!list.contains(event.relatedTarget)) close();
  });
  list.addEventListener('pointerdown', event => {
    if (event.target.closest('[role="option"]') && event.pointerType === 'mouse') event.preventDefault();
  });
  list.addEventListener('click', event => {
    const option = event.target.closest('[role="option"]');
    if (option) {
      trigger.focus({ preventScroll: true });
      choose(Number(option.dataset.index));
    }
  });
  trigger.addEventListener('keydown', event => {
    const { key } = event;
    if (key === 'Escape' && !list.hidden) {
      event.preventDefault();
      event.stopPropagation();
      close();
    } else if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(key)) {
      event.preventDefault();
      const position = key === 'Home' ? 0 : key === 'End' ? choices.length - 1 :
        list.hidden ? choices.findIndex(choice => choice.id === selected) : active + (key === 'ArrowDown' ? 1 : -1);
      if (list.hidden) open(position);
      else highlight(position);
    } else if ((key === 'Enter' || key === ' ') && !list.hidden) {
      event.preventDefault();
      choose(active);
    } else if (key.length === 1 && key !== ' ' && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      const now = performance.now();
      search = (now - lastKey < 650 ? search : '') + key.toLowerCase();
      lastKey = now;
      const match = choices.findIndex(choice => choice.name.toLowerCase().startsWith(search));
      if (match >= 0) {
        if (list.hidden) open(match);
        else highlight(match);
      }
    }
  });

  function render(items, id) {
    const activeId = choices[active]?.id;
    choices = items;
    selected = id;
    label.textContent = items.find(choice => choice.id === id)?.name ?? '';
    list.replaceChildren(...items.map((choice, index) => {
      const option = document.createElement('button');
      option.type = 'button';
      option.tabIndex = -1;
      option.id = list.id + '-' + index;
      option.dataset.index = String(index);
      option.setAttribute('role', 'option');
      option.setAttribute('aria-selected', String(choice.id === id));
      option.textContent = choice.name;
      return option;
    }));
    if (!list.hidden) highlight(choices.findIndex(choice => choice.id === activeId));
  }

  return { render, close };
}
