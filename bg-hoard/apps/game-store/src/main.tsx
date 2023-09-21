import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../../libs/ui-shared/src/lib/header/header'

import './index.css';
import App from './app/app';


const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
    <StrictMode>
      <Header title='Boardgames'/>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
