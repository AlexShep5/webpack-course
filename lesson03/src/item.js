export function getItemHtml(item) {

    if (item.type == 'img') {
        return `<div class="gallItem">
                    <img class="gallImg" src="${item.res}">
                    <p class="gallItemTitle">${item.title}</p>
                </div>`
    } else if (item.type == 'audio') {
        return `<div class="gallItem">
                    <audio class="gallAudio" src="${item.res}" controls></audio>
                    <p class="gallItemTitle">${item.title}</p>
                </div>`
    } else if (item.type == 'video') {
        return `<div class="gallItem">
                    <video class="gallVideo" controls>
                        <source src="${item.res}" type="video/mp4">
                    </video>
                    <p class="gallItemTitle">${item.title}</p>
                </div>`
    }
}
