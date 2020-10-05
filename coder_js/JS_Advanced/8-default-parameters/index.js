function greeting(name = 'friend', lang = 'en') {
    if(lang === 'en'){
        return `Hi, ${name}`;
    }
    if(lang === 'vi') {
        return `xin chao, ${name}`;
    }
    return `Goodbye ${name}`;
}
var new1 = greeting('Honag', 'end');
console.log(new1);
