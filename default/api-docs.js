module.exports = ({server, package}) => {
    const { name, version, description } = package;
    const expressSwagger = require('express-swagger-generator')(server);
    let options = {
        swaggerDefinition: {
            info: {
                description,
                title: name,
                version
            },
            basePath: `/${name}`,
            produces: [
                "application/json"
            ],
            schemes: ['http']
        },
        basedir: __dirname + '../../../../', //app absolute path
        files: [__dirname + '../../../../src/**/route.js'] //Path to the API handle folder
    };
    expressSwagger(options);
};
