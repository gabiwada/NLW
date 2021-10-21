const userSocialMedia = {
  github: 'gabiwada',
  instagram: 'gabiwada13'
}

function changesSocialMediaLinks() {
  for (let li of changesSocialMediaLinks.children) {
    const social = li.getAttribiute('class')
    alert(social)
  }
}

changesSocialMediaLinks()
