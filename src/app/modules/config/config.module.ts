import { InjectionToken, NgModule } from "@angular/core"

export interface AppConfig {
  subscriptionKey: string
  api: string
}
export const APP_CONFIG = new InjectionToken<AppConfig>('app config')
const APP_PROD_CONFIG: AppConfig = {
  subscriptionKey: 'ImRQfoC5_nPc0SBcsdzKCj_j9-5NqmKmEgAMa8PbnAQ',
  api: 'https://summitdays2021-gigalocation.azurewebsites.net/api/v1/kids/'
}

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useFactory: () => APP_PROD_CONFIG
  }]
})
export class ConfigModule { }
