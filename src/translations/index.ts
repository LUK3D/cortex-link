import ptBR from "./pt-br.json";
import en from "./en.json";
import { I18n } from "i18n-js";


const i18n = new I18n({
    ...ptBR,
    ...en,
});


export default i18n;