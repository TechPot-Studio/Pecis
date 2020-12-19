let ver;

if (/*@cc_on!@*/0) {
    window.close();
}

function switchPage (name) {
    loading.style.visibility = 'visible';
    document.querySelector('#content iframe').src = `${ver}/${name}.xml`
}
function switchVer () {
    ver = document.querySelector('#select-ver').value;
    document.querySelectorAll('.docs-list').forEach(each => each.childNodes.forEach((each) => {
        each.addEventListener('click', function () {
            switchPage(each.innerText);
        })
    }))
}
window.addEventListener('load', function () {
    const iframe = document.querySelector('#content iframe'),
        loading = document.querySelector('#loading'),
        select = document.querySelector('select#select-ver'),
        aside = document.querySelector('aside');
    select.addEventListener('change', switchVer);
    iframe.onload = function () {
        loading.style.visibility = 'hidden';
    }
    switchVer();
});