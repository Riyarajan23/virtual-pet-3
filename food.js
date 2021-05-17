class Food {
    constructor(){
        this.foodstock=0
        this.lastfed
        this.image=loadImage('images/Milk.png')
    }
    updatefoodstock (foodstock){
        this.foodstock=foodstock
    }

getfedtime (lastfed){
    this.lastfed=lastfed
}
deductfood(){
    if (this.foodstock>0){
        this.foodstock=this.foodstock-1
    }
}
display(){
    var x=80,y=100
    imageMode (CENTER)
image(this.image,100,300,70,70)
for (var i=0;i<this.foodstock;i++){
    if (i%10==0){
    x=80
    y=y+50
    image (this.image,x,y,50,50)
}}
}
}