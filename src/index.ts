import { appConfig } from "./common"
import controller from "./controllers"

controller.listen(appConfig.port, () => {
    console.log(`Server is running on port ${appConfig.port}`)
})