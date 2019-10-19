// instances
var colorPicker = document.getElementById('colorPicker'),
    pixelCanvas = document.getElementById('pixelCanvas');

// Select color input
var selectedColor = colorPicker.value;

colorPicker.onchange = function(){
    selectedColor = colorPicker.value;
};

// Select size input
var nCols = document.forms[0].width.value;
var nRows = document.forms[0].height.value;

// When size is submitted by the user, call makeGrid()

function makeGrid(nRows,nCols) {
    var tbody = document.createElement('tbody');

    for(var i = 0 ; i < nRows ; i++ ){
        // table row creation
        var row = document.createElement("tr");

        for (var j=0;j<nCols;j++){
            // table columns creation
            var td = document.createElement('td');
            // change color for selected cell
            td.onclick = function(){
                this.style.background =selectedColor;
            }
            // end change
            // add td
            row.appendChild(td);
        }
        // add table row to table body
        tbody.appendChild(row)

    }
    // add table body to table
    pixelCanvas.appendChild(tbody);

}

// make table and gave it color
var myForm = document.forms[0];
myForm.onsubmit = function (e) {
    'use strict';
    e.preventDefault();

    nCols = document.forms[0].width.value,
    nRows = document.forms[0].height.value;

    // to reload table size
    if(pixelCanvas.childElementCount>=1){
        pixelCanvas.removeChild(pixelCanvas.firstElementChild);
    }
    // call makeGrid to create table
    makeGrid(nRows,nCols);
    pixelCanvas.style.background = colorPicker.value;
};
