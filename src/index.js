import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";
import { IntlProvider } from "react-intl";

let choose = () => {
    if(navigator.language.startsWith("es"))
        return localeEsMessages;
    else
        return localeEnMessages;
}

ReactDOM.render(
    <IntlProvider locale={navigator.language} key={navigator.language} messages={choose()}>
        <App locale={navigator.language}/>
    </IntlProvider>
    , document.getElementById('root')
    );
registerServiceWorker();
