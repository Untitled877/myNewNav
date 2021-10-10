(function () {
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$websiteList = $('.websiteList');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$addLi = $16b5ad875ae907e2f7f79e7b8fe116cc$var$$websiteList.find('li.addLi');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$websiteItems = localStorage.getItem('websiteItems');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$websiteItemsObject = JSON.parse($16b5ad875ae907e2f7f79e7b8fe116cc$var$websiteItems);
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap = $16b5ad875ae907e2f7f79e7b8fe116cc$var$websiteItemsObject || [{
    logo: 'C',
    url: 'https://www.csdn.net'
  }, {
    logo: 'G',
    url: 'https://github.com'
  }, {
    logo: 'I',
    url: 'https://www.iconfont.cn'
  }, {
    logo: 'J',
    url: 'https://juejin.cn'
  }, {
    logo: 'Y',
    url: 'https://www.youtube.com/'
  }];
  let $16b5ad875ae907e2f7f79e7b8fe116cc$var$$box = $('.box')[0];
  let $16b5ad875ae907e2f7f79e7b8fe116cc$var$$hidden = $('.hidden')[0];
  let $16b5ad875ae907e2f7f79e7b8fe116cc$var$$inputUrl = $('#inputUrl');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl = url => {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '');
  };
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$saveLocalStorage = () => {
    const websiteItemsString = JSON.stringify($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap);
    localStorage.setItem('websiteItems', websiteItemsString);
  };
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$reload = () => {
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$websiteList.find('li:not(.addLi)').remove();
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.forEach((item, index) => {
      const $li = $(`<li>
                        <div class="website">
                            <div class="logo">${item.logo}</div>
                            <div class="URLName">${$16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(item.url)}</div>
                            <div class="close">
                                <svg class="icon">
                                    <use xlink:href="#icon-close"></use>
                                </svg>
                            </div>
                        </div>
                       </li>`).insertBefore($16b5ad875ae907e2f7f79e7b8fe116cc$var$$addLi);
      $li.on('click', () => {
        window.open(item.url);
      });
      $li.on('click', '.close', e => {
        e.stopPropagation();
        // 阻止冒泡
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.splice(index, 1);
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$saveLocalStorage();
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$reload();
      });
    });
  };
  $16b5ad875ae907e2f7f79e7b8fe116cc$var$reload();
  $('.addButton').on('click', () => {
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$box.style.display = 'flex';
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$hidden.style.display = 'block';
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$inputUrl.val('');
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$inputUrl.focus();
  });
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$closeBox = () => {
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$box.style.display = 'none';
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$hidden.style.display = 'none';
  };
  $('.submitButton').on('click', () => {
    let url = $16b5ad875ae907e2f7f79e7b8fe116cc$var$$inputUrl.val();
    if (url === '') {
      $16b5ad875ae907e2f7f79e7b8fe116cc$var$closeBox();
      return;
    } else if (url.indexOf('http') !== 0) {
      url = 'https://' + url;
    }
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.push({
      logo: $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplifyUrl(url)[0].toUpperCase(),
      url: url
    });
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$saveLocalStorage();
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$closeBox();
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$reload();
  });
  $('input').on('keypress', e => {
    e.stopPropagation();
  });
  $(document).on('keypress', e => {
    const {key} = e;
    for (let i = 0; i < $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.length; i++) {
      if ($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap[i].logo.toLowerCase() === key) {
        window.open($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap[i].url);
      }
    }
  });
})();

//# sourceMappingURL=index.9b5b3d37.js.map
