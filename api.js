define(function() {
    WEBPACK_CONIFG_HOST = 'http://amptest.wisedu.com/xsfwfw/';
    return {
        getMenuInfo: WEBPACK_CONIFG_HOST + '/sys/sskqapp/MobileDormSignStu/getMenuInfo.do',
        queryStuDormSignRegister: WEBPACK_CONIFG_HOST + '/sys/sskqapp/MobileDormSignStu/queryStuDormSignRegister.do',
        dormSignRegister: WEBPACK_CONIFG_HOST + '/sys/sskqapp/MobileDormSignStu/dormSignRegister.do',
        queryStuDormSignRecords: WEBPACK_CONIFG_HOST + '/sys/sskqapp/MobileDormSignStu/queryStuDormSignRecords.do',
        validateStuIsExists: WEBPACK_CONIFG_HOST + '/sys/sskqapp/MobileDormSignManage/validateStuIsExists.do',
        getStuDormSignRecords: WEBPACK_CONIFG_HOST + '/sys/sskqapp/MobileDormSignManage/getStuDormSignRecords.do',
        saveDormSignDesc: WEBPACK_CONIFG_HOST + '/sys/sskqapp/MobileDormSignManage/saveDormSignDesc.do',
        getZdListById: WEBPACK_CONIFG_HOST + '/sys/swpubapp/pubtool/getZdListById.do',
        saveStuDormSign: WEBPACK_CONIFG_HOST + '/sys/sskqapp/MobileDormSignManage/saveStuDormSign.do',
        getWechatSign: WEBPACK_CONIFG_HOST + '/sys/sskqapp/MobileDormSignStu/getWechatSign.do'
    }
})