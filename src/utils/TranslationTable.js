export default class TranslationTable {
    constructor(table) {
        if (typeof (table) === 'object') {
            this.tabel = table;
        }
    }

    set(newTable) {
        Object.keys(newTable).forEach(function (lang) {
            (newTable[lang]).forEach(function (word) {
                this.tabel[lang][word] = newTable[lang][word];
            });
        });
        return this;
    }

    get() {
        return this.tabel;
    }

    /**
     * Translation
     * @param {string} lang
     */
    translate(lang) {
        document.querySelectorAll('pecis-trans').forEach(function (element) {
            element.innerHTML = this.table[lang][element.getAttribute('word')];
        });
    }
};
