'use strict';function getJSON(a){var b=new XMLHttpRequest;b.open('GET',a);var c=new Promise(function(d,e){b.onload=function(){200===b.status?d(b.responseText):e(new Error('b\u0142\u0105d'))},b.onerror=function(){e(new Error('b\u0142\u0105d'))}});return b.send(),c}
"use strict";var teryt,refer_input={woj:document.getElementById("woj"),pow:document.getElementById("pow"),gmin:document.getElementById("gmin"),miejsc:document.getElementById("miejsc"),wrap_woj:document.getElementById("wrap_woj"),wrap_pow:document.getElementById("wrap_pow"),wrap_gmin:document.getElementById("wrap_gmin"),wrap_miejsc:document.getElementById("wrap_miejsc")},List=function(){function a(b,c){this.wrap_list=b,this.main_key=c,this.arr_key,this.Results,this.Obj_self=[],this.Obj_ctr_search=[],this.Set_Input_value=[],this.Other_two_obj=[]}return a.prototype.get_obj_result=function(b){var c=this;b&&0!==b.length?(this.Results=b,this.createHTML(this.iteratio(b))):setTimeout(function(){c.cls_list()},700)},a.prototype.iteratio=function(b){var d=this;this.cls_list();var c=b.map(function(f){return d.arr_key?{main:f[d.main_key],id:f.id,label:d.search_label(f)}:{main:f[d.main_key],id:f.id}});return c},a.prototype.label=function(b){b&&(this.arr_key=b)},a.prototype.search_label=function(b){var c=this.arr_key.map(function(d){return"<span data-id="+b.id+"> ("+d.title+". "+b[d.key]+")</span> "});return c.join("")},a.prototype.createHTML=function(b){var c=document.createElement("ul");this.set_ev(c),b.map(function(d){var f=document.createElement("li");f.id=d.id;var g;g=d.label?d.label:"",f.innerHTML=d.main+g,c.appendChild(f)}),this.wrap_list.appendChild(c)},a.prototype.set_ev=function(b){var c=this;b.addEventListener("mouseleave",function(){c.mouseleave()}),b.addEventListener("click",function(d){c.mouseclick(d,b)}),b.addEventListener("keyup",function(d){c.key(d,b)})},a.prototype.mouseleave=function(){var b=this;setTimeout(function(){b.cls_list()},500)},a.prototype.mouseclick=function(b){if(b.target.dataset.id)this.search_result(b.target.dataset.id);else if(b.target.id)this.search_result(b.target.id);else return;this.cls_list()},a.prototype.search_result=function(b){for(var c in this.Results)if(this.Results[c].id===b){this.broadcast_obj_all(this.Results[c]),this.broadcast_Ctr(this.Results[c]),this.broadcast_Inputs_v(this.Results[c]),this.broadcast_two_obj(this.Results[c]);break}},a.prototype.broadcast_obj_all=function(b){this.Obj_self.map(function(c){c.get_result(b)})},a.prototype.broadcast_Ctr=function(b){this.Obj_ctr_search.map(function(c){c.obj_ctr.set_Obj_redy(b[c.key_result],c.key_search)})},a.prototype.broadcast_Inputs_v=function(b){this.Set_Input_value.map(function(c){c.obj.set_value(b[c.key_set])})},a.prototype.broadcast_two_obj=function(b){this.Other_two_obj.map(function(c){c.obj_target.get_result(c.obj_search.iteratio(b[c.key_search])[0])})},a.prototype.register_self=function(b){this.Obj_self.push(b)},a.prototype.set_string=function(b){this.Set_Input_value=b},a.prototype.register_Other=function(b){this.Other_two_obj.push(b)},a.prototype.preper_search=function(b){var c=this;b.map(function(d){c.Obj_ctr_search.push(d)})},a.prototype.key=function(){},a.prototype.cls_list=function(){this.wrap_list.firstChild&&this.wrap_list.removeChild(this.wrap_list.firstChild)},a}(),Controll=function(){function a(b,c){this.Lists=b,this.redy_obj,this.duble_v_str,this.check_arr_obj,this.parametr_preper,this.Obj_ctr_search=[],this.main_OBJ=c}return a.prototype.set_keys=function(b){if(b.constructor===Array){var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var d,f,c=b[Symbol.iterator]();!(_iteratorNormalCompletion=(d=c.next()).done);_iteratorNormalCompletion=!0)if(f=d.value,"string"!=typeof f)return}catch(g){_didIteratorError=!0,_iteratorError=g}finally{try{!_iteratorNormalCompletion&&c.return&&c.return()}finally{if(_didIteratorError)throw _iteratorError}}this.preper_obj(b)}},a.prototype.preper_obj=function(b){var c={};for(var d in this.main_OBJ)if(b[0]===d){c=this.main_OBJ[d],this.parametr_preper=b;break}else continue;this.redy_obj=c},a.prototype.set_Obj_redy=function(b,c){this.preper_obj(this.parametr_preper),this.redy_obj=this.redy_obj.filter(function(d){return d[c]===b})},a.prototype.check_first=function(b){this.check_arr_obj=b},a.prototype.get_v_input=function(b){b&&(b=b.toLowerCase(),this.duble_v_str?this.no_duble(b):this.broadcast_result(this.iteratio(b)),this.duble_v_str=b)},a.prototype.no_duble=function(b){this.duble_v_str===b||this.broadcast_result(this.iteratio(b))},a.prototype.iteratio=function(b){var c=[];for(var d in this.redy_obj){var f=this.stil_iteratio(this.redy_obj[d],this.parametr_preper[1],b);f&&c.push(f)}return c},a.prototype.stil_iteratio=function(b,c,d){var h=this,f=b[c].toLowerCase();if(this.check_arr_obj){var g=this.check_arr_obj.map(function(i){if((b[i.check_key]===i.refere.value||""===i.refere.value)&&h.search_obj(f,d))return b});return g[0]}return this.search_obj(f,d)?b:void 0},a.prototype.search_obj=function(b,c){if(b.includes(c))return!0},a.prototype.broadcast_result=function(b){return this.Lists.get_obj_result(b),b},a}(),Input=function(){function a(b,c,d){this.select_el=b,this.key_result=d,this.Ctr=c,this.check_keys,this.search_parametr,this.key_up(),this.click()}return a.prototype.set_value=function(b){this.select_el.value=b},a.prototype.cls_value=function(){this.select_el.value=""},a.prototype.get_value=function(){return this.select_el.value},a.prototype.key_up=function(){var b=this;this.select_el.addEventListener("keyup",function(){b.Ctr.get_v_input(b.get_value())})},a.prototype.click=function(){var b=this;this.select_el.addEventListener("click",function(){b.cls_value()})},a.prototype.type_key=function(b){this.Ctr.set_keys(b)},a.prototype.search_parametr=function(b){this.parametr=b},a.prototype.get_result=function(b){this.key_result&&b&&this.set_value(b[this.key_result])},a}(),Create_window=function(){function a(){this.key_s=[]}return a.prototype.get_result=function(b){this.iteratio(b)},a.prototype.iteratio=function(b){var c=this,_loop=function(d){c.key_s.map(function(f){f.key===d&&(c.cls_refere_html(f.refere_html),c.check_type_key(b[d],f.refere_html))})};for(var d in b)_loop(d)},a.prototype.check_type_key=function(b,c){if(b.constructor===Array)this.create_btn_s(b,c);else if("string"==typeof b)this.create_text(b,c);else return},a.prototype.create_btn_s=function(b,c){var d=this;b.map(function(f){var g=d.create_el("button");d.add_text(g,f),d.append(c,g)})},a.prototype.create_text=function(b,c){this.add_text(c,b)},a.prototype.create_el=function(b){return document.createElement(b)},a.prototype.add_text=function(b,c){b.textContent=c},a.prototype.append=function(b,c){b.appendChild(c)},a.prototype.cls_refere_html=function(b){for(;b.firstChild;)b.removeChild(b.firstChild)},a.prototype.show_key=function(b){this.key_s=b},a}();getJSON("bd.json").then(function(a){var b=JSON.parse(a),c=new List(refer_input.wrap_pow,"nazwa"),d=new Controll(c,b),f=new Input(refer_input.pow,d,"nazwa");f.type_key(["powiaty","nazwa"]),c.label([{key:"wojewodztwo",title:"woj"}]);var g=c.register_self(f),h=new List(refer_input.wrap_woj,"nazwa"),i=new Controll(h,b),j=new Input(refer_input.woj,i,"nazwa");j.type_key(["wojewodztwa","nazwa"]);h.register_self(j);h.preper_search([{obj_ctr:d,key_search:"wojewodztwo",key_result:"nazwa"}]),c.preper_search([{obj_ctr:d,key_search:"wojewodztwo",key_result:"wojewodztwo"}]),c.set_string([{obj:j,key_set:"wojewodztwo"}]);var l=new Create_window,m=new Create_window;l.show_key([{key:"nazwa",refere_html:document.querySelector("#nazwa")},{key:"wojewodztwo",refere_html:document.querySelector("#wojewodztwo")},{key:"prm",refere_html:document.querySelector("#prm")},{key:"psp",refere_html:document.querySelector("#psp")},{key:"policja",refere_html:document.querySelector("#policja")}]),m.show_key([{key:"nazwa",refere_html:document.querySelector("#w_nazwa")},{key:"koordynator_ratownictwa_medycznego",refere_html:document.querySelector("#w_prm")},{key:"komenda_wojewodzka_PSP",refere_html:document.querySelector("#w_psp")},{key:"komenda_wojew\xF3dzka_policji",refere_html:document.querySelector("#w_policja")}]);var n=c.register_self(l),o=h.register_self(m),q=c.register_Other({key_search:"wojewodztwo",obj_search:i,obj_target:m})});