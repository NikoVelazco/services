import { Routes } from '@angular/router';
import { FormLocalComponent } from './componentes/form-local/form-local.component';
import { TabalLocalComponent } from './componentes/tabal-local/tabal-local.component';
import { FormPropietarioComponent} from './componentes/form-propietario/form-propietario.component';
import { TablaPropietarioComponent } from './componentes/tabla-propietario/tabla-propietario.component';
import { FormAlquilerComponent} from './componentes/form-alquiler/form-alquiler.component';
import { TablaAlquilerComponent } from './componentes/tabla-alquiler/tabla-alquiler.component';

export const routes: Routes = [
    /*{
        path: 'alta-local',
        component: FormLocalComponent
    },*/
    {
        path: 'local-tabla',
        component: TabalLocalComponent
    },
    {
        path: 'alta-local/:id',
        component: FormLocalComponent
    },
    {
        path: 'alta-propietario/:id',
        component: FormPropietarioComponent
    },
    {
        path: 'propietario-tabla',
        component: TablaPropietarioComponent
    },
    {
        path: 'alta-alquiler/:id',
        component: FormAlquilerComponent
    },
    {
        path: 'alquiler-tabla',
        component: TablaAlquilerComponent
    }
];
