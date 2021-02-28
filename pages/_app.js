// import module from '';
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { 
    faSun,
    faMoon,
    faBorderAll, 
    faList, 
    faSortNumericDown, 
    faSortNumericUp 
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false; //To inform FOntAwesome to skip adding the css file, as it is added manually, below, in #7
library.add(faSun, faMoon,faBorderAll, faList, faSortNumericDown, faSortNumericUp);

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/darcula.css';
import 'react-toggle/style.css';
import 'styles/index.scss';
import ThemeProvider from 'provider/ThemeProvider';

export default ({ Component, pageProps }) => 
                <ThemeProvider>
                    <Component {...pageProps} />
                </ThemeProvider>


