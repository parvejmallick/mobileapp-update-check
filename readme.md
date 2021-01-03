# Basics Usage
### Import
```js
import Check from 'mobileapp-update-check';
```
### Usage
###### For common app id
```js
await Check.versions("COMMON_APPID");
```
###### For different appIds for android and ios
```js
await Check.versions("IOS_PACKAGENAME", "ANDROID_APPID");
```

###### Android only
```js
await Check.androidVersion("ANDROID_APPID");
```

###### iOS only
```js
await Check.iosVersion("IOS_PACKAGENAME");
```

### Response
```json
{
  "androidVersion": "X.X.X",
  "appStoreLink": "https://apps.apple.com/us/app/...",
  "iosVersion": "X.X.X",
  "playStoreLink": "https://play.google.com/store/apps/details?id=...",
}
```