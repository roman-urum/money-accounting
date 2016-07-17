/**
 * Created by Roman on 4/9/16.
 */
System.config({
    baseURL: "/",
    transpiler: "typescript",
    typescriptOptions: {
        "emitDecoratorMetadata": true
    },
    packages: {
        "app": {
            "defaultExtension": "ts",
            "main": "main.ts"
        }
    }
});
