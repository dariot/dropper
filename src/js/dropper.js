var Dropper = function(cfg) {
    'use strict';

    var id = cfg.id || 'droparea';
    var handler = cfg.handler || function() {};

    function dragEnter(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function dragOver(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function handleFiles(files) {
        var i;
        for (i = 0; i < files.length; i++) {
            handler(files[i]);
        }
    }

    function drop(e) {
        e.stopPropagation();
        e.preventDefault();

        var dt = e.dataTransfer;
        var files = dt.files;

        handleFiles(files);
    }

    var droparea = document.getElementById(id);
    droparea.addEventListener('dragenter', dragEnter, false);
    droparea.addEventListener('dragover', dragOver, false);
    droparea.addEventListener('drop', drop, false);
};