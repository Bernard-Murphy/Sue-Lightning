let cards = document.getElementsByClassName('div-vid-container');
let cardArray = [...cards];
let selected = 0;
let stayClosed = false;

for (let i = 0; i < cardArray.length; i++){
    let card = cardArray[i];
    let num = i + 1;
    card.style.transition = '0.25s';
    card.addEventListener('mouseenter', () => {
        document.querySelector(`#h2-${num}`).style.color = 'whitesmoke';
        document.querySelector(`#p-${num}`).style.color = 'whitesmoke';
    })
    card.addEventListener('mouseleave', () => {
        document.querySelector(`#h2-${num}`).style.color = 'black';
        document.querySelector(`#p-${num}`).style.color = 'black';
    })
    card.addEventListener('click', () => {
        if (selected !== num && stayClosed === false){
            selected = num;
            let previous = document.querySelector(`#vid`);
            if (previous !== null){
                previous.remove();
            }
            let url = getUrl(num);
            // let newVid = document.createElement('video');
            document.querySelector(`#vid-${num}`).innerHTML = `<video src="${url}" id="vid" controls></video>`
            // newVid.id = 'vid';
            // newVid.src = url;
            // document.querySelector(`#vid-${num}`).appendChild(newVid);
        }
    })
}

for (let i = 1; i < 13; i++){
    let top = document.querySelector(`#top-${i}`);
    top.addEventListener('click', () => {
        let vid = document.querySelector('#vid');
        if (vid !== null && selected === i){
            vid.remove();
            stayClosed = true;
            setTimeout(() => {
                stayClosed = false;
        
            }, 250);
            selected = 0;
        }
    })
}


getUrl = (num) => {
    if (num === 1){
        return 'https://img.nanaimg.net/cranks_minified/tranthfull.mp4'
    } else if (num === 2){
        return 'https://img.nanaimg.net/cranks_minified/landau1.mp4'
    } else if (num === 3){
        return 'https://img.nanaimg.net/cranks_minified/landau2.mp4'
    } else if (num === 4){
        return 'https://img.nanaimg.net/cranks_minified/1.mp4'
    } else if (num === 5){
        return 'https://img.nanaimg.net/cranks_minified/2.mp4'
    } else if (num === 6){
        return 'https://img.nanaimg.net/cranks_minified/3.mp4'
    } else if (num === 7){
        return 'https://img.nanaimg.net/cranks_minified/4.mp4'
    } else if (num === 8){
        return 'https://img.nanaimg.net/cranks_minified/5.mp4'
    } else if (num === 9){
        return 'https://img.nanaimg.net/cranks_minified/6.mp4'
    } else if (num === 10){
        return 'https://img.nanaimg.net/cranks_minified/7.mp4'
    } else if (num === 11){
        return 'https://img.nanaimg.net/cranks_minified/morning1.mp4'
    } else if (num === 12){
        return 'https://img.nanaimg.net/cranks_minified/tranthshort.mp4'
    }
}