function switchContent(name, parent='.', suffix='xml') {
    document.getElementById('page').src = `${parent}/pages/${name}.${suffix}`
}
