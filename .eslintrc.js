module.exports = {
    "parserOptions": {
        "ecmaVersion": 2016
    },
    "env": {
        "browser": true,
        "jasmine": true
    },
    "extends": [
        "standard",
        "eslint:recommended",
        "angular"
    ],
    "plugins": [
        "standard",
        "angular"
    ],
    "rules": {
        "angular/document-service": 0
    }
};
