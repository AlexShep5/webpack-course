
export function changeSection (activeSec, sections, titles) {

    titles.forEach(item => {
        item.classList.remove('pushedBtn');
    });

    sections.forEach(item => {
        item.classList.add('hidden');
    });

    titles[activeSec].classList.add('pushedBtn');
    sections[activeSec].classList.remove('hidden');
}
