/**
  * jQuery Cookie Plugin v0.1
  * Easily add, delete or modify browser cookies.
  * @Author: Phoetry (http://phoetry.me)
  * @Url: http://phoetry.me/archives/jquery-cookie.html
  **/
~function(doc,$){
$.cookie=function(key,val,opt){
	if(!key)return doc.cookie;
	if('string'!=typeof(val)&&'number'!=typeof(val))
	return new RegExp('(?:^|; )'+key+'=([^;]*)').test(doc.cookie)?decodeURIComponent(RegExp['$1']):'No matching items.';
	var cookie=key+'='+encodeURIComponent(val),s,date=new Date();
	opt=$.extend({expires:30},opt);
	date.setDate(date.getDate()+(val===''?-1:opt.expires));
	opt.expires=date.toUTCString();
	for(s in opt)opt[s]&&(cookie+=';'+s+'='+opt[s]);
	doc.cookie=cookie;
}
}(document,jQuery);