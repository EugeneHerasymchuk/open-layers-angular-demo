import { InjectionToken, NgModule } from "@angular/core"

export interface AppConfig {
  subscriptionKey: string
}
export const APP_CONFIG = new InjectionToken<AppConfig>('app config')
const APP_PROD_CONFIG: AppConfig = {
  subscriptionKey: 'ImRQfoC5_nPc0SBcsdzKCj_j9-5NqmKmEgAMa8PbnAQ'
}

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useFactory: () => APP_PROD_CONFIG
  }]
})
export class ConfigModule { }
