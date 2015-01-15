# Dropper
Super simple JavaScript library to handle files dropped in the browser. Inspired by Mozilla Developer Network guide on Using files from web applications.

Create your dropper:

```
var dropper = new Dropper({
    id: 'droparea',
    handler: function(file) {
        alert(file.name);
    }
});
```

where `id` is the DOM element id on which you want to create your drop area and `handler` is the function to be executed on each dropped file.

You're ready to go.