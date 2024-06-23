import { Routes } from '@angular/router';
import { FormLocalComponent } from './componentes/form-local/form-local.component';
import { TabalLocalComponent } from './componentes/tabal-local/tabal-local.component';

export const routes: Routes = [
    {
        path: 'alta-local',
        component: FormLocalComponent
    },
    {
        path: 'local-tabla',
        component: TabalLocalComponent
    },
    {
        path: 'alta-local/:id',
        component: FormLocalComponent
    }
];
