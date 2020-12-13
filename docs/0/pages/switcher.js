function switchContent(name, parent=".") {
    document.getElementById('page').src = `${parent}/pages/${name}.xml`
}