function getJSON(url){
	let xhr=new XMLHttpRequest();
	xhr.open("GET",url);
	
	let p=new Promise((resolve,reject)=>{
		xhr.onload=function(){
			 if(xhr.status===200){
				 resolve(xhr.responseText);
			 }else{
				reject(new Error('błąd')) 
				 }
		};
		 xhr.onerror=function(){
			 reject(new Error('błąd'))
		 };
	})
	 xhr.send();
	 return p;
 }




// const sendPost= function (url,json){
// 		let xhr =new XMLHttpRequest();
// 		xhr.open("POST",url,true);
// 		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
// 	let p=new Promise((resolve,reject)=>{
// 		xhr.onload=function(){
// 			 if(xhr.status===200){
// 				 resolve(xhr.responseText);
// 			 }else{
// 				reject(new Error('błąd')) 
// 				 }
// 		};
// 		 xhr.onerror=function(){
// 			 reject(new Error('błąd'))
// 		 };
// 	})
// 	 xhr.send('php='+json);
// 	 return p;
//  }