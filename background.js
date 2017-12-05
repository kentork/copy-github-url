chrome.contextMenus.create({
  title: 'Copy Github Base Url',
  documentUrlPatterns: ['https://github.com/*/*'],
  onclick: () => {
    chrome.tabs.getSelected(null, function (tab) {
      const url = tab.url.match(/https:\/\/github\.com\/[a-zA-z0-9_\.\-]+\/[a-zA-z0-9_\.\-]+/)
      alert(url)
      let area = document.getElementById('clipboard')
      area.value = url[0]
      area.select()
      document.execCommand('copy', false, null)
    })
  }
})