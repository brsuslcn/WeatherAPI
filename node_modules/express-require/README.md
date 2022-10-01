`express-require` aims to save a lot of unnecessary typing when validating parameters, while avoiding bugs and vulnerabilities at the same time.
To use the middleware on a route, simple call `requirements()` and pass it a list of requirements, like so:
```
myRouter.get('/test', requirements({query: [R.string('parameter1'), R.integer('parameter2', 4)]}), (request, response) => {
    response.send({
        parameter1: request.query.parameter1,
        parameter2: request.query.parameter2
    });
});
```

`R` is an object holding shorthand functions for default Requirement classes. Provide them a parameter name and optionally a fallback value that will be used when the parameter is `undefined`.

The Requirement class is designed to be easy to extend, allowing you to set up custom Requirements without much hassle.
This could for example be used to interface with a user management system, restricting access to your routes:
```
class LoggedInRequirement extends Requirement {
    validate(request, type: ParameterType) {
        super.validate(request, type);
        
        if (typeof request.session.userID === 'undefined') {
            throw new RequirementException('You need to be logged in to access this resource!');
        }
    }
}
```