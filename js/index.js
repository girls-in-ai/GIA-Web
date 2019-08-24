window.onload = function() {
}

insertContributors();
function insertContributors() {
  var contributorsDom = document.querySelector('.swiper-wrapper');
  var contributors = [{
    name: 'ZhangYi',
    num: 1,
    content: '发起了Girls-In-AI项目'
  },{
    name: 'ZhangYi',
    num: 1,
    content: '参与了Python入门教程撰写'
  },{
    name: '石头',
    num: 2,
    content: '参与了GIA的组织方向设计'
  },{
    name: '小谷同学',
    num: 3,
    content: '参与了GIA的网站网页端和移动端的搭建与设计'
  },{
    name: '何璇同学',
    num: 4,
    content: '参与了GIA的网站网页端的搭建与设计'
  },{
    name: '小狮子Yanna',
    num: 5,
    content: '参与了Python入门教程撰写'
  },{
    name: 'Datawhale',
    num: 6,
    content: '帮助组织前期GIA Club'
  }];
  var strHtml = '';
  contributors.forEach(item => {
    strHtml += '<div class="swiper-slide"><span>'+ item.name +'是GIA的第'+ item.num +'位贡献者，她' + item.content + '</span></div>'
  });
  contributorsDom.innerHTML = strHtml;
}