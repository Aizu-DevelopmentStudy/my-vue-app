import { createI18n } from 'vue-i18n'
import ja from './ja'
import en from './en-US'

const i18n = createI18n({
    locale: import.meta.env.LOCALE,
    messages:{
        en,
        ja
    }
})
export default i18n
