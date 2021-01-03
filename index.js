import Api from './Api';

export default class Check {
  static versions = async (packageId=null, androidId=null) => {
    var androidAppId = androidId != null ? androidId :  packageId;
    var iosPackageName = packageId;

    var storeInfo = {};
    try {
      var iosResponse = await Api.get(`https://itunes.apple.com/lookup?bundleId=${iosPackageName}`);
      if(iosResponse.status == 200){
        var iosVersion = JSON.parse(JSON.stringify(iosResponse.data));
        if(iosVersion.results.length > 0){
          storeInfo.iosVersion = iosVersion.results[0].version;
          storeInfo.appStoreLink = iosVersion.results[0].trackViewUrl;
        }
      }
    } catch (e){ }

    try {
      var androidResponse = await Api.get(`https://play.google.com/store/apps/details?id=${androidAppId}`);
      if(androidResponse.status == 200){
        var androidResponseStringify = JSON.stringify(androidResponse.data);
        var element1 = androidResponseStringify.split("Current Version");
        if(element1.length > 0){
          var element2 = element1[1].split("Requires Android");
          var androidVersion = element2[0].replace(/<\/?[^>]+(>|$)/g, "");

          storeInfo.androidVersion = androidVersion;
          storeInfo.playStoreLink = `https://play.google.com/store/apps/details?id=${androidAppId}`;
        }
      }
    } catch (e){

    }
    
    return storeInfo;
  };

  static androidVersion = async (androidAppId=null) => {
    var storeInfo = {};
    
    try {
      var androidResponse = await Api.get(`https://play.google.com/store/apps/details?id=${androidAppId}`);
      if(androidResponse.status == 200){
        var androidResponseStringify = JSON.stringify(androidResponse.data);
        var element1 = androidResponseStringify.split("Current Version");
        if(element1.length > 0){
          var element2 = element1[1].split("Requires Android");
          var androidVersion = element2[0].replace(/<\/?[^>]+(>|$)/g, "");

          storeInfo.androidVersion = androidVersion;
          storeInfo.playStoreLink = `https://play.google.com/store/apps/details?id=${androidAppId}`;
        }
      }
    } catch (e){

    }
    
    return storeInfo;
  };

  static iosVersion = async (iosPackageName=null) => {
    var storeInfo = {};
    
    try {
      var iosResponse = await Api.get(`https://itunes.apple.com/lookup?bundleId=${iosPackageName}`);
      if(iosResponse.status == 200){
        var iosVersion = JSON.parse(JSON.stringify(iosResponse.data));
        if(iosVersion.results.length > 0){
          storeInfo.iosVersion = iosVersion.results[0].version;
          storeInfo.appStoreLink = iosVersion.results[0].trackViewUrl;
        }
      }
    } catch (e){ }
    
    return storeInfo;
  };
}
