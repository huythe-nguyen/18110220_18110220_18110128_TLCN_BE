const env = require('../../configs/env')

module.exports = (log) => {
    if (env.app.banner) {
        const route = () => `${env.app.schema}://${env.app.host}:${env.app.port}`
        log.info(``)
        log.info(`Sheeh, your app is ready on ${route()}${env.app.routePrefix}`)
        log.info(`To shut it down, press <CTRL> + C at any time.`)
        log.info(``)
        log.info('-------------------------------------------------------')
        log.info(`Environment  : ${env.node}`)
        log.info(`Version      : ${env.app.version}`)
        log.info(``)
        log.info(`API Info     : ${route()}${env.app.routePrefix}`)
<<<<<<< HEAD
        // if (env.swagger.enabled) {
        //     log.info(`Swagger      : ${route()}${env.swagger.route}`)
        // }
        // if (env.monitor.enabled) {
        //     log.info(`Monitor      : ${route()}${env.monitor.route}`)
        // }
        // log.info('-------------------------------------------------------')
        // log.info('')
=======
//         if (env.swagger.enabled) {
//             log.info(`Swagger      : ${route()}${env.swagger.route}`)
//         }
//         if (env.monitor.enabled) {
//             log.info(`Monitor      : ${route()}${env.monitor.route}`)
//         }
//         log.info('-------------------------------------------------------')
//         log.info('')
>>>>>>> 84e33ce1cc71ad63c698b92d873e4da0a5302da5
    } else {
        log.info(`Application is up and running.`)
    }
}
