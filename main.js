
class mdItem extends String {
	constructor(text) {
		super(text)
		this.text = text
	}
	bold() {
		var arr = ["**",this.text,"**"]
		return arr.join("")
	}
	list(){
		var arr = ["*",this.text]
		return arr.join(" ")
	}
}
class mdContainter{
	
}
var item = mdItem("text")
document.querySelector(".output").innerHTML=`${item} <br> ${md(item.bold())} <br> ${md(item.list())}`