$(function () {
  /*头部的选项点击事件*/
  $('.contents-list .item .item-content').on('click',function () {
    $(this).addClass('blue-text').siblings().removeClass('blue-text')
  })

  /*/!*分页的点击事件*!/
  $('.page-content').on('click','ul li',function () {
      $(this).addClass('active').siblings().removeClass('active');
  })*/
})