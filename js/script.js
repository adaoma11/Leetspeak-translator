const fText = document.querySelector('#fText');
const execBtn = document.querySelector('button#exec');
const errorMsg = document.querySelector('.error');
const res = document.querySelector('#res');
execBtn.addEventListener("click", (e) => {
    
    e.preventDefault();
    
    if(!fText.value) {
        errorMsg.classList.remove('hide');
        return;
    } else {
        const pText = fText.value.toUpperCase();
        errorMsg.classList.add('hide');
        let cText = "";
        var searchFlag = false;
        const encoder = [["A","4"],
                        ["E","3"],
                        ["I","|"],
                        ["L","1"],
                        ["O","0"],
                        ["S","5"],
                        ["T","7"]];
        
        for (i=0; i < pText.length; i++) { // Varre todos os caracteres do texto digitado
            
            for (l=0; l < encoder.length; l++) { // Varre as linhas da matriz
                if (encoder[l].includes(pText[i])) {
                    for (c=0; c < encoder[l].length; c+=2) { // Varre as colunas da matriz
                        
                        if (pText[i] == encoder[l][c]) {
                            cText += encoder[l][c+1];
                            searchFlag = true;
                            break;
                        } else if (pText[i] == encoder[l][c+1]) {
                            
                            cText += encoder[l][c];
                            searchFlag = true;
                            break;
                        }
                    }
                    break;
                } else {
                    searchFlag = false;
                } 
            }
            if (searchFlag == false) {
                cText += pText[i];
            }
        }
        res.innerHTML = `<p>${cText}</p>`;
    }
})