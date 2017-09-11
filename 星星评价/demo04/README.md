# jQuery五星评分插件

# Getting Started
```html
<link rel="stylesheet" href="jquery.star.min.css" />
<script src="jquery.js"></script>
<script src="jquery.star.min.js"></script>
```
# demo
```html
<div class="jquery-star1"></div>
<div class="jquery-star2"></div>
```

```js
$('.jquery-star1').star({
    //number : 5, 默认5星
    onSelect:function(index, offEvt){
        console.log(this);
        console.log(index);
    }
});

$('.jquery-star2').star({
    number : 10,
    onSelect:function(index, offEvt){
        console.log(this);
        console.log(index);
        offEvt(); //取消事件
    }
});
```


# License
Copyright (c) 2016 guosheng 
Licensed under the [MIT License](https://github.com/umdjs/umd/blob/master/LICENSE.md).
