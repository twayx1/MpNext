## How to scjssconfig.json

### Approach I (manual)

Create a file named "scjssconfig.json" and paste this:

```json
{
  "sitecore": {
    "instancePath": "<path to website folder>",
    "apiKey": "{6E1A6236-4CCE-4D42-A121-06B20F5E92BB}",
    "deploySecret": "i6qoaen144bc0eqjglhp6uqusg2g7u52jzs7t31x1b",
    "deployUrl": "http://localhost:56372/sitecore/api/jss/import",
    "layoutServiceHost": "http://localhost:56372"
  }
}
```

### Approach II (jss setup)

Another way to create this file is to [run ```jss setup```](https://doc.sitecore.com/xp/en/developers/hd/210/sitecore-headless-development/sitecore-javascript-rendering-sdk-cli-tools-api-reference.html) in this folder

### instancePath

Enter the path to the "Website" folder here.

### apiKey

Follow [the documentation](https://doc.sitecore.com/xp/en/developers/hd/210/sitecore-headless-development/create-a-sitecore-api-key.html) for creating an apiKey and paste its Item ID into the value for "apiKey".

### deploySecret/deployUrl

DON'T run ```jss deploy config```!

Deploysecret should be equal to the one in ```MachuPicchu/Foundation/MachuPicchu.Foundation.Dev/Website/App_Config/Include/MachuPicchu/mp-next.deploysecret.config```

## Dependencies & Run

### Sitecore Headless Services

Install: [Sitecore Headless Services for Sitecore XM](https://dev.sitecore.net/Downloads/Sitecore_Headless_Rendering/21x/Sitecore_Headless_Rendering_2100.aspx)

### Enable/include the Api Key and config

Rename ```Foundation/MachuPicchu.Foundation.Dev/Website/App_Config/Include/MachuPicchu.Serialization/MachuPicchu.Foundation.Dev.Headless.config.ex```
to ```.config```


### Dependencies

Install ```npm install -g @sitecore-jss/sitecore-jss-cli``` to have the jss command available.

### Run

Start ```jss start:connected```