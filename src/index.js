// 模板引擎第一版
(function() {
    this.tmpl = function (str) {
    	var str = document.getElementById(str).innerHTML;
    	var stringBody = "let p = []; p.push('" +
    	str.replace(/[\r\n\t]/g,'')
        .replace(/<%=(.*?)%>/g, "');p.push($1);p.push('")
        .replace(/<%/g,"');")
        .replace(/%>/g,"p.push('") + "');return p.join('');";
        console.log(stringBody);
        let fn = new Function(stringBody);
        return function(){
            return fn.call(this);
        }
    };
})();

var results = document.getElementById("container");

var users = [
        { "name": "Byron", "url": "http://localhost" },
        { "name": "Casper", "url": "http://localhost" },
        { "name": "Frank", "url": "http://localhost" }
    ]

results.innerHTML = tmpl("user_tmpl")();