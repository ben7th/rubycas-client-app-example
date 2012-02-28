// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

jQuery().ready(function(){  
  var build_iframe = function(){
    var frame_name = 'sso_login_frame';
    var frame_elm = jQuery('iframe[name="'+frame_name+'"]').remove();
    
    frame_elm = jQuery('<iframe/>')
      .attr({
        style : 'display:block;width:800px;height:400px;',
        //style : 'display:none;width:0;height:0;',
        id : frame_name,
        name : frame_name,
        src : 'javascript:false;'
      })
      .appendTo(document.body);
    return frame_elm;
  }
  
  jQuery('form.login').submit(function(){
    var form_elm = jQuery(this);
    
    var msg;
    if(0 == jQuery.trim(form_elm.find('input#email').val()).length){
      msg = "用户名不能为空";
    } else if(0 == jQuery.trim(form_elm.find('input#password').val()).length){
      msg = "密码不能为空";
    }
    
    if(msg && msg.length > 0){
      form_elm.find('.error').fadeOut().text(msg).fadeIn();
      return false;
    }
    
    // 校验成功
    var iframe_elm = build_iframe();
    return true;
  })
    .find('a.submit').click(function(){
      var form_elm = jQuery(this).closest('form');
      form_elm.submit();
    })
    
  //flush_login_ticket();
})

SSOController = new function(){
  this.callback = function(json){
    if(json.result == false){
      jQuery('form.login .error').fadeOut().text(json.message).fadeIn();
    }
    
    if(json.result == true){
      location.replace(json.url);
    }
  }
}

