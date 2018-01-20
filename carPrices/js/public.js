$(function () {

  /*头部的选项点击事件*/
  $('.contents-list .item .item-content').on('click',function () {
    $this.addClass('blue-text').siblings().removeClass('blue-text')
  });

  /*下拉框显示*/
  $('.select-show-box').on('click',function () {
    $(this).parents('.date-select').find('.select-hidden-box').toggle();
    $(this).parents('.date-select').siblings('.date-select').find('.select-hidden-box,.select-hidden-box2').hide();
  });

  /*下拉框点击*/
  $('.select-hidden-box').on('click','div',function () {
    var val = $(this).html();
    $(this).parents('.select-hidden-box').hide();
    $(this).parents('.date-select').find('.select-text').html(val);
    if(val == '自定义'){
      //执行普通的下拉框操作
      $(this).parents('.date-select').find('.select-hidden-box2').show();
    }
  });

  /*自定义日期的选择按钮*/
  $('.date-btn').on('click',function () {
      var year = $('.select-year option:selected').html();
      var month = $('.select-month option:selected').html();
      if(year != '请选择年份' && month != '请选择月份'){
          $(this).parents('.select-hidden-box2').hide();
          $(this).parents('.date-select').find('.select-text').html(year+month);
      }else{
        alert('请务必选择年份或月份');
      }
  });



})