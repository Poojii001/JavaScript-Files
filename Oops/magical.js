class Magical{
    setData(num) {
        this.n = num
        
    }
    check() {
        let sum = 0
        let num = this.n
        while(num!=0) {
            let r = num%10
            sum = sum+r
            num = parseInt(num/10)
        }
        num = sum
        let  rev = 0
        while(num!=0){
            let r = num%10
            rev = rev*10+r
            num = parseInt(num/10)
        }
        if(sum*rev === this.n)
            console.log(`${this.n} is a magical number `)
        else 
            console.log(`${this.n} is not a magial number `)
    }
}
var obj = new Magical()
obj.setData(1458)
obj.check()
obj.setData(1729)
obj.check()
obj.setData(81)
obj.check()
obj.setData(28982)
obj.check()
obj.setData(112323)
obj.check()
obj.setData(1)
obj.check()