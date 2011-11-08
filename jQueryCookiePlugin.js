/**
  * jQuery Cookie Plugin v0.1
  * Easily get/add/delete/modify browser cookies.
  * @Author: Phoetry (http://phoetry.me)
  * @Url: http://phoetry.me/archives/jquery-cookie.html
  **/
~function(doc){
$.cookie=function(key,val,opt){
	if(!key)return doc.cookie;
	if('string'!=typeof val&&'number'!=typeof val)
	return new RegExp('(?:^|; )'+key+'=([^;]*)').test(doc.cookie)?decodeURIComponent(RegExp['$1']):'No matching items.';
	opt=opt||{};
	var s,date=new Date(),cookie=key+'='+encodeURIComponent(val);
	date.setDate(date.getDate()+(val!==''?opt.expires||30:-1));
	opt.expires=date.toUTCString();
	for(s in opt)opt.hasOwnProperty(s)&&opt[s]&&(cookie+=';'+s+'='+opt[s]);
	doc.cookie=cookie;
}
}(document);