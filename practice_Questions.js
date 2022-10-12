 
 // What will the below code print in console

(function (){
    var a = b = c = 3
  }) ()
 // console.log("a if defined " + (typeof a !== undefined))
 //  console.log("b if defined " + (typeof b !== undefined))

 // =================================================================

 var myObject= {
    foo : "bar",
    func : function(){
        var self = this;
        console.log("Outer func : this.foo = " + this.foo); // 
        console.log("Outer func : this.foo = " + self.foo);
        (function(){
            console.log("Inner func: this.foo = "+ this.foo );
            console.log("Inner func: self.foo = " + self.foo)
        }());
    }
 }

 // myObject.func()
 // 