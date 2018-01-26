$(function () {

  /*头部的选项点击事件*/
  $('.contents-list .item .item-content').on('click',function () {
    $(this).addClass('blue-text').siblings().removeClass('blue-text')
      if(!$('.contents-list .item').eq(2).find('.item-content').eq(-1).hasClass('blue-text')){
          $('.contents-list .item').eq(2).find('.item-content').eq(-1).find('input').val('')
      }
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
    selectChange(val);
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
  
  


    $('.modal').on('show.bs.modal', function () {
    $('.select-hidden-box,.select-hidden-box2').hide();
})
  //对弹窗的预警条数的input添加验证


 
  $('.addBtn').on('click',function(){
    var itemCount = $('.warning-modal .item').length;
    if(itemCount >= 5){
      alert('添加已答上限');
      return false;
    }

    var html  = returnItem();
    $('.warning-modal').append(html);
  })
  var del_item ;
  $('.warning-modal').on('click','.remove_item',function(){
      $('.del-content').show();
      $('.modal .modal-content').hide();
    del_item = $(this).parents('.item');
  })
  $('.del-content .cancel-btn').on('click',function () {
    $('.del-content').hide();
    $('.modal .modal-content').show();


  })
  $('.del-content .sure').on('click',function () {
    $('.del-content').hide();
    $('.modal .modal-content').show();
    del_item.remove();
  })



});

/*返回弹出框的一个item代码片段*/
function returnItem () {
  //select的值
  var sel1 =  $('.modal-body2').find('.date-select').eq(0).find('.select-text').html();
  var sel2 =  $('.modal-body2').find('.date-select').eq(1).find('.select-text').html();//或者是省市
  var sel3 =  $('.modal-body2').find('.date-select').eq(2).find('.select-text').html();//或者是周期
  var sel4 =  $('.modal-body2').find('.date-select').eq(3).find('.select-text').html();

  //文字框的值
  var input1 = $('.modal-body2').find('.border-text').eq(0).find('input').val();
  var input2 = $('.modal-body2').find('.border-text').eq(1).find('input').val();

  var htmldata = '';
  if(sel4 != null){
    if(sel1 == '选择品牌' || sel2 == '选择车系' || sel3 == '选择车型' || sel4 == '选择省/市'){
      alert('请完善预警信息');
      return false;
    }
    if(input2 != null){
      if(input1>= input2){
        alert('请输入合理价格区间');
        return false;
      }
      htmldata = '<div class="item">' +
        '<span>'+sel1+'</span>' +
        '<span>'+sel2+'</span>' +
        '<span>'+sel3+'</span>' +
        '<span>'+sel4+'</span>' +
        '<span>'+input1+'-'+input2+'万</span>'
    }else {
      if(input1 == 0){
        alert('请属于大于0的预警条数');
        return false;
      }
      if(input1 == '预警线'){
        alert('请输入合理的预警条数(非负数)')
      }
      htmldata = '<div class="item">' +
        '<span>'+sel1+'</span>' +
        '<span>'+sel2+'</span>' +
        '<span>'+sel3+'</span>' +
        '<span>'+sel4+'</span>' +
        '<span>'+input1+'条</span>'
    }

  }else {
    if(sel1 == '选择品牌' || sel2 == '选择省/市' || sel3 == '选择预警周期'){
      alert('请完善预警条件');
      return false;
    }
    if(input1 == 0){
      alert('请属于大于0的预警条数');
      return false;
    }
    if(input1 == '预警线'){
      alert('请输入合理的预警条数(非负数)')
    }
    htmldata = '<div class="item">' +
      '<span>'+sel1+'</span>' +
      '<span>'+sel2+'</span>' +
      '<span>'+sel3+'</span>' +
      '<span>'+input1+'条</span>'
  }
  var elesHtml = '<span class="icon-img">' +
    '<span><img src="../../img/dealer/icon_eye_close.png" alt=""></span>' +
    '<span class="remove_item"><img src="../../img/dealer/icon_delete.png" alt=""></span>' +
    '</span>\n' +
    '</div>';

  var html = htmldata + elesHtml;
  return html;
}

/*selectd的change事件*/
var selectChange = function (val) {
  alert(val);
}
