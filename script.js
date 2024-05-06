let unread = document.getElementsByClassName('unread');
let heading = document.getElementById('heading');
let notifs = document.getElementsByClassName('notification');

for (let i = 0; i < notifs.length; i++){
    notifs[i].addEventListener('click', function () {
        if (notifs[i].classList.contains('unread')) {
            notifs[i].classList.remove('unread');
            let currentCount = Number(getComputedStyle(heading).getPropertyValue('--notifications-count').replace(/['"]+/g, ""));
            let newCount = String(currentCount - 1)
            heading.style.setProperty('--notifications-count', "\"" + newCount + "\"")
        }
        
    })
}

document.getElementById('mark-read').addEventListener('click', function () {
    while (unread.length) {unread[0].classList.remove('unread')}
    
    heading.style.setProperty('--notifications-count', "'0'")
})

