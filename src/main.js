const $websiteList = $('.websiteList')
const $addLi = $websiteList.find('li.addLi')
const websiteItems = localStorage.getItem('websiteItems')
const websiteItemsObject = JSON.parse(websiteItems)
const hashMap = websiteItemsObject || [
    {logo: 'C', url: 'https://www.csdn.net'},
    {logo: 'G', url: 'https://github.com'},
    {logo: 'I', url: 'https://www.iconfont.cn'}
]
let $box = $('.box')[0]
let $hidden = $('.hidden')[0]
let $inputUrl = $('#inputUrl')


const simplifyUrl = (url) => {
    return url.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace(/\/.*/, '')
}

const saveLocalStorage = () => {
    const websiteItemsString = JSON.stringify(hashMap)
    localStorage.setItem('websiteItems', websiteItemsString)
}


const reload = () => {
    $websiteList.find('li:not(.addLi)').remove()
    hashMap.forEach((item, index) => {
        const $li = $(`<li>
                        <div class="website">
                            <div class="logo">${item.logo}</div>
                            <div class="URLName">${simplifyUrl(item.url)}</div>
                            <div class="close">
                                <svg class="icon">
                                    <use xlink:href="#icon-close"></use>
                                </svg>
                            </div>
                        </div>
                       </li>`).insertBefore($addLi)

        $li.on('click', () => {
            window.open(item.url)
        })
        $li.on('click', '.close', (e) => {
            e.stopPropagation() //阻止冒泡
            hashMap.splice(index, 1)
            saveLocalStorage()
            reload()
        })
    })
}

reload()

$('.addButton').on('click', () => {
    $box.style.display = 'flex'
    $hidden.style.display = 'block'
    $inputUrl.val('')
    $inputUrl.focus()

})
const closeBox = () => {
    $box.style.display = 'none'
    $hidden.style.display = 'none'
}

$('.submitButton').on('click', () => {
    let url = $inputUrl.val()
    if(url === '') {
        closeBox()
        return
    } else if (url.indexOf('http') !== 0) {
        url = 'https://' + url
    }
        hashMap.push({
            logo: simplifyUrl(url)[0].toUpperCase(),
            url: url
        })
        saveLocalStorage()
        closeBox()
        reload()

})

$('input').on('keypress', (e) => {
    e.stopPropagation()
})

$(document).on('keypress', (e) => {
    const {key} = e
    for(let i = 0; i < hashMap.length; i++) {
        if(hashMap[i].logo.toLowerCase() === key) {
            window.open(hashMap[i].url)
        }
    }
})
