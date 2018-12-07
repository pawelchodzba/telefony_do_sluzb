
// let teryt;
	






const refer_input = {
	"woj": document.getElementById("woj"),
	"pow": document.getElementById("pow"),
	"gmin": document.getElementById("gmin"),
	"miejsc": document.getElementById("miejsc"),
	"wrap_woj": document.getElementById("wrap_woj"),
	"wrap_pow": document.getElementById("wrap_pow"),
	"wrap_gmin": document.getElementById("wrap_gmin"),
	"wrap_miejsc": document.getElementById("wrap_miejsc")

}


const List = (function () {
	function List(wrap_list,main_key) {
		this.wrap_list=wrap_list;
		this.main_key=main_key;
		this.arr_key;
		this.Results;
		this.Obj_self=[];
		this.Obj_ctr_search=[];
		this.Set_Input_value=[];
		this.Other_two_obj=[];
	}
	List.prototype.get_obj_result = function (results) {
		if(!results||results.length===0)setTimeout(()=>{this.cls_list();},700);
			else{//this.cls_list(0);
			this.Results=results;	
			this.createHTML(this.iteratio(results));
			
		}
	}
	List.prototype.iteratio = function (results) {
		this.cls_list();
		const obj_strings=results.map((One)=>{   
			if (this.arr_key){
					return{
						main:One[this.main_key],
						id:One['id'],
						label:this.search_label(One)
					}
				}else{
					return{
						main:One[this.main_key],
						id:One['id']
					}	
			}
		});
		
		return obj_strings;
	}
	List.prototype.label = function (arr_key) {
		if (arr_key) {
			this.arr_key=arr_key;
		}else{return}
		
	}
	List.prototype.search_label = function (One) {
		const labels=this.arr_key.map((label_obj)=>{
			return "<span data-id="+One["id"]+"> ("+label_obj.title+". " + One[label_obj.key]+")</span> ";
		});
		return labels.join("");		
	}
	List.prototype.createHTML = function (arr_obj_redy) {
		let ul=document.createElement("ul");

		this.set_ev(ul);
		arr_obj_redy.map((One)=>{
			let li=document.createElement("li");
				li.id=One.id;
				let Label;
				if (One.label) {
					Label=One.label
				} else {
					Label=""
				}
				li.innerHTML=One.main+Label
				ul.appendChild(li);
		});
		this.wrap_list.appendChild(ul);
	}
	
	//////////////////////events/////////////////////////////////////////
	List.prototype.set_ev = function (ul) {
		ul.addEventListener("mouseleave",()=>{this.mouseleave()});
		ul.addEventListener("click",(e)=>{this.mouseclick(e,ul);});
		//ul.addEventListener("keyup",(e)=>{this.key(e,ul);});
		
		//this.keyboard(ul);
	}


	List.prototype.marker_down = function (li_s,i) {console.log("down "+i)
		if (i>0) {
			let index=i-1;
			this.li_remove_color(li_s[index])	
			}
		this.li_color(li_s[i++]);
			return i;
	}
	List.prototype.marker_up = function (li_s,i) {console.log("up "+i)
		if(i<=0)return;
		if (i>0) {
			let index=i-1;
			this.li_remove_color(li_s[index]);
			this.li_color(li_s[i--]);
			return i;
			}
	
	}	
	List.prototype.keyboard = function () {
	
		let i=0;
		window.addEventListener("keydown",(e)=>{
			if(this.wrap_list){
				let li_s=this.get_li_s(this.wrap_list)
				if(e.keyCode===40){	
					if (li_s.length<=i) {return;
						}else{
						i=this.marker_down(li_s,i);
						}					
				}else if(e.keyCode===38){
					i=this.marker_up(li_s,i)
				}
			}
		
			
			})

	
	
			
			
		
	}
	List.prototype.get_li_s = function (werap_list) {
		let li_s=werap_list.querySelectorAll("ul>li");
		if(li_s.length)return li_s;
	}	
	List.prototype.li_color = function (li) {
	li.classList.add("marker_enter");
	}	
	List.prototype.li_remove_color = function (li) {//console.log(li.textContent)
		li.classList.remove("marker_enter");
		}
	List.prototype.mouseleave = function () {
		setTimeout(()=>{this.cls_list();},500);	
	}
	List.prototype.mouseclick = function (e,ul) {
		if (e.target.dataset.id) {
			this.search_result(e.target.dataset.id);//label id
		} else if(e.target.id){
			this.search_result(e.target.id);
		}else{return}
				
		this.cls_list();
	}
	List.prototype.search_result = function (id) {
		for (const One in this.Results) {
			if(this.Results[One]["id"]===id){
				this.broadcast_obj_all(this.Results[One]);
				this.broadcast_Ctr(this.Results[One]);
				this.broadcast_Inputs_v(this.Results[One]);
				this.broadcast_two_obj(this.Results[One]);
				break;
				};
			}		
	}
	/////////////////////broadcast////////////////////////////////////////
	List.prototype.broadcast_obj_all = function (result) {
		this.Obj_self.map((Obj_target)=>{
			Obj_target.get_result(result);
		})
	}
	List.prototype.broadcast_Ctr = function (result) {
		this.Obj_ctr_search.map((Ctr_key)=>{
			Ctr_key["obj_ctr"].set_Obj_redy(result[Ctr_key["key_result"]], Ctr_key["key_search"]);
		})
	}
	List.prototype.broadcast_Inputs_v = function (result) {
		this.Set_Input_value.map((Input_key)=>{
			Input_key["obj"].set_value(result[Input_key["key_set"]]);	
		})
	}
	List.prototype.broadcast_two_obj = function (result) {
		this.Other_two_obj.map((Obj_parametr)=>{
		Obj_parametr["obj_target"].get_result(Obj_parametr["obj_search"].iteratio(result[Obj_parametr["key_search"]])[0]);
		})
	}
	///////////////////register obj/////////////////
	List.prototype.register_self = function (Obj) {
		this.Obj_self.push(Obj)
	}
	List.prototype.set_string = function (Inputs) {
		this.Set_Input_value=Inputs;	
	}
	List.prototype.register_Other= function (Window) {
		this.Other_two_obj.push(Window);	
	}
	List.prototype.preper_search = function (Obj_ctr) {
		Obj_ctr.map((Ctr)=>{this.Obj_ctr_search.push(Ctr);})
	}
	/////////////////////////////////////////////////////////
	//List.prototype.key = function (e,ul) {}
	List.prototype.cls_list = function () {
		if(this.wrap_list.firstChild)this.wrap_list.removeChild(this.wrap_list.firstChild);
	}

	return List;
})();

const Controll = (function () {
	function Controll(Lists,main_OBJ) {
		this.Lists=Lists;
		this.redy_obj;
		this.duble_v_str;
		this.check_arr_obj;
		this.parametr_preper;
		this.Obj_ctr_search=[];
		this.main_OBJ=main_OBJ;

	}
	//////////////////////preper/////////////////
	Controll.prototype.set_keys = function (keys) {	
		if (keys.constructor !== Array) return
		else {
			for (let key of keys) {
				if (typeof key !== "string") return;
			}
			this.preper_obj(keys);
		}
	}
	Controll.prototype.preper_obj = function (arr_key) {
		
		let arr_obj = {};
		for (let key in this.main_OBJ) {
			 if (arr_key[0]===key) {
				arr_obj = this.main_OBJ[key];
				this.parametr_preper = arr_key;
				break;
			} else {
				continue;
			}
		}
		
		this.redy_obj = arr_obj;
	}
	Controll.prototype.set_Obj_redy = function (result,search_key) {
		this.preper_obj(this.parametr_preper);
		this.redy_obj=this.redy_obj.filter((One)=>{
		return	(One[search_key]===result);
		})
		
	}
	Controll.prototype.check_first = function (check_arr_obj) {
		this.check_arr_obj = check_arr_obj;
	}
	
	//////////////////////key_up/////////////////
	Controll.prototype.get_v_input = function (val_string) {//console.log(this.first_v_str)
		if (val_string) {
			val_string = val_string.toLowerCase();
			if (this.duble_v_str) {
				this.no_duble(val_string);
			} else {
				this.broadcast_result(this.iteratio(val_string))
			}
			this.duble_v_str = val_string;
		}
	}
	Controll.prototype.no_duble = function (val_string,first_search_v) {
		if (this.duble_v_str === val_string) {
			return;
		} else {
			this.broadcast_result(this.iteratio(val_string))
		}
	}
	Controll.prototype.iteratio = function (val_string) {
			const result = []
		for (const one in this.redy_obj) {
			const obj_result=this.stil_iteratio(this.redy_obj[one],this.parametr_preper[1],val_string);
				if(obj_result) result.push(obj_result);
			}
			return result
		//this.broadcast_result(result);
	}
	Controll.prototype.stil_iteratio = function (One,key_name,val_string) {
		let value_key = One[key_name].toLowerCase();
			if (this.check_arr_obj) {
				const arr=this.check_arr_obj.map((check_obj)=>{
					if(One[check_obj.check_key]===check_obj.refere.value || check_obj.refere.value===""){
					if(this.search_obj(value_key,val_string))return One;
					}
				})
				return arr[0];	
				}else{
				if(this.search_obj(value_key,val_string))return One;
				}	
	}
	Controll.prototype.search_obj = function (value_key,val_string) {
		if (value_key.includes(val_string))return true;
	}
	Controll.prototype.broadcast_result = function (result) {
		this.Lists.get_obj_result(result);
			return result;
	}

	return Controll;
})();


const Input = (function () {
	function Input(select_el,Ctr,key_result) {
		this.select_el = select_el;
		this.key_result = key_result;
		this.Ctr=Ctr;
		this.check_keys;
		this.search_parametr;
		this.key_up();
		this.click();
	}
	Input.prototype.set_value = function (string) {
		this.select_el.value = string;
		//typeof string === "string" ? this.select_el.value = string : console.log("value mustbe string");
	}
	Input.prototype.cls_value = function () {
		this.select_el.value = "";
	}
	Input.prototype.get_value = function () {
		return this.select_el.value;
	}
	Input.prototype.key_up = function () {
		this.select_el.addEventListener("keyup", () => {
			this.Ctr.get_v_input(this.get_value());
		})
	}
	Input.prototype.click = function () {
		this.select_el.addEventListener("click", () => {
			this.cls_value();
		})
	}
	Input.prototype.type_key = function (keys) {
		this.Ctr.set_keys(keys);
	}
	Input.prototype.search_parametr = function (parametr_search) {
		this.parametr=parametr_search
	}
	Input.prototype.get_result = function (result) {
		if (this.key_result&&result) {
			this.set_value(result[this.key_result]);
		}
	}
	return Input;
})();






///////////////////////////////////////////html  window tel////////////////////////////////////////////
const Create_window=(function(){
	function Create (){
		this.key_s=[];
	}
	Create.prototype.get_result=function(result){
		this.iteratio(result)
	}
	Create.prototype.iteratio=function(result){
		for (const key in result) {
			this.key_s.map((One)=>{
				if(One.key===key){
					this.cls_refere_html(One.refere_html);
					this.check_type_key(result[key],One.refere_html);
				}
			});
		}
	}
	Create.prototype.check_type_key=function(key_value,refere_html){
		if(key_value.constructor===Array){
			this.create_btn_s(key_value,refere_html);
		}else if(typeof key_value ==="string"){
			this.create_text(key_value,refere_html);
		}else{return}
	}
	Create.prototype.create_btn_s=function(arr_strings,refere_html){
		arr_strings.map((string)=>{
			let btn=this.create_el("button");
			this.add_text(btn,string);
			this.append(refere_html,btn);
		})
	}
	Create.prototype.create_text=function(string,refere_html){
		this.add_text(refere_html,string)
	}
	Create.prototype.create_el=function(el){
		return document.createElement(el);
	}
	Create.prototype.add_text=function(el,text){
		el.textContent=text;
	}
	Create.prototype.append=function(parent_,child){
		parent_.appendChild(child);
	}
	Create.prototype.cls_refere_html=function(refere_html){
		while(refere_html.firstChild){
			refere_html.removeChild(refere_html.firstChild);
		}
	}
	Create.prototype.show_key=function(key_s){
		this.key_s=key_s;	
	}

return Create;
})();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// CALLS ////////////////////////////////////////////////////////////////////

getJSON("bd.json").then((Json_str)=>{
	let main_OBJ= JSON.parse(Json_str); 


	const list_pow = new List(refer_input.wrap_pow,"nazwa");
	const ctr_pow=new Controll(list_pow,main_OBJ);
	const pow = new Input(refer_input.pow,ctr_pow, "nazwa");
	pow.type_key(["powiaty", "nazwa"]);
	list_pow.label([{key:"wojewodztwo",title:"woj"}]);
	list_pow.keyboard();
	const set_v_powiat=list_pow.register_self(pow);
	
	
	const list_woj = new List(refer_input.wrap_woj,"nazwa");
	const ctr_woj=new Controll(list_woj,main_OBJ);
	const woj = new Input(refer_input.woj,ctr_woj,"nazwa");
	woj.type_key(["wojewodztwa", "nazwa"]);
	const set_v_wojewodztwo=list_woj.register_self(woj);
	///////////////research objeckt after click//////////////////////////////////
	list_woj.preper_search([
							{
							obj_ctr:ctr_pow,
							key_search:"wojewodztwo",
							key_result:"nazwa"
							}
							]);
	list_pow.preper_search([
							{
							obj_ctr:ctr_pow,
							key_search:"wojewodztwo",
							key_result:"wojewodztwo"
							}
							]);
	
	////////set string other input////
	list_pow.set_string([{obj:woj,key_set:"wojewodztwo"}]);


///////////////////////////////////////////////window create///////////////////////////

	const p=new Create_window();
	const w=new Create_window();
	
	p.show_key([
		{
		key:"nazwa",
		refere_html:document.querySelector("#nazwa")
		},	
		{
		key:"wojewodztwo",
		refere_html:document.querySelector("#wojewodztwo")
		},
		{
		key:"prm",
		refere_html:document.querySelector("#prm")
		},
		{
		key:"psp",
		refere_html:document.querySelector("#psp")
		},
		{
		key:"policja",
		refere_html:document.querySelector("#policja")
		}
	]);
	w.show_key([
		{
		key:"nazwa",
		refere_html:document.querySelector("#w_nazwa")
		},	
		{
		key:"koordynator_ratownictwa_medycznego",
		refere_html:document.querySelector("#w_prm")
		},
		{
		key:"komenda_wojewodzka_PSP",
		refere_html:document.querySelector("#w_psp")
		},
		{
		key:"komenda_wojewódzka_policji",
		refere_html:document.querySelector("#w_policja")
		}
	]);
	const send_to_win_pow=list_pow.register_self(p);
	const send_to_win_woj=list_woj.register_self(w);
	const send_to_result_other_obj=list_pow.register_Other({key_search:"wojewodztwo",
															obj_search:ctr_woj,
															obj_target:w});

	
})











///list_pow.register_self(w);