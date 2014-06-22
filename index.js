// 의존성 모듈
var CSON, async, phantom, irc;
try {
    CSON = require('cursive');
    async = require('async');
    phantom = require('phantom');
    irc = require('irc');
} catch (e) {
    console.log('봇을 실행하기 전에 먼저 다음 명령을 실행해주세요: ');
    console.log('npm install .');
    process.exit(1);
}
// node.js api
var fs = require('fs');
var util = require('util');

// 사용자 설정
var config;
try {
    config = require('cursive').parse(fs.readFileSync('config.cson', {encoding: 'utf8'}));
} catch (e) {
    console.log('설정파일(`config.cson`)을 먼저 작성해주세요.');
    console.log('설정파일은 `sample-config.cson`의 내용같이 작성해주시면 됩니다.');
    process.exit(2);
}
console.log('설정파일 정보:', util.inspect(config, {depth: 10}));

/*
    이후 처리 순서:
     * 네이버 로그인
     * 카페 채팅방 접속
     * irc 서버 및 채널 접속
     * 대화 중계 시작
*/
async.waterfall([
    function (callback) {
        callback(null);
        // TODO
    }
]);
