const list = {"code":0,"data":{"records":[{"eventId":"error","__topic__":"ad_platform_miniapp","__tag__:__receive_time__":"1601441338","extParams":"{\"ad_spot_id\":\"527166764652118121\",\"regionCode\":\"500000\",\"province\":\"\",\"city\":\"\",\"clientIP\":\"123.147.246.222\",\"activity_id\":\"\",\"media_id\":\"526452231323205749\",\"activity_template_type\":\"SMASHING_GOLDEN_EGGS\",\"error\":\"{\\\"path\\\":\\\"/avt/ssp/h5/auth\\\",\\\"data\\\":{\\\"source\\\":\\\"h5\\\",\\\"fingerprint\\\":\\\"1601441337211pbg9f3xyblxhtmco\\\"}}\",\"deviceId\":\"1601441337211pbg9f3xyblxhtmco\"}","sessionId":"1601441337210jblou51uahrz5iu1","datetime":"1601441337643","__pack_meta__":"0|MTU5NzEzMTUyMDMwNTEzOTYzNA==|274|203","appType":"h5","appId":"ad_platform_miniapp","eventName":"错误异常","appKey":"ad_platform_miniapp","serverTime":"1601441338310","__tag__:__pack_id__":"1dc655e7b4f2a8a3-239c17","projectVersion":"v2.0.1"},{"eventId":"error","__topic__":"ad_platform_miniapp","__tag__:__receive_time__":"1601440181","extParams":"{\"ad_spot_id\":\"527166764652118121\",\"regionCode\":\"420100\",\"province\":\"\",\"city\":\"\",\"clientIP\":\"111.4.123.242\",\"activity_id\":\"\",\"media_id\":\"526452231323205749\",\"activity_template_type\":\"SMASHING_GOLDEN_EGGS\",\"error\":\"{\\\"path\\\":\\\"/avt/ssp/activity/take/info\\\",\\\"data\\\":{\\\"appId\\\":\\\"2020000000000001\\\",\\\"mediaId\\\":\\\"526452231323205749\\\",\\\"adSpotId\\\":\\\"527166764652118121\\\",\\\"version\\\":\\\"v2\\\",\\\"requestSource\\\":\\\"h5\\\"}}\",\"deviceId\":\"160144018007292p0om6fatoj4fvz\"}","sessionId":"1601440180072vlfkf4buabbdcr0v","datetime":"1601440180373","__pack_meta__":"1|MTU5NzIyMTQ2NTU1NDY2NTc3Mw==|201|186","appType":"h5","appId":"ad_platform_miniapp","eventName":"错误异常","appKey":"ad_platform_miniapp","serverTime":"1601440181530","__tag__:__pack_id__":"1dc655e7b4f2a8a3-238bf0","projectVersion":"v2.0.1"},{"eventId":"error","__topic__":"ad_platform_miniapp","__tag__:__receive_time__":"1601433971","extParams":"{\"ad_spot_id\":\"\",\"regionCode\":\"330100\",\"province\":\"\",\"city\":\"\",\"clientIP\":\"122.225.203.50\",\"activity_id\":\"\",\"media_id\":\"\",\"activity_template_type\":\"SMASHING_GOLDEN_EGGS\",\"error\":\"{\\\"path\\\":\\\"/avt/ssp/activity/take/info\\\",\\\"data\\\":{\\\"appId\\\":\\\"2020000000000001\\\",\\\"mediaId\\\":\\\"\\\",\\\"adSpotId\\\":\\\"\\\",\\\"version\\\":\\\"v2\\\",\\\"requestSource\\\":\\\"h5\\\"}}\",\"deviceId\":\"16013647334690yfj76b4zmh47llc\"}","sessionId":"16014324869754pprfkrev3dmdwck","datetime":"1601433970313","__pack_meta__":"0|MTU5NzEzMTUyMDMwNTA4NzM3OA==|230|67","appType":"h5","appId":"ad_platform_miniapp","eventName":"错误异常","appKey":"ad_platform_miniapp","serverTime":"1601433970361","__tag__:__pack_id__":"1dc655e7b4f2a8a3-23362b"}],"total":3},"msg":"成功","success":true};


// 1601372020315g50r9y3g3fkdogyx
const { records } = list.data;
// const errorList = ["[object XMLHttpRequest]", "ReferenceError: Can't find variable: clientDirectorCallBack", "ReferenceError: Can't find variable: clientGetJsTitle", "ReferenceError: Can't find variable: getMenuConfig_Local", "ReferenceError: Can't find variable: webviewClose", "Uncaught ReferenceError: closeMusic is not defined", "Unexpected token o"];
const errorList = ["16014531591780zy6lawlr3vr2vg9", "1601451777385yzxjkbn7j7vh822i", "1601450160586r412y89c1byum28u", "1601449535436kju9stdqkat51th8", "1601449494851vnm8gezc1n82bg8w", "1601449304489f5muelzh9o6fjypl", "1601449191844xdxzoa8ttz3xfe4a", "1601449097268rx3n6zldhc7ktlrb", "1601448869872zxa1e1x2ypsdmgod", "1601448721948i8jarwjl8vsyl9ab", "1601448501898jmdi9599k8tyi2j0", "16014484446719ftxanayov15trip", "1601448230380oczvaknsebavejk1", "1601448072087wd21ifqyohl2q4p0", "16014478011709yxzhsl53ov5ycj6", "1601447522576oclxqyr2f7wgaqqe", "1601447490340zn2bdehpb1j6vott", "1601447241677w60me1x91tcagaet", "160144705458019jcrdp7d36n61wm", "1601447214764cibcmf1qwlpebz4j", "1601447206316idnih932muuxy6mi", "1601447055587gyjgwo6wshq7ge5e", "1601447075446iciklp9k52c1tzbw", "1601447120533jjilgt7xzpn36n83", "1601447017068nphnbpt6el7s21ah", "1601447091914g8ay60m51rn66saq", "1601447075975uoa0gnugfweccsap", "1601447095478tfubgbmhov3dhyp6", "1601447101065hvlolg5xw3t2zu6z", "16014470979623760xvb5tlzc9zx2", "1601447076585yryofsqzc291rxm3", "16014470391986fjlyqmvwi7pdv4g", "1601447032372ywgigspt2c85fvbv", "1601446985713r36vgbpjp0ccasnj", "1601446968409wtf1crd79xt5txmn", "1601446961995dyn4psnwfswn54vo", "1601446886897olijo17kjgdx9qt2", "16014469455644l0nhmnfiwuq9ao3", "1601446945000me66fborlb55m3jb", "16014469427387c3ltzt8k3mdn7bg", "1601446924595ovjostw485z3h0oz", "1601446923222ymnhoybntwt8jwsq", "16014469088860367ni2a92za6tw7", "1601446790225qw9btf2jyk08cld7", "1601446864935ur8k183s76u5xn11", "1601446849585wcjteit86jebqjh1", "1601446818470z3hw9p50h9blfinx", "1601446817632tu4fzuc400hkn654", "1601446800241u9utyvotw3ry5ucl", "16014467845245f3s4nq9aurnt4jv", "1601446712962ajocqikpvvkjnncs", "1601446734485ttyboisgy9d15vne", "1601446686265p23s10k0mk8m4n04", "1601446077852w0vapd5s0ylg5dn3", "1601444582444kse6jx28bpsyh7il", "1601443706343zmcbrh53lqxuuosc", "1601443650483a7utii2s98be8gsp"];

records.forEach(item => {
  const extParams = JSON.parse(item.extParams);
  const { msg, error, deviceId} = extParams;
  // const message = msg ? JSON.parse(msg).message : error;
  const message = deviceId;
  if (!errorList.includes(message)) {
    errorList.push(message)
  }
})

console.log(errorList)