export default {
    postContactForm: {
        url: '/ame/official_website/liaise',
        method: 'POST',
    },
    postAgentForm: {
        url: '/ame/official_website/operate_request',
        method: 'POST',
    },
    loginByThird: {
        url: '/ame/vt/user/login',
        method: 'POST',
    },
    //获取地区 - 验证码
    getRegion: {
        url: '/ame/vt/sms/region',
        method: 'GET',
    },
    //登录
    login: {
        url: '/ame/vt/user/login',
        method: 'POST',
    },
    //发送验证码
    getCaptcha: {
        url: '/ame/vt/send/mail',
        method: 'POST',
    },
    //发送手机验证码
    getMobileCaptcha: {
        url: '/ame/vt/send/mobile',
        method: 'POST',
    },
    //验证码验证
    validCode: {
        url: '/ame/vt/validate/code',
        method: 'GET',
    },
    //修改密码
    findPwd: {
        url: '/ame/vt/user/retrieve/passwd',
        method: 'PUT',
    },
    //注册 - 邮箱
    registByEmail: {
        url: '/ame/vt/user/register',
        method: 'POST',
    },
    //注册 - 手机
    registByMobile: {
        url: '/ame/vt/user/register/mobile',
        method: 'POST',
    },
    //获取用户信息
    getUserInfo: {
        url: '/ame/user',
        method: 'GET',
    },
    //获取用户资金信息
    getMoenyInfo: {
        url: '/ame/user/money',
        method: 'GET',
    },
    //获取提现账户
    getPayWay: {
        url: '/ame/pay/way',
        method: 'GET',
    },
    //获取App列表
    getAPPList: {
        url: '/ame/virtual/app',
        method: 'GET',
    },
    //获取APP具体数据
    getAppState: {
        url: '/ame/vt/app/state',
        method: 'GET',
    },
    //获取state信息
    getUserState: {
        url: '/ame/vt/user/state',
        method: 'GET',
    },
    //获取国家码
    getCountryCode: {
        url: '/ame/vt/user/country_code',
        method: 'GET',
    },
    //获取支持绑定的账户
    getAddBank: {
        url: '/ame/bank',
        method: 'GET',
    },
    //添加提现方式
    addBank: {
        url: '/ame/pay/way',
        method: 'POST',
    },
    //提现
    withdraw: {
        url: '/ame/withdraw/request',
        method: 'POST',
    },
    //获取充值方式
    getRaWayList: {
        url: '/ame/pay/list',
        method: 'GET',
    },
    //充值
    recharge: {
        url: 'ame/pay/request',
        method: 'POST',
    },
    //获取验证码 - 手机
    captchMobile: {
        url: '/ame/vt/send/mobile',
        method: 'POST',
    },
    //获取验证码 - 邮箱
    captcha: {
        url: '/ame/vt/send/mail',
        method: 'POST',
    },
    //验证码验证
    validCode: {
        url: '/ame/vt/validate/code',
        method: 'GET',
    },
    //找回密码
    findPassword: {
        url: '/ame/vt/user/retrieve/passwd',
        method: 'PUT',
    },
    //修改支付密码（设置支付密码）
    editPayPwd: {
        url: '/ame/vt/user/reset/pay_passwd',
        method: 'PUT',
    },
    //获取app对应的项目
    getProjectList: {
        url: '/ame/virtual/project/count',
        method: 'GET',
    },
    //购买机器人
    buyRobot: {
        url: '/ame/buy/port',
        method: 'POST',
    },
    //获取项目价格和有效期
    getProjectPrice: {
        url: '/ame/project/query',
        method: 'GET',
    },
};
