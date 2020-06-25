/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function(){
    let RunProg = function (){
    
        const aboutText = document.querySelector('#aText1');
        const hobbies = document.querySelector('#aText2');
        const portfolio = document.querySelector('#aText3');
        const contact = document.querySelector('#aText4');
        const headerText = document.querySelector('#hText');
        const footer = document.querySelector('#pFooter');
        const mainText = document.querySelector('#pMain');
        const pRowWhats = document.querySelector('#whats');
        const pRowTwitter = document.querySelector('#twitter');
        const pRowEmail = document.querySelector('#email');
        const anchore = document.querySelector('#anch');
        
        headerText.innerText = "Hello I'm Edgar";
        aboutText.innerText = "About Me"; 
        hobbies.innerText = "My Hobbies"; 
        footer.innerText = "Created by Edgar®";
        portfolio.innerText = "My Portfolio";
        contact.innerText = "Contact Me";

        
        aboutText.addEventListener('mouseover',shrinkText1);
        aboutText.addEventListener('mouseleave',biggerText1);
        aboutText.addEventListener('click',displayText1);


        hobbies.addEventListener('mouseover',shrinkText2);
        hobbies.addEventListener('mouseleave',biggerText2);
        hobbies.addEventListener('click',displayText2);

        portfolio.addEventListener('mouseover',shrinkText3);
        portfolio.addEventListener('mouseleave',biggerText3);
        portfolio.addEventListener('click',displayText3);
        

        contact.addEventListener('mouseover',shrinkText4);
        contact.addEventListener('mouseleave',biggerText4);
        contact.addEventListener('click',displayText4);
        
    //Graphics
        function shrinkText1() {
            aboutText.setAttribute('class','smallText');
        };
        function biggerText1() {
            aboutText.setAttribute('class','aText');
        };
        function shrinkText2() {
            hobbies.setAttribute('class','smallText');
        };
        function biggerText2() {
            hobbies.setAttribute('class','aText');
        };
        function shrinkText3() {
            portfolio.setAttribute('class','smallText');
        };
        function biggerText3() {
            portfolio.setAttribute('class','aText');
        };
        function shrinkText4() {
            contact.setAttribute('class','smallText');
        };
        function biggerText4() {
            contact.setAttribute('class','aText');
        };
        
     //Texts
        function displayText1() {
            mainText.setAttribute('class','pMain');
            mainText.innerText ="I'm Edgar Martinez, \n I'm 30 years old, I live in Monterrey in Mexico. \n I hope you enjoy hanging around my site !";
        };
        function displayText2() {
            mainText.setAttribute('class','pMain');
            mainText.innerText ="➤ I like reading and wacthing horror movies \n➤ I like playing piano \n➤ I like video games \n➤ I like cooking \n➤ I like hiking \n ... and many things more";
        };
        function displayText3() {
            window.location = "https://www.linkedin.com/in/edgar-martinez-6aa55bb1";
        };
        function displayText4() {
            if(pRowWhats.hasChildNodes()){
                null;
            }else{
            
                for(let i=1;i<=3;i++){
                    const childR1 = document.createElement('td');
                    const childR2 = document.createElement('td');
                    const childR3 = document.createElement('td');
                    const mail = document.createElement('a');
                    
                    childR1.innerText ="";
                    childR2.innerText ="";
                    childR3.innerText ="";

                    if (i === 1){
                        childR1.innerText ="\n";
                        childR3.innerText ="\n";
                    } else if (i === 2){
                        childR1.setAttribute('class','aText1');
                        childR2.setAttribute('class','aText2');
                        childR3.setAttribute('class','aText3');
                    }else if (i === 3) {
                        childR1.setAttribute('class','socialText');
                        childR1.innerText ="+52 (81) 8206 3306";

                        childR2.setAttribute('class','socialText');
                        childR2.innerText ="@eddgar_mtz";

                        childR3.setAttribute('class','socialText');
                        mail.setAttribute('href','mailto:e.mdlr@live.com');
                        mail.innerText ="e.mdlr@live.com";
                        childR3.appendChild(mail);
                    };
                    pRowWhats.appendChild(childR1);
                    pRowTwitter.appendChild(childR2);
                    pRowEmail.appendChild(childR3);
                };
            };

        };
    };

 
    RunProg();
}())